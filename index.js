const express = require('express')
const app = express()
const port = 3000
let counter = 0



const myCounter = function (req, res, next) {
npm counter++ 
    next()
  }
  
  app.use(myCounter)



app.get('/', (req, res) => 
{
  res.send('Hello World!' + counter)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})