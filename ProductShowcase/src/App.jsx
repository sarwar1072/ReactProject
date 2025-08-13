import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import ProductList from './ProductList'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import "bootswatch/dist/lux/bootstrap.min.css";

function App() {

   const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        // If item already exists, increase quantity
        return prevCart.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If new item, add with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Calculate total items in cart
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-vh-100" style={{backgroundColor: '#f8f9fa'}}>
      <Header cartCount={cartCount} />
      <ProductList onAddToCart={addToCart} />
      
      {/* Optional: Display cart items for debugging */}
      {/* {cart.length > 0 && (
        <div className="container mt-4">
          <div className="card">
            <div className="card-header">
              <h5>Cart Items ({cartCount})</h5>
            </div>
            <div className="card-body">
              {cart.map(item => (
                <div key={item.id} className="d-flex justify-content-between align-items-center mb-2">
                  <span>{item.name}</span>
                  <span>Quantity: {item.quantity}</span>
                  <span>₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )} */}
    </div>
  )
}

export default App
