const express = require("express");
const serverless = require("serverless-http");
const app = express();
const routes = require('../routes');
app.use(`/.netlify/functions/api`, routes);
module.exports.handler = serverless(app);
