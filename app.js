/* Chapter 7 - Working with zlib module used for compression or decompression */
/* 7.1. Working with compression */

const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('file-to-read.txt.gz');
const writeStream = fs.createWriteStream('file-to-read-uncompressed.txt');
const gUnzip = zlib.createGunzip();

readStream.pipe(gUnzip).pipe(writeStream);