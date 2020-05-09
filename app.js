/* Chapter 6 - Read and Write the Streams  */
/* 6.1. ReadStream and WriteStream */
const fs = require('fs');
let counter = 1;
const readStream = fs.createReadStream('./file-to-read.txt', 'utf8');
const writeStream = fs.createWriteStream('./file-to-write.txt');

readStream.on('data', (stream)=> {
    console.log(`readStream has read stream: ${counter}: `, stream);
    counter++;
    writeStream.write(stream);
});

/* 6.2. ReadFile without stream */
fs.readFile('./file-to-read.txt', (err, file)=> {
    console.log('readFile method: ');
    if(err) {
        console.log(err);
    } else {
        console.log(file);
    }
});