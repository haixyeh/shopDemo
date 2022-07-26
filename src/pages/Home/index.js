import React from 'react';
import Banner from '../../components/Banner';
import MainMenu from '../../components/MainMenu';
import { bannerInfo, mainMenuDefault } from './defaultStore';
import styled from './index.less';


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
          <MainMenu list={mainMenuDefault} transparent color="#FFF" />
        </div>
      </div>
    </div>
  );
}
export default Home;
