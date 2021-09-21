const express = require('express');
// console.log('express');
const app = express()
const port = 3000;

// greeting 1
app.get('/greeting', (req, res) => {
    res.send('Hello, stranger');
});

// greeting 2
app.get('/greeting/:name', (req, res) => {
    console.log(req.params);

    res.send('Hi! You found your way here ' + req.params.name);
});

/////////////////////////////////
// tip calculator
/////////////////////////////////

app.get('/tip/:total/:tipPercentage', (total, tipPercentage) => {
    // console.log(tipPercentage.params);

    tipPercentage.send(total.params.tipPercentage);
});

/////////////////////////////////
//magic 8 ball
/////////////////////////////////
// app.get('/magic')


app.listen(port, () =>{
    console.log('listening on port ' + port);
})

