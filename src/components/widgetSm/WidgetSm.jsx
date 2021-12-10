import { Visibility } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { userRequest } from '../../requestMethods'
import './widgetSm.scss'

const WidgetSm = () => {

    const [users, setUsers] = useState([])
    
    useEffect(() => {
        const getUsers = async () => {
            const res = await userRequest.get('users/?new=true')
            setUsers(res.data)
        }
        getUsers()
    }, [users])
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                {users.map(user => (
                    <li className="widgetSmItem" key={user._id}>
                    <img src={user.img || 'https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-avatar-vector-isolated-on-white-background-png-image_1694546.jpg'} alt="" />
                    <div className="widgetSmUser">
                        <span className="userName">{user.username}</span>
                    </div>
                    <button className="widgetSmBtn"><Visibility/>Display</button>
                </li>
                ))}
                
            </ul>
        </div>
    )
}

export default WidgetSm
