import { Socket } from 'socket.io';
import socketIO from 'socket.io';
import { UserList } from '../classes/user-list';
import { User } from '../classes/user';

export const userConnect = new UserList();

export const clientConnect = (client: Socket) =>  {
  const user = new User(client.id);
  userConnect.add(user);
}

export const desconectar = ( client: Socket ) => {

  client.on('disconnect', () => {
    userConnect.deleteUser(client.id);
    console.log('Cliente desconectado');
  });
}

// Recieve messages
export const message = (client: Socket, io: socketIO.Server) => {
  client.on('message', (payload: {from: string, body: string})  =>  {
    console.log('Mensaje received:', payload);  
    io.emit('message-new', payload);
  });
}

export const configureUser =  (client: Socket, io: socketIO.Server) => {
  client.on('login-user',(payload: {name: string}, callback: Function) =>  {

    userConnect.update(client.id, payload.name);

    callback(
      {
        ok: true, 
        message: `User ${payload.name} configurated.`
      });
  });
}
