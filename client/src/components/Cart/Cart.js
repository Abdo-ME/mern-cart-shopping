import React from 'react'
import "../../css/Cart/Cart.css"
function Cart(props) {
    const sum = props.cartItems.reduce((acc, p) => acc + p.price* p.qty,0) 
    return (
        <div className="cart-wrapper">
            <div className="cart-title"> {props.cartItems.length === 0 ? 'Cart Empty' : <p>
                There is {props.cartItems.length} products in cart
                </p>} </div>
            <div className="cart-items">
                {props.cartItems.map(item => (
                    <div className="cart-item" key={item.id}>
                        <img src={item.imageUrl} alt=""/>
                        <div className="cart-info">
                            <div>
                                <p> title {item.title} </p>
                                <p> qty: {item.qty}  </p>
                                <p> price: ${item.price} </p>
                            </div>
                            <button onClick={() => props.removeFromCart(item)}>
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-sum">
                <div className="total"> Total : ${props.cartItems.length>0?sum:0}</div>
                <button>Select Products</button>
            </div>
        </div>


    )
}

export default Cart