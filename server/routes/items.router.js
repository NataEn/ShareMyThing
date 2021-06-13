const router = require("express").Router();
const Item = require("../models/Item");
const User = require("../models/User");

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
      return res.status(404).json({ message: `no items found ` });
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
  try {
    const item = await Item.findOne({ _id: itemId });
    console.log("found item", item);
    if (!item) {
      return res
        .status(404)
        .json({ message: `item of id:${itemId} wasn't found` });
    }
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
      return res.status(404).json({ message: `no items found for ${userId}` });
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
  const userId = req.params.userId;
  const itemId = req.params.itemId;
  try {
    const item = await Item.findOne({ _id: itemId, publishedBy: userId });
    if (!item) {
      res.status(404).json({ message: `item of id:${itemId} wasn't found` });
    }
    return res.json({ item });
  } catch (err) {
    return res.status(500).send();
  }
});

/**
 * @route PATCH api/items/:userId/:itemId
 * @description update specific item published by the user
 */
router.patch("/:userId/:itemId", async (req, res) => {
  const userId = req.params.userId;
  const itemId = req.params.itemId;
  const updates = Object.keys(req.body);

  try {
    const item = await Item.findOne({ _id: itemId, publishedBy: userId });
    if (!item) {
      return res
        .status(404)
        .json({ message: `item of id:${itemId} wasn't found` });
    }
    updates.forEach((update) => (item[update] = req.body[update]));
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
router.post("/:userId", async (req, res) => {
  const userId = req.params.userId;
  const newItem = new Item({
    ...req.body,
    publishedBy: userId,
  });
  newItem
    .save()
    .then((item) => res.status(201).json({ item }))
    .catch((err) => res.status(404).json({ err }));
});

module.exports = router;
