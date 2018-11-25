const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const GenerationEngine = require('./generation/engine');

// API Routes
const accountRouter = require('./api/account');
const dragonRouter = require('./api/dragon');
const generationRouter = require('./api/generation');

const app = express();
const engine = new GenerationEngine();

// Pass engine to all api routes, api routes can't require them since index.js is requiring routes
app.locals.engine = engine;

app.use(cors({ origin: 'http://localhost:1234' }));
app.use(bodyParser.json());

// Everytime certain endpoint is hit, go to certain route
app.use('/account', accountRouter);
app.use('/dragon', dragonRouter);
app.use('/generation', generationRouter);


// Error Handler 
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        type: 'error', message: err.message
    })
});

// Start creating generations
engine.start();




module.exports = app;