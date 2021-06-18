const router = require("express").Router();
const Item = require("../models/Item");
const User = require("../models/User");
const upload = require("../middleware/fileUpload");
const { resizeImage } = require("../utils/imageConfig");

/**
 * @route GET api/items/
 * @description get all items, if userId is specified then all items for that user
 */
router.get("/", async (req, res) => {
  try {
    const userId = req.body.userId;
    let items;
    if (userId) {
      items = await Item.find({ publishedBy: userId }).sort({
        date: -1,
      });
    } else {
      items = await Item.find({}).sort({
        date: -1,
      });
    }

    if (!items) {
      return res.status(404).json({ err: `no items found ` });
    }
    res.json({ items });
  } catch (err) {
    res.status(500).send();
  }
});

/**
 * @route DELETE api/items/:userId/:itemId
 * @description delete specific item published by the user -->cannot delete an item in use
 */
router.delete("/", async (req, res) => {
  const { userId, itemId } = req.body;

  console.log("user", userId);
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
 * @route GET api/items/item/:itemId
 * @description get specific item
 */
router.get("/item/:itemId", async (req, res) => {
  const itemId = req.params.itemId;
  try {
    const item = await Item.findOne({ _id: itemId });
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
router.patch("/switchuser/:itemId", async (req, res) => {
  const itemId = req.params.itemId;
  const nextuserid = req.body.nextUser;
  try {
    const item = await Item.findOne({ _id: itemId });
    const nextUser = await User.findOne({ _id: nextuserid });
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
    return res.status(500).send();
  }
});

/**
 * @route GET api/items/:itemId
 * @description get specific item published by the user
 */
router.get("/:itemId", async (req, res) => {
  const userId = req.body.userId;
  const itemId = req.params.itemId;
  try {
    const item = await Item.findOne({ _id: itemId, publishedBy: userId });
    if (!item) {
      res.status(404).json({ err: `item of id:${itemId} wasn't found` });
    }
    return res.json({ item });
  } catch (err) {
    return res.status(500).send();
  }
});

/**
 * @route PATCH api/items/:itemId
 * @description update specific item published by the user
 */
router.patch("/:itemId", upload.array("images"), async (req, res) => {
  const userId = req.body.user;
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
 * @route POST api/items
 * @description create new item  by the user
 */
router.post("/", upload.array("images"), async (req, res) => {
  const userId = req.body.userId;

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
