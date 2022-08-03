import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'dva';
import Banner from '../../components/Banner';
import MainGoodsMenu from '../../components/MainGoodsMenu';
import styled from './index.less';

const Home = () => {
  const dispatch = useDispatch();
  const { banners, isLoading } = useSelector(
    ({ global, loading }) => ({
      banners: global.banners,
      isLoading: loading.effects['global/fetchBannerInfo']
    })
  );

  useEffect(() => {
    if (banners.length) return;
    dispatch({ type: 'global/fetchBannerInfo' })
  }, [dispatch, banners.length]);

  return (
    <div className={styled.home}>
      {/* 橫幅 */}
      <div className={styled.bannerSlider}>
        <div className={styled.content}>
          {isLoading && "加載中..."}
          {!isLoading &&  <Banner banners={banners} />}
        </div>
      </div>
      {/* 商品分類 */}
      <MainGoodsMenu />
    </div>
  );
}
export default Home;
