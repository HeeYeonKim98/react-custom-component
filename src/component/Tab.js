import React from "react";
import styled from "styled-components";
import useInput from "../hooks/useInput";

const UlWrapper = styled.ul`
  position: relative;
  display: inline-block;
  background-color: #dcdcdc;
  font-weight: bold;
  list-style: none;

  .submenu {
    display: flex;
    justify-content: center;
    flex-grow: 1;
    cursor: pointer;
  }

  .focused {
    background-color: blue;
    color: white;
    display: flex;
    align-items: center;
  }
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

export const Tab = ({ key, title, onClick, backgroundColor, activeColor }) => {
  const [state, , setState] = useInput(0);

  return (
    <List
      className={`${state === key ? "submenu focused" : "submenu"}`}
      onClick={onClick}
      activeColor={activeColor}
      backgroundColor={backgroundColor}
    >
      {title}
    </List>
  );
};
