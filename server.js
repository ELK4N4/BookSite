require('dotenv').config();

const express = require('express');
const app = express();

const indexRouter = require('./routes/index.js');
const expressLayout = require('express-ejs-layouts');

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayout);
app.use(express.static('public'));

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', error => console.log(error));
db.once('open', () => {console.log('Mongoose is connected');});

app.use('/', indexRouter);

app.listen(PORT, console.log(`Listening at port ${PORT}...`));