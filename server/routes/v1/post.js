const express = require('express');

const router = express.Router();

const Post = require('../../models/post');
const { respSuccess, respError } = require('../../utils');

// POST /post
router.post('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const post = req.body;
    console.log(post);
    Post.create(post).then(
        result => respSuccess(res, result, 201),
        err => respError(res, err, 422),
    );
});
// GET /post
router.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    Post.find().then(
        result => respSuccess(res, result, 201),
        error => respError(res, error, 422),
    );
});
// PATCH /post/:id
router.patch('/:id', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const { id } = req.params;
    const post = req.body;
    Post.findByIdAndUpdate(id, post).then(
        result => respSuccess(res, result, 201),
        error => respError(res, error, 422),
    );
});
// GET /post/:id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    Post.findById(id).then(
        result => respSuccess(res, result, 201),
        error => respError(res, error, 422),
    );
});
// DELETE /post/:id
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Post.findByIdAndDelete(id).then(
        result => respSuccess(res, result, 201),
        error => respError(res, error, 422),
    );
});


module.exports = router;
