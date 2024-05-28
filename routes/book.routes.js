const router = require("express").Router();
const bookController = require("../controllers/book.controller");

// ADD A BOOK
router.post("/", bookController.addABook);

// GET ALL BOOK
router.get("/", bookController.getAllBooks);

// GET A BOOK
router.get("/:id", bookController.getABook);

// UPDATE A BOOK
router.put("/:id", bookController.updateABook);

// DELETE A BOOK
router.delete("/:id", bookController.deleteABook);

module.exports = router;
