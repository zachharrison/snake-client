const net = require('net');


// ESTABLISHES CONNECTION WITH THE GAME SERVER
 
const connect = function() {
  const conn = net.createConnection({ 
    host: '10.0.2.15',
    port: 50541
  });
  // INTERPRET INCOMING DATA AS TEXT
  conn.setEncoding('utf8'); 

  // TRIGGER CONNECT EVENT AS SOON AS A CONNECTION IS ESTABLISHED TO THE SERVER
  conn.on('connect', () => {
    console.log('Successfully connected to the game server');
    // SEND NAME TO THE SERVER
    conn.write('Name: Zac');
    
  });


  // USE EVENT HANDLER TO HANDLE INCOMING DATA AND LOG IT TO THE CONSOLE.
  conn.on('data', (data) => {
    console.log(data)
  });


  return conn;
}

module.exports = { connect };