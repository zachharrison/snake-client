const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '10.0.2.15',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  
  // USE EVENT HANDLER TO HANDLE INCOMING DATA AND LOG IT TO THE CONSOLE.
  conn.on('data', (data) => {
    console.log(data)
  });


  return conn;
}

module.exports = { connect };