import React from 'react'

import "../../css/CheckoutForm/checkout.css"
import Input from '../Input/Input'

function Checkout({showForm,setShowForm,handlecheckout,handleChange}) {
return (
    <>
        {showForm && (
            <div className="checkout-form" >
                
            <span className="close-icon" onClick={()=>setShowForm(false) }>&times;</span>
            <form onSubmit={handlecheckout}>
                <Input name={"name"} label ={"Name"} type={"text"} handleChange ={handleChange} />
                <Input name={"email"} label ={"Email"} type={"email"} handleChange ={handleChange} />
                
                <div>
                    <button  type="submit">checkout</button>
                </div>
                </form>
                
                </div> 
)
}
    </>
)
}

export default Checkout