const express = require('express');
const router = express.Router();
const model = require('../data/helpers/actionModel');

// CRUD operations
// Create - POST (model - insert?)
// Read - GET (model - get)
// Update - PUT (model - update)
// Delete - DELETE (model - remove)

// api/action
// call getall() to review all projects. This was the only way I could see to get the id
router.get('/', async (req, res) => {
    try {
        actions = await model.getall()
        return res.status(200).json(actions);
    } catch(err) {
        console.error(err.message);
        return res.status(500).json({ err: 'get issue for project' });
    }
});

// api/action/id
// GET with id
router.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        action = await model.get(id)
        res.status(200).json(action)
    } catch(err) {
        console.error(err.message);
        return res.status(500).json({ err: 'get issue for action' });
    }
});

// api/action
// POST a new action, don't pass id
router.post('/', async (req, res) => {
    const action = req.body
    
    try {
        await model.insert(action)
        return res.status(200).json({ msg: 'action created', action });
    } catch(err) {
        console.error(err.message);
        return res.status(500).json({ err: 'post issue for action' });
    }
});

// api/action/id
// PUT to update a action
router.put('/:id', (req, res) => {
    const { id } = req.params
    const changes = req.body

    try {
        model.update(id, changes)
        res.status(200).json({ msg: 'updated action', changes })
    } catch(err) {
        console.error(err.message)
        return res.status(500).json({ err: 'put issue for action' });
    }
});

// api/action/id
router.delete('/:id', async (req, res) => {
    const { id } = req.params

    try {
        await model.remove(id)
        res.status(200).json({ msg: 'action deleted' })
    } catch(err) {
        console.error(err.message)
        return res.status(500).json({ err: 'Delete issue for action'});
    }
});


module.exports = router;
