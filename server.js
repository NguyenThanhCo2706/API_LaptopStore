const express = require('express')
const multer = require('multer');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');
const mongoose = require('./config/mongoConnect');
const user = require('./routes/User')
const product = require('./routes/Product')
const category = require('./routes/Category')
const detailOrder = require('./routes/DetailOrder')
const order = require('./routes/Order')
const bodyParser = require('body-parser')
const port = 3001;


const app = express()


app.use(cors());
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(bodyParser.json())
app.use(cookieParser());

app.use('/user', user)
app.use('/product', product)
app.use('/category', category)
app.use('/detailOrder', detailOrder)
app.use('/order', order)
app.use(express.static(path.join(__dirname)));
console.log(path.join(__dirname))


app.listen(process.env.PORT || port, () => {
    console.log('listening on port http://localhost:' + port);
})