const router = require("express").Router();
const authorController = require("../controllers/author.controller");

// ADD AUTHOR
router.post("/", authorController.addAuthor);

module.exports = router;
