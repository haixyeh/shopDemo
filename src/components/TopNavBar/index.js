import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'styled-components';
import { Link } from 'dva/router';
import { Menu, Switch, Dropdown, Button } from 'antd'; 
import lessStyled from './index.less';

const defaultSelectedKeys = [];
const TopNavBar = (props) => {
  const { location: { pathname }, toggleTheme } = props;
  const { isDark, primaryColor } = useTheme();
  const menu = (
    <Menu>
      <Menu.Item key="switchTheme">
        <Switch onChange={() => toggleTheme()} checkedChildren="深" unCheckedChildren="淺" />
      </Menu.Item>
    </Menu>
  );

  return (
    <nav className={lessStyled.header} style={{background: primaryColor}}>
      <Menu 
        className={lessStyled.menuLeft}
        mode="horizontal"
        selectedKeys={pathname || defaultSelectedKeys}
        theme={isDark ? 'dark' : 'light'}
      >
        <Menu.Item key="home"><Link to="/home">Ryan Home</Link></Menu.Item>
        <Menu.Item key="about"><Link to="/about">About Us</Link></Menu.Item>
        
        {/* 暫時不設計 */}
        {/* <Menu.Item key="category"><Link to="/category">測試頁面</Link></Menu.Item> */}
        {/* <Menu.Item key="menus"><Link to="/menus">菜單</Link></Menu.Item> */}
        {/* <Menu.Item key="admin"><Link to="/admin">管理</Link></Menu.Item> */}
        <Menu.Item className={lessStyled.login} key="login"><Link to="/login">Login</Link></Menu.Item> 
        <Menu.Item className={lessStyled.register} key="register"><Link to="/register">Register</Link></Menu.Item>
      </Menu>
      <Dropdown overlay={menu} className={lessStyled.dropdownMenu}>
        <Button type="danger">Setting</Button>
      </Dropdown>
    </nav>
  );
}

TopNavBar.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  }),
  toggleTheme: PropTypes.func
};

TopNavBar.defaultProps = {
  location: {
    pathname: ''
  },
  toggleTheme: () => {}
};


export default TopNavBar;
