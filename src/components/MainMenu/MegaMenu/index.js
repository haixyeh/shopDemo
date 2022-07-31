/* eslint-disable no-shadow */
import React, { useState, useReducer } from 'react';
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

const initialMenuPageState = 1;

const menuStepActionType = {
  PREV: 'PREV',
  NEXT: 'NEXT',
  RESET: 'RESET',
};

const menuStepReducer = maxPageStep => (currentStep, action) => {
  let newState = currentStep;
  switch (action.type) {
  case menuStepActionType.PREV: {
    if (currentStep > 1) {
      newState = currentStep - 1;
    }
    break;
  }
  case menuStepActionType.NEXT: {
    if (currentStep < maxPageStep) {
      newState = currentStep + 1;
    }
    break;
  }
  case menuStepActionType.RESET: {
    newState = initialMenuPageState;
    break;
  }
  default:
  }

  return newState;
};

/** MegaMenu - [下拉選單(連結) 多層級子項目] */
const MegaMenu = props => {
  const { dark, color, data, onClose, className, active, history } = props; // NOTE: active 為 workaround
  const [lock, setLock] = useState(false);
  const [title, setTitle] = useState({ text: '', link: '' });

  const [levelState, send] = useMachine(levelMachine);
  const level0 = levelState.value === levelStateEnum.SHOW_LV0_MENU;
  const level1 = levelState.value === levelStateEnum.SHOW_LV1_MENU;
  const level2 = levelState.value === levelStateEnum.SHOW_LV2_MENU;

  const [currentLv0ColumnIndex, setCurrentLv0ColumnIndex] = useState();
  const [currentLv0ItemIndex, setCurrentLv0ItemIndex] = useState();
  const [currentLv1MenuOffset, setCurrentLv1MenuOffset] = useState(0);

  const [currentLv1ColumnIndex, setCurrentLv1ColumnIndex] = useState();
  const [currentLv1ItemIndex, setCurrentLv1ItemIndex] = useState();
  const [currentLv2MenuOffset, setCurrentLv2MenuOffset] = useState(0);

  const lv0Columns = groupDataToColumns(data);
  const lv1Columns = groupDataToColumns(lv0Columns[currentLv0ColumnIndex]?.[currentLv0ItemIndex].sub);
  const lv2Columns = groupDataToColumns(lv1Columns[currentLv1ColumnIndex]?.[currentLv1ItemIndex]?.sub);

  const wrapperWidth =
    (level0 && calculateWrapperWidth('0', lv0Columns)) ||
    (level1 && calculateWrapperWidth('1', lv1Columns)) ||
    (level2 && calculateWrapperWidth('2', lv2Columns));

  const enableLv0MenuPagination = lv0Columns.length > 4; // lv0 超過 4 行就顯示下方分頁器
  const maxLv0MenuPageStep = enableLv0MenuPagination ? lv0Columns.length - 3 : '-';
  const [lv0MenuPageStep, dispatchLv0MenuPageStep] = useReducer(
    menuStepReducer(maxLv0MenuPageStep),
    initialMenuPageState
  );

  const resetLv0Page = () => dispatchLv0MenuPageStep({ type: menuStepActionType.RESET });
  const transformLv0XPosition = (lv0MenuPageStep - 1) * 260;

  const enableLv1MenuPagination = lv1Columns.length > 3; // lv1 超過 3 行就顯示下方分頁器
  const maxLv1MenuPageStep = enableLv1MenuPagination ? lv1Columns.length - 2 : '-';
  const [lv1MenuPageStep, dispatchLv1MenuPageStep] = useReducer(
    menuStepReducer(maxLv1MenuPageStep),
    initialMenuPageState
  );

  const resetLv1Page = () => dispatchLv1MenuPageStep({ type: menuStepActionType.RESET });
  const transformLv1XPosition = (lv1MenuPageStep - 1) * 260;

  const enableLv2MenuPagination = lv2Columns.length > 3; // lv2 超過 3 行就顯示下方分頁器
  const maxLv2MenuPageStep = enableLv2MenuPagination ? lv2Columns.length - 2 : '-';
  const [lv2MenuPageStep, dispatchLv2MenuPageStep] = useReducer(
    menuStepReducer(maxLv2MenuPageStep),
    initialMenuPageState
  );

  const resetLv2Page = () => dispatchLv2MenuPageStep({ type: menuStepActionType.RESET });
  const transformLv2XPosition = (lv2MenuPageStep - 1) * 260;

  const nested = level1 || level2;

  const titleElement = (
    <div
      className={classNames(navigationStyled.title, {
        [navigationStyled.active]: nested,
      })}
    >
      <ListLink
        href={title.link}
        className={classNames(navigationStyled.text)}
        primary={{ color }}
        onClick={event => {
          event.preventDefault();
          history.push(title.link);
        }}
      >
        {title.text}
      </ListLink>
    </div>
  );


  const resetPagination = () => {
    resetLv0Page();
    resetLv1Page();
    resetLv2Page();
  };

  const handleCloseButtonClick = () => {
    resetPagination();
    send(levelEventEnum.CLOSE);
  };

  const handleOnClose = () => {
    if (lock) {
      return;
    }
    resetPagination();
    send(levelEventEnum.RESET);
    if (onClose) onClose();
  };

  const closeButton = (
    <div
      className={classNames(navigationStyled.close, {
        [navigationStyled.active]: nested,
      })}
      onClick={handleCloseButtonClick}
    >
      <SVGIcon type="CloseGray" className={classNames(navigationStyled.icon)} />
    </div>
  );

  const handleLv0ListItemClick = (title, link, columnIndex, itemIndex) => e => {
    e.stopPropagation();
    resetPagination();
    setTitle({ text: title, link });
    setCurrentLv0ItemIndex(itemIndex);
    setCurrentLv0ColumnIndex(columnIndex);
    setCurrentLv1MenuOffset(itemIndex * -34 + 34);
    send(levelEventEnum.NEXT_LEVEL);
  };

  const handleCurrentLv0ListItemClick = (title, link, columnIndex, itemIndex) => e => {
    e.stopPropagation();
    resetPagination();
    setTitle({ text: title, link });
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
    resetPagination();
    setTitle({ text: title, link });
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
      style={{ transform: `translateX(-${transformLv0XPosition}px)` }}
    >
      <ul className={classNames('list')}>
        {listItems.map((item, index) => lv0ListElement(item, columnIndex, index))}
      </ul>
    </li>
  );

  const lv1ColumnElement = (listItems, columnIndex) => {
    let transform;
    if (level1) transform = transformLv1XPosition;
    else if (level2) transform = transformLv2XPosition;
    return (
      <li
        key={`lv1-column-${columnIndex}`}
        className={classNames(navigationStyled.listColumn)}
        style={{ transform: `translateX(-${transform}px)` }}
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
        key={`${currentLv0ColumnIndex}-${itemIndex}-${link}-${JSON.stringify(lv2Columns)}`}
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

  const currentLvColumnElement = listItems => (
    <li className={classNames(navigationStyled.listColumn, navigationStyled.active)}>
      <ul className={classNames(navigationStyled.list)}>
        {listItems?.map((item, index) => currentLv0ListElement(item, index))}
      </ul>
    </li>
  );

  const lvMenu = (lvIndex) => {
    const lvColumns = {
      '0': lv0Columns.map((item, index) => lv0ColumnElement(item, index)),
      '1': currentLvColumnElement(lv0Columns[currentLv0ColumnIndex]),
      '2': currentLvColumnElement(lv1Columns[currentLv1ColumnIndex])
    };
    return (
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
    )
  }

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
        
        {titleElement}
        {closeButton}
        {level0 && lvMenu(0)}
        {level1 && lvMenu(1)}
        {level2 && lvMenu(2)}
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
