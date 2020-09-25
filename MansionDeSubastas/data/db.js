const mongoose = require('mongoose');
const artSchema = require('../schemas/art');
const artistSchema = require('../schemas/artist');
const auctionSchema = require('../schemas/auction');
const auctionBidSchema = require('../schemas/auctionBid');
const customerSchema = require('../schemas/customer');

const uri = "mongodb+srv://eva:eva@cluster0.oqmgh.gcp.mongodb.net/MansionDeSubastas";

const connection = mongoose.createConnection(uri, { useNewUrlParser: true, useUnifiedTopology: true });

 //const Art = connection.model('Art', artSchema);
 const Art = connection.model('Art', artSchema, 'Art');
 const Artist = connection.model('Artist', artistSchema, 'Artists');
 const AuctionBid = connection.model('AuctionBid', auctionBidSchema, 'AuctionBids');
 const Customer = connection.model('Customer', customerSchema, 'Customers');
 const Auction = connection.model('Auction', auctionSchema, 'Auctions')

 module.exports = {
   connection,
   Art,
   Artist,
   AuctionBid,
   Customer,
   Auction
 };
