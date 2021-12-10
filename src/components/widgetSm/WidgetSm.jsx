import { Visibility } from '@material-ui/icons'
import React from 'react'
import './widgetSm.scss'

const WidgetSm = () => {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmItem">
                    <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                    <div className="widgetSmUser">
                        <span className="userName">Anna Keller</span>
                        <span className="jobTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmBtn"><Visibility/>Display</button>
                </li>
                <li className="widgetSmItem">
                    <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                    <div className="widgetSmUser">
                        <span className="userName">Anna Keller</span>
                        <span className="jobTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmBtn"><Visibility/>Display</button>
                </li>
                <li className="widgetSmItem">
                    <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                    <div className="widgetSmUser">
                        <span className="userName">Anna Keller</span>
                        <span className="jobTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmBtn"><Visibility/>Display</button>
                </li>
                <li className="widgetSmItem">
                    <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                    <div className="widgetSmUser">
                        <span className="userName">Anna Keller</span>
                        <span className="jobTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmBtn"><Visibility/>Display</button>
                </li>
                <li className="widgetSmItem">
                    <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                    <div className="widgetSmUser">
                        <span className="userName">Anna Keller</span>
                        <span className="jobTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmBtn"><Visibility/>Display</button>
                </li>
            </ul>
        </div>
    )
}

export default WidgetSm
