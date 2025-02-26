function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// Option 1: Export an object with named properties
// module.exports = { add, subtract };

// Option 2: Attach to export individually
exports.add = add;
exports.subtract = subtract;
