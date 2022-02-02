import React from "react";
import styled from "styled-components";

const UlWrapper = styled.ul`
  position: relative;
  display: inline-block;
  background-color: #dcdcdc;
  font-weight: bold;
  list-style: none;
`;

const List = styled.li`
  width: 220px;
  height: 50px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  background: ${(props) => props.backgroundColor || "#dcdcdc"};
  float: left;
  padding: 0 10px;
  &:active,
  &:focus {
    background: ${(props) => props.activeColor || "#309"};
    color: white;
  }
`;

export const Tabs = ({ children }) => {
  return (
    <UlWrapper>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child);
      })}
    </UlWrapper>
  );
};

export const Tab = ({ title, onClick, backgroundColor, activeColor }) => {
  return (
    <List
      onClick={onClick}
      activeColor={activeColor}
      backgroundColor={backgroundColor}
    >
      {title}
    </List>
  );
};
