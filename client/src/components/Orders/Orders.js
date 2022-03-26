import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchOrder } from "../../store/actions/order";
import '../../css/Orders/orders.css'
    
    const Orders = ({ orders ,fetchOrder}) => {
    useEffect(()=>fetchOrder(),[])

return (
    <div className='orders' >
        {orders && true ? (
            orders.length === 0 ? <p>There is no Orders </p> : (
                      
                        <table>
                            <tr >
                                <th>Name </th>
                                <th>Email </th>
                                <th>Date </th>
                            </tr>
                            {orders.map((order) => {
                                return (
                                        <tr>
                                            <td>{order.name}</td>
                                            <td>{order.email}</td>
                                            <td>{order.createdAt.slice(0,10)}</td>
                                        </tr>
                                )
                            })}
                            </table>

                           
              )
          ) : <p>Loading</p>
          }

    </div>
  )
}

export default connect((state) => {
    return {
    orders: state.order.orders
    }
}, { fetchOrder })(Orders)
