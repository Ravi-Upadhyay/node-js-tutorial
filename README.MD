# Node JS Exersice

A quick go through the concepts of node js as a crash course to again start journey of deep exploration :)
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
    - Write and Read a file - commit()
___

## Learnings<a name="learnings"></a>

- Modules:

    - ES6 modules, imports and exports are not supported in node yet.
- Events:
    - Node has `event` module built in that can be imported by `require('event')`. Which will you give a class that can be used to create objects
    - `on()` and `emit()` methods of that class can be used after creating object.
- Readline
    - Node has `readline` module built in. To start work with that one need to use `createInterface()` method which takes an object as input. That object tells about configuration (input/output).
    - `readline Interface` has method `question()` to ask/prompt user question. Second parameter of which is callback function.
    - `readline Interface` has a way to prompt user and then get the output. `setPrompt()` is used to set the prompt message. Then we have `prompt()` method to show the prompt.
    - `readline Interface` has an event emitter associated, `on('line')` which can help you take input from the user in response of the prompt.
- FileSystem
    - Node has `fs` module built in. It has some useful methods to work with file such as:
        - `writeFile('fileName', 'fileContent', 'callback')`. Used to write as well as create the file.
        - `readFile('fileName', 'encoding', 'callback')`. Used to read the file.
        - `appendFile('fileName', 'fileContent', callback')`. Used to add/append content to the file.
        - `rename('oldName', 'newName', 'callback')`. Used to rename existing file.
        - `unlink('fileName', 'callback')`. Used to delete the file.

___

## Resources Over Web<a name="resources"></a>

___

## To do list<a name="to-do"></a>
