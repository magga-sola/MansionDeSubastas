const Schema = require('mongoose').Schema;

module.exports = new Schema({
  title: { type: String, required: true },
  artistId: {type: Schema.Types.ObjectId, required: true},
  date: { type: Date.now, required: true }, //Date.now()??
  images: {type: Array},
  description: String,
  isAuctionItem: {type: Boolean}
});