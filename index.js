const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose"); //orm(object-relational database)

const { MONGODB } = require("./Config");
const resolvers = require("./graphql/resolvers");
const typeDefs = require("./graphql/typeDefs");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`server ruunning at ${res.url}`);
  });
