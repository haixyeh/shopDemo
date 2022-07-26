import React from 'react';
import { withRouter } from 'dva/router';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled, { css } from 'styled-components';
import Image from '../Image';
import MenuDropdownArrow from '../../assets/svg/menu-dropdown-arrow.svg';
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
    newEventList,
    routeMap,
    history,
    handleLink,
  } = props;
  const link = folderSwitch === 'YES' ? '' : rawLink;
  const dropdownMenu = useDropdownMenu();
  let selcategoryviewData;
  if (rawLink === 'selcategoryview') {
    selcategoryviewData =
      linkData === '0' ? linkDetail?.data?.list : linkDetail?.data?.list[0]?.sub;
  }

  // const {
  //   mainMenuStyle: { textImgColor },
  // } = useTheme();

  const colorSetting = transparent ? '#fff' : color;

  let hasDropdown = false;
  let dropdownEvent = null;
  let dropdownElement = null;
  switch (link) {
  /** 商品分類 */
  case 'selcategoryview': {
    hasDropdown = true;
    dropdownEvent = dropdownMenu.bindEvent();
    dropdownElement = (
      <>
        <Image
          src={MenuDropdownArrow}
          className={mainMenuStyled.dropdownArrow}
          color={colorSetting}
        />
        <MegaMenu
          className={classNames(mainMenuStyled.subMenu)}
          dark={subMenuDark}
          color={textHoverColor}
          data={selcategoryviewData}
          {...dropdownMenu.bindDropdownMenu()}
          history={history}
        />
      </>
    );
    break;
  }
  /** 最新消息 */
  case 'neweventview': {
    hasDropdown = true;
    dropdownEvent = dropdownMenu.bindEvent();
    dropdownElement = (
      <>
        <Image
          src={MenuDropdownArrow}
          className={mainMenuStyled.dropdownArrow}
          color={colorSetting}
        />
        <Navigation
          className={classNames(mainMenuStyled.subMenu)}
          dark={subMenuDark}
          color={textHoverColor}
          list={newEventList}
          listKey="mainId"
          showMore
          routeMap={routeMap}
          history={history}
          handleLink={handleLink}
          {...dropdownMenu.bindDropdownMenu()}
        />
      </>
    );
    break;
  }
  /** 有子選項 */
  case '': {
    hasDropdown = true;
    dropdownEvent = dropdownMenu.bindEvent();
    // header 資料裡面的 sub 資料
    dropdownElement = (
      <>
        <Image
          src={MenuDropdownArrow}
          className={mainMenuStyled.dropdownArrow}
          color={colorSetting}
        />
        <Navigation
          className={classNames(mainMenuStyled.subMenu)}
          dark={subMenuDark}
          color={textHoverColor}
          list={sub}
          listKey="subId"
          routeMap={routeMap}
          history={history}
          handleLink={handleLink}
          {...dropdownMenu.bindDropdownMenu()}
        />
      </>
    );
    break;
  }
  default:
    hasDropdown = false;
    break;
  }

  return (
    <MainMenuItemLi
      color={colorSetting}
      isBorderBottom={isBorderBottom}
      className={classNames(mainMenuStyled.item, {
        [mainMenuStyled.dropdown]: hasDropdown,
        active: isCurrent,
      })}
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
              history.push(routeMap[link]);
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
   * - `selcategoryview`: 商品分類（folderSwitch 需為 'NO'）
   * - `selcategory`: 末端商品分類
   * - `neweventview`: 最新消息
   * - `空`: 其它項目(需配合傳入 sub)
   * - `其它`: 其它項目(除上述項目外，傳入的 link)
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
   * ### 當 link 為 neweventview 時，需傳入 newEventList
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
    handleLink,
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
  /** 跳轉連結處理 */
  handleLink: PropTypes.func,
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
  handleLink: () => {},
};

export default withRouter(MainMenu);
export { MainMenuItem };
