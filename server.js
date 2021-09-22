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

app.get('/tip/:total/:tipPercentage', (req, res) => {
    // console.log(tipPercentage.params);
    var tip = (req.params.tipPercentage / req.params.total) * 100;
    res.send(`${tip} is your tip`);
});

/////////////////////////////////
//magic 8 ball
/////////////////////////////////
const answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

// magic part 1
app.get('/magic/:question', (req, res) => {

    res.send(`${req.params.question} <h1> ${answers[Math.floor(Math.random() * answers.length)]}</h1>`);
});


app.listen(port, () =>{
    console.log('listening on port ' + port);
})

