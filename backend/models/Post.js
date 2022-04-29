const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
      {
            creatorId: String,
            creator: String,
            title: String,
            desc: String,
            selectedFile: String,
            likes: { type: Number, default: 0 },
            comments: { type: [String], default: [] },
      },
      { timestamps: true }
);
postSchema.index({ title: 'text', desc: 'text' });

module.exports = mongoose.model("Post", postSchema);
