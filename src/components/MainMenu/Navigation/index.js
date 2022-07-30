import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import navigationStyled from '../navigate.less';

const ListLink = styled.a`
  &:hover {
    color: ${props => props.primary?.color || props.theme?.color};
  }
`;

/**
 * NavigationItem - [下拉選單(連結) 子項目]
 * mainId: 第一層項目（event list)
 * subId: 第一層children子項目
 */
const NavigationItem = props => {
  const {
    color,
    link,
    linkData,
    linkDetail,
    title,
    listKey,
    history,
    handleLink,
    routeMap,
  } = props;

  let listItem = (
    <li className={classNames(navigationStyled.listItem)}>
      <ListLink
        href={`/event/${linkData}`}
        className={navigationStyled.listLink}
        primary={{ color }}
        onClick={event => {
          event.preventDefault();
          history.push(`/event/${linkData}`);
        }}
      >
        {title}
      </ListLink>
    </li>
  );

  if (listKey === 'subId') {
    listItem = (
      <li className={classNames(navigationStyled.listItem)}>
        <ListLink
          href={routeMap[link]}
          className={navigationStyled.listLink}
          primary={{ color }}
          onClick={event => {
            event.preventDefault();
            if (routeMap[link]) {
              history.push(routeMap[link]);
            }
            handleLink(link, linkData, linkDetail);
          }}
        >
          
          {title}
        </ListLink>
      </li>
    );
  }

  return listItem;
};

NavigationItem.propTypes = {
  /** color `文字hover用` */
  color: PropTypes.string,
  /** 連結 */
  link: PropTypes.string.isRequired,
  /** 最新活動 event id */
  linkData: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** 最新活動 event detail id */
  linkDetail: PropTypes.object,
  /** Navigation list type */
  listKey: PropTypes.string.isRequired,
  /** 標題 */
  title: PropTypes.string.isRequired,
  /** history */
  history: PropTypes.object.isRequired,
  /** 連結處理 */
  handleLink: PropTypes.func.isRequired,
  /** 路由對應 */
  routeMap: PropTypes.object.isRequired,
};

NavigationItem.defaultProps = {
  color: null,
  linkData: '',
  linkDetail: {
    data: {
      meta: {
        url: '',
      },
    },
  },
};

/** Navigation - [下拉選單(連結)]
 * - Usage:
 * - - Header 最新活動, 全站商品, 關於我們
 */
const Navigation = props => {
  const {
    dark,
    color,
    className,
    list = [],
    active = false,
    showMore = false,
    large = true,
    listKey,
    history,
    handleLink,
    routeMap,
    ...restProps
  } = props;

  return list.length > 0 ? (
    <div
      className={classNames(navigationStyled.navigate, className, {
        [navigationStyled.large]: large,
        [navigationStyled.active]: active,
      })}
      {...restProps}
    >
      <div className={classNames(navigationStyled.wrapper, { [navigationStyled.dark]: dark })}>
        <div className={navigationStyled.column}>
          <ul className={navigationStyled.list}>
            {/** 活動連結/子項目連結 */}
            {list.map(item => (
              <NavigationItem
                key={`nav_${item.url}_${item.mainId}`}
                listKey={listKey}
                handleLink={handleLink}
                routeMap={routeMap}
                history={history}
                color={color}
                {...item}
              />
            ))}
            {/** 所有最新活動 */}
            {showMore && (
              <li
                className={classNames(
                  navigationStyled.listItem,
                  navigationStyled.all,
                  navigationStyled.arrow
                )}
              >
                <ListLink
                  // href="/about/events"
                  className={navigationStyled.listLink}
                  primary={{ color }}
                  onClick={event => {
                    event.preventDefault();
                    history.push('/about/events');
                  }}
                >
                  所有最新活動
                </ListLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  ) : null;
};

Navigation.propTypes = {
  /** 深色系 */
  dark: PropTypes.bool,
  /** color `文字hover用` */
  color: PropTypes.string,
  /** CSS class name for component */
  className: PropTypes.string,
  /** 資料 */
  list: PropTypes.arrayOf(
    PropTypes.shape({
      mainId: PropTypes.number,
      url: PropTypes.string,
      folderSwitch: PropTypes.oneOf(['YES', 'NO']),
      title: PropTypes.string,
      link: PropTypes.string,
      linkData: PropTypes.string,
      linkDetail: PropTypes.shape({
        text: PropTypes.string,
        value: PropTypes.string,
        data: PropTypes.shape({
          meta: PropTypes.object,
          list: PropTypes.array,
        }),
      }),
      sub: PropTypes.array,
    })
  ),
  /** 是否顯示更多 */
  showMore: PropTypes.bool,
  /** 寬版 */
  large: PropTypes.bool,
  /** Navigation list type */
  listKey: PropTypes.string.isRequired,
  /** 是否啟動 */
  active: PropTypes.bool,
  /** history */
  history: PropTypes.object.isRequired,
  /** 處理連結 */
  handleLink: PropTypes.func.isRequired,
  /** 路由對應 */
  routeMap: PropTypes.object.isRequired,
};

Navigation.defaultProps = {
  dark: false,
  color: null,
  className: null,
  list: [],
  showMore: false,
  large: true,
  active: false,
};

export default Navigation;