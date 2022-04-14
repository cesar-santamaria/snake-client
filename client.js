const net = require("net");
const { IP, PORT } = require('./constants') 

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    // code that does something when the connection is first established
    console.log('Server:',data)
  });

  conn.on("connect", (connect) => {
    // message that appears once the succesfully connected to the server.
    console.log('Successfully connected to game server')
    conn.write('Name: NEY');
  });
  return conn; //returns an object that allows us to listen to interact with server
};

module.exports = { connect }