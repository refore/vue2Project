const express=require("express");
const router = express.Router()
const userPosition_handler = require('../router_handler/userPosition.js')


router.post("/addUserPosition",userPosition_handler.addUserPosition)
router.post("/getUserPositionList",userPosition_handler.getUserPositionList)



module.exports = router;