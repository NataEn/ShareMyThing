const router = require("express").Router();
const User = require("../models/User");

/**
 * @route GET api/users/
 * @description get all users
 */
router.get("/", async (req, res) => {
  try {
    const users = User;
    if (!users) {
      return res.status(404).json({ message: `no users found ` });
    }
    res.json({ users });
  } catch (err) {
    res.status(500).send();
  }
});

/**
 * @route GET api/users/:userId
 * @description get specific user
 */
router.get("/:userId", async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = User.filter((user) => user.id === userId);
    if (!user) {
      return res.status(404).json({ message: `no user ${userId} found ` });
    }
    res.json({ user });
  } catch (err) {
    res.status(500).send();
  }
});

/**
 * @route PATCH api/users/:userId
 * @description update specific user
 */
router.patch("/:userId", async (req, res) => {
  const userId = req.params.userId;
  const updates = Object.keys(req.body);
  try {
    const user = User.filter((item) => item.id === userId)[0];
    if (!user) {
      return res.status(404).json({
        message: `user ${userId} wasn't found`,
      });
    }
    updates.forEach((update) => (user[update] = req.body[update]));
    res.json({ user: user });
  } catch (err) {
    res.status(500).send();
  }
});

/**
 * @route DELETE api/users/:userId
 * @description delete specific user -->users can delete theme selves and admin can delete users
 */
router.delete("/:userId", async (req, res) => {
  const userId = req.params.userId;
  try {
    let deletedUser;
    const filteredUsers = User.map((user) => {
      if (user.id !== userId) {
        return user;
      } else {
        deletedUser = user;
      }
    });

    if (!deletedUser) {
      return res.status(404).json({
        message: `user ${userId} wasn't found`,
      });
    }

    res.json({
      user: `user ${userId} was deleted`,
      users: filteredUsers,
    });
  } catch (err) {
    res.status(500).send();
  }
});

/**
 * @route POST api/users/:userId
 * @description create new user
 */
router.post("/", async (req, res) => {
  const newUser = {
    ...req.body,
    id: req.body.firstName.toLowerCase(),
  };
  console.log(newUser);
  try {
    User.push(newUser);
    //error handling with db: catch(err){res.status(400).json({ err })};
    return res.status(201).json({ user: newUser });
  } catch (err) {
    res.status(500).send();
  }
});

module.exports = router;
