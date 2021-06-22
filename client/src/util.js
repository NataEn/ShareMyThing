export const bufferToBase64 = (buffer) => {
  if (buffer) {
    return `data:image/jpeg;base64,${Buffer.from(buffer).toString("base64")}`;
  }
};
