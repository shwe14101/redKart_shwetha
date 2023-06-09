const mongoose = require ('mongoose');
const express = require('express');
const connectDB = require('./config/db');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const cors = require('cors');
const Product = require('./models/products');
const router = require('./routes/api/prdlist')

connectDB();
app.use(express.json({extended: false}));
app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }));

app.use(router);
const db= mongoose.connection;
db.once('open', () => {
    app.listen(port,()=>console.log(`Server running on ${port}`));

})




