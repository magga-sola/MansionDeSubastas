const arts = require('../data/db').Art;

const artService = () => {
    const getAllArt = () => {
        return arts;
    };

    const getArtById = () => {

    };

    const createArt = () => {

    };

    return {
        getAllArt,
        getArtById,
        createArt
    };

};

module.exports = artService();
