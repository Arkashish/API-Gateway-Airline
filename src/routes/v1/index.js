const express = require('express');
const {AuthRequestMiddlewares} = require('../../middlewares')
const { InfoController } = require('../../controllers');
const userRouter = require('./user-routes');
const router = express.Router();

router.get('/info',AuthRequestMiddlewares.checkAuth, InfoController.info);

router.use('/user',userRouter);
module.exports = router;