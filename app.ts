import { Server } from "./server";

const server = new Server();

server.listen();
server.middlewares();
server.routes();