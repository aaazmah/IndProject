const express =  require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', (req,res) =>{
    res.render('index')
    console.log('its working')
})

app.get('/residential', (req,res) =>{
    res.render('residential')
    console.log('its residential')
})

app.get('/commerical', (req,res) =>{
    res.render('commerical')
    console.log('its commerical')
})

app.get('/login', (req,res) =>{
    res.render('login')
    console.log('its login')
})

app.get('/portfolio', (req,res) =>{
    res.render('portfolio')
    console.log('its portfolio')
})


app.listen(3000);