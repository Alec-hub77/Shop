import { NotificationsNone, Language, Settings } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './topbar.scss'

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
           
                        <span className="logo"><Link to="/">ADMIN</Link></span>
              
                </div>
                <div className="topRight">
                    <div className="icon">
                        <NotificationsNone/>
                        <span className="badge">1</span>
                    </div>
                    <div className="icon">
                        <Language/>
                        <span className="badge">1</span>
                    </div>
                    <div className="icon">
                        <Settings/>
                    </div>
                    <img src="https://www.signivis.com/img/custom/avatars/member-avatar-01.png" alt="avatar" className="avatar" />
                </div>
            </div>
        </div>
    )
}

export default Topbar
