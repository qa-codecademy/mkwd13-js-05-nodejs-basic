# 🚦 Traffic Light Indicator Exercise

## Overview
Build a traffic light simulation using Node.js EventEmitter.

## Requirements

### Core Features
- Implement traffic light logic using Node.js `EventEmitter`
- Create three events:
  - `red`
  - `yellow`
  - `green`

### Event Behaviors

#### 🔴 Red Light
- Print "RED" with red background (using `chalk`)
- Trigger `yellow` event

#### 🟡 Yellow Light
- Print "YELLOW" with yellow background (using `chalk`)
- Trigger `green` event

#### 🟢 Green Light
- Print "GREEN" with green background (using `chalk`)
- Trigger `red` event

### 🌟 Bonus Challenge
Add a 3-second delay between each light change:
```
red (3s) → yellow (3s) → green (3s) → red ...
```

## ⚠️ Important Notes
```plaintext
Do not include node_modules in your repository:
- Either remove node_modules folder
- Or add "node_modules/" to your .gitignore file
```

## 🛠️ Required Packages
- `events` (Node.js built-in)
- `chalk` (external package)

# BONUS Exercise 2:

## Task Description

Create a simple event-based counter application that demonstrates the basic usage of Node.js Events.

## General Requirements 📝

1. Create a `eventEmitter` instance object  out of `EventEmitter`
   - Create a `counter` variable with value of 0
2. The eventEmitter should:
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

## Notes
- Use proper error handling
- Add comments to explain your code
- Test your code with different scenarios

Good luck! 🍀
