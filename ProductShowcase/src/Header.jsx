import React from 'react'
const Header = ({cartCount }) => {
    
console.log(cartCount);

  return (
               
   <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#a8aeb3ff'}}>
        <div className="container">
          <a className="navbar-brand" href="#">Online Sell</a>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="#introduction" className="nav-link">Grocery</a>
              </li>
              <li className="nav-item">
                <a href="#skills" className="nav-link">Electronics</a>
              </li>
              <li className="nav-item">
                <a href="#projects" className="nav-link">About</a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">Contact</a>
              </li>
            </ul>
          </div>
          
          <div className="navbar-nav ms-auto">
            <a href="#cart" className="nav-link position-relative">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg>
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartCount}
                  <span className="visually-hidden">items in cart</span>
                </span>
              )}
            </a>
          </div>
        </div>
      </nav>
    </div>

   
  )
}

export default Header