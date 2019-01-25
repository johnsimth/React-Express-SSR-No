const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./router/user.route.js');
const db = require('./models');

const app = express();
app.use(express.static('../../public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', routes);
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../public/index.html'));
});
// app.set();

app.listen(process.env.PORT || 3000, () => console.log('server is runnig!'));
