const apiPath = '/api/';
const version = "v1"

const express = require('express');
var mongoose = require('mongoose');
const sha256 = require('js-sha256');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
var port = process.env.PORT || 3000;


// Parse requests of content-type 'application/json'
app.use(bodyParser.json());

//Tell express to use cors -- enables CORS for this backend
app.use(cors());

app.listen(port, () => {
    console.log('App listening on port ' + port);
});



// The old way of doing things:
var arts = [
    { id: 0, description: "Process driving license application", date: '2020-05-20T10:11:00.000Z' , assigned_personnel: 0},
    { id: 1, description: "Speeding fine", date: '2020-04-20T10:11:00.000Z', assigned_personnel: 0},
    { id: 2, description: "a case of a good time", date: '2020-03-20T10:11:00.000Z', assigned_personnel: 3}
];

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
// /api/artists [GET]
// /api/artists/:artistId [GET]
// /api/customers [GET]
// /api/customers/:id [GET]
// /api/customers [POST]
// /api/customers/:id/auction-bids [GET]
// /api/auctions [GET]
// /api/auctions/:id [GET]
// /api/auctions/:id/winner [GET]
// /api/auctions [POST]
// /api/auctions/:id/bids [GET]
// /api/auctions/:id/bids [POST]
