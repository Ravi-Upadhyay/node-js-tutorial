 
const Event = require('events');

const eventManager = new Event;

//Simple working with events
eventManager.on('shout', () => {
    console.log('Why you are shouting, I am not deaf');
});

eventManager.emit('shout');

//Extending class
class ErrorHandler extends Event {
    constructor() {
        super();
    }

    get errorCodes() {
        return {
            700: 'Age out of the bounds',
            701: 'Age out of the bounds',
            701: 'Income details do not match',
        }
    }
}

const errors = new ErrorHandler;
errors.on('700', () => {
    console.log(errors.errorCodes[700]);
});
errors.on('701', () => {
    console.log(errors.errorCodes[701]);
});

errors.emit('700');
errors.emit('701');