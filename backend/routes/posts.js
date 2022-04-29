const router = require("express").Router();
const { auth } = require("../middleware/auth")
const { getPostsBySearch, getPosts, getPost, createPost, updatePost, deletePost, commentPost, likePost } = require("../controllers/postsController")

router.get('/search', getPostsBySearch);
router.get('/:id', getPost)
router.get('/', getPosts);

router.post('/', auth, createPost);
router.patch('/:id/like', auth, likePost);
router.patch('/:id', auth, updatePost);
router.patch('/:id/comment', auth, commentPost);
router.delete('/:id', auth, deletePost);

module.exports = router;
