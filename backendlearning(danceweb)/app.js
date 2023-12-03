const express = require('express');
const path = require('path');
const app = express();
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
// const { stringify } = require('querystring');
mongoose.connect('mongodb://127.0.0.1:27017/ContactDance');
// define shecma
const contactSchema = new mongoose.Schema({
   name: String,
   email: String, 
   phoneno: Number,
   address: String,
   insterst:String,
   experience: String,
   message: String
})
const Contact =  mongoose.model('contact', contactSchema);
  
// const fs = require('fs');
const port = 8000;
app.use('/static',express.static('static'));
app.use(express.urlencoded());
//PUG SPECIFIC STUFF
app.set('view engine', 'pug');// set the template engine as pug
 app.set('views', path.join(__dirname,'views'));

 app.get('/', (req,res)=>{
    const params = {}; 
    res.status(200).render('home.pug',params);
 });
 app.get('/contact', (req,res)=>{
   const params = {}; 
   res.status(200).render('contact.pug',params);
 });
 app.post('/contact', (req,res)=>{
   // const params = {}; 
    var mydata = new Contact(req.body);
    mydata.save().then(()=>{
      res.send("this item has saved")
    }).catch(()=>{
      res.status(400).send('item was not send to the database');
    })
   //  res.status(200).render('contact.pug');
   //  res.status(200).render('contact.pug');

 });

 app.listen(port, ()=>{
    console.log(`The application started sucessfully on port ${port}`);
})