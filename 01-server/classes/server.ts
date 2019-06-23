import express from 'express';

import { SERVER_PORT } from '../globals/environment';
import  socketIO from 'socket.io';
import http from 'http';

import * as socket from '../sockets/socket'

export default class Server {

  private static _intance: Server;
  public app: express.Application;
  public port: number;

  public io: socketIO.Server;
  private httpServer: http.Server;

    private constructor() {
        this.app = express();
        this.port = SERVER_PORT;        

        this.httpServer = new http.Server(this.app);
        // configure sockets
        this.io = socketIO( this.httpServer);
        this.listenSockets();
    }

    public static get instance() {
      return this._intance || ( this._intance = new this());
    }

    private listenSockets() {
      console.log('Listen connections');
      this.io.on('connection', client =>  {
          console.log('Client connected');
          
          // enviar mensaje
          socket.message(client, this.io);
          
          // detecta evento desconectar el cliente
          socket.desconectar(client);
      })
    }

    start(callback: any) {
        this.httpServer.listen( this.port, callback);
    }
}
