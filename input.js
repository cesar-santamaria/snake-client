// Stores the active TCP connection object.
let connection; 

const setupInput = function (conn) {
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", (key)=>{
    handleUserInput(key)
  });

  return stdin; //returns an object that allows us to listen for keyboard input
};


const handleUserInput = function (key) {
  // your code here
  if (key === '\u0003') {
    console.log('exiting game')
    process.exit();
  }
  if (key === 'w') {
    connection.write("Move: up");
  }
  
  if (key === 'a') {
    connection.write("Move: left");
  }
  
  if (key === 's') {
    connection.write("Move: down");
  }
  
  if (key === 'd') {
    connection.write("Move: right");
  }
  if (key === 'v') {
    connection.write('Say: Vamos!');
  }
  if (key === 'o') {
    connection.write('Say: obrigado! ');
  }
};


module.exports = {setupInput}