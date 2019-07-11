const express = require('express');
const router = express.Router();
router.get('/',(req,res)=>res.json({msg:'ho this is new thing as initiated by roshan'}));
module.exports = router;