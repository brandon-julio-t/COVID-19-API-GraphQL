const { ApolloServer } = require(`apollo-server-lambda`);

const COVID19API = require(`./covid19api.js`);
const typeDefs = require(`./schema`);
const resolvers = require(`./resolvers`);

const server = new ApolloServer({
  typeDefs,
  resolvers,

  introspection: true,
  playground: true,

  dataSources: () => ({
    covid19api: new COVID19API(),
  }),
});

exports.handler = server.createHandler({
  cors: {
    origin: "*",
  },
});
