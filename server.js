const express = require('express')
const multer = require('multer');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');
const mongoose = require('./config/mongoConnect');
const user = require('./routes/User')
const product = require('./routes/Product')
const category = require('./routes/Category')
const bodyParser = require('body-parser')
const port = 3001;
const Products = require('./models/Product')


const app = express()


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser());
app.use('/user', user)
app.use('/product', product)
app.use('/category', category)
app.use(express.static(path.join(__dirname)));
console.log(path.join(__dirname))

app.get('/', async (req, res) => {
    const users = await Products.find()
    res.status(200).json(users)
})

app.listen(process.env.PORT || port, () => {
    console.log('listening on port http://localhost:' + port);
})