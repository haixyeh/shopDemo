import React from 'react';
import PropTypes from 'prop-types';
import ProgressiveImage from 'react-progressive-image';
import widgetPlaceholderUrl from '../../assets/svg/widget-placeholder.svg';

/*
 * 圖片元件 - 含過渡圖片(漸進試圖項設定)
 */
function Image(props) {
  const { src, placeholder = 'an image', srcSet, sizes, style, className, alt, onClick } = props;
  const srcSetData =
    srcSet && sizes
      ? { srcSet, sizes } // https://caniuse.com/#feat=srcset
      : undefined;
  const handleClickImage = event => {
    if (onClick) {
      onClick(event);
    }
  };
  return (
    <ProgressiveImage src={src} placeholder={placeholder} srcSetData={srcSetData}>
      {(image, loading, setData) => (
        <img
          className={className}
          style={style}
          src={image}
          srcSet={setData.srcSet}
          sizes={setData.sizes}
          alt={alt}
          onClick={handleClickImage}
        />
      )}
    </ProgressiveImage>
  );
}

Image.propTypes = {
  /** 圖片 */
  src: PropTypes.string,
  /** 預設圖：當src未傳入時，使用 （預設 widget-placeholder.svg ） */
  placeholder: PropTypes.string,
  /** srcset 響應式圖片
   * ```<img src="pic_1x.jpg" srcset="pic_1x.jpg 1x, pic_2x.jpg 2x" />```
   * #### pic_1x.jpg 1x 表示 1x 的螢幕時，瀏覽器會載入 pic_1x.jpg；
   * #### pic_2x.jpg 2x 表示 2x 的螢幕時，瀏覽器會載入 pic_2x.jp。
   */
  srcSet: PropTypes.string,
  /** 指定不同頁面佈局的圖像大小 */
  sizes: PropTypes.string,
  /** css樣式 */
  style: PropTypes.object,
  /** className */
  className: PropTypes.string,
  /** 替代文字 */
  alt: PropTypes.string,
  /** 點擊事件 */
  onClick: PropTypes.func,
};

Image.defaultProps = {
  src: '',
  placeholder: widgetPlaceholderUrl,
  srcSet: '',
  sizes: '',
  style: {},
  className: '',
  alt: '',
  onClick: () => {},
};

export default Image;
