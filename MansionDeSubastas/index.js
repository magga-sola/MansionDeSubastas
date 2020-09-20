const apiPath = '/api/';
const version = "v1"


const express = require('express');
var mongoose = require('mongoose');
const sha256 = require('js-sha256');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var arts = services.artService.arts;


// Parse requests of content-type 'application/json'
app.use(bodyParser.json());

//Tell express to use cors -- enables CORS for this backend
app.use(cors());

app.listen(port, () => {
    console.log('App listening on port ' + port);
});



// The old way of doing things:


var personnel = [
    {id: 0, name: "default", password: "default"},
    {id: 1, name: "Jane Doe", password: "helloworld"},
    {id: 2, name: "Henry Juvert", password: "thisisapassword"},
    {id: 3, name: "Sarah Smith", password: "password123"}
]






/////////////////////////
/////   ENDPOINTS   /////
/////////////////////////


// /api/arts [GET]
app.get(apiPath + version + '/arts', (req, res) => {
    let artArray = [];
    
    for (let i = 0; i < arts.length; i++) {
        artsArray.push({ id: arts[i].id, description: arts[i].description, date: arts[i].date, assigned_personnel: arts[i].assigned_personnel});
    }
    res.status(200).json(artArray);
});

// /api/arts/:artsid [GET]
app.get(apiPath + '/arts/:artsId', (req, res) => {
    let art_array = [];

    for (let i=0; i < arts.length; i++) {
        if (arts[i].id == req.params.artsId) {
            var ret_art = arts[i];
            res.status(200).json(ret_art);
            return;
        }
    }
    res.status(404).json({'message': "Art with id: " + req.params.artsId + " does not exist."});
});

// /api/arts [POST]
app.post(apiPath + '/arts', (req, res) => {
    res.status(200);
});

// /api/artists [GET]
app.get(apiPath + '/artists', (req, res) => {
    res.status(200);
});

// /api/artists/:artistId [GET]
app.get(apiPath + '/artists/:artistId', (req, res) => {
    res.status(200);
});

// /api/customers [GET]
app.get(apiPath + '/customers', (req, res) => {
    res.status(200);
});

// /api/customers/:id [GET]
app.get(apiPath + '/customers/:customerId', (req, res) => {
    res.status(200);
});

// /api/customers [POST]
app.post(apiPath + '/customers', (req, res) => {
    res.status(200);
});

// /api/customers/:id/auction-bids [GET]
app.get(apiPath + '/customers/:customerId/auction-bids', (req, res) => {
    res.status(200);
});

// /api/auctions [GET]
app.get(apiPath + '/auctions', (req, res) => {
    res.status(200);
});

// /api/auctions/:id [GET]
app.get(apiPath + '/auctions/:auctionId', (req, res) => {
    res.status(200);
});


// /api/auctions/:id/winner [GET]
app.get(apiPath + '/auctions/:auctionId/winner', (req, res) => {
    res.status(200);
});


// /api/auctions [POST]
app.post(apiPath + '/auctions', (req, res) => {
    res.status(200);
});

// /api/auctions/:id/bids [GET]
app.get(apiPath + '/auctions/:auctionId/bids', (req, res) => {
    res.status(200);
});



// /api/auctions/:id/bids [POST]
app.post(apiPath + '/auctions/:auctionId/bids', (req, res) => {
    res.status(200);
});

