const mongoose = require('mongoose');

const { Schema } = mongoose.Schema;

const TagSchema = Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
}, {
    timestamps: true,
});

const Tag = mongoose.model('Tag', TagSchema);

module.exports = Tag;
