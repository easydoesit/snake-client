const net = require("net");

// establishes a connection with the game server and returns

const connect = function(host, port, player) {
  const conn = net.createConnection({
    host: host,
    port: port,

  });

  // interpret incoming data as text
  conn.setEncoding("utf-8");

  conn.on("connect", () => {
    console.log("You're in! Play the Game!");
    conn.write(player);
  });
  
  conn.on("data", (data) => {
    console.log(data.toString());
  });

  conn.on('end', () => {
    console.log('disconnected from server');
  });

  return conn;
};

module.exports = {connect};