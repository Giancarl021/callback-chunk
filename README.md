# callback-chunk

A simple JS library to chunk an array of callbacks asynchronously

## Installation

npm:
```bash
npm install callback-chunk --save
```

Yarn:
```bash
yarn add callback-chunk
```
## Usage

Import the module:
```javascript
const chunk = require('callback-chunk');
```

Call the function with your Array of callbacks:
```javascript
const ticks = 50; // Number of calls at once
const callbacks = [
    () => { /* your code here */ },
    // ...
];

await chunk(
    callbacks, // The callbacks Array (Array of functions)
    ticks, // The number of functions called at once
    console.log // Custom logger, defaults to null
);
```

## Example

```javascript
const chunk = require('callback-chunk');

async function main() {
    const callbacks = new Array(30)
        .fill(
            () => new Promise(
                resolve => setTimeout(() => resolve(), Math.floor(Math.random() * 5000))
            )
        );
    
    console.log('Started chunking...');

    await chunk(callbacks, 10, console.log);

    console.log('Finished chunking');
}

main().catch(console.error);
```