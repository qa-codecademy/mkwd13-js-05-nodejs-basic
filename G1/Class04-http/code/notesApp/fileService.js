import fs from "fs";

export const writeData = (filePath, dataToWrite) => {
  fs.writeFileSync(filePath, dataToWrite);
};

export const readData = (filePath) => {
  return fs.readFileSync(filePath, { encoding: "utf-8" });
};

export const appendText = (filePath, textToAppend) => {
  fs.appendFileSync(filePath, textToAppend);
};
