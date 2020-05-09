/* Chapter 5 - File system module, working with directories */
/* 5.1. make and remove directories */
/* 5.2. empty directories before deleting */
const fs = require('fs');

fs.mkdir('node-experiment', (err) => {
    if(err) console.log(err);
    else {
        console.log('Directory Created Sucessfully');
        
        fs.writeFile('./node-experiment/experiment-file.txt', 'This is an experiment', (err) => {
            if(err) console.log(err);
            else {
                console.log('file has been created sucessfully, ./node-experiment/experiment-file.txt');

                fs.readdir('./node-experiment', (err, files) => {
                    if (err) console.log(err);
                    else {
                        console.log('./node-experiment contains files: ', files);
                        if(files.length) {
                            for(let file of files) {
                                fs.unlink(`./node-experiment/${file}`, (err) => {
                                    if(err) console.log(err);
                                    else console.log(`file deleted form ./node-experiment: ${file}`);
                                });
                            }
                        }
                        fs.rmdir('node-experiment', (err) => {
                            if(err) console.log(err);
                            else console.log('Directory Deleted Successfully');
                        });
                    }
                });
            }
        });
    }
});