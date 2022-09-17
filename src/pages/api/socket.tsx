/* eslint-disable no-console */
import { Server, Socket } from "socket.io";

const SocketHandler = (req: any, res: any) => {
  // It means that socket server was already initialised
  if (res.socket.server.io) {
    console.log("Already set up");
    res.end();
    return;
  }

  const io = new Server(res.socket.server);
  res.socket.server.io = io;

  // Define actions inside
  io.on("connection", (socket: Socket) => {
    socket.on('createdMessage', (msg: {author: string, message: string, messageId: string}) => {
      socket.broadcast.emit('newIncomingMessage', msg)
    })
  });

  console.log("Setting up socket");
  res.end();
}

export default SocketHandler;
