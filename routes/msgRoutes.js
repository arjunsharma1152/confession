const express = require('express');

const msgController = require('../controllers/msgController');

const router = express.Router();

router.route("/").get(msgController.getAllMsg).post(msgController.addMsg);

module.exports = router;