const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('/about', (req, res) => {
    return app.render(req, res, '/about', req.query)
  })

  server.get('/contact', (req, res) => {
    return app.render(req, res, '/contact', req.query)
  })

   server.get('/getting-started', (req, res) => {
    return app.render(req, res, '/getting-started', req.query)
  })

   server.get('/portfolio', (req, res) => {
    return app.render(req, res, '/portfolio', req.query)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})