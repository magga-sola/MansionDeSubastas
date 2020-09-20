const arts = require('../data/collection').arts;

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