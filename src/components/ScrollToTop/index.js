import React, { useState, useEffect, useCallback } from "react";
import PropTypes from 'prop-types';
import { router } from "dva";
import styled from "styled-components";
import { UpCircleOutlined } from '@ant-design/icons';

const { withRouter } = router;

const ScrollToTopElement = styled.a`
  position: fixed;
  bottom: 3%;
  right: 3%;
  font-size: 44px;
  svg {
    background-color: #4C4C4C;
    border-radius: 99em;
    opacity: 0.8;
    box-shadow: 1px 1px #4C4C4C;
  }
  a {
    color: ${props => props.theme?.primaryColor };
  }
`;

const ScrollToTop = ({ history }) => {
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = useCallback(() => {
    if (!showScroll && window.pageYOffset > 100){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 100){
      setShowScroll(false)
    }
  }, [showScroll]);

  useEffect(() => {
    const unListen = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unListen();
    }
  }, [history]);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);

    return () => {
      window.removeEventListener('scroll', checkScrollTop)
    }
  }, [checkScrollTop]);

  const scrollTop = () =>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ScrollToTopElement
      className="scrollTop"
      onClick={scrollTop}
      style={{height: 40, display: showScroll ? 'flex' : 'none'}}
    >
      <UpCircleOutlined />
    </ScrollToTopElement>
  );
}

ScrollToTop.propTypes = {
  history: PropTypes.object.isRequired,
}

export default withRouter(ScrollToTop);