import React from "react";
import styled from "styled-components";
import useInput from "../hooks/useInput";

// tab container style
const Ul = styled.ul`
  height: 50px;
  background-color: ${(props) => props.backgroundcolor || "#dcdcdc"};
  color: rgba(73, 73, 73, 0.5);
  font-weight: bold;
  display: flex;
  flex-direction: row;
  list-style: none;

  // tab not active
  .submenu {
    display: flex;
    justify-content: center;
    flex-grow: 1;
    cursor: pointer;
  }

  // tab active
  .focused {
    background: ${(props) => props.activecolor || "#309"};
    color: white;
    height: 100%;
    display: flex;
    align-items: center;
    transition: 0.7s;
  }
`;

// tab style
const List = styled.li`
  width: 240px;
  align-items: center;
`;

const Tab = ({ tabs, backgroundcolor, activecolor }) => {
  const [state, , setState] = useInput(0);

  return (
    <>
      <Ul>
        {tabs.map((value, index) => (
          <List
            key={index}
            className={`${index === state ? "submenu focused" : "submenu"}`}
            onClick={() => setState(index)}
            activecolor={activecolor}
            backgroundcolor={backgroundcolor}
          >
            {value.name}
          </List>
        ))}
      </Ul>
      <p>Tab menu {tabs[state].content}</p>
    </>
  );
};

export default Tab;
