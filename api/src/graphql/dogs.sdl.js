export const schema = gql`
  type Dog {
    id: Int!
    name: String!
    color: String!
    createdAt: DateTime!
  }

  type Query {
    dogs: [Dog!]!
    dog(id: Int!): Dog!
  }

  input CreateDogInput {
    name: String!
    color: String!
  }

  input UpdateDogInput {
    name: String
    color: String
  }

  type Mutation {
    createDog(input: CreateDogInput!): Dog!
    updateDog(id: Int!, input: UpdateDogInput!): Dog!
    deleteDog(id: Int!): Dog!
  }
`
