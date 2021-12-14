import React, { useEffect, useMemo, useState } from 'react'
import './home.scss'
import {FeaturedInfo, Chart, WidgetSm, WidgetLg} from '../../components'

import { userRequest } from '../../requestMethods';

const Home = () => {
    const [userStats, setUserStats] = useState([])
    const MONTHS = useMemo(
        () => [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Agu",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        []
      );

    useEffect(() => {
        const getStats = async () => {
            try {
                const res = await userRequest.get('users/stats')
                res.data.map(item => {
                    setUserStats(prev => [...prev, {name: MONTHS[item._id - 1], 'Active User': item.total}])
                })
            } catch (error) {
                console.log(error)
            }
        }
        getStats()
    }, [MONTHS])

    
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart title="User Analytics" data={userStats} dataKey="Active User"  grid />
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )
}

export default Home
