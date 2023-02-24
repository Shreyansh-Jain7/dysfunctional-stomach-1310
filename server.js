const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();unit-3
const router = jsonServer.router("database.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001; // you can use any port number here; i chose to use 3001

server.use(middlewares);
server.use(router);

server.listen(port);