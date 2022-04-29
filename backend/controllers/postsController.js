const Post = require('../models/Post');

const getPosts = async (req, res) => {
      try {
            const posts = await Post.find().sort({ createdAt: -1 })
            res.status(200).json(posts)
      } catch (error) {
            res.status(404).json(error);
      }
}

const getPost = async (req, res) => {
      const id = req.params.id
      try {
            const post = await Post.findById(id)
            res.status(200).json(post)
      } catch (error) {
            res.status(404).json(error);
      }
}

const getPostsBySearch = async (req, res) => {
      const search = req.query.searchQuery
      try {
            const posts = await Post.find({ $text: { $search: search } })
            res.json(posts);
      } catch (error) {
            res.status(404).json(error);
      }
}

const getPostsByCreator = async (req, res) => {
      const creator = req.query.creator;
      try {
            const posts = await Post.find(creator);
            res.status(200).json(posts);
      } catch (error) {
            res.status(404).json(error);
      }
}

const createPost = async (req, res) => {
      const newPost = new Post(req.body)
      try {
            await newPost.save();
            res.status(201).json(newPost);
      } catch (error) {
            res.status(409).json(error)
      }
}

const updatePost = async (req, res) => {
      try {
            const updatedPost = await Post.findByIdAndUpdate(
                  req.params.id,
                  { $set: req.body },
                  { new: true },
            );
            res.json(updatedPost);
      } catch (error) {
            res.status(500).json(error)
      }
}

const deletePost = async (req, res) => {
      try {
            await Post.findByIdAndDelete(req.params.id)
            res.status(200).json("Post has been deleted");
      } catch (error) {
            res.status(400).json(error);
      }
}

const likePost = async (req, res) => {
      try {
            const likedPost = await Post.findOneAndUpdate(
                  { _id: req.params.id },
                  { $inc: { likes: +1 } },
                  { new: true }
            )
            res.json(likedPost)
      } catch (error) {
            res.status(500).json(error);
      }
}

const commentPost = async (req, res) => {
      const id = req.params.id;
      const comment = req.body.comment;
      try {
            const post = await Post.findById(id);
            post.comments.push(comment);

            const updatedPost = await Post.findByIdAndUpdate(
                  id,
                  post,
                  { new: true }
            );
            res.json(updatedPost);
      } catch (error) {
            res.status(500).json(error);
      }

};

module.exports = { commentPost, deletePost, updatePost, createPost, getPosts, getPostsByCreator, likePost, getPostsBySearch, getPost };