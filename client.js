const net = require("net");


// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
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

  return conn;
};


module.exports = { connect }