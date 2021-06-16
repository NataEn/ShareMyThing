const sharp = require("sharp");
const resizeImage = async (buffer, height, width) => {
  if (!buffer) {
    return null;
  } else if (buffer && height && width) {
    return await sharp(buffer).resize({ width, height }).png().toBuffer();
  } else if (buffer && height) {
    return await sharp(buffer).resize({ height, height }).png().toBuffer();
  }
};
module.exports = {
  resizeImage,
};
