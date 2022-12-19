const {buildSchema} = require('graphql')

// GraphQL schema
const schema = buildSchema(`
    type Query {
        message: String
    }
`);

module.exports = {schema} 