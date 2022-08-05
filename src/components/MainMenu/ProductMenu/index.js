/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ListMenu from './ListMenu';
import navigationStyled from '../navigate.less';


/** ProductMenu - [下拉選單(連結) 多層級子項目] */
const ProductMenu = props => {
  const { dark, color, data, className, active, history } = props;

  return (
    <div
      className={classNames(
        className,
        navigationStyled.navigate,
        {
          [navigationStyled.active]: active,
        }
      )}
    >
      <div
        className={classNames(navigationStyled.wrapper, {
          [navigationStyled.dark]: dark,
        })}
      >
        <ListMenu column={data} history={history} color={color} key="main" />
      </div>
    </div>
  );
};

ProductMenu.propTypes = {
  /** 深色系 */
  dark: PropTypes.bool,
  /** color `文字hover用` */
  color: PropTypes.string,
  /** 是否啟動 */
  active: PropTypes.bool,
  /** 選單資料 */
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string,
      linkData: PropTypes.string,
      sub: PropTypes.array,
    })
  ),
  /** 額外 classname */
  className: PropTypes.string,
  /** history */
  history: PropTypes.object,
};

ProductMenu.defaultProps = {
  dark: false,
  color: null,
  active: false,
  data: [],
  className: null,
  history: {},
};

export default ProductMenu;
