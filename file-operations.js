/* Chapter 4 - File system module */
/* 4.2. Rename, Append */
const fs = require('fs');

// 1. Creating the file
fs.writeFile('example.txt', 'Just Example - 1', (err)=>{
  if(err) console.log(err);
  else {
    console.log('file sucessfully created, ', 'example.txt');
    
    // 2. Appending to the file 
    fs.appendFile('example.txt', '\nJust Example - 2', (err) => {
      if(err) console.log(err);
      else console.log('file appended successfully');
    });

    // 3. Renaming the file
    fs.rename('example.txt', 'example-renamed.txt', (err) => {
      if(err) console.log(err);
      else console.log('file renamed sucessfully, ', 'example.txt', 'example-renamed.txt');
    });
  }
});

// 4. Creating file to be deleted
fs.writeFile('file-to-delete.txt', 'This file will be deleted', (err) => {
  if(err) console.log(err);
  else {
    console.log('file created successfully, to demonstrate the delete functionality');
    fs.unlink('file-to-delete.txt', (err) => {
      if(err) console.log(err);
      else console.log('file deleted sucessfully', 'file-to-delete.txt');
    });
  }
})


