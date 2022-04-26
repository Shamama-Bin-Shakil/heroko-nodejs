const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express()
const port = process.env.PORT || 3000

hbs.registerPartials(path.join(__dirname, 'views/partials'));

app.set('view engine', 'hbs');

app.get('/' , (req , res)=>{
   res.render('index.hbs');
})
app.get('/about' , (req , res)=>{
    res.render('about.hbs');
 })
 
 app.get('*' , (req , res)=>{
    res.render('error.hbs', {
        error: '404 Page Not Found!'
    });
 })
 

app.listen(port, () => {
    console.log('http://localhost:3000/')
});