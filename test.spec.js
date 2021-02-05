const chunk = require('./index');

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