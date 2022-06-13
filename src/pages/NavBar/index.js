import React from 'react';
import style from './index.scss';
import { Link } from 'dva/router';
import { Menu } from 'antd'; 

const defaultSelectedKeys = [];

const Index = (props) => {
    const { location: { pathname }} = props;
    return (
        <nav className={style.header}>
            <a className={style.logo} href="/">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="d-block mx-auto"
                >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
                    <line x1="9.69" y1="8" x2="21.17" y2="8" />
                    <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
                    <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
                    <line x1="14.31" y1="16" x2="2.83" y2="16" />
                    <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
                </svg>
            </a>
            {console.log(pathname, "pathname")}
            <Menu 
                className={style["menu-left"]}
                mode="horizontal"
                // defaultSelectedKeys="home"
                selectedKeys={pathname || defaultSelectedKeys}
            >
                <Menu.Item key={"home"}><Link to="/home">主頁</Link></Menu.Item>
                <Menu.Item key={"webSet"}><Link to="/webSet">測試頁面</Link></Menu.Item>
                <Menu.Item key={"menus"}><Link to="/menus">菜單</Link></Menu.Item>
                <Menu.Item key={"admin"}><Link to="/admin">管理</Link></Menu.Item>
                <Menu.Item key={"about"}><Link to="/about">關於我們</Link></Menu.Item>
                <Menu.Item className={style.login} key={"login"}><Link to="/login">登入</Link></Menu.Item>
                <Menu.Item className={style.register} key={"register"}><Link to="/register">註冊</Link></Menu.Item>
            </Menu>
        </nav>
    );
}

export default Index;
