const express = require('express');
const router = express.Router();
const model = require('../data/helpers/projectModel');

// CRUD operations
// Create - POST (model - insert?)
// Read - GET (model - get)
// Update - PUT (model - update)
// Delete - DELETE (model - remove)

// api/project
// call getall() to review all projects. This was the only way I could see to get the id
router.get('/', async (req, res) => {
    try {
        projects = await model.getall()
        return res.status(200).json(projects);
    } catch(err) {
        console.error(err.message);
        return res.status(500).json({ err: 'get issue for project' });
    }
    // res.status(200).json({ msg: 'get/ api/project here' });
});

// api/project/id
// GET with id
router.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        project = await model.get(id)
        res.status(200).json(project)
    } catch(err) {
        console.error(err.message);
        return res.status(500).json({ err: 'get issue for project' });
    }
});

// api/project
// POST a new project, don't pass id
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

// api/project/id
// PUT to update a project
router.put('/:id', (req, res) => {
    const { id } = req.params
    const changes = req.body

    try {
        model.update(id, changes)
        res.status(200).json({ msg: 'updated project', changes })
    } catch(err) {
        console.error(err.message)
        return res.status(500).json({ err: 'put issue for project' });
    }
});

module.exports = router;
