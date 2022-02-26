import "../../css/Cart/cart.css"
import React, { useState } from 'react'
import Checkout from "../CheckoutForm/Checkout"

function Cart({ cart, handleRemoveProduct }) {
    const [showForm, setShowForm] = useState(false);
    const [value, setValue] = useState("");
    const handleChange = (e) => {
        setValue((prevValue) => (
            { ...prevValue, [e.target.name]: e.target.value })
        )
    }
    const handlecheckout = (e) => {
        e.preventDefault();
        const order = {
            name: value.name,
            email: value.email
        }
        
        console.log(order);

    }
  return (
      <div className="cart-wrapper">
          <div className="cart-title">
              <p>{cart.length? `you have ${cart.length} product${cart.length ===1?"":"s"} `: "Your Cart is Empty" } </p>
          </div>
          {cart.map(product => (
              <div key={product.id} className="cart-info">
              <img src={product.imageUrl} alt={product.title} />

              <div className="cart-desc">
                  <span>{ product.title}</span>    
              <span>quntity : {product.qty} </span>    
              <span>price : {product.price}$ </span>    
              </div>
              <button onClick={()=>handleRemoveProduct(product.id)}>Remove</button>

          </div>
          ))}
          {cart.length > 0 && (
               <div className="cart-footer">
               <div className="total">Total : ${cart.reduce( (acc, p) => {
                   return acc + p.price*p.qty
               }  , 0)} </div>
                  <button onClick={() => setShowForm(true)}> select products </button>
           </div>
          )}
          {/* {checkout form} */}
        <Checkout showForm={showForm} setShowForm={setShowForm} handlecheckout={handlecheckout} handleChange={handleChange} />
    </div>
  )
}

export default Cart