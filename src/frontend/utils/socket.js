import opentSocket from 'socket.io-client';

const socket = opentSocket('http://localhost:8000', { forceNew: true, transports: ['websocket'] });
// this.socket = opentSocket('https://kiin-api.now.sh', { forceNew: true });

export const newMessage = (func) => {
  return socket.on('new message', func);
};

export const newContact = (func) => {
  return socket.on('new contact', func);
};

export const newChat = (func) => {
  return socket.on('new chat', func);
};
