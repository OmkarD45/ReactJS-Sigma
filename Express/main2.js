const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    console.log("this is GET request")
  res.send('Hello World!- GET')
})

app.post('/', (req, res) => {
    console.log("this is POST request")
    res.send('Hello World!- POST')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})