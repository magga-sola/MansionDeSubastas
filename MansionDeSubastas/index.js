const apiPath = '/api';
const version = "v1"

const express = require('express');
var mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
const artService = require('./services/artService');
const artistService = require('./services/artistService');
const customerService = require('./services/customerService');
console.log(artistService);
console.log(customerService);
console.log(artService);


const app = express();


// Parse requests of content-type 'application/json'
app.use(bodyParser.json());

//Tell express to use cors -- enables CORS for this backend
app.use(cors());

app.listen(port, () => {
    console.log('App listening on port ' + port);
});


/////////////////////////
/////   ENDPOINTS   /////
/////////////////////////


// /api/arts [GET]
app.get(apiPath + '/art', async function(req, res) {
  const art = await artService.getAllArt();
  return res.json(art);
});

// /api/art/:artsid [GET]
app.get(apiPath + '/art/:artsId', (req, res) => {
    return res.status(200);
});

// /api/art [POST]
app.post(apiPath + '/art', (req, res) => {
    return res.status(200);
});

// /api/artists [GET]
app.get(apiPath + '/artists', (req, res) => {
    //return res.status(200);
    return res.json(artistService.getAllArtists())
});

// /api/artists/:artistId [GET]
app.get(apiPath + '/artists/:artistId', (req, res) => {
    return res.status(200);
});

// /api/customers [GET]
app.get(apiPath + '/customers', (req, res) => {
    return res.status(200);
});

// /api/customers/:id [GET]
app.get(apiPath + '/customers/:customerId', (req, res) => {
    return res.status(200);
});

// /api/customers [POST]
app.post(apiPath + '/customers', (req, res) => {
    return res.status(200);
});

// /api/customers/:id/auction-bids [GET]
app.get(apiPath + '/customers/:customerId/auction-bids', (req, res) => {
    return res.status(200);
});

// /api/auctions [GET]
app.get(apiPath + '/auctions', (req, res) => {
    return res.status(200);
});

// /api/auctions/:id [GET]
app.get(apiPath + '/auctions/:auctionId', (req, res) => {
    return res.status(200);
});


// /api/auctions/:id/winner [GET]
app.get(apiPath + '/auctions/:auctionId/winner', (req, res) => {
    return res.status(200);
});


// /api/auctions [POST]
app.post(apiPath + '/auctions', (req, res) => {
    return res.status(200);
});

// /api/auctions/:id/bids [GET]
app.get(apiPath + '/auctions/:auctionId/bids', (req, res) => {
    return res.status(200);
});


// /api/auctions/:id/bids [POST]
app.post(apiPath + '/auctions/:auctionId/bids', (req, res) => {
    return res.status(200);
});
