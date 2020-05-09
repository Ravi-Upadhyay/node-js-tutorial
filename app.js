/* Chapter 7 - Working with zlib module used for compression or decompression */
/* 7.1. Working with compression */

const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('file-to-read.txt', 'utf8');
const writeStream = fs.createWriteStream('file-to-read.txt.gz');
const gZip = zlib.createGzip();

readStream.pipe(gZip).pipe(writeStream);