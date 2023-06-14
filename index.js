const express = require('express')
const app = express()
const port = 3000
let counter = 0

const MAX_Counter = 8000;
const MIN_Counter = 0;


const myCounter = function (req, res, next) {
    if (counter < 8000) {
        myCounter.style.color = 'red'
        alert ("Neuer Besucherrekord!")
    }


document.querySelector('h1').innerHTML = Counter
counter++ 
    next()
  }

  if (counter < 8000) {
  myCounter.style.color = 'red'
  alert ("Neuer Besucherrekord!")
  } 
  if (counter > 8000) {
  myCounter.style.color = 'gold'
  }
  app.use(myCounter)

myCounter.textContent = count

app.get('/', (req, res) => 
{
  res.send('Hello World!' + counter)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})