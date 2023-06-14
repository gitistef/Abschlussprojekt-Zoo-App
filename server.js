const express = require('express')
const app = express()
const port = 3000


const fs = require('fs');

let counter = 0;


//Definition einer Express Middleware, die bei jedem Aufruf den Counter um eins erhöht
const myCounter = function (req, res, next) {
    console.log('myCounter wird ausgeführt')
    fs.readFile('counter.log', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        if (data === "") {
            //Beim allerersten Durchlaufen ist die Datei leer

        }
        else {
            counter = Number(data)
        }
        // In allen Fällen Counter um 1 erhöhen
        counter++
        fs.writeFile('counter.log', counter.toString(), err => {
            if (err) {
                console.error(err);
            }
        });

        console.log(data);
    });

    next()
}

app.use(myCounter)

num = parseInt(counter)
console.log(num)

app.get('/', (req, res) => {
    if (num = 195) {
    res.send('Die Anzahl der Besucher beläuft sich auf :' + counter);
}
        else{
        res.send('Hello World!' + counter);
    }    
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

