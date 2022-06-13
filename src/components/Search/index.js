import React, { Children } from 'react';
import { Popover, Col } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import Button, { buttonSizeEnum, buttonTypeEnum } from '../Button';
import styles from './index.less';

const SearchItem = props => {
  const { children } = props;
  return children;
};

const Search = props => {
  const {
    layout: { col },
    children,
  } = props;

  /** 除了第一筆資料 都須複製到 [其他條件] */
  const moreItems = Children.map(children, (child, index) => {
    if (index !== 0) {
      return (
        <div className={`${styles.visibilityMoreItem} ${styles[`item${index}`]}`}>{child}</div>
      );
    }
    return '';
  });

  const childrenLength = children.length;
  const isShowButton =
    (col === 'xs' && childrenLength > 1) ||
    (col === 'sm' && childrenLength > 2) ||
    (col === 'md' && childrenLength > 3) ||
    childrenLength >= 5;

  return (
    <div className={styles.search}>
      <div className={styles.searchItems}>
        {Children.map(
          children,
          (child, index) =>
            index <= 3 && (
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={6}
                className={`${styles.visibilitySearchItem} ${styles[`item${index}`]}`}
              >
                {child}
              </Col>
            )
        )}
      </div>

      {isShowButton && (
        <Popover
          placement="topLeft"
          content={moreItems}
          trigger="click"
          overlayClassName={styles.popover}
        >
          {col === 'xs' ? (
            <Button size={buttonSizeEnum.DEFAULT} type={buttonTypeEnum.LINK}>
              ．．．
            </Button>
          ) : (
            <Button>其他條件</Button>
          )}
        </Popover>
      )}
    </div>
  );
};

// static props
Search.Item = SearchItem;

Search.propTypes = {
  children: PropTypes.node,
};

Search.defaultProps = {
  children: '',
};
const mapStateToProps = ({ global }) => ({
  layout: global.layout,
});

export default connect(mapStateToProps)(Search);
