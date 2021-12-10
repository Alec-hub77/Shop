import React, { useEffect, useState } from 'react'
import { userRequest } from '../../requestMethods'
import './widgetLg.scss'
import { format } from 'timeago.js'

const WidgetLg = () => {

    const [orders, setOrders] = useState([])
    
    useEffect(() => {
        const getOrders = async () => {
            const res = await userRequest.get('orders')
            setOrders(res.data)
        }
        getOrders()
    }, [orders])


    const Button = ({type}) => {
        return (
            <button className={`${"widgetLgBtn"} ${type}`}>{type}</button>
        )
    }

    return (
        <div className="widgetLg">
            <span className="widgetLgTitle">Latest Transactions</span>
            <table className="widgetLgTable">
                <tr>
                    <th>Costumer</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                </tr>
                {orders.map(order => (
                    <tr>
                    <td className="tdUser">
                        <span className="userName">{order.userId}</span>
                    </td>
                    <td className="date">
                        {format(order.createdAt)}
                    </td>
                    <td className="amount">
                        $ {order.amount}
                    </td>
                    <td className="status">
                        <Button type={order.status}/>
                    </td>
                </tr>
                ))}
                
                
            </table>
        </div>
    )
}

export default WidgetLg
