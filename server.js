'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config();


const routes = require('./api/routes');
routes(app);

app.listen(port, ()=>{
    console.log(`Server started on port: ${port}`);
});
