let connection;

// ACCEPT INPUT FROM USER
const handleUserInput = key => {
  if(key === '\u0003'){
    process.exit();
  } else if(key === 'w') {
    connection.write('Move: up');
  } else if(key === 'a') {
    connection.write('Move: left');
  } else if(key === 'd') {
    connection.write('Move: right');
  } else if(key === 's') {
    connection.write('Move: down');
  }
};

// SET UP UI SO WE CAN HANDLE USER INPUT VIA STDIN
const setupInput = conn => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', (data) => {
    handleUserInput(data);
  });

  return stdin;
};

module.exports = { setupInput };