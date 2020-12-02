// IMPORT CONNECT FUNCTION FROM CLIENT.JS
const { connect } = require('./client');

const handleUserInput = key => {
  if(key === '\u0003'){
    process.exit();
  }
};

// SET UP UI SO WE CAN HANDLE USER INPUT VIA STDIN
const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', (data) => {
    handleUserInput(data);
  });

  return stdin;
};
console.log('Connecting ...');
connect();
setupInput();

