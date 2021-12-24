import express = require('express')

const app = express()
const router = express.Router()

router.get('/ping', (ctx) => (ctx.body = 'pong'))

app.use(router)

app.on('error', (err) => {
  console.error('server error', err)
})

// Start the server
app.listen(3000)
