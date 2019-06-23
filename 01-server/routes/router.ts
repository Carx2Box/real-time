
import {Router, Request, Response, response} from 'express'
import Server from '../classes/server';

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

})

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

  res.json( {ok: true, body, from,id } );
})

export default router;
