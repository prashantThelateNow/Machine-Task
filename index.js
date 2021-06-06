const express = require('express');
const moment = require('moment');
const momentz = require('moment-timezone');
const app = express();
const timeZone = 'Asia/Kolkata'
const now = () => moment().format();
const normallocalvalue = () => momentz(now()).tz(timeZone).format();
const Joi = require('@hapi/joi');
require('./models/dbCon');
const bodyParser = require('body-parser');
const assetRouter = require('./routes/asset.router');
app.use(bodyParser.json());

const appConfig = {
    port : 4000,
    allowedCorsOrigin : "*",
    env : "dev",
    apiVersion : '/api/v1',
  }

/* Callback for get assets */
app.use(`${appConfig.apiVersion}`, assetRouter);


// start listening to http server
const port = process.env.PORT || appConfig.port;
app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});

module.exports = app;


  
  