const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(3300, () => console.log('server listening'));