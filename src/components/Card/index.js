import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import lessStyled from './index.less';

const CardSpan = styled.span`
  border-color: ${props => props.theme?.primaryColor};
  max-width: ${props => props.maxWidth ? `${props.maxWidth}px` : 'none' };
`;

const Card = props => {
  const { title } = props;
  return (
    <CardSpan
      className={lessStyled.cardWrap}
      maxWidth={200}
    >
      <div>{title}</div>
    </CardSpan>
  )
};

Card.propTypes = {
  title: PropTypes.string.isRequired
}

export default Card