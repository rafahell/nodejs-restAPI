const express = require('express');
const app = express();
const morgan = require('morgan');

const productRoutes = require ('./api/routes/products');
const orderRoutes = require ('./api/routes/orders');

//app.use((req, res, next) => {
//    res.status(200).json({
//        message: 'It works!'
//    });
//});

app.use(morgan('dev'));

//Routes
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

module.exports = app;