//import express
const express = require('express');

//create a const for express.Router function
const router = express.Router();

//import postController
const postController = require('../controllers/postController');

//posts routes
//index
router.get('/', postController.index);

//show
router.get('/:id', postController.show);

//store
router.post('/', postController.store);

//update
router.put('/:id', postController.update);

//modify
router.patch('/:id', postController.modify);

//destroy
router.delete('/:id', postController.destroy);

//exports router
module.exports = router;