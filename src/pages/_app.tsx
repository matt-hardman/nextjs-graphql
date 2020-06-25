import "@/styles/index.scss";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import React from "react";

const client = new ApolloClient({
  uri: "api/graphql",
});

const Acid = ({ Component, pageProps }: any) => (
  <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
);

export default Acid;
