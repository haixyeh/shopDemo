import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'dva';
import Banner from '../../components/Banner';
import MainGoodsMenu from '../../components/MainGoodsMenu';
import styled from './index.less';

const Home = () => {
  const dispatch = useDispatch();
  const { banners, load } = useSelector(
    ({ global, loading }) => ({
      banners: global.banners,
      load: loading.effects['global/fetchBannerInfo']
    })
  );
  const fetchApi = () => dispatch({
    type: 'global/fetchBannerInfo',
  });

  useEffect(() => {
    if (banners.length) return;
    fetchApi();
  }, []);

  return (
    <div className={styled.home}>
      {/* 橫幅 */}
      <div className={styled.bannerSlider}>
        <div className={styled.content}>
          {load ? 
            '加載中...'
            :
            <Banner banners={banners} />
          }
        </div>
      </div>
      {/* 商品分類 */}
      <MainGoodsMenu />
    </div>
  );
}
export default Home;
