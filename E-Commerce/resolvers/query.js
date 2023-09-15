exports.Query = {
    message: (parent, args, context) => "Hey! Welcome to GraphQL learnings",
    products: (parent, { filter }, { products }) => {
        let filteredProducts = products;

        if (filter) {
            if (filter.onSale === true) {
                filteredProducts = filteredProducts.filter((products) => products.onSale)
            }
            else {
                filteredProducts = filteredProducts.filter((products) => !products.onSale)
            }
        }
        return filteredProducts
    },
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