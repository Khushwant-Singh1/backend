const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res)=>{
    res.send('khushwantzx@gmail.com')
})


app.get('/login', (req, res)=>{
    res.send('<h1>this is the h1 of my first backend</h1>')
})

app.get('/god',(req,res)=>{
    res.send('<h2>Khushwant Singh</h2>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})