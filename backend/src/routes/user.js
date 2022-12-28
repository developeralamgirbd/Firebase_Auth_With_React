const {Router} = require('express');
const {login, test} = require('../controllers/userController');
const {authVerifyMiddleware} = require("../middleware/authVerifyMiddleware");


const router = Router();

router.post('/login', authVerifyMiddleware, login);
router.get('/test', authVerifyMiddleware, test)

module.exports = router;