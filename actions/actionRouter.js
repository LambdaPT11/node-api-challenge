const express = require('express');
const router = express.Router();
const model = require('../data/helpers/actionModel');

// api/action
router.get('/', (req, res) => {
    res.status(200).json({ msg: 'get/ api/action here' });
});

module.exports = router;
