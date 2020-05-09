# Node JS Exersice

A quick go through the concepts of node js as a crash course to again start journey of deep exploration :)

>For more elaborate explaination kindly visit wiki of this repository: [Repository Wiki](https://github.com/Ravi-Upadhyay/node-js-crash-course/wiki)
___

## Index

- [Tutorials](#tutorial)
- [Resources Over Web](#resources)
- [Learnings](#learnings)
- [To do list](#to-do)

___

## Tutorials<a name="tutorial"></a>

Different tutorials commit by commit. See below for the learnings

- Node Modules - commit(#8d864f)
- The Event Module and EventEmitter Class - commit(#4c17d09)
- Working with readline module - commit(#128ead4)
- Working with file system module
    - Write and Read a file - commit(#0f0359)
    - Rename, Delete, Append a file - commit(#91c856)
- Working with file system module, directories
- Working with file system module, read file and streams
___

## Learnings<a name="learnings"></a>

- Modules:
    - ES6 modules, imports and exports are not supported in node yet.
- Events:
    - Node has `event` module built in that can be imported by `require('event')`. Which will you give a class that can be used to create objects
    - `on()` and `emit()` methods of that class can be used after creating object.

- Readline:
    - Node has `readline` module built in. To start work with that one need to use `createInterface()` method which takes an object as input. That object tells about configuration (input/output).
    - `readline Interface` has method `question()` to ask/prompt user question. Second parameter of which is callback function.
    - `readline Interface` has a way to prompt user and then get the output. `setPrompt()` is used to set the prompt message. Then we have `prompt()` method to show the prompt.
    - `readline Interface` has an event emitter associated, `on('line')` which can help you take input from the user in response of the prompt.

- FileSystem:
    - Node has `fs` module built in. It has some useful methods to work with file such as:
        - `writeFile('fileName', 'fileContent', 'callback')`. Used to write as well as create the file.
        - `readFile('fileName', 'encoding', 'callback')`. Used to read the file.
        - `appendFile('fileName', 'fileContent', callback')`. Used to add/append content to the file.
        - `rename('oldName', 'newName', 'callback')`. Used to rename existing file.
        - `unlink('fileName', 'callback')`. Used to delete the file.
    - To work with directories there are some useful methods
        - `mkdir('dirName', 'callback')`. Used to create/make directories.
        - `rmdir('dirName', 'callback')`. Used to remove/delete directories.
        - `readdir('dirName', 'callback')`. Used to read the directories. It will return an array of the files existing into the given directory.
    - To work with read file contents there are two ways
        - read complete file using `fs.readFile('fileName', callback)`.
        - read chunk/stream `fs.createReadStream('fileName', 'encoding')` gives you `readStream` which by default emits `data` event. One can access data stream by listening to this event. 
    - To open write stream one can have `writeStream` by using `fs.createWriteStream('fileName')`. Which gives access to the `write()` method.
    - Reading big files is possible if we read them in streams/chunks `readFile()` might be not able to read due to `buffer size` limitation.
- Compression and Decompression
    - Node has `zlib` module built in. It can be used to either compress or decompress. `zlib` uses `createGzip()` method to provide interface that can be used with `pipe()`. Similarily `createGunzip()` method is used to provide interface that can used to decompress.
___

## Resources Over Web<a name="resources"></a>

___

## To do list<a name="to-do"></a>
