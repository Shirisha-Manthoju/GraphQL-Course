exports.Query = {
    message: (parent, args, context) => "Hey! Welcome to GraphQL learnings",
    products: (parent, { filter }, { db }) => {
        let filteredProducts = db.products;
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
    product: (parent, { id: productId }, { db }) => {
        const product = db.products.find(item => item.id === productId)
        if (!product) return null
        return product
    },
    categories: (parent, args, { db }) => db.categories,
    category: (parent, { id: categoryId }, { db }) => {
        const category = db.categories.find(item => item.id === categoryId)
        return category
    }
}