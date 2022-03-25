import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addOrder } from "../../store/actions/order";
import "../../css/CheckoutForm/checkout.css"
import Input from '../Input/Input'
import { handleChange, handlecheckout } from './checkoutFunction';

function Checkout({setShowForm,setIsOpen,addOrder}) {
    const [value, setValue] = useState("");
  
    return (
    <>
        {(
            <div className="checkout-form" >
                <span className="close-icon" onClick={()=>setShowForm(false) }>&times;</span>
                <form onSubmit={ handlecheckout(value,addOrder,setIsOpen)}>
                    <Input name={"name"} label ={"Name"} type={"text"} handleChange ={handleChange(setValue)} />
                    <Input name={"email"} label ={"Email"} type={"email"} handleChange ={handleChange(setValue)} />
                    <div>
                    <button type="submit">checkout</button>
                    </div>
                </form>
            </div> 
        )}
    </>
)}

export default connect((state) => {
    return {
    
    }
},{addOrder})(Checkout)