/* eslint-disable no-shadow */
import React, { useState, memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from 'antd';
import chunk from 'lodash/chunk';
import classNames from 'classnames';
import { createMachine } from '@xstate/fsm';
import { useMachine } from '@xstate/react/lib/fsm';
import SVGIcon from '../../SVGIcon';
import navigationStyled from '../navigate.less';

const ListLabel = styled.span`
  &:hover {
    color: ${props => props.primary?.color || props.theme?.color};
  }
`;
const ListLink = styled.a`
  &:hover {
    color: ${props => props.primary?.color || props.theme?.color};
  }
`;

/** 將資料分成10個一組(欄) */
function groupDataToColumns(data) {
  return chunk(data, 10);
}

const setTitleMethod = ({title, link, idx}) => preTitle => {
  preTitle.splice(idx, 1, { text: title, link });
  return preTitle;
}

const levelStateEnum = {
  SHOW_LV0_MENU: 'SHOW_LV0_MENU',
  SHOW_LV1_MENU: 'SHOW_LV1_MENU',
  SHOW_LV2_MENU: 'SHOW_LV2_MENU',
};

const levelEventEnum = {
  CLOSE: 'CLOSE',
  NEXT_LEVEL: 'NEXT_LEVEL',
  RESET: 'RESET',
};

// 頁面標題(第二頁之後才有)
const TitleElement = memo(({ nested, text, link, color, history }) => (
  <div
    className={classNames(navigationStyled.title, {
      [navigationStyled.active]: nested,
    })}
  >
    <ListLink
      href={link}
      className={classNames(navigationStyled.text)}
      primary={{ color }}
      onClick={event => {
        event.preventDefault();
        history.push(link);
      }}
    >
      {text}
    </ListLink>
  </div>
));

// 不同層級的頁面顯示
const LvMenu = memo(({ lvIndex, lvColumns }) => ((
  <>
    <ul
      className={classNames(
        navigationStyled.list,
        navigationStyled.level,
        navigationStyled.level0,
        {
          [navigationStyled.listExpanded]: lvIndex !== 0
        }
      )}
    >
      {lvColumns[lvIndex]}
    </ul>
  </>
)));

// 關閉按鈕
const CloseButton = memo(({ nested, handleCloseButtonClick }) => (
  <div
    className={classNames(navigationStyled.close, {
      [navigationStyled.active]: nested,
    })}
    onClick={handleCloseButtonClick}
  >
    <SVGIcon type="CloseGray" className={classNames(navigationStyled.icon)} />
  </div>
));

const levelMachine = createMachine({
  id: 'megaMenu',
  initial: levelStateEnum.SHOW_LV0_MENU,
  states: {
    [levelStateEnum.SHOW_LV0_MENU]: {
      on: {
        [levelEventEnum.NEXT_LEVEL]: levelStateEnum.SHOW_LV1_MENU,
      },
    },
    [levelStateEnum.SHOW_LV1_MENU]: {
      on: {
        [levelEventEnum.NEXT_LEVEL]: levelStateEnum.SHOW_LV2_MENU,
        [levelEventEnum.CLOSE]: levelStateEnum.SHOW_LV0_MENU,
        [levelEventEnum.RESET]: levelStateEnum.SHOW_LV0_MENU,
      },
    },
    [levelStateEnum.SHOW_LV2_MENU]: {
      on: {
        [levelEventEnum.CLOSE]: levelStateEnum.SHOW_LV1_MENU,
        [levelEventEnum.RESET]: levelStateEnum.SHOW_LV0_MENU,
      },
    },
  },
});

/** 計算 wrapper 寬度 */
function calculateWrapperWidth(level, columns) {
  const columnLength = columns.length;
  let maxColumnLength;
  if (level === '0') {
    // eslint-disable-next-line no-unused-expressions
    columnLength > 4 ? (maxColumnLength = 4) : (maxColumnLength = columnLength);
  } else {
    // eslint-disable-next-line no-unused-expressions
    columnLength > 2 ? (maxColumnLength = 4) : (maxColumnLength = columnLength + 1);
  }
  const width = maxColumnLength * 230;
  return width;
}

/** MegaMenu - [下拉選單(連結) 多層級子項目] */
const MegaMenu = props => {
  const { dark, color, data, onClose, className, active, history } = props; // NOTE: active 為 workaround
  const [lock, setLock] = useState(false);
  const [titleMap, setTitle] = useState(Array(3).fill({link: '', text: ''}));

  const [levelState, send] = useMachine(levelMachine);

  const level0 = levelState.value === levelStateEnum.SHOW_LV0_MENU;
  const level1 = levelState.value === levelStateEnum.SHOW_LV1_MENU;
  const level2 = levelState.value === levelStateEnum.SHOW_LV2_MENU;
  const currentPageIdx =  [level0, level1, level2].findIndex(item => !!item);


  const [currentLv0ColumnIndex, setCurrentLv0ColumnIndex] = useState();
  const [currentLv0ItemIndex, setCurrentLv0ItemIndex] = useState();
  const [currentLv1MenuOffset, setCurrentLv1MenuOffset] = useState(0);

  const [currentLv1ColumnIndex, setCurrentLv1ColumnIndex] = useState();
  const [currentLv1ItemIndex, setCurrentLv1ItemIndex] = useState();
  const [currentLv2MenuOffset, setCurrentLv2MenuOffset] = useState(0);

  const lv0Columns = groupDataToColumns(data);
  const lv1Columns = groupDataToColumns(lv0Columns[currentLv0ColumnIndex]?.[currentLv0ItemIndex].sub);
  const lv2Columns = groupDataToColumns(lv1Columns[currentLv1ColumnIndex]?.[currentLv1ItemIndex]?.sub);

  const calculateWrapperWidthMap = [calculateWrapperWidth('0', lv0Columns), calculateWrapperWidth('1', lv1Columns), calculateWrapperWidth('2', lv2Columns)]
  const wrapperWidth = calculateWrapperWidthMap[currentPageIdx];
  const nested = currentPageIdx > 0;

  const handleCloseButtonClick = useCallback(() => {
    send(levelEventEnum.CLOSE);
  }, [send]);

  const handleOnClose = () => {
    if (lock) return;
    send(levelEventEnum.RESET);
    if (onClose) onClose();
  };


  const handleLv0ListItemClick = (title, link, columnIndex, itemIndex) => e => {
    e.stopPropagation();
    setTitle(setTitleMethod({title, link, idx: 0}));
    setCurrentLv0ItemIndex(itemIndex);
    setCurrentLv0ColumnIndex(columnIndex);
    setCurrentLv1MenuOffset(itemIndex * -34 + 34);
    send(levelEventEnum.NEXT_LEVEL);
  };

  const handleCurrentLv0ListItemClick = (title, link, columnIndex, itemIndex) => e => {
    e.stopPropagation();
    setTitle(setTitleMethod({title, link, idx: 1}));
    if (level1) {
      setCurrentLv0ItemIndex(itemIndex);
      setCurrentLv0ColumnIndex(columnIndex);
      setCurrentLv1MenuOffset(itemIndex * -34 + 34);
    } else if (level2) {
      setCurrentLv1ItemIndex(itemIndex);
      setCurrentLv1ColumnIndex(columnIndex);
      setCurrentLv2MenuOffset(itemIndex * -34 + 34);
    }
  };

  const handleCurrentLv1ListItemClick = (title, link, columnIndex, itemIndex) => e => {
    e.stopPropagation();
    setTitle(setTitleMethod({title, link, idx: 2}));
    setCurrentLv1ItemIndex(itemIndex);
    setCurrentLv1ColumnIndex(columnIndex);
    setCurrentLv2MenuOffset(itemIndex * -34 + 34);
    send(levelEventEnum.NEXT_LEVEL);
  };

  const lv0ListElement = ({ title, url: link, sub }, columnIndex, itemIndex) => {
    const hasSub = sub?.length > 0;
    const handleClick = hasSub
      ? handleLv0ListItemClick(title, link, columnIndex, itemIndex)
      : undefined;
    return (
      <li
        key={`${columnIndex}-${itemIndex}-${link}`}
        className={classNames(navigationStyled.listItem, {
          [navigationStyled.hasSub]: hasSub,
        })}
        onClick={handleClick}
      >
        {hasSub ? (
          <ListLabel className={classNames(navigationStyled.listLabel)} primary={{ color }}>
            {title}
          </ListLabel>
        ) : (
          <ListLink
            href={link}
            className={classNames(navigationStyled.listLink)}
            primary={{ color }}
            onClick={event => {
              event.preventDefault();
              history.push(link);
            }}
          >
            {title}
          </ListLink>
        )}
      </li>
    );
  };

  const lv1ListElement = ({ title, url: link, sub }, columnIndex, itemIndex) => {
    const hasSub = sub?.length > 0;
    const handleClick = hasSub
      ? handleCurrentLv1ListItemClick(title, link, columnIndex, itemIndex)
      : undefined;
    return (
      <li
        key={`${columnIndex}-${itemIndex}-${link}`}
        className={classNames(navigationStyled.listItem, {
          [navigationStyled.hasSub]: hasSub,
        })}
        onClick={handleClick}
      >
        {hasSub ? (
          <ListLabel className={classNames(navigationStyled.listLabel)} primary={{ color }}>
            {title}
          </ListLabel>
        ) : (
          <ListLink
            href={link}
            className={classNames(navigationStyled.listLink)}
            primary={{ color }}
            onClick={event => {
              event.preventDefault();
              history.push(link);
            }}
          >
            {title}
          </ListLink>
        )}
      </li>
    );
  };

  const lv0ColumnElement = (listItems, columnIndex) => (
    <li
      key={`lv0-column-${columnIndex}-${listItems.linkData}`}
      className={classNames(navigationStyled.listColumn)}
    >
      <ul className={classNames('list')}>
        {listItems.map((item, index) => lv0ListElement(item, columnIndex, index))}
      </ul>
    </li>
  );

  const lv1ColumnElement = (listItems, columnIndex) => {
    return (
      <li
        key={`lv1-column-${columnIndex}`}
        className={classNames(navigationStyled.listColumn)}
      >
        <ul className={classNames('list')}>
          {listItems.map((item, index) => lv1ListElement(item, columnIndex, index))}
        </ul>
      </li>
    );
  };

  const currentLv0ListElement = ({ title, url: link, sub }, itemIndex) => {
    const hasSub = sub?.length > 0;
    let currentLevelColumnIndex;
    let menuOffset;
    let active;
    let childMenu;
    if (level1) {
      menuOffset = currentLv1MenuOffset;
      currentLevelColumnIndex = currentLv0ColumnIndex;
      active = itemIndex === currentLv0ItemIndex;
      childMenu = lv1Columns;
    } else if (level2) {
      menuOffset = currentLv2MenuOffset;
      currentLevelColumnIndex = currentLv1ColumnIndex;
      active = itemIndex === currentLv1ItemIndex;
      childMenu = lv2Columns;
    }

    const handleClick = hasSub
      ? handleCurrentLv0ListItemClick(title, link, currentLevelColumnIndex, itemIndex)
      : undefined;

    return (
      <li
        key={`${currentLv0ColumnIndex}-${itemIndex}-${link}`}
        className={classNames(navigationStyled.listItem, {
          [navigationStyled.hasSub]: hasSub,
          [navigationStyled.active]: active,
        })}
        onClick={handleClick}
      >
        {hasSub ? (
          <>
            <ListLabel className={classNames(navigationStyled.listLabel)} primary={{ color }}>
              {title}
            </ListLabel>
            <ul
              className={classNames(
                navigationStyled.list,
                navigationStyled.level,
                navigationStyled.level1
              )}
              style={{ top: menuOffset }}
            >
              {childMenu?.map((item, index) => lv1ColumnElement(item, index))}
            </ul>
          </>
        ) : (
          <ListLink
            href={link}
            className={classNames(navigationStyled.listLink)}
            primary={{ color }}
            onClick={event => {
              event.preventDefault();
              history.push(link);
            }}
          >
            {title}
          </ListLink>
        )}
      </li>
    );
  };

  const currentLvColumnElement = (listItems => (
    <li className={classNames(navigationStyled.listColumn, navigationStyled.active)}>
      <ul className={classNames(navigationStyled.list)}>
        {listItems?.map((item, index) => currentLv0ListElement(item, index))}
      </ul>
    </li>
  ));

  const lvColumns = [
    lv0Columns.map((item, index) => lv0ColumnElement(item, index)),
    currentLvColumnElement(lv0Columns[currentLv0ColumnIndex]),
    currentLvColumnElement(lv1Columns[currentLv1ColumnIndex])
  ];

  return (
    <div
      className={classNames(
        navigationStyled.navigate,
        navigationStyled.mega,
        {
          [navigationStyled.active]: active || lock, // NOTE: workaround
        },
        className
      )}
      onMouseLeave={handleOnClose}
    >
      <div
        className={classNames(navigationStyled.wrapper, {
          [navigationStyled.dark]: dark,
          [navigationStyled.nested]: nested,
          [navigationStyled.expanded]: nested,
        })}
        style={{ width: wrapperWidth }}
      >
        <TitleElement
          nested={nested}
          color={color}
          history={history}
          text={titleMap[currentPageIdx].text}
          link={titleMap[currentPageIdx].link}
        />
        <CloseButton nested={nested} handleCloseButtonClick={handleCloseButtonClick} />
        <LvMenu lvIndex={currentPageIdx} lvColumns={lvColumns} />
        <Icon
          type={lock ? 'lock' : 'unlock'}
          className={
            classNames(navigationStyled.lockIcon, {
              [navigationStyled.isLock]: !!lock
            })}
          onClick={() => setLock(!lock)}
        />
      </div>
    </div>
  );
};

MegaMenu.propTypes = {
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
  /** mouseleave 觸發關閉事件 */
  onClose: PropTypes.func,
  /** 額外 classname */
  className: PropTypes.string,
  /** history */
  history: PropTypes.object,
};

MegaMenu.defaultProps = {
  dark: false,
  color: null,
  active: false,
  data: [],
  onClose: () => {},
  className: null,
  history: {},
};

export default MegaMenu;
