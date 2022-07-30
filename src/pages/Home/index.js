import React from 'react';
import Banner from '../../components/Banner';
import MainGoodsMenu from '../../components/MainGoodsMenu';
import { bannerInfo } from './defaultStore';
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
      <MainGoodsMenu />
    </div>
  );
}
export default Home;
