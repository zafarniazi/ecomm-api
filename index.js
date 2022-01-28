const express = require("express");
const mongoose = require("mongoose");
const db = require("./db");
require("dotenv").config();
const bodyparser = require("body-parser");
const morgan = require("morgan");
const app = express();
//Routes
const categoriesRoutes = require("./routes/categories");
const productsRoutes = require("./routes/products");
const usersRoutes = require("./routes/users");
const ordersRoutes = require("./routes/orders");
const cors = require('cors');
const authjwt = require("./helper/jwt");
const errorhandler = require("./helper/errorhandler");
//middleware

app.use(morgan("tiny"));
app.use(bodyparser.json());
app.use(cors());
app.use(authjwt())
app.use(errorhandler);
app.options('*', cors())
const api = process.env.API_URL;
//Routers
app.use(`${api}/categories`, categoriesRoutes);
app.use(`${api}/products`, productsRoutes);
app.use(`${api}/users`, usersRoutes);
app.use(`${api}/orders`, ordersRoutes);
//appListen
app.listen(process.env.PORT, () => {
    console.log(`app running is port ${process.env.PORT}`);
});
