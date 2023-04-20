
//Import http 
//const http =require('http');
const bodyParser = require('body-parser');
const express=require('express');
const app=express();
const body_parser=require('body-parser');
app.use(body_parser.urlencoded ({extended:false}));
app.use('/addProduct',(req,res,next)=>
{
console.log('In another middleware');
res.send('<form action="/product" method="POST"><input type="text" name="username" ></input><button type="submit" name="button">submit</button></form>');
});
app.use('/product',(req,res,next)=>
{
    
console.log(req.body);
//res.send('<h1>Hello from express.js</h1>');
res.redirect('/');
});

app.use('/',(req,res,next)=>
{
console.log('In another middleware');
res.send('<h1>Hello from express</h1>');
});


//const server1= http.createServer(app); 
//set the port the server to listen at
app.listen(2000);


