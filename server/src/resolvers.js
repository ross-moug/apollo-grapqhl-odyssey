const resolvers = {
    Query: {
        // Returns an array of tracks
        tracksForHome: (_, __, { dataSources }) => dataSources.trackApi.getTracksForHome()
    },
    Track: {
        author: ({ authorId }, _, { dataSources }) => dataSources.trackApi.getAuthor(authorId)
    }
};

module.exports = resolvers;
