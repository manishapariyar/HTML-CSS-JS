const  fs = require('fs');
const  path = require('path')
const  index = express();
const mongoose = require('mongoose');
const internal = require('stream');
const { long } = require('webidl-conversions');
const { Long } = require('bson');
 mongoose.connect('mongodb://127.0.0.27017/contactForm');
 const contactform = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    jobrole : String,
     address : String,
    city : String,
    pinCode: integer,
    date : Date,
 })
 const Contact =  mongoose.model('contact', contactform);
  
const port = 3000;

index.use('/static',express.static('static'));
index.use(express.urlencoded());
//PUG SPECIFIC STUFF
index.set('view engine', 'pug');// set the template engine as pug
 index.set('views', path.join(__dirname,'views'));
index.get('/', (req,res)=>{
    const con = "what the hack people doing nothing  but expect everything";
    const params = {'title':'change the flow','content':con}; 
    res.status(200).render('index.pug',params);
 });




index.post('/index',(req,res)=>{
    var mydata = new Contact(req.body);
    mydata.save().then(()=>{
      res.send("this item has saved")
    }).catch(()=>{
      res.status(400).send('item was not send to the database');
    })
 })

index.listen(port, ()=>{
    console.log(`The application started sucessfully on port ${port}`);
})