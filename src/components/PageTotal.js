import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.less';

/** 解決: table 分頁共幾頁
 */
const PageTotal = props => {
  const { total } = props;

  return (
    <>
      共 <span className={styles.pageTotal}>{total}</span> 頁
    </>
  );
};

PageTotal.propTypes = {
  /** 內容 */
  total: PropTypes.number,
};

PageTotal.defaultProps = {
  total: 1,
};

export default PageTotal;
