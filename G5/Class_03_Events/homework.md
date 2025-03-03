# Homework - Node.js Events 📚

## Task Description

Create a simple event-based counter application that demonstrates the basic usage of Node.js Events.

## General Requirements 📝

1. Create a `Counter` class that extends `EventEmitter`
2. The Counter should:

   - Keep track of a number (starting from 0)
   - Have methods to increase and decrease the number
   - Emit events when the number changes

3. Implement the following:

   - When the number increases, emit a 'increase' event
   - When the number decreases, emit a 'decrease' event
   - When the number reaches 0, emit a 'zero' event
   - When the number becomes positive, emit a 'positive' event
   - When the number becomes negative, emit a 'negative' event

4. Create event listeners that:
   - Log the current number when it changes
   - Log a message when the number becomes positive/negative/zero

## Advanced Requirements 🚀

1. Add a maximum and minimum limit to the counter

   - Emit a 'maxReached' event when hitting the maximum
   - Emit a 'minReached' event when hitting the minimum

2. Add a method to reset the counter to 0

   - Emit a 'reset' event when the counter is reset

## Bonus

Keep track of how many times the counter has been:

- Increased
- Decreased
- Reset
- Emit a 'stats' event with this information when requested

## Example Usage

```javascript
const counter = new Counter();

// Basic event listeners
counter.on('increase', num => console.log(`Number increased to: ${num}`));
counter.on('decrease', num => console.log(`Number decreased to: ${num}`));
counter.on('zero', () => console.log('Counter is zero!'));

// Using the counter
counter.increase(); // "Number increased to: 1"
counter.increase(); // "Number increased to: 2"
counter.decrease(); // "Number decreased to: 1"
counter.decrease(); // "Number decreased to: 0"
// "Counter is zero!"
```

## Submission

Create a single JavaScript file that includes:

1. The Counter class implementation
2. Example usage with event listeners
3. Demonstration of both basic and advanced features

## Notes

- Use proper error handling
- Test your code with different scenarios

Good luck! 🍀
