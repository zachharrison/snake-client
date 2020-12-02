// IMPORT CONNECT FUNCTION FROM CLIENT.JS
const { connect } = require('./client');
const { setupInput } = require('./input')

console.log('Connecting ...');

connect();
setupInput();

