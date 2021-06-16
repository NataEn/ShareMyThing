const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const { jwtSecret } = require("../config/keys");
const Item = require("./Item");

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    register_date: {
      type: Date,
      default: Date.now,
    },
    avatar: Buffer,
    // tokens: [
    //   {
    //     token: {
    //       type: String,
    //       required: true,
    //     },
    //   },
    // ],
  },
  { timestamps: true }
);

//set virtual method so mongoose will know how items and user are related:
UserSchema.virtual("items", {
  ref: "Item",
  localField: "_id",
  foreignField: "publishedBy",
});
//set a method on User instances
UserSchema.methods.generateAuthToken = async function () {
  const user = this;
  //   const token = await jwt.sign({ _id: user._id.toString() }, jwtSecret);
  //   user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

//set a method to get a public data about the user
UserSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.password;
  delete userObject.tokens;
  delete userObject.avatar;

  return userObject;
};

//set static methods on the UserSchema class
UserSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw `user ${email} doesn't exist`;
  }
  //   const isMatch = await bcrypt.compare(password, user.password);
  //   if (!isMatch) {
  //     throw `wrong password!`;
  //   } else {
  //     return user;
  //   }
};

UserSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    // try {
    //   user.password = await bcrypt.hash(user.password, 10);
    // } catch (err) {
    //   throw err;
    // }
  }
  next();
});

//middleware to delete user data when user is removed
//user cannot be deleted if is using items
UserSchema.pre("remove", async function (next) {
  const user = this;
  const inUseItems = Item.find({ inUseBy: user.id });
  if (!inUseItems) {
    await Item.updateMany(
      { publishedBy: user.id },
      { publishedBy: user.email }
    );
  } else {
    throw "there are items used by this user";
  }
  next();
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
