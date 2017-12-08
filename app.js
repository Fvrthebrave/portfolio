const express = require('express'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser');


const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index'); 
});

app.get('/portfolio', (req, res) => {
   res.render('portfolio'); 
});

app.get('/contact', (req, res) => {
    res.render('contact-form'); 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server is listening...');
});