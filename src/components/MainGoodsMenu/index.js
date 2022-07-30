import React from 'react';
import MainMenu from '../MainMenu';
import { mainMenuDefault } from './defaultStore';
import styled from './index.less';

// 站內 route path (後續需要改至config route)
const routeMap = {
  home: 'home',
  newEventView: 'about/event'
}
const isMainMenuItemActive = (item, pathname) => {
  const { link } = item;
  // 全站分類項目
  if (pathname.includes('category') && link === 'setCategoryView') {
    return true;
  }
  if (routeMap[link] && pathname.replace("/", "")  === routeMap[link]) {
    return true;
  }
  return false;
}

/* 商品分類 */
const MainGoodsMenu = () => {
  return (
    <div className={styled.goodsMenu}>
      <div className={styled.inner}>
        <MainMenu
          list={mainMenuDefault} 
          subMenuDark
          color="#FFF"
          routeMap={routeMap}
          isBorderBottom
          isMainMenuItemActive={isMainMenuItemActive}
        />
      </div>
    </div>
  );
}
export default MainGoodsMenu;
