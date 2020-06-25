import { ApolloServer } from "apollo-server-micro";

import { resolvers } from "./resolvers";
import typeDefs from "./typeDefs.graphql";
import { Args } from "./types";

const URL = "http://localhost:3000";

const getter = () => ({
  getTest: () => fetch(`${URL}/api/test`),
  getNews: ({ topic }: Args) =>
    fetch(`${URL}/api/news`, {
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
