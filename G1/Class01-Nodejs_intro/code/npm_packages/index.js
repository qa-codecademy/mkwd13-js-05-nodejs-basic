import { printGreen, printYellow, printRed } from "./chalk.js";
// Chalk
function simulateServerOPerations() {
  const isServerRunning = false;
  const isDatabaseConnected = true;
  const isCacheLow = true;

  if (isServerRunning) {
    printGreen("Success: Server is running on port 3000.");
  } else {
    printRed("Error: Server failed to start.");
  }

  if (!isDatabaseConnected) {
    printRed("Error: Unable to connect to database.");
  } else {
    printGreen("Success: Database is connected.");
  }

  if (isCacheLow) {
    printYellow("Warning: The cache is very low!");
  }
}

// Chalk
simulateServerOPerations();

// Figlet
const art = generateAsciiArtSync("This is art text!", "Ghost");
if (art) {
  console.log(art);
}
