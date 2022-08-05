/* eslint-disable no-shadow */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import navigationStyled from '../navigate.less';

const ListLink = styled.div`
  color: ${props => props.theme?.primaryColorText};
  &:hover {
    color: ${props => props.theme?.primaryColorTextHover};
  }
`;

/**
 * ListMenu 菜單選項
 */
const ListMenu = memo(({ column, history }) => (
  <ul className={navigationStyled.list}>
    {column.map((item) => {
      return (
        <div
          className={classNames(navigationStyled.listItem,
            {
              [navigationStyled.hasSub]: item.sub?.length > 0,
            })}
          onClick={event => {
            event.stopPropagation();
            event.preventDefault();
            history.push(item.url);
          }}
          key={item.url}
        >
          <ListLink
            className={classNames(navigationStyled.listLink)}
            key={item.url}
          >
            {item.title}
            {item.sub?.length > 0 && <ListMenu column={item.sub} history={history} />}
          </ListLink>
        </div>
      )
    })
    }
  </ul>
));

ListMenu.propTypes = {
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
  column: [],
  history: {},
};

export default ListMenu;
