// npm init -y

import math from "./math.js"; // DEFAULT IMPORT

console.log(math.add(2, 2));
console.log(math.multiply(3, 5));


// NAMED IMPORT
import { fahrenheitToCelsius } from "./conversion.js";

const conversion = fahrenheitToCelsius(120);
console.log(conversion)
