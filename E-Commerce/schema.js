const { gql } = require("apollo-server");

exports.typeDefs = gql`
    type Query {
        message:String
        # Contains the array of objects with non-nullable values 
        products: [Product!]!
        # finding the product details by the variables (Id)
        product(id:ID!):Product
        categories: [Category!]!
        category(id:ID!):Category
    }
    type Product {
        id: ID!
        name: String!
        description: String!
        quantity: Int!
        price: Float!
        image: String!
        onSale: Boolean!
        category:Category

        reviews: [Review!]!
    }
    type Category {
        id: ID!
        name: String!
        products: [Product!]!
    }

    type Review {
        id: ID!
        date: String!
        title: String!
        comment: String!
        rating: Int!
    }
`