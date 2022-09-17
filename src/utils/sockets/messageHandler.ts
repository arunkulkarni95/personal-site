import { Socket } from "socket.io";

const messageHandler =  (socket: Socket) => {
  const createdMessage = (msg: any) => {
    socket.broadcast.emit("newIncomingMessage", msg);
  };
  
  socket.on("createdMessage", createdMessage);
};

export default messageHandler;
