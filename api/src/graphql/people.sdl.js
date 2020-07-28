export const schema = gql`
  type Person {
    id: Int!
    first: String!
    last: String!
    createdAt: DateTime!
  }

  type Query {
    people: [Person!]!
    person(id: Int!): Person!
  }

  input CreatePersonInput {
    first: String!
    last: String!
  }

  input UpdatePersonInput {
    first: String
    last: String
  }

  type Mutation {
    createPerson(input: CreatePersonInput!): Person!
    updatePerson(id: Int!, input: UpdatePersonInput!): Person!
    deletePerson(id: Int!): Person!
  }
`
