import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'dva/router';
import { Menu } from 'antd'; 
import style from './index.less';

const defaultSelectedKeys = [];

const NavBar = (props) => {
  const { location: { pathname }} = props;

  return (
    <nav className={style.header}>
      <Menu 
        className={style["menu-left"]}
        mode="horizontal"
        selectedKeys={pathname || defaultSelectedKeys}
      >
        <Menu.Item key="home"><Link to="/home">Ryan Home</Link></Menu.Item>
        <Menu.Item key="about"><Link to="/about">About Us</Link></Menu.Item>
        {/* 暫時不設計 */}
        {/* <Menu.Item key="webSet"><Link to="/webSet">測試頁面</Link></Menu.Item> */}
        {/* <Menu.Item key="menus"><Link to="/menus">菜單</Link></Menu.Item> */}
        {/* <Menu.Item key="admin"><Link to="/admin">管理</Link></Menu.Item> */}
        <Menu.Item className={style.login} key="login"><Link to="/login">Login</Link></Menu.Item> 
        <Menu.Item className={style.register} key="register"><Link to="/register">Register</Link></Menu.Item>
      </Menu>
    </nav>
  );
}

NavBar.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  })
};

NavBar.defaultProps = {
  location: {
    pathname: ''
  }
};


export default NavBar;
