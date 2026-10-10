const router = require('express').Router();
const {
  getAllArticles,
  getArticleById,
  searchArticles,
  createArticle,
  updateArticle,
  deleteArticle,
} = require('../controllers/articleController');
const validateArticle = require('../middleware/validateArticle');

router.get('/', getAllArticles);
router.get('/search', searchArticles); // must stay above /:id
router.get('/:id', getArticleById);
router.post('/', validateArticle, createArticle);
router.put('/:id', validateArticle, updateArticle);
router.delete('/:id', deleteArticle);

module.exports = router;
