const { Router } = require('express');


const router = new Router();

// Route to get dragon 
router.get('/new', (req, res) => {
    res.json({ dragon: req.app.locals.engine.generation.newDragon() })
});

module.exports = router;

