require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 5000;

//DB config
const db = require("./config/keys").mongoURI;

//connect to mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("connected to mongoDB"))
  .catch((err) => console.log(err));

const itemsRouter = require("./routes/items.router.js");
const usersRouter = require("./routes/users.router");

const app = express();
app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

//routing
app.use("/api/items", itemsRouter);
app.use("/api/users", usersRouter);
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
