import React, { useMemo } from 'react';
import { withRouter } from 'dva/router';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled, { css } from 'styled-components';
import SVGIcon from '../SVGIcon';
import Navigation from './Navigation';
import MegaMenu from './MegaMenu';
import useDropdownMenu from '../../utils/useDropdownMenu';
import mainMenuStyled from './mainMenu.less';

const activeCss = css`
  &&.active {
    border-bottom-color: ${props => props.color};
  }
  &&&:hover {
    border-bottom-color: ${props => props.color};
  }
`;

const MainMenuItemLi = styled.li`
  color: ${props => props.color};
  ${mainMenuStyled.dropdownArrow} {
    fill: ${props => props.color};
  }
  ${props => props.isBorderBottom && activeCss}
`;

const handleLink = (link, linkData) => {
  if (link === '_blank') {
    window.open(linkData);
  }
}

/** MainMenuItem - [主選單子項目] */
const MainMenuItem = props => {
  const {
    subMenuDark,
    color,
    textHoverColor,
    isBorderBottom,
    title,
    link: rawLink,
    linkData,
    linkDetail,
    folderSwitch,
    isCurrent,
    sub,
    height,
    transparent,
    routeMap,
    history,
  } = props;
  const link = folderSwitch === 'YES' ? '' : rawLink;
  const { bindEvent, bindDropdownMenu } = useDropdownMenu();
  const categoryViewData = linkData === '0' ? linkDetail?.data?.list : linkDetail?.data?.list[0]?.sub

  // const {
  //   mainMenuStyle: { textImgColor },
  // } = useTheme();  // 共用色系色定後續補上

  const primaryColor = transparent ? '#fff' : color;    // 主要色系
  const dropdownElementMap = useMemo(() => (
    {
      // 商品分類
      'setCategoryView': (
        <MegaMenu
          className={classNames(mainMenuStyled.subMenu)}
          dark={subMenuDark}
          color={textHoverColor}
          data={categoryViewData}
          history={history}
          {...bindDropdownMenu()}
        />),
      // 其它子選項
      '': (
        <Navigation
          className={classNames(mainMenuStyled.subMenu)}
          dark={subMenuDark}
          color={textHoverColor}
          list={sub}
          listKey="subId"
          routeMap={routeMap}
          history={history}
          handleLink={handleLink}
          {...bindDropdownMenu()}
        />
      )
    }
  ), [categoryViewData, history, routeMap, subMenuDark, sub, textHoverColor, bindDropdownMenu]);

  const hasDropdown = !!dropdownElementMap[link]; // 是否有下拉狀態
  const dropdownEvent = dropdownElementMap[link] ? bindEvent() : null;
  const dropdownElement = useMemo(() => (
    <>
      {hasDropdown && (
        <SVGIcon
          type="MenuDropdownArrow"
          className={mainMenuStyled.dropdownArrow}
          color={primaryColor}
        />
      )}
      {dropdownElementMap[link]}
    </>
  ), [dropdownElementMap, hasDropdown, link, primaryColor]);

  return (
    <MainMenuItemLi
      className={classNames(mainMenuStyled.item, {
        [mainMenuStyled.dropdown]: hasDropdown,
        active: isCurrent,
      })}
      isBorderBottom={isBorderBottom}
      color={primaryColor}
      {...dropdownEvent}
    >
      {hasDropdown && <span style={{ lineHeight: `${height}px` }}>{title}</span>}
      {!hasDropdown && (
        <a
          href={routeMap[link]}
          className={mainMenuStyled.link}
          style={{ lineHeight: `${height}px` }}
          onClick={event => {
            event.preventDefault();
            if (routeMap[link]) {
              history.push(`/${routeMap[link]}`);
            }
            handleLink(link, linkData, linkDetail);
          }}
        >
          {title}
        </a>
      )}
      {dropdownElement}
    </MainMenuItemLi>
  );
};

