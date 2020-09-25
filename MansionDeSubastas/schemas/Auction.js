const Schema = require('mongoose').Schema;

module.exports = new Schema({
  artId: {type: Schema.Types.ObjectId, required: true},
  customerId: {type: Schema.Types.ObjectId, required: true},
  minimumPrice: {type: Number},
  endDate: { type: Date, required: true},
  auctionWinner: {type: Schema.Types.ObjectId}
});
