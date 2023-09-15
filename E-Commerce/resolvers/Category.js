exports.Category = {
    products: ({ id: categoryId }, { filter }, { products }) => {
        const categoryProduct = products.filter((product) => product.categoryId == categoryId)
        let filteredCategoryProduct = categoryProduct

        if (filter) {
            if (filter.onSale === true) {
                filteredCategoryProduct = filteredCategoryProduct.filter((products) => products.onSale)
            }
            else {
                filteredCategoryProduct = filteredCategoryProduct.filter((products) => !products.onSale)
            }

        }
        return filteredCategoryProduct
    }
}