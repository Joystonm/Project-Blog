const mongoose = require("mongoose");

const UserStyleSchema = new mongoose.Schema({
  username: { type: String, required: true },
  extractedText: { type: String },
  generatedArticle: { type: String },
  createdAt: { type: Date, default: Date.now }
});

const UserStyleModel = mongoose.model("UserStyle", UserStyleSchema);
module.exports = UserStyleModel;
