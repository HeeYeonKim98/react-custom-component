import React from "react";
import styled from "styled-components";
import useInput from "../hooks/useInput";

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  border: 1px solid rgb(214, 216, 218);
  border-radius: 6px;
  &:focus-within {
    border: 1px solid #309;
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 8px 0 0 0;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  font-size: 14px;
  margin-left: 8px;
  &:focus {
    outline: transparent;
  }
`;

const List = styled.li`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 0 8px;
  font-size: 14px;
  list-style: none;
  border-radius: 6px;
  margin: 0 0 8px 8px;
  background: #309;
  .tag-title {
    margin-top: 3px;
  }
  .tag-close-icon {
    display: block;
    width: 16px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    font-size: 14px;
    margin-left: 8px;
    color: #0052cc;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
  }
`;

const Tag = ({ tags }) => {
  const [tag, , setTag] = useInput(tags);

  const removeTags = (indexToRemove) => {
    setTag([...tag.filter((_, index) => index !== indexToRemove)]);
  };

  const addTags = (event) => {
    if (event.target.value !== "") {
      setTag([...tag, event.target.value]);
      event.target.value = "";
    }
  };

  return (
    <Div>
      <Ul>
        {tag.map((value, index) => (
          <List key={index}>
            <span className="tag-title">{value}</span>
            <span className="tag-close-icon" onClick={() => removeTags(index)}>
              x
            </span>
          </List>
        ))}
      </Ul>
      <Input
        type="text"
        onKeyUp={(event) => (event.key === "Enter" ? addTags(event) : null)}
        placeholder="Press enter to add tags"
      />
    </Div>
  );
};
export default Tag;
