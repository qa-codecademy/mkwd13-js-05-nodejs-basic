import fs from "fs";

// NAMED EXPORT
export const appendToLog = (path, content) => {
    fs.appendFileSync(path, content)
};