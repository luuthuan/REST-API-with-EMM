const router = require("express").Router();
const authorController = require("../controllers/author.controller");

// ADD AUTHOR
router.post("/", authorController.addAuthor);

// GET ALL AUTHORS
router.get("/", authorController.getAllAuthors);

module.exports = router;
