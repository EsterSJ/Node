const { Router } = require ("express");
const router = Router();
const bookCtrl = require ("../controller/books.controller");

router.get("/books", bookCtrl.getBooks);
router.post("/books", bookCtrl.postBooks);
router.put("/books", bookCtrl.putBooks);
router.delete("/books", bookCtrl.deleteBooks);

module.exports = router;
