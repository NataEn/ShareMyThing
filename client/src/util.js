export const bufferToBase64 = (buffer) =>
  `data:image/jpeg;base64,${Buffer.from(buffer).toString("base64")}`;
