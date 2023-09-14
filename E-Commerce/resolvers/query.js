exports.Query = {
    message: (parent, args, context) => "Hey! Welcome to GraphQL learnings",
    products: (parent, args, { products }) => products,
    product: (parent, { id: productId }, { products }) => {
        const product = products.find(item => item.id === productId)
        if (!product) return null
        return product
    },
    categories: (parent, args, { categories }) => categories,
    category: (parent, { id: categoryId }, { categories }) => {
        const category = categories.find(item => item.id === categoryId)
        return category
    }
}