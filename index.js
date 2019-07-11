const express = require('express');
const routes = require('./routes');
const app = express();
app.use(`/.netlify/functions/api`, routes);
app.listen(9000,()=>console.log('server is running on port 9000'));
