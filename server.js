const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("data/db-large.json"); // Change this to your data file
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 8080;

server.use(middlewares);

server.use(router);
server.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`);
});
