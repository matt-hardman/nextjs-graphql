import { ApolloServer } from "apollo-server-micro";

import { resolvers } from "./resolvers";
import typeDefs from "./typeDefs.graphql";
import { Args } from "./types";

const getter = () => ({
  getTest: () => fetch("http://localhost:3000/api/test"),
  getNews: ({ topic }: Args) =>
    fetch("http://localhost:3000/api/news", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: topic,
      }),
    }),
});

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({
    Get: getter(),
  }),
});

const handler = apolloServer.createHandler({ path: "/api/graphql" });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
