const express = require('express')
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const bodyParser = require('body-parser')

const mongoose = require('./config/mongoConnect');
const user = require('./routes/User')
const product = require('./routes/Product')
const category = require('./routes/Category')
const detailOrder = require('./routes/DetailOrder')
const order = require('./routes/Order')
const MiddlewareUser = require('./middleware/MiddlewareUser')
const port = 3001;


const app = express()

app.use(cors());
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(bodyParser.json())
app.use(cookieParser());


const swaggerDocument = YAML.load('./swagger.yaml')
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use('/user', user)
app.use('/product', product)
app.use('/category', category)
app.use('/detailOrder', MiddlewareUser.verifyToken, detailOrder)
app.use('/order', MiddlewareUser.verifyToken, order)
app.use(express.static(path.join(__dirname)));
console.log(path.join(__dirname))


app.listen(process.env.PORT || port, () => {
    console.log('listening on port http://localhost:' + port);
})