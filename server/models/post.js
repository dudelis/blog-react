const mongoose = require('mongoose');

const { Schema } = mongoose;

const PostSchema = Schema({
    title: { type: String },
    content: { type: String },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    tags: { type: [Schema.Types.ObjectId], ref: 'Tag' },
}, {
    timestamps: true,
});
const Post = mongoose.model('Post', PostSchema);
module.exports = Post;
