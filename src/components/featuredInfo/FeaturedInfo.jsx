import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import React from 'react'
import './featuredInfo.scss'

const FeaturedInfo = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="title">Revenue</span>
                <div className="moneyContainer">
                    <span className="money">$ 2.415</span>
                    <span className="moneyRate">- 11.4 <ArrowDownward className="icon negative"/></span>
                </div>
                <span className="subTitle">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="title">Sales</span>
                <div className="moneyContainer">
                    <span className="money">$ 4.415</span>
                    <span className="moneyRate">- 11.4 <ArrowDownward className="icon negative"/></span>
                </div>
                <span className="subTitle">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="title">Cost</span>
                <div className="moneyContainer">
                    <span className="money">$ 3.415</span>
                    <span className="moneyRate">+ 11.6 <ArrowUpward className="icon"/></span>
                </div>
                <span className="subTitle">Compared to last month</span>
            </div>
        </div>
    )
}

export default FeaturedInfo
