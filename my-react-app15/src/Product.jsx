import './Product.css'

const Product = ({product,addTocart}) => {
    const {name,email,age}=product;
   
  return (
    <div className='singleuserdata'>
       <h5 >Name: {name}</h5>
       <h5>Email: {email}</h5>
      <h5>Age: {age}</h5>
     <button onClick={()=>addTocart(product)} className='cartBtn'>Cart</button>
    </div>
  )
}

export default Product