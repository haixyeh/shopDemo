import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';
import { router } from 'dva';
import { Menu, Switch, Button } from 'antd'; 
import useDropdownMenu from '../../utils/useDropdownMenu';
import lessStyled from './index.less';

const { Link } = router;
const defaultSelectedKeys = [];
const TopNavBar = (props) => {
  const { location: { pathname }, toggleTheme } = props;
  const { bindEvent, bindDropdownMenu } = useDropdownMenu();
  const { isDark, primaryColor } = useTheme();
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const WebSettingMenu = ({ active }) => {
    return (
      <Menu className={
        classNames(
          lessStyled.menu,
          { [lessStyled.open]: active }
        )
      }
      >
        <Menu.Item key="switchTheme">
          樣式：<Switch onChange={() => toggleTheme()} checkedChildren="淺" unCheckedChildren="深" checked={isDark} />
        </Menu.Item>
        <Menu.Item key="changeLanguage">
          <Button onClick={() => changeLanguage("tw")} disabled={i18n.language === 'tw'}>中文</Button>
          <Button onClick={() => changeLanguage("en")} disabled={i18n.language === 'en'}>English</Button>
        </Menu.Item>
      </Menu>
    )};

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
      <div className={lessStyled.dropdownMenu} {...bindEvent()}>
        {t('Setting')}
        <span className={lessStyled.dropdownContent}>
          <WebSettingMenu {...bindDropdownMenu()} />
        </span>
      </div>

    </nav>
  );
}

TopNavBar.propTypes = {
  active: PropTypes.bool,
  location: PropTypes.shape({
    pathname: PropTypes.string
  }),
  toggleTheme: PropTypes.func
};

TopNavBar.defaultProps = {
  active: false,
  location: {
    pathname: ''
  },
  toggleTheme: () => {}
};


export default TopNavBar;
