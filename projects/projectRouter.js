const express = require('express');
const router = express.Router();
const model = require('../data/helpers/projectModel');

// api/project
router.get('/', (req, res) => {
    res.status(200).json({ msg: 'get/ api/project here' });
});

module.exports = router;
