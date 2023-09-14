const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { Category } = require("./resolvers/Category");
const { Query } = require("./resolvers/query")
const { Product } = require("./resolvers/Product")
const { products, categories, reviews } = require("./db");


// filtering the products based on the category (one category has many products => one to many relation )

// filtering the categories based on products (each product belongs to one category)

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Category,
        Product
    },
    context: {
        products,
        categories,
        reviews
    }
});

server.listen().then(({ url }) => {
    console.log("Server is ready at " + url);
})
