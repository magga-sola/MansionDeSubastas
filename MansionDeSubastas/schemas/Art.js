const Schema = require('mongoose').Schema;

module.exports = new Schema({
  title: { type: String, required: true },
  artistId: {type: Schema.Types.ObjectId, required: true},

  date: { type: Date, required: true, default:Date.now },
  images: [String],
  description: String,
  isAuctionItem: {type: Boolean}
});