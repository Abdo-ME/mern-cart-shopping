import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addOrder } from "../../store/actions/order";

import "../../css/CheckoutForm/checkout.css"
import Input from '../Input/Input'

function Checkout({clearCart,setShowForm,setIsOpen,addOrder}) {
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
        addOrder(order)      
        setIsOpen(true);
     
        
    }

    
    return (
    <>
        {(
            <div className="checkout-form" >
                
            <span className="close-icon" onClick={()=>setShowForm(false) }>&times;</span>
            <form onSubmit={handlecheckout}>
                <Input name={"name"} label ={"Name"} type={"text"} handleChange ={handleChange} />
                <Input name={"email"} label ={"Email"} type={"email"} handleChange ={handleChange} />
                
                <div>
                <button type="submit">checkout</button>
                </div>
                </form>
                
                </div> 
)
}
    </>
)
}

export default connect((state) => {
    return {
    
    }
},{addOrder})(Checkout)