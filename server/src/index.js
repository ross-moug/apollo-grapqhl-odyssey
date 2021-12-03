const {ApolloServer} = require("apollo-server");
const resolvers = require("./resolvers");
const typeDefs = require("./schema");
const TrackApiDatasource = require("./datasources/track-api");

const server = new ApolloServer({
    typeDefs, resolvers, dataSources: () => {
        return {
            trackApi: new TrackApiDatasource()
        }
    }
});

server.listen().then(() => console.log(`
    🚀 Server is running!
    🔉 Listening at http://localhost:4000
    📭 Query at https://studio.apollographql.com/dev
`))
