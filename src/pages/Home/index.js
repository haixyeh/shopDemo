import React from 'react';
import Banner from '../../components/Banner';
import { firstSliderInfo, secondSliderInfo } from './sliderInfo';
import style from './index.less';

const Home = () => {
  return (
    <div className={style.home}>
      自適應:
      <Banner {...firstSliderInfo} />
      <hr />
      固定寬度：
      <Banner {...secondSliderInfo} />
    </div>

  );
}
export default Home;
