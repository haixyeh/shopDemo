/* eslint-disable no-shadow */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
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

/**
 * ListMenu 菜單選項
 */
const ListMenu = memo(({ column, history, color }) => (
  <ul className={navigationStyled.list}>
    {column.map((item) => {
      return (
        <div className={classNames(navigationStyled.listItem,
          {
            [navigationStyled.hasSub]: item.sub?.length > 0,
          })}
        >
          {item.sub?.length > 0 &&
          <ListLabel
            className={classNames(navigationStyled.listLabel)}
            key={item.url}
            primary={{ color }}
            onClick={event => {
              event.preventDefault();
              history.push(item.url);
            }}
          >
            {item.title}
            <ListMenu column={item.sub} history={history} color={color} />
          </ListLabel>
          }
          {item.sub?.length <= 0 && 
          <ListLink
            className={classNames(navigationStyled.text)}
            key={item.url}
            onClick={event => {
              event.preventDefault();
              history.push(item.url);
            }}
          >
            {item.title}
          </ListLink>
          }
        </div>
      )
    })
    }
  </ul>
));

ListMenu.propTypes = {
  /** color `文字hover用` */
  color: PropTypes.string,
  /** 選單資料 */
  column: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string,
      linkData: PropTypes.string,
      sub: PropTypes.array,
    })
  ),
  /** history */
  history: PropTypes.object,
};

ListMenu.defaultProps = {
  color: null,
  column: [],
  history: {},
};

export default ListMenu;
