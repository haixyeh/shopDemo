import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';
import { router } from 'dva';
import { Menu, Switch, Dropdown, Button } from 'antd'; 
import lessStyled from './index.less';

const { Link } = router;
const defaultSelectedKeys = [];
const TopNavBar = (props) => {
  const { location: { pathname }, toggleTheme } = props;
  const { isDark, primaryColor } = useTheme();
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const menu = (
    <Menu>
      <Menu.Item key="switchTheme">
        樣式：<Switch onChange={() => toggleTheme()} checkedChildren="淺" unCheckedChildren="深" />
      </Menu.Item>
      <Menu.Item key="changeLanguage">
        <Button onClick={() => changeLanguage("tw")} disabled={i18n.language === 'tw'}>中文</Button>
        <Button onClick={() => changeLanguage("en")} disabled={i18n.language === 'en'}>English</Button>
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
        <Menu.Item key="home"><Link to="/home">{t('RyanHome')}</Link></Menu.Item>
        <Menu.Item key="about"><Link to="/about">{t('AboutUs')}</Link></Menu.Item>
        <Menu.Item className={lessStyled.login} key="login"><Link to="/login">{t('Login')}</Link></Menu.Item> 
        <Menu.Item className={lessStyled.register} key="register"><Link to="/register">{t('Register')}</Link></Menu.Item>
      </Menu>
      <Dropdown overlay={menu} className={lessStyled.dropdownMenu}>
        <Button type="danger">{t('Setting')}</Button>
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
