const { Book, Author } = require("../models/schema.model");

const authorController = {
  // ADD AUTHOR
  addAuthor: async (req, res) => {
    res.status(200).json(req.body);
  },
};

module.exports = authorController;
