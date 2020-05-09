/* Chapter 4 - File system module */
/* 4.1. Read and Write the file */
const fs = require('fs');

fs.writeFile('node-example.txt', 'This is an example, creating the file with the help of node js', (error) => {
    if(error) console.log(error);
    else {
        console.log('file successfully created');
        fs.readFile('node-example.txt', 'utf8', (error, file) => {
            if(error) {
                console.log(error);
            } else {
                console.log(file);
            }
        });
    }
});

