const {RESTDataSource} = require('apollo-datasource-rest');

class TrackApiDataSource extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";
    }

    getTracksForHome() {
        return this.get("tracks");
    }

    getTrack(trackId) {
        return this.get(`track/${trackId}`);
    }

    getAuthor(authorId) {
        return this.get(`author/${authorId}`);
    }

    getModules(trackId) {
        return this.get(`track/${trackId}/modules`);
    }
}

module.exports = TrackApiDataSource;
