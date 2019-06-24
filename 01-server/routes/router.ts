
import {Router, Request, Response, response} from 'express';
import Server from '../classes/server';
import { Socket } from 'net';
import { userConnect } from '../sockets/socket';

const router = Router();

router.get('/messages', (req: Request, res: Response) => {

  return res.json( {
    ok: true,
    mensaje: 'GET - LISTO'
  });

})

router.post('/messages', (req: Request, res: Response) => {
  const body = req.body.body
  const from = req.body.from
  const payload = { from, body };

  const server = Server.instance;
  server.io.emit('message-new', payload)

  res.json( {
    ok: true,
    body,
    from
  });
});

router.post('/messages/:id', (req: Request, res: Response) => {
  const body = req.body.body
  const from = req.body.from
  const id = req.params.id;
  const payload = {
    from,
    body
  };

  // Logic
  const server = Server.instance;

  // Mensaje específico
  server.io.in(id).emit('message-private', payload)

  res.json({ok: true, body, from,id });
});


router.get('/users', (req: Request, res: Response) =>  {
  const server = Server.instance;

  server.io.clients((err: any, clients: string[]) =>  {  
    if (err) {
      return res.json({ok: false, error: err});
    }

    res.json({ok: true,clients: clients});
  });
 
});

router.get('/users/detail', (req: Request, res: Response) =>  {    

  res.json({ok: true, clients: userConnect.getUserList()});
});

export default router;
