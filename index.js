const express = require('express');
const app = express();
const path = require('path');
const connectDB = require('./db');
const methodOverride = require('method-override');
const myRoute=require('./routes/app.js')
const my = require('./models/mymodel');


connectDB();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));



app.use(myRoute);


app.listen(8080, () => {
    console.log('Server Running at Port 8080');
})