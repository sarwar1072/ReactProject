import React from 'react'
import './Product.css'

const Product = ({products, onAddToCart }) => {
     const{id,name,price,image,rating,category}=products;
  
  return (
    
   <div className="col-md-4 col-lg-3">
      <div className="card h-100" style={{width: '18rem'}}>
        <img src={image} className="card-img-top" alt={name} style={{height: '200px', objectFit: 'cover'}} />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{name}</h5>
                <div className="mb-2">
                    <span className="badge bg-secondary">{category}</span>
                </div>
                <div className="mb-2">
                    <strong className="text-success">₹{price}</strong>
                </div>
                <div className="mb-3">
                    <small className="text-muted">Rating: {rating}⭐</small>
                </div>
                <button 
                    className="btn btn-primary mt-auto" 
                    onClick={() => onAddToCart(products)}
                >
                    Add to Cart
                </button>
            </div>
      </div>
    </div>
  )
}

export default Product