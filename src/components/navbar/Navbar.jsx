import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import React from 'react';
import style from './navbar.module.scss';

const Navbar = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.left}>
          <div className={style.language}>EN</div>
          <div className={style.search}>
            <input type="text" />
            <Search style={{color: "grey", fontSize: "18"}} />
          </div>
        </div>
        <div className={style.center}>
          <h1 className={style.logo}>SHOP.</h1>
        </div>
        <div className={style.right}>
          <div className={style.menu}>REGISTER</div>
          <div className={style.menu}>SING IN</div>
          <div className={style.menu}>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
