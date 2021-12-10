import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import React from "react";
import "./sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="title">Dashboard</h3>
          <ul className="list">
            <Link to="/">
              <li>
                <LineStyle />
                Home
              </li>
            </Link>
            <li>
              <Timeline />
              Analytics
            </li>
            <li>
              <TrendingUp />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="title">Quick Menu</h3>
          <ul className="list">
            <Link to="/users">
              <li>
                <PermIdentity />
                Users
              </li>
            </Link>
            <Link to="/products">
            <li>
              <Storefront />
              Products
            </li>
            </Link>
            <li>
              <AttachMoney />
              Transactions
            </li>
            <li>
              <BarChart />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="title">Notifications</h3>
          <ul className="list">
            <li>
              <MailOutline />
              Mail
            </li>
            <li>
              <DynamicFeed />
              Feedback
            </li>
            <li>
              <ChatBubbleOutline />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="title">Staff</h3>
          <ul className="list">
            <li>
              <WorkOutline />
              Manage
            </li>
            <li>
              <Timeline />
              Analytics
            </li>
            <li>
              <Report />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
