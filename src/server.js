import express from 'express'

const PORT = 4000

const app = express()

const handleHome = (res, req) => {
  return res.send('This is home...')
}

const handleLogin = (res, req) => {
  return res.send('Login here...')
}

app.get('/', handleHome)
app.get('/login', handleLogin)

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 🚀`)

app.listen(4000, handleListening)