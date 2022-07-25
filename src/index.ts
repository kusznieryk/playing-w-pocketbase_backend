import express, { Request, Response } from "express"
import { login } from './services/pocketbase'
const cors = require('cors')
const app = express()
const port = 3000


app.use(express.json())
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})
app.post('/api', async (req: Request, res: Response) => {
  const { user, pass } = req.body
  const token = await login(user, pass)
  res.send({ data: token })
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
