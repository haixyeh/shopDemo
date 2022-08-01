import React from 'react';
import styled, { useTheme, css } from 'styled-components';
import MainMenu from '../MainMenu';
import { mainMenuDefault } from './utils/defaultStore';
import lessStyled from './index.less';

// 站內 route path (後續需要改至config route)
const routeMap = {
  home: 'home',
  newEventView: 'about/event'
}

// 查看目前Menu是否被選擇
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


const boxShadowCss = css`
  box-shadow: 0 1px 3px ${props => props.theme?.primaryColor || '#000'};
`;

const GoodsMenu = styled.div`
    background-color: ${props => props.theme?.menuBackgroundColor || '#eee'};
    ${props => !props.isDark && boxShadowCss}
`;

/* 商品分類 */
const MainGoodsMenu = () => {
  const { isDark } = useTheme();
  return (
    <GoodsMenu className={lessStyled.goodsMenu} isDark={isDark}>
      <div className={lessStyled.inner}>
        <MainMenu
          list={mainMenuDefault} 
          subMenuDark={isDark}
          routeMap={routeMap}
          isBorderBottom
          isMainMenuItemActive={isMainMenuItemActive}
        />
      </div>
    </GoodsMenu>
  );
}
export default MainGoodsMenu;
