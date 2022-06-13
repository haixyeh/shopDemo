import React, { PureComponent } from 'react';
import { Table } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import classNames from 'classnames';
import Spin from '../Spin';

// import TopScroll from '../TopScroll';
import styles from './index.less';

export const tablePositionEnum = {
  /** 預設(編輯) */
  DEFAULT: 'default',
  /** 列表 */
  LIST: 'list',
  /** 抽屜 */
  DRAWER: 'drawer',
  /** modal */
  MODAL: 'modal',
};

const classNameMap = {
  type: {
    [tablePositionEnum.DEFAULT]: `${styles.default}`,
    [tablePositionEnum.LIST]: `${styles.list}`,
    [tablePositionEnum.DRAWER]: `${styles.drawer}`,
    [tablePositionEnum.MODAL]: `${styles.modal}`,
  },
  extraHeight: {
    [tablePositionEnum.DEFAULT]: 110,
    [tablePositionEnum.LIST]: 110,
    [tablePositionEnum.DRAWER]: 165,
    [tablePositionEnum.MODAL]: 0,
  },
};

/** 客製化 wording
 * ref: rc-pagination
 */
const locale = {
  items_per_page: '筆/頁',
  jump_to: '第',
  jump_to_confirm: '確定',
  page: '頁，',
  prev_page: '上一頁',
  next_page: '下一頁',
  prev_5: '向前 5 頁',
  next_5: '向後 5 頁',
  prev_3: '向前 3 頁',
  next_3: '向後 3 頁',
};

/** 動態抓取 table 位置 */
const getTableOffsetHeight = type => {
  const heightClass = classNameMap.type[type];
  const offsetHeight =
    document?.getElementsByClassName(heightClass)[0]?.getBoundingClientRect().top +
    classNameMap.extraHeight[type];
  return `calc( 100vh - ${offsetHeight}px )`;
};

class CustomTable extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { heightStyled: 0 };
  }

  componentDidUpdate(prevProps) {
    this.onUpdateState(prevProps);
  }

  onUpdateState = prevProps => {
    const { type, collapsedCard } = this.props;
    if (prevProps.collapsedCard !== collapsedCard) {
      this.setState({ heightStyled: getTableOffsetHeight(type) });
    }
  };

  renderFooter = () => {
    const { description, tableAction, pageView } = this.props;
    return (
      <div className={styles.footerBar}>
        <div className="description">{description}</div>
        <div className="tableAction">{!pageView && tableAction}</div>
      </div>
    );
  };

  render() {
    const {
      collapsedCard,
      columns,
      dataSource,
      pagination,
      description,
      tableAction,
      pageView,
      disableTopScroll,
      height,
      scroll,
      scrollable,
      // layout: { width = 1200 },
      loading,
      rowClassName,
      type,
      ...restProps
    } = this.props;
    const { heightStyled } = this.state;

    // NOTE: 如果沒有 description 或 tableAction 的需求，要回傳 undefined，不然會有一塊 padding 佔畫面
    const footer = description || tableAction ? this.renderFooter : undefined;

    // NOTE: 如果沒有 pagination 的需求，要回傳 false，不然會有預設分頁器在 Table 下方
    const customPagination = pagination
      ? {
          ...pagination,
          locale,
        }
      : false;

    // NOTE: 如果螢幕寬度小於 375 則使用 simple 模式
    const customPaginationXs = pagination
      ? {
          ...pagination,
          simple: true,
        }
      : false;

    // pagination total: 用來判斷筆數為 0 則不顯示 pagination
    const total = pagination ? pagination.total / pagination.pageSize : 0;

    const className = classNames(
      restProps.className,
      styles.customTable,
      {
        [styles.scrollable]: scrollable,
      },
      { [styles.customTableHidePagination]: dataSource?.length === 0 },
      { [styles.customTableOnSinglePage]: total <= 1 },
      classNameMap.type[type]
    );
    return (
      <Spin isShow={loading}>
        <Table
          {...restProps}
          className={className}
          rowClassName={rowClassName}
          columns={columns}
          dataSource={dataSource}
          footer={footer}
          pagination={customPagination}
          scroll={
            scrollable
              ? { x: scroll.x, y: heightStyled || getTableOffsetHeight(type) }
              : { x: scroll.x }
          }
          loading={{
            indicator: <Spin />,
            spinning: loading,
          }}
        />
      </Spin>
    );
  }
}
const mapStateToProps = ({ global }) => ({
  layout: global.layout,
  collapsedCard: global.collapsedCard,
});

CustomTable.propTypes = {
  /** 人工計算出的高度  */
  height: PropTypes.number,
  /** scroll: 沒有 scroll.x 會導致表格跑版 */
  scroll: PropTypes.object,
  /** scrollable: 只有列表頁和抽屜需要加 因為要固定高度  */
  scrollable: PropTypes.bool,
  type: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf(Object.keys(tablePositionEnum).map(k => tablePositionEnum[k])),
  ]),
  loading: PropTypes.bool,
  className: PropTypes.string,
};

CustomTable.defaultProps = {
  height: 0,
  scroll: {
    x: 1300,
  },
  scrollable: false,
  type: tablePositionEnum.DEFAULT,
  loading: false,
  className: undefined,
};

export default connect(mapStateToProps)(CustomTable);
