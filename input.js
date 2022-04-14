const setupInput = function () {
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
};

module.exports = {setupInput}