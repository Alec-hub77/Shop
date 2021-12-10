import React from 'react'
import './home.scss'
import {FeaturedInfo, Chart, WidgetSm, WidgetLg} from '../../components'
import {userData} from '../../dummyData';

const Home = () => {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart title="User Analytics" data={userData} dataKey="Active User"  grid />
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )
}

export default Home
