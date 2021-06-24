const router = require("express").Router();
const Item = require("../models/Item");
const User = require("../models/User");
const upload = require("../middleware/fileUpload");
const { resizeImage } = require("../utils/imageConfig");

/**
 * @route GET api/items/
 * @description get all items
 */
router.get("/", async (req, res) => {
  try {
    const items = await Item.find({}).sort({
      date: -1,
    });
    console.log("items", items);
    if (!items) {
      return res.status(404).json({ err: `no items found ` });
    }
    res.json({ items });
  } catch (err) {
    res.status(500).send();
  }
});

/**
 * @route GET api/items/item/:itemId
 * @description get specific item
 */
router.get("/item/:itemId", async (req, res) => {
  const itemId = req.params.itemId;
  console.log("item id", itemId);
  try {
    const item = await Item.findOne({ _id: itemId });
    const user = await item.findUser({ id: item.inUseBy });
    console.log("in route", user);
    if (!item) {
      return res.status(404).json({ err: `item of id:${itemId} wasn't found` });
    }
    return res.json({ item });
  } catch (err) {
    return res.status(500).send();
  }
});

/**
 * @route PATCH api/items/switchuser/:itemId
 * @description switch the using person to a different user
 */
router.patch("/switchuser/:itemId/:nextUser", async (req, res) => {
  const itemId = req.params.itemId;
  const nextuserid = req.params.nextUser;
  try {
    const item = await Item.findOne({ _id: itemId });
    const nextUser = await User.findOne({ _id: nextuserid });
    console.log(nextUser);
    if (!item) {
      return res.status(404).json({ err: `item of id:${itemId} wasn't found` });
    } else if (!nextUser) {
      return res
        .status(404)
        .json({ err: `next user of id:${nextuserid} wasn't found` });
    }
    item.inUseBy = nextuserid;
    item.save();
    return res.json({ item });
  } catch (err) {
    console.log(err);
    return res.status(500).send();
  }
});

/**
 * @route GET api/items/:userId
 * @description get all items of a user
 */
router.get("/:userId", async (req, res) => {
  const userId = req.params.userId;
  try {
    const items = await Item.find({ publishedBy: userId }).sort({
      date: -1,
    });

    // alternative
    // await req.user.populate("Items").execPopulate();
    // const items = req.user.items;
    if (!items) {
      return res.status(404).json({ err: `no items found for ${userId}` });
    }
    res.json({ items });
  } catch (err) {
    return res.status(500).send();
  }
});

/**
 * @route GET api/items/:userId/:itemId
 * @description get specific item published by the user
 */
router.get("/:userId/:itemId", async (req, res) => {
  console.log("in get api/items/:userId/:itemId");
  const userId = req.params.userId;
  const itemId = req.params.itemId;
  try {
    const item = await Item.findOne({ _id: itemId, publishedBy: userId });

    if (!item) {
      res.status(404).json({ err: `item of id:${itemId} wasn't found` });
    }
    item
      .populate("inUseBy", {
        firstName: 1,
        email: 1,
      })
      .execPopulate();
    item
      .populate("publishedBy", {
        firstName: 1,
        email: 1,
      })
      .execPopulate(function (err, item) {
        console.log("err", err, "user", item.publishedBy);
        return res.json({ item });
      });
  } catch (err) {
    console.log(err);
    return res.status(500).send();
  }
});

/**
 * @route PATCH api/items/:userId/:itemId
 * @description update specific item published by the user
 */
router.patch("/:userId/:itemId", upload.array("images"), async (req, res) => {
  const userId = req.params.userId;
  const itemId = req.params.itemId;
  const updates = Object.keys(req.body);

  try {
    const item = await Item.findOne({ _id: itemId });
    if (!item) {
      return res.status(404).json({ err: `item of id:${itemId} wasn't found` });
    }
    updates.forEach((update) => (item[update] = req.body[update]));
    const { name, category, description } = req.body;
    let images;
    if (req.files) {
      const imagesPromises = req.files.map((file) =>
        resizeImage(file.buffer, 100, 100)
      );
      images = await Promise.all(imagesPromises);
    }
    item.images = images;
    item.updatedBy = userId;
    item.save();
    res.json({ item });
  } catch (err) {
    return res.status(500).send();
  }
});

/**
 * @route DELETE api/items/:userId/:itemId
 * @description delete specific item published by the user -->cannot delete an item in use
 */
router.delete("/:userId/:itemId", async (req, res) => {
  const userId = req.params.userId;
  const itemId = req.params.itemId;
  try {
    const item = await Item.findOneAndDelete({
      _id: itemId,
      publishedBy: userId,
    });
    if (!item) {
      return res.status(404).send();
    }
    item.remove();
    res.json({ item });
  } catch (err) {
    return res.status(500).send();
  }
});

/**
 * @route POST api/items/:userId
 * @description create new item  by the user
 */
router.post("/:userId", upload.array("images"), async (req, res) => {
  const userId =
    req.params.userId === "Admin"
      ? "60cdad51f937415fe434219e"
      : req.params.userId;

  const { name, category, description } = req.body;
  let images;
  if (req.files) {
    const imagesPromises = req.files.map((file) =>
      resizeImage(file.buffer, 100, 100)
    );
    images = await Promise.all(imagesPromises);
  }

  if (!name || !category || !description) {
    return res.status(400).json({ err: "Please enter all fields!" });
  }

  const newItem = new Item({
    name,
    category,
    description,
    publishedBy: userId,
    images,
  });
  newItem
    .save()
    .then((item) => res.status(201).json({ item }))
    .catch((err) => res.status(404).json({ err }));
});

module.exports = router;
