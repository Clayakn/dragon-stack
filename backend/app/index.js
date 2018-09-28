const express = require('express');

const GenerationEngine = require('./generation/engine');

// API Routes
const dragonRouter = require('./api/dragon');
const generationRouter = require('./api/generation');


const app = express();
const engine = new GenerationEngine();

// Pass engine to all api routes, api routes can't require them since index.js is requiring routes
app.locals.engine = engine;


// Everytime certain endpoint is hit, go to certain route
app.use('/dragon', dragonRouter);
app.use('/generation', generationRouter);

// Start creating generations
engine.start();




module.exports = app;