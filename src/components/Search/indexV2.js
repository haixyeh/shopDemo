import React, { Children } from 'react';
import { Popconfirm, Row, Col } from 'antd';
import { Trans } from 'react-i18next';
import PropTypes from 'prop-types';
import Icon from '../IconsBackstage/Icon';
import styles from './indexV2.less';

const SearchItem = props => {
  const { children } = props;
  return children;
};

const Search = props => {
  const { children, values, clearBtn, searchBtn } = props;

  const moreItems = Children.map(children, (child, index) => (
    <Col
      xs={24}
      lg={12}
      xl={8}
      xxl={6}
      className={`${styles.visibilityMoreItem} ${styles[`item${index}`]}`}
    >
      {child}
    </Col>
  ));

  return (
    <Popconfirm
      placement="top"
      icon=""
      title={<Row>{moreItems}</Row>}
      trigger="click"
      overlayClassName={styles.popover}
      onConfirm={searchBtn}
      okText={<Trans i18nKey="button:search">search</Trans>}
      onCancel={clearBtn}
      cancelText={<Trans i18nKey="button:clearUp">clearUp</Trans>}
    >
      <div className={styles.search}>
        <Icon type="udi-search" className={styles.icon} />
        {values}
      </div>
    </Popconfirm>
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

export default Search;
