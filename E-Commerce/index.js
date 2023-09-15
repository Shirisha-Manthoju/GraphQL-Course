const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { Category } = require("./resolvers/Category");
const { Query } = require("./resolvers/query")
const { Product } = require("./resolvers/Product")
const { Mutation } = require("./resolvers/Mutation")
const { db } = require("./db");


// 1. filtering the products based on the category (one category has many products => one to many relation )

// 2. filtering the categories based on products (each product belongs to one category)

// 3. filtering the products and categories based on the onSale

// 4. mutations (adding, deleting and updating)

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Category,
        Product,
        Mutation
    },
    context: {
        db
    }
});

server.listen().then(({ url }) => {
    console.log("Server is ready at " + url);
})
