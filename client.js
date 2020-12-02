const { IP, PORT } = require('./constants');
const net = require('net');


// ESTABLISHES CONNECTION WITH THE GAME SERVER
 
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // INTERPRET INCOMING DATA AS TEXT
  conn.setEncoding('utf8'); 

  // TRIGGER CONNECT EVENT AS SOON AS A CONNECTION IS ESTABLISHED TO THE SERVER
  conn.on('connect', () => {
    console.log('Successfully connected to the game server');
    // SEND NAME TO THE SERVER
    conn.write('Name: Zac');
    conn.write('Say: sup')
    
  });


  // USE EVENT HANDLER TO HANDLE INCOMING DATA AND LOG IT TO THE CONSOLE.
  conn.on('data', (data) => {
    console.log(data)
  });


  return conn;
}

module.exports = { connect };