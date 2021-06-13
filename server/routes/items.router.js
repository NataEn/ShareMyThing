const router = require("express").Router();
const Item = require("../models/Item");
const User = require("../models/User");

/**
 * @route GET api/items/
 * @description get all items
 */
router.get("/", async (req, res) => {
  try {
    const items = Item;
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
    const item = Item.filter((item) => item.id === itemId);
    if (!item) {
      return res.status(404).json({ message: ` item ${itemId} not found ` });
    }
    res.json({ item });
  } catch (err) {
    res.status(500).send();
  }
});

/**
 * @route GET api/items/:userId
 * @description get all items of a user
 */
router.get("/:userId", async (req, res) => {
  const userId = req.params.userId;

  try {
    const inUseItems = Item.filter((item) => item.inUseBy === userId);
    const publishedItems = Item.filter((item) => item.publishedBy === userId);
    if (!inUseItems && !publishedItems) {
      return res
        .status(404)
        .json({ message: `no items used or published by ${userId}found ` });
    }
    res.json({ inUse: inUseItems, published: publishedItems });
  } catch (err) {
    res.status(500).send();
  }
});

/**
 * @route GET api/items/:userId/:itemId
 * @description get specific item published by the user
 */
router.get("/:userId/:itemId", async (req, res) => {
  const userId = req.params.userId;
  const itemId = req.params.itemId;
  console.log("user", userId, itemId);
  try {
    const item = Item.filter(
      (item) => item.id === itemId && item.publishedBy === userId
    );
    if (!item) {
      return res
        .status(404)
        .json({ message: `no item ${itemId} published by ${userId} found ` });
    }
    res.json({ item });
  } catch (err) {
    res.status(500).send();
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
    const item = Item.filter(
      (item) => item.id === itemId && item.publishedBy === userId
    );

    if (!item) {
      return res.status(404).json({
        message: `item ${itemId} and published by ${userId} wasn't found`,
      });
    }
    updates.forEach((update) => (item[update] = req.body[update]));
    res.json({ item: item });
  } catch (err) {
    res.status(500).send();
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
    let deletedItem;
    console.log("items", Item);
    const filteredItems = Item.map((item) => {
      if (!(item.id === itemId) && !(item.publishedBy === userId)) {
        return item;
      } else {
        deletedItem = item;
      }
    });
    if (!deletedItem) {
      return res.status(404).json({
        message: `item ${itemId} and published by ${userId} wasn't found`,
      });
    }

    res.json({
      item: `item ${itemId} and published by ${userId} was deleted`,
      items: filteredItems,
    });
  } catch (err) {
    res.status(500).send();
  }
});

/**
 * @route POST api/items/:userId
 * @description create new item  by the user
 */
router.post("/:userId", async (req, res) => {
  const userId = req.params.userId;
  const newItem = {
    ...req.body,
    publishedBy: userId,
  };
  console.log("item data", userId, newItem);
  try {
    Item.push(newItem);
    console.log("items", Item);
    //error handling with db: catch(err){res.status(400).json({ err })};
    return res.status(201).json({ item });
  } catch (err) {
    res.status(500).send();
  }
});

module.exports = router;
