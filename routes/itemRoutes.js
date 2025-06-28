const express = require('express');
const router = express.Router();
const {
  getItems,
  getItemById,
  addItem,
  updateItem,
  deleteItem
} = require('../controllers/itemController');

router.get('/', getItems);
router.get('/:id', getItemById); // ✅ Make sure this is added
router.post('/', addItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);

module.exports = router;




