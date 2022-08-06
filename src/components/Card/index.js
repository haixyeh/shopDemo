import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import lessStyled from './index.less';
import Image from '../Image';

const CardSpan = styled.span`&&{
  max-width: ${props => props.maxWidth ? `${props.maxWidth}px` : 'none' };
}`;

/** 商品圖特效 */
const animations = {
  NONE: '',
  ZOOM: lessStyled.imageHoverAnimate,
}
const Card = props => {
  const { title, imageUrl, animation, marketPrice ,dark, price } = props;
  return (
    <CardSpan
      className={classNames(lessStyled.cardWrap, {[lessStyled.dark]: dark})}
      maxWidth={200}
    >
      <div className={lessStyled.imageContainer}>
        <Image
          src={imageUrl}
          className={classNames(lessStyled.image, animations[animation])}
        />
      </div>
      <div className={lessStyled.info}>
        <div>{title}</div>
        {!!price && <div className={lessStyled.price}>${price}</div>}
        {!!marketPrice && <div className={lessStyled.marketPrice}>${marketPrice}</div>}
      </div>
    </CardSpan>
  )
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  animation: PropTypes.oneOf(['NONE', 'ZOOM']),
  imageUrl: PropTypes.string.isRequired,
  dark: PropTypes.bool,
  price: PropTypes.number,
  marketPrice: PropTypes.number
}

Card.defaultProps = {
  animation: 'ZOOM',
  dark: false,
  price: 0,
  marketPrice: 0
}

export default Card