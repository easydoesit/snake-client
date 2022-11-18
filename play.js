const {connect} = require("./client");
const {setupInput, handleUserInput} = require("./input");
const {IP, PORT, PLAYER, CONTROLS} = require("./constants");

console.log("Connecting");

// set the connection instance as a variable
let conn = connect(IP, PORT, PLAYER);

// pass the connection instance into the setupInput to
// be able to pass on the commands.
setupInput(conn);
handleUserInput("data", CONTROLS);