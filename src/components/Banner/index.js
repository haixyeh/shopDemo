import React, { useState, useEffect, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import Image from '../Image';
import bannerLeft from '../../assets/svg/banner-left.svg';
import bannerRight from '../../assets/svg/banner-right.svg';
import lessStyled from './index.less';

export const TypeEnum = {
  FADE: 'FADE',
  SLIDER: 'SLIDER',
};

export const WidthTypeEnum = {
  LAYOUT_WIDTH: 'LAYOUT_WIDTH',
  CUSTOMIZE: 'CUSTOMIZE'
}

const typeClassNames = {
  FADE: lessStyled.fade,
  SLIDER: lessStyled.slider,
};

const DotNavigationSingle = styled.span`
  &&&&:before {
    background-color: ${props =>
    props.selected ? props.theme?.primaryColor : '#e5e5e5'};
    z-index: 2;
  }
`;

/**
 * Banner 輪播元件
 */
const Banner = props => {
  const {
    banners,
    moduleWidthType,
    moduleWidth,
    dynamicMode,
    bgColor,
  } = props;

  const isSlider = dynamicMode === TypeEnum.SLIDER;
  const [stored, setStored] = useState(0);
  const [selected, setSelected] = useState(0);
  const maxWidth = useMemo(() => {
    return moduleWidthType === 'CUSTOMIZE' && moduleWidth > 0 ? moduleWidth : undefined;
  }, [moduleWidthType, moduleWidth]);

  const slideToIndex = index => () => {
    setStored(selected);
    setSelected(index);
  };

  const slidePrev = useCallback(() => {
    setStored(selected);
    if (selected === 0) {
      setSelected(banners.length - 1);
    } else {
      setSelected(selected - 1);
    }
  }, [banners.length, selected]);

  const slideNext = useCallback(() => {
    setStored(selected);
    if (selected === banners.length - 1) {
      setSelected(0);
    } else {
      setSelected(selected + 1);
    }
  }, [banners.length, selected]);

  useEffect(() => {
    const timer = setInterval(() => {
      setStored(selected);
      setSelected((selected + 1) % banners.length);
    }, 3000);
    return () => clearInterval(timer);
  });

  return (
    <div
      style={{ maxWidth, margin: '0 auto' }}
    >
      {banners.length > 0 ? (
        <>
          <div
            className={classNames(lessStyled.banner, typeClassNames[dynamicMode])}
          >
            <div className={lessStyled.bannerWrapper}>
              <div className={lessStyled.bannerRatioWrapper} />
              {banners.map((item, index) => (
                <div
                  className={classNames(lessStyled.bannerSlide, {
                    [lessStyled.active]: index === selected,
                    [lessStyled.rightIn]:
                    isSlider &&
                    index === selected &&
                    ((selected > stored && !(selected - stored + 1 === banners.length)) ||
                      stored - selected + 1 === banners.length),
                    [lessStyled.leftOut]:
                    isSlider &&
                    index === (banners.length + selected - 1) % banners.length &&
                    ((selected > stored && !(selected - stored + 1 === banners.length)) ||
                      stored - selected + 1 === banners.length),
                    [lessStyled.leftIn]:
                    isSlider &&
                    index === selected &&
                    ((selected < stored && !(stored - selected + 1 === banners.length)) ||
                      selected - stored + 1 === banners.length),
                    [lessStyled.rightOut]:
                    isSlider &&
                    index === (selected + 1) % banners.length &&
                    ((selected < stored && !(stored - selected + 1 === banners.length)) ||
                      selected - stored + 1 === banners.length),
                  })}
                  key={item.id}
                >
                  <a href={item.url} target="_blank" rel="noreferrer">
                    <Image className={lessStyled.bannerImage} src={item.img} alt="" />
                  </a>
                </div>
              ))}
            </div>
            <Image
              src={bannerLeft}
              className={classNames(lessStyled.bannerControl, lessStyled.bannerControlLeft)}
              onClick={slidePrev}
              alt="arrow left"
              aria-hidden="true"
            />
            <Image
              src={bannerRight}
              className={classNames(lessStyled.bannerControl, lessStyled.bannerControlRight)}
              onClick={slideNext}
              alt="arrow right"
              aria-hidden="true"
            />

            <div className={classNames(lessStyled.dotNavigation)}>
              {banners.map((item, index) => (
                <DotNavigationSingle
                  className={classNames(lessStyled.dotNavigationSingle)}
                  key={item.id}
                  onClick={slideToIndex(index)}
                  selected={selected === index}
                  primary={{ bgColor }}
                />
              ))}
            </div>
          </div>
        </>
      ) : (
        <span>無資料</span>
      )}
    </div>
  );
};

Banner.propTypes = {
  /**
   * 輪播圖
   * #### id: 輪播圖id
   * #### img: 輪播圖圖片
   * #### url: 輪播圖連結
   */
  banners: PropTypes.arrayOf(
    PropTypes.shape({
      subId: PropTypes.number,
      img: PropTypes.string,
      url: PropTypes.string,
    })
  ),
  /** 模組最大寬度種類 LAYOUT_WIDTH(最大寬度)、CUSTOMIZE 自訂寬度 */
  moduleWidthType: PropTypes.oneOf(['LAYOUT_WIDTH', 'CUSTOMIZE']),
  /** 模組寬度 `moduleWidthType = CUSTOMIZE`，才能作用 */
  moduleWidth: PropTypes.number,
  /** 模式 */
  dynamicMode: PropTypes.oneOf(['FADE', 'SLIDER']),
  /** 主題背景顏色 */
  bgColor: PropTypes.string,
};

Banner.defaultProps = {
  banners: [],
  moduleWidthType: 'CUSTOMIZE',
  moduleWidth: 0,
  dynamicMode: 'SLIDER',
  bgColor: '#F00',
};

export default Banner;
