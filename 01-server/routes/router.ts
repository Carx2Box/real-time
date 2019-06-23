
import {Router, Request, Response, response} from 'express'

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

  res.json( {
    ok: true,
    body,
    from,
    id,
    test: 'test 2'
  });
})

export default router;
