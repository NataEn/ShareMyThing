export const bufferToBase64 = (buffer) => {
  debugger;
  if (buffer) {
    return `data:image/jpeg;base64,${Buffer.from(buffer).toString("base64")}`;
  }
};
