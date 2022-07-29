import React from 'react';
import Banner from '../../components/Banner';
import MainMenu from '../../components/MainMenu';
import { bannerInfo, mainMenuDefault } from './defaultStore';
import styled from './index.less';

// 站內 route path (後續需要改至config route)
const routeMap = {
  home: 'home'
}
const isMainMenuItemActive = (item, pathname) => {
  const { link } = item;
  console.log(routeMap[link], pathname.replace("/", ""))
  if (routeMap[link] && pathname.replace("/", "")  === routeMap[link]) {
    console.log('Event Enter');
    return true;
  }
  return false;
}

const Home = () => {
  return (
    <div className={styled.home}>
      {/* 橫幅 */}
      <div className={styled.bannerSlider}>
        <div className={styled.content}>
          <Banner {...bannerInfo} />
        </div>
      </div>
      {/* 商品分類 */}
      <div className={styled.goodsMenu}>
        <div className={styled.inner}>
          <MainMenu
            list={mainMenuDefault} 
            subMenuDark
            color="#FFF"
            routeMap={routeMap}
            isMainMenuItemActive={isMainMenuItemActive}
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
