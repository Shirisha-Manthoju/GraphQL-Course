const { ApolloServer, gql } = require("apollo-server");

// Scalar Types : String , Int , Boolean , Float 
// Array Types 

const typeDefs = gql`
    type Query {
        FirstName:String
        # we cannot return age value as null
        age:Int!
        isStudent:Boolean
        percentage:Float
        msg: String
        # It says that inside the array we cannot have the "null" (array values cannot be null)
        arrayOfSubjects:[String!]   
        # This specifies we cannot return the array itself as null
        subjects:[String!]!
        listOfNumbers:[Int]
    }
`
const resolvers = {
    Query: {
        FirstName: () => {
            return "John"
        },
        age: () => {
            return 34
        },
        msg: () => {
            return "Hey! Welcome to GraphQL learnings"
        },
        percentage: () => {
            return 96.43
        },
        isStudent: () => {
            return true
        },
        arrayOfSubjects: () => {
            return ["Mathematics", "Science", "Social Studies", 34]
        },
        subjects: () => {
            return ["some", "values"]
        },
        listOfNumbers: () => {
            return [10, 30, 40, 50, 80]
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({ url }) => {
    console.log("Server is ready at " + url);
})
