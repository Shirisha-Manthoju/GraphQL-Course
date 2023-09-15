exports.Product = {
    category: ({ categoryId }, args, { categories }) => {
        return categories.find((item) => item.id === categoryId)
    },
    reviews: ({ id }, args, { reviews }) => {
        return reviews.filter((item) => item.productId === id)
    }
}