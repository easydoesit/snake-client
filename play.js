const {connect} = require("./client");
const {setupInput} = require("./input");


console.log("Connecting");

// set the connection instance as a variable
let conn = connect('localhost', 50541);

// pass the connection instance into the setupInput to
// be able to pass on the commands.
setupInput(conn);
