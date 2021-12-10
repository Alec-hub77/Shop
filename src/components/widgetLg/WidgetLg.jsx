import React from 'react'
import './widgetLg.scss'

const WidgetLg = () => {

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
                <tr>
                    <td className="tdUser">
                        <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                        <span className="userName">Suzan Carol</span>
                    </td>
                    <td className="date">
                        2 Jun 2021
                    </td>
                    <td className="amount">
                        $122.00
                    </td>
                    <td className="status">
                        <Button type="Approved"/>
                    </td>
                </tr>
                <tr>
                    <td className="tdUser">
                        <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                        <span className="userName">Suzan Carol</span>
                    </td>
                    <td className="date">
                        2 Jun 2021
                    </td>
                    <td className="amount">
                        $122.00
                    </td>
                    <td className="status">
                        <Button type="Declined"/>
                    </td>
                </tr>
                <tr>
                    <td className="tdUser">
                        <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                        <span className="userName">Suzan Carol</span>
                    </td>
                    <td className="date">
                        2 Jun 2021
                    </td>
                    <td className="amount">
                        $122.00
                    </td>
                    <td className="status">
                        <Button type="Pending"/>
                    </td>
                </tr>
                <tr>
                    <td className="tdUser">
                        <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                        <span className="userName">Suzan Carol</span>
                    </td>
                    <td className="date">
                        2 Jun 2021
                    </td>
                    <td className="amount">
                        $122.00
                    </td>
                    <td className="status">
                        <Button type="Approved"/>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default WidgetLg
