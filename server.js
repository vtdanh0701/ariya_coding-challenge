const express = require('express');
const graphqlHttp = require('express-graphql');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json());

// schema and resolver for graphQL
const graphqlSchema = require('./graphql/schema/index');
const graphqlResolvers = require('./graphql/resolvers/index');

app.use('/graphql', graphqlHttp({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true
}))



app.listen(3001, ()=>{
    console.log("Up and running at 3001");
})