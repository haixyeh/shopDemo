import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { Icon } from "antd";


const ScrollToTopElement = styled.a`
  position: fixed;
  bottom: 3%;
  right: 3%;
  font-size: 44px;
`;

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = useCallback(() => {
    if (!showScroll && window.pageYOffset > 100){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 100){
      setShowScroll(false)
    }
  }, [showScroll]);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
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
      <Icon type="up-circle" />
    </ScrollToTopElement>
  );
}

export default ScrollToTop;