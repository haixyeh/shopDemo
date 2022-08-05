import React from 'react';
import PropTypes from 'prop-types';
import style from './index.less';
import MainMenuLayout from '../../components/MainMenuLayout';

const Category = (props) => {
  const {
    match: {
      params: { id }
    }
  } = props;

  return (
    <div className={style.category}>
      {/* 商品分類 */}
      <MainMenuLayout />
      <div className={style.showId}>id: 
        <span className={style.id}>{ id }</span>
      </div>
    </div>
  );
}

Category.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  })
}

Category.defaultProps = {
  match: {
    params: {
      id: null
    }
  }
}

export default Category;
