const artists = require('../data/collection').artists;

const artistService = () => {
    const getAllArtists = () => {
        return artists;
    };


    const getArtistById = () => {

    };

    const createArtist = () => {

    };

    return {
        getAllArtists,
        getArtistById,
        createArtist
    };

};

module.exports = artistService();