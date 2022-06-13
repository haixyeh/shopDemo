import React from "react";
import styled from "styled-components";
import { useDrag } from "react-dnd";

const SideBarItemContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 100%;
  background-color: inherit;
  color: '#000';
  border-radius: 4px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  }
`
const SideBarItem = (props) => {
  const { data } = props;
  const [{ opacity }, drag] = useDrag({
    type: "sideBarItem",
    item: data,
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.4 : 1
    })
  });
  
  return (
    <SideBarItemContainer className="SideBarItem" ref={drag} style={{ opacity }}>
      {data?.component?.type}
    </SideBarItemContainer>
  );
};

export default SideBarItem;
