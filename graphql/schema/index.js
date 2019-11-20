const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type User{
    name: String
    email: String!
    password: String!
}

type RootQuery{
    getUser: User!
    login(email: String!, password: String!): User!
}

schema {
    query: RootQuery 
}
`)