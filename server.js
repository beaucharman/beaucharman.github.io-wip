import express from 'express'
import connect from 'connect-livereload'
const app = express()

app.use(express.static(__dirname + '/dist'))
app.use(require('connect-livereload')())

const server = app.listen(process.env.PORT || 8080, () => {
  const host = server.address().address
  const port = server.address().port
  console.log('beaucharman.github.io local listening at http://%s:%s', host, port)
})
