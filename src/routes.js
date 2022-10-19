const express = require('express');
const router = express.Router();
const Campus = require('./models/campus')

/****************************/
/*          Routes          */
/************************** */

/**
*Homepage where all routes are shown
*/
router.get('/',async(req,res) => {
    console.log('/ route called');
    res.send(
    '<h1>Welcome to my API, these are available routes:</h1>'
    
    + `<h2></h2>`
    + `Where you are right now`

    + `<hr/>`
    
    + `<h2>/campus</h2>`
    + `return all campussen in the database using .find()`
    
    + `<hr/>`
    
    );
});

router.get('/campus',async (req, res) => {
    console.log('/campus route called');
    try {
        res.json(await Campus.find());
    } catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});

/*
*Return one single campus in the database using .findbyid(objectid)
*/

router.get('/campus/:id',async (req, res) => {
    console.log('/campus/:id route called');
    try {
        res.send(await Campus.findById(req.params.id));
    } catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});

/*
*Adds one single campus to the database using .create({data})
*/
router.post('/campus/create',async (req, res) => {
    console.log('/campus/create route called');
    try {
        res.send(await Campus.create(req.body));
    } catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});


/*
*Updates one single campus in the database using .findByIdAndUpdate(objectId), {$set: data})
*/
router.put('/campus/update/:id',async (req, res) => {
    console.log('/campus/update/:id route called');
    try {
        res.send(await Campus.findByIdAndUpdate(req.params.id, {$set: req.body}));
    } catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});


/*
*Delete on single campus from the database using .findByIdAndDelete(objectId)
*/
router.delete('/campus/delete/:id',async (req, res) => {
    console.log('/campus/delete/:id route called');
    try {
        res.send(await Campus.findByIdAndDelete(req.params.id));
    } catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = router;
