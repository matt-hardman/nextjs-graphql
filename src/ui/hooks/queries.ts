import gql from "graphql-tag";

export const NEWS_QUERY = gql`
  query getNews($topic: String!) {
    news(topic: $topic) {
      author
      title
      description
    }
  }
`;
