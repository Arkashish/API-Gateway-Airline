const express = require('express');
const { UserController } = require('../../controllers');
const { AuthRequestMiddlewares } = require('../../middlewares');
const router = express.Router();

// router.post('/signup',AuthRequestMiddlewares.validateAuthRequest, UserController.signup);

router.post('/signup',UserController.signup);
router.post('/signin',UserController.signin);
// router.post('/signin',AuthRequestMiddlewares.validateAuthRequest, UserController.signin);
module.exports = router; 