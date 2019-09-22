import { Router } from 'express'
const router = Router()

router.get('/', (req, res) => {
  res.send({
    type: 'GET',
    params: req.query,
    headers: req.headers
  })
})

router.post('/', (req, res) => {
  res.send({
    type: 'POST',
    body: req.body,
    headers: req.headers
  })
})

export default router