MainMenuItem.propTypes = {
  /** 子選單是否深色系 */
  subMenuDark: PropTypes.bool,
  /** 文字、底線顏色 */
  color: PropTypes.string,
  /** 子選單 文字hover用 */
  textHoverColor: PropTypes.string,
  /** 是否有底線樣式 */
  isBorderBottom: PropTypes.bool,
  /** 標題 */
  title: PropTypes.string,
  /** 連結類型
   * - `setCategoryView`: 商品分類（folderSwitch 需為 'NO'）
   * - `空`: 其它項目(需配合傳入 sub)
   */
  link: PropTypes.string,
  /** 連結的相關資料: 連結商品編號，為0則為全部商品連結，為空則為非商品連結  */
  linkData: PropTypes.string,
  /** 連結詳細資料 */
  linkDetail: PropTypes.shape({
    text: PropTypes.string,
    value: PropTypes.string,
    data: PropTypes.shape({
      meta: PropTypes.object,
      list: PropTypes.array,
    }),
  }),
  /** 目錄 or 非目錄 - 當選Yes時，需傳入children，NO時則吃 linkDetail資料 */
  folderSwitch: PropTypes.oneOf(['YES', 'NO']),
  /** 子選項 sub 當參數傳入目前使用storybook 會造成錯誤，無法攥寫範例 */
  sub: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string,
      link: PropTypes.string,
      linkData: PropTypes.string,
      sub: PropTypes.array,
    })
  ),
  /** 是否為當前頁面 */
  isCurrent: PropTypes.bool,
  /** 是否為透明色 */
  transparent: PropTypes.bool,
  /** 高度 */
  height: PropTypes.number,
  /** 最新消息資料(newEventList by the SiteContext)
   * ### 當 link 為 newEventview 時，需傳入 newEventList
   */
  newEventList: PropTypes.array,
  /** 跳轉 route 對應位置 */
  routeMap: PropTypes.object,
  /** history `umi` or `routes` */
  history: PropTypes.object,
  /** 跳轉連結處理 */
  handleLink: PropTypes.func,
};

MainMenuItem.defaultProps = {
  subMenuDark: false,
  color: null,
  textHoverColor: null,
  isBorderBottom: false,
  title: '',
  link: '',
  linkData: '',
  linkDetail: {},
  sub: [],
  folderSwitch: 'NO',
  height: 40,
  transparent: false,
  isCurrent: false,
  newEventList: [],
  routeMap: {},
  history: {},
  handleLink: () => {},
};

/**
 * MainMenu - [主要選單]
 */
function MainMenu(props) {
  const {
    subMenuDark,
    isBorderBottom,
    color,
    textHoverColor,
    height,
    transparent,
    className,
    wrapperClassName,
    list = [],
    location,
    newEventList,
    routeMap,
    isMainMenuItemActive,
    history,
  } = props;

  return (
    <div className={classNames(mainMenuStyled.mainMenuWrapper, wrapperClassName)}>
      <ul className={classNames(mainMenuStyled.mainMenu, className)}>
        {list.map(item => (
          <MainMenuItem
            key={item.mainId}
            subMenuDark={subMenuDark}
            isBorderBottom={isBorderBottom}
            color={color}
            textHoverColor={textHoverColor}
            height={height}
            transparent={transparent}
            isCurrent={isMainMenuItemActive(item, location.pathname)}
            {...item}
            newEventList={newEventList}
            routeMap={routeMap}
            history={history}
            handleLink={handleLink}
          />
        ))}
      </ul>
    </div>
  );
}

MainMenu.propTypes = {
  /** 子選單是否深色系 */
  subMenuDark: PropTypes.bool,
  /** 是否有底線樣式 */
  isBorderBottom: PropTypes.bool,
  /** 文字、底線顏色 */
  color: PropTypes.string,
  /** 子選單 文字hover用 */
  textHoverColor: PropTypes.string,
  /** 高度 */
  height: PropTypes.number,
  /** 是否為透明 */
  transparent: PropTypes.bool,
  /** 額外 className */
  className: PropTypes.string,
  /** 額外 wrapper className */
  wrapperClassName: PropTypes.string,
  /** 列表 */
  list: PropTypes.arrayOf(
    PropTypes.shape({
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
  /** window location */
  location: PropTypes.object,
  /** 最新消息資料(newEventList by the SiteContext) */
  newEventList: PropTypes.array,
  /** 跳轉 route 對應位置 */
  routeMap: PropTypes.object,
  /** isMainMenuItemActive 判斷是否正在當前頁面 function */
  isMainMenuItemActive: PropTypes.func,
  /** history `umi` or `routes` */
  history: PropTypes.object,
};

MainMenu.defaultProps = {
  subMenuDark: false,
  isBorderBottom: false,
  color: null,
  textHoverColor: null,
  className: null,
  wrapperClassName: null,
  height: 40,
  list: [],
  transparent: false,
  location: {},
  newEventList: [],
  routeMap: {},
  isMainMenuItemActive: () => false,
  history: {},
};

export default withRouter(MainMenu);
export { MainMenuItem };
