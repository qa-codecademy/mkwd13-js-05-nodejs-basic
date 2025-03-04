# Node.js Events

## Introduction

The Events module is one of the core building blocks of Node.js. It enables event-driven programming where certain actions (events) trigger corresponding responses (event handlers/listeners).

## The EventEmitter Class

Node.js has a built-in `EventEmitter` class that handles events. All objects that emit events are instances of the `EventEmitter` class.

## Basic Usage

To use events in Node.js, first import the events module:

```javascript
const EventEmitter = require('events');
const myEmitter = new EventEmitter();
```

### Common Methods

- `emitter.on(eventName, listener)` - Adds a listener for an event
- `emitter.emit(eventName, [...args])` - Triggers an event
- `emitter.once(eventName, listener)` - Adds a one-time listener
- `emitter.removeListener(eventName, listener)` - Removes a specific listener
- `emitter.removeAllListeners([eventName])` - Removes all listeners for an event

### Example

```javascript
const EventEmitter = require('events');

class OrderSystem extends EventEmitter {
	placeOrder(order) {
		// Process order
		this.emit('orderReceived', order);
		this.emit('orderComplete', order);
	}
}

const orderSystem = new OrderSystem();

orderSystem.on('orderReceived', order => {
	console.log('New order received:', order);
});

orderSystem.on('orderComplete', order => {
	console.log('Order completed:', order);
});

orderSystem.placeOrder({ id: '12345', item: 'Coffee' });
```

## Best Practices

1. Always handle 'error' events to prevent crashes
2. Remove listeners when they're no longer needed
3. Be mindful of the maximum listeners limit (default is 10)

## Common Use Cases

- HTTP server requests/responses
- Database operations
- File system operations
- Stream data handling
- User interaction events

Events are fundamental to Node.js and are used extensively in both built-in modules and third-party packages. Understanding events is crucial for building scalable and responsive Node.js applications.
