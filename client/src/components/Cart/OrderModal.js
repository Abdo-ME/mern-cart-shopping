// import React, { useEffect } from 'react';
import Modal from "react-modal"
import { connect } from 'react-redux';
// import { clearCart } from '../../store/actions/cart';



const OrderModal = ( {isOpen,order,productsCart,setIsOpen,setpordsnt}) => {

    return (
        <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} ariaHideApp={false} >
        <span className='icon-times' onClick={()=>setIsOpen(false)}>&times; </span>
            
            <div className="order-info">
                <p className="alert-success"> Order Done  Success</p>
                <table>
                    <tr>
                        <td>Name:</td>
                        <td>{ order&&order.name}</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>{ order&&order.email}</td>
                    </tr>
                    <tr>
                        <td>Total:</td>
                        <td>${ order&&productsCart.reduce((a,p)=>p.price+a,0)}</td>
                    </tr>
                    <tr>
                        <td>Selected Products:</td>
                        <td>{productsCart.map((p) => {
                                return(<>
                                <p>Product Name: {p.title} </p>
                                <p>Quentity:{p.qty} </p>
                            </>)
                        })}</td>
                    </tr>
                </table>
            </div>
          
        </Modal> 
)
}


export default connect((state) => {
    return {
        productsCart: state.cart.cartItems,
        order: state.order.order
    }
},{})(OrderModal)