// IMPORT CONNECT FUNCTION FROM CLIENT.JS
const { connect } = require('./client');
const { setupInput } = require('./input')

console.log('Connecting ...');

// PASSING CONNECTION OBJECT FROM CONNECT INTO SETUPINPUT
setupInput(connect());

