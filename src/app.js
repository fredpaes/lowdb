const express = require('express');
const morgan = require('morgan');

const app = express();

// middlewares
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use('/tasks', require('./routes'));

module.exports = app;
