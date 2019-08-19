const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Welcome'))

router.post('/posts', controllers.createPost);
router.get('/posts', controllers.getAllPosts);
router.get('/posts/:postId', controllers.getPostById);
router.delete('/posts/:postId', controllers.deletePost);

module.exports = router;