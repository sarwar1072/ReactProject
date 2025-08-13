import React from 'react'
import Product from './Product'

const ProductList = ({onAddToCart }) => {
    const productList = [
    {
        id: 1,
        name: "Headphone",
        price: 1800,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
        rating: 4.5,
        category: "Electronics",
    },
    {
            id: 2,
            name: "Coffee",
            price: 540,
            image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop",
            rating: 4.3,
            category: "Food Items",
    },
    {
            id: 3,
            name: "Watch",
            price: 180000,
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
            rating: 4.7,
            category: "Electronics",
    },
    {
            id: 4,
            name: "Laptop Stand",
            price: 470,
            image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
            rating: 4.7,
            category: "Electronics",
    },
    {
            id: 5,
            name: "Water Bottle",
            price: 600,
            image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
            rating: 4.7,
            category: "Lifestyle",
    },
  ];

  return (
            
      <div className="container-fluid px-4 py-4">
            <div className="row g-4">
                {productList.map(product => (
                <Product
                    key={product.id}
                    products={product}
                    onAddToCart={onAddToCart}
                />
                ))}
            </div>
     </div>

   
  )
}

export default ProductList