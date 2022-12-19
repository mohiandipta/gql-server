const express = require('express');
const app = express();
const { graphqlHTTP } = require('express-graphql');
const Schema2 = require('./models/Course.model')

// Root resolver
const root = {
    course: Schema2.getCourse,
    courses: Schema2.getCourses
};

// Create an express server and a GraphQL endpoint
app.use('/graphql', graphqlHTTP({
    schema: Schema2.Schema2,
    rootValue: root,
    graphiql: true
}));


app.listen(3030, () => console.log('Express GraphQL Server Now Running On localhost:3030/graphql'));