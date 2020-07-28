export const schema = gql`
  type Article {
    id: Int!
    title: String!
    body: String!
    createdAt: DateTime!
  }

  type Query {
    articles: [Article!]!
    article(id: Int!): Article!
  }

  input CreateArticleInput {
    title: String!
    body: String!
  }

  input UpdateArticleInput {
    title: String
    body: String
  }

  type Mutation {
    createArticle(input: CreateArticleInput!): Article!
    updateArticle(id: Int!, input: UpdateArticleInput!): Article!
    deleteArticle(id: Int!): Article!
  }
`
