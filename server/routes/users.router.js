const router = require("express").Router();
const User = require("../models/User");
const upload = require("../middleware/fileUpload");
const { resizeImage } = require("../utils/imageConfig");

/**
 * @route GET api/users/
 * @description get all users
 */
router.get("/", async (req, res) => {
  try {
    const users = await User.find({}).sort({ register_date: -1 });
    if (!users) {
      return res.status(404).json({ err: `no users found ` });
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
    const user = await User.findOne({ _id: userId });
    console.log(user);
    if (!user) {
      return res.status(404).json({ err: `no user ${userId} found ` });
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
router.patch("/:userId", upload.single("avatar"), async (req, res) => {
  const userId = req.params.userId;
  const updates = Object.keys(req.body);

  try {
    const user = await User.findOne({ _id: userId });
    if (!user) {
      return res.status(404).json({
        err: `user ${userId} wasn't found`,
      });
    }
    let avatar;
    if (req.file) {
      avatar = await resizeImage(req.file.buffer, 100, 100);
    }

    updates.forEach((update) => (user[update] = req.body[update]));
    user.avatar = avatar;
    user.save();
    res.json({ user: user });
  } catch (err) {
    console.log(err);
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
    const deletedUser = await User.findOneAndDelete({
      _id: userId,
    });
    if (!deletedUser) {
      return res.status(404).send({ err: `user ${userId} wasn't found` });
    }
    deletedUser.remove();
    res.json({ deletedUser });

    res.json({
      user: `user ${userId} was deleted`,
    });
  } catch (err) {
    res.status(500).send();
  }
});

/**
 * @route POST api/users/:userId
 * @description create new user
 */
router.post("/", upload.single("avatar"), async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  let avatar;
  if (req.file) {
    const file = req.file;
    console.log(file);
    avatar = await resizeImage(file.buffer, 100, 100);
  }
  try {
    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      avatar,
    });
    newUser
      .save()
      .then((user) => res.status(201).json({ user }))
      .catch((err) => res.status(404).json({ err }));
  } catch (err) {
    res.status(500).send();
  }
});

module.exports = router;
