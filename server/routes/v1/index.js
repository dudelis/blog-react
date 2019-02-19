const express = require('express');

const router = express.Router();

const postRouter = require('./post');

router.get('/', (req, res) => {
    res.json({ status: 'success', message: 'Parcel Pending API', data: { version_number: 'v1.0.0' } });
});

router.use('/post', postRouter);

module.exports = router;
