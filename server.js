const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = process.env.PORT || 3000

// Initialize Next.js app
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Parse the request URL
      const parsedUrl = parse(req.url, true)
      
      // Handle the request
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('Internal server error')
    }
  })
  .listen(port, (err) => {
    if (err) throw err
    console.log(`> Table Reservation System ready on http://${hostname}:${port}`)
    console.log(`> Environment: ${process.env.NODE_ENV || 'development'}`)
    console.log(`> Domain: ${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}`)
  })
})

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully')
  process.exit(0)
})

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully')
  process.exit(0)
})
