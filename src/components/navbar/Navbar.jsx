import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import React from 'react';
import style from './navbar.module.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.left}>
          <div className={style.language}>EN</div>
          <div className={style.search}>
            <input type="text" placeholder="Search"/>
            <Search style={{ color: 'grey', fontSize: '18' }} />
          </div>
        </div>
        <div className={style.center}>
          <Link to="/">
          <h1 className={style.logo}>SHOP.</h1>
          </Link>
        </div>
        <div className={style.right}>
          <Link to="/register">
            <div className={style.menu}>REGISTER</div>
          </Link>
          <Link to="/login">
            <div className={style.menu}>SING IN</div>
          </Link>
          <div className={style.menu}>
            <Link to="/cart">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
