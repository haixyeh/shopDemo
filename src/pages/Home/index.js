import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useSelector, useDispatch, router } from 'dva';
import { useTheme } from 'styled-components';
import Banner from '../../components/Banner';
import MainMenuLayout from '../../components/MainMenuLayout';
import Card from '../../components/Card';
import lessStyled from './index.less';

const { withRouter } = router;

let cardListData = [
  {
    id: '1',
    title: '【Ryan萊恩 桃子】🔥三種爆款🔥超厚實太空包、電腦包、內膽包、電源包',
    imageUrl: 'https://cf.shopee.tw/file/f0c5f6dfda61cacefca3839ff59edcd2',
    price: 399,
    marketPrice: 800,
  }
]

// 先暫時用這個模擬多組Card
cardListData = Array(8).fill(cardListData[0]);

const Home = ({ history }) => {
  const dispatch = useDispatch();
  const { isDark } = useTheme(); // 暫時寫，之後會有CardList 在寫進去
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
    <div className={lessStyled.home}>
      {/* 橫幅 */}
      <div className={lessStyled.bannerSlider}>
        <div className={lessStyled.content}>
          {isLoading && "加載中..."}
          {!isLoading &&  <Banner banners={banners} />}
        </div>
      </div>
      {/* 商品分類 */}
      <MainMenuLayout />
      <div className={lessStyled.pageContain}>
        <div className={classNames(lessStyled.cardWrap, 'clearfix')}>
          {cardListData.map((item, idx) => (
            <Card 
              className={lessStyled.cardItem}
              title={item.title}
              imageUrl={item.imageUrl}
              price={item.price}
              marketPrice={item.marketPrice}
              url={`/category/${item.id}`}
              dark={isDark}
              history={history}
              // eslint-disable-next-line react/no-array-index-key
              key={`card-${idx}`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

Home.propTypes = {
  history: PropTypes.object.isRequired
}

export default withRouter(Home);
