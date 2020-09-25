const mongoose = require('mongoose');
const artSchema = require('../schemas/art');
const artistSchema = require('../schemas/artist');
const auctionSchema = require('../schemas/auction');
const auctionBidSchema = require('../schemas/auctionBid');
const customerSchema = require('../schemas/customer');

 const uri = "mongodb+srv://username:<password>@cluster0.oqmgh.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority";


 const connection = mongoose.createConnection('mongodb+srv://<new_user1>:<newuserpassword>@cluster0.oqmgh.gcp.mongodb.net/<MansionDeSubestas>?retryWrites=true&w=majority', { useNewUrlParser: true });

const Art = connection.model('Art', artSchema)
const Artist = connection.model('Artist', artistSchema)
const Auction = connection.model('Auction', auctionSchema)
const AuctionBid = connection.model('AuctionBid', auctionBidSchema)
const Customer = connection.model('Customer', customerSchema)

module.exports = {
  Art,
  Artist,
  Auction,
  AuctionBid,
  Customer
};
