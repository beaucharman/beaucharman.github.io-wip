import express from 'express'
const app = express()

app.use(express.static(__dirname + '/dist'))

const server = app.listen(process.env.PORT || 8080, () => {
  const host = server.address().address
  const port = server.address().port
  console.log('beaucharman.github.io local listening at http://%s:%s', host, port)
})
