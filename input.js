const {CONTROLS} = require("./constants");
// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin

const setupInput = function(conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function(key) {

  if (key !== '\u0003') {
    let input = String(CONTROLS[key]);
    connection.write(input);
  } else {
    process.exit();
  }
  
};

module.exports = {setupInput, handleUserInput};