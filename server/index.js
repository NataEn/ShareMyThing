require("dotenv").config();
const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 5000;

const itemsRouter = require("./routes/items.router.js");

const app = express();
app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

//routing
app.use("/api/items", itemsRouter);
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
