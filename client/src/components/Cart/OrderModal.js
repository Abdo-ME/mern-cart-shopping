import React from 'react';
import Modal from "react-modal"


const OrderModal = ( {isOpen,order,productsCart,setIsOpen}) => {
  return (
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

export default OrderModal