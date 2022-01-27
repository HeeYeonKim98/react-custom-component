import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  position: relative;
  text-align: center;
  display: inline-block;
`;

const Button = styled.button`
  border: 0;
  width: 230px;
  height: 50px;
  cursor: pointer;
  background: ${(props) => props.backgroundColor};
  float: left;
  &:focus {
    background: ${(props) => props.activeColor || "#309"};
    color: white;
  }
`;

export const Tabs = ({ children }) => {
  return (
    <ButtonWrapper>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child);
      })}
    </ButtonWrapper>
  );
};

export const Tab = ({ title, onClick, backgroundColor, activeColor }) => {
  return (
    <Button
      onClick={onClick}
      activeColor={activeColor}
      backgroundColor={backgroundColor}
    >
      {title}
    </Button>
  );
};
