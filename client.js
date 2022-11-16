const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf-8");

  conn.on("connect", () => {
    console.log("You're in! Play the Game!");
    conn.write("Name: MCG");
  });
  
  conn.on("data", (data) => {
    console.log(data.toString());
  });


  return conn;


};


module.exports = connect;