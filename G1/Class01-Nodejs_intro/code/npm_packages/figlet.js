import figlet from "figlet";

console.log(
  figlet.textSync("Hello world", {
    font: "Standard",
    width: 80,
    whitespaceBreak: true,
  })
);

// Function to be exported and used in index.js file
export function generateAsciiArtSync(text, font) {
  try {
    const data = figlet.textSync(text, {
      font: font,
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: true,
    });
    return data;
  } catch (err) {
    console.error("Something went wrong...");
    console.error(err);
    return null;
  }
}
