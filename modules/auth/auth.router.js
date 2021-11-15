// api/auth
const router = require('express').Router();
const authController = require('./auth.controller');

//Register
router.post('/signup', authController.signUp);
router.post('/login', authController.login);
module.exports = router;