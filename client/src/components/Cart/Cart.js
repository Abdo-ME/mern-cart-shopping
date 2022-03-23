import "../../css/Cart/cart.css"
import React, { useState } from 'react';
import Modal from "react-modal"
import Checkout from "../CheckoutForm/Checkout"
import { connect } from "react-redux";
import { removeProductCart } from "../../store/actions/cart";



function Cart({ productsCart, handleRemoveProduct,removeProductCart }) {
    const [showForm, setShowForm] = useState(false);
    const [value, setValue] = useState("");
    const [order, setOrder] = useState("");
    const [isOpen,setIsOpen]=useState(false)
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
        setOrder(order);

    }
return (
    <div className="cart-wrapper">
        <div className="cart-title">
            <p>{productsCart.length? `you have ${productsCart.length} product${productsCart.length ===1?"":"s"} `: "Your Cart is Empty" } </p>
        </div>
            {/* Model */}
        <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} ariaHideApp={false} >
        <span className='icon-times' onClick={()=>setIsOpen(false)}>&times; </span>
            
            <div className="order-info">
                <p className="alert-success"> Order Done  Success</p>
                <table>
                    <tr>
                        <td>Name:</td>
                        <td>{ order.name}</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>${ order.email}</td>
                    </tr>
                    <tr>
                        <td>Total:</td>
                        <td>{ productsCart.reduce((a,p)=>p.price+a,0)}</td>
                    </tr>
                    <tr>
                        <td>Selected Products:</td>
                        <td>{productsCart.map((p) => {
                                return 
                                (<>
                                <p>Product Name: {p.title} </p>
                                <p>Quentity:{p.qty} </p>
                            </>)
                        })}</td>
                    </tr>
                </table>
            </div>
        </Modal>

        {productsCart.map(product => (
            <div key={product.id} className="cart-info">
            <img src={product.imageUrl} alt={product.title} />

            <div className="cart-desc">
                <span>{ product.title}</span>    
            <span>quntity : {product.qty} </span>    
            <span>price : {product.price}$ </span>    
            </div>
            <button onClick={()=>removeProductCart(product._id,productsCart)}>Remove</button>

        </div>
        ))}
        {productsCart.length > 0 && (
            <div className="cart-footer">
            <div className="total">Total : ${productsCart.reduce( (acc, p) => {
                return acc + p.price*p.qty
            }  , 0)} </div>
                <button onClick={() => setShowForm(true)}> select products </button>
        </div>
        )}
        {/* {checkout form} */}
    <Checkout setOrder={setOrder} setIsOpen= {setIsOpen} showForm={showForm} setShowForm={setShowForm} handlecheckout={handlecheckout} handleChange={handleChange} />
</div>
)
}

export default connect((state) => {
    
    return {

        productsCart: state.cart.cartItems

    }
},{removeProductCart})(Cart)