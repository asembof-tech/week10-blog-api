const router = require('express').Router();
const { createNote, getNotes, deleteNote } = require('../controllers/noteController');
const { protect } = require('../middleware/auth');

// All note routes require authentication
router.use(protect);

router.route('/').post(createNote).get(getNotes);
router.route('/:id').delete(deleteNote);

module.exports = router;
