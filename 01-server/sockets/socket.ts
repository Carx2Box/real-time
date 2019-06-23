import { Socket } from 'socket.io';
import socketIO from 'socket.io';

export const desconectar = ( cliente: Socket ) => {

    cliente.on('disconnect', () => {
        console.log('Cliente desconectado');
    });
}

// Recieve messages
export const message = (cliente: Socket, io: socketIO.Server) => {
    cliente.on('message', (payload: {from: string, body: string})  =>  {
        console.log('Mensaje received:', payload);

        io.emit('message-new', payload);
    });
}
