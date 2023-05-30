const { Router } = require ("express");
const router = Router();
const userCtrl = require ("../controller/user.controller");

router.get("/",userCtrl.getStart);
router.post("/",userCtrl.getStart);
router.put("/",userCtrl.getStart);
router.delete("/",userCtrl.getStart);

router.get("/bye",userCtrl.getBye);
router.post("/bye",userCtrl.getBye);
router.put("/bye",userCtrl.getBye);
router.delete("/bye",userCtrl.getBye);

module.exports = router;
