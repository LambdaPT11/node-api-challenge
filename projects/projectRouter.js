const express = require('express');
const router = express.Router();
const model = require('../data/helpers/projectModel');

// CRUD operations
// Create - POST (model - insert?)
// Read - GET (model - get)
// Update - PUT (model - update)
// Delete - DELETE (model - remove)

// api/project
router.get('/', async (req, res) => {
    try {
        await model.getall()
        res.status(200).json(projects);
    } catch(err) {
        console.error(err.message);
        return res.status(500).json({ err: 'get issue for project' });
    }
    res.status(200).json({ msg: 'get/ api/project here' });
});

// api/project
router.post('/', async (req, res) => {
    const project = req.body
    
    
    try {
        await model.insert(project)
        return res.status(200).json({ msg: 'project created', project });
    } catch(err) {
        console.error(err.message);
        return res.status(500).json({ err: 'post issue for project' });
    }
});

module.exports = router;
