const express = require('express');

const GenerationEngine = require('../dragons/engine');

const engine = new GenerationEngine();

engine.start();
