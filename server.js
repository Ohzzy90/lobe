const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000

// Serve static files from Vite's build
app.use(express.static(path.join(__dirname, 'dist')))

// Pretty URL mapping
app.get(['/', '/home'], (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})
app.get(['/examples', '/tour', '/blog', '/help'], (req, res) => {
  const page = req.path.slice(1) + '.html'
  res.sendFile(path.join(__dirname, 'dist', page))
})

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`))
