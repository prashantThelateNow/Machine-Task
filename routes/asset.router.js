const express = require('express');
const router = express.Router();
const getAssetCallback = require('../controllers/assetController');
const { addAssetValidation } = require('../validation/assets/asset.validation');


router.post('/get_asset', addAssetValidation, getAssetCallback);


module.exports = router