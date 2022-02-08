import { useEffect, useState } from "react";

import styled from "styled-components";

// input창 container
const InputContainer = styled.div`
  background-color: #fff;
  display: flex;
  padding: 1rem;
  border: 1px solid #cdcdcd;
  border-radius: 1rem;

  &:focus-within {
    box-shadow: 0 4px 6px rgb(32 33 36 / 28%);
    border-radius: 1rem 1rem 0 0;
  }

  > input {
    flex: 1 0 0;
    border: none;
    outline: none;
    font-size: 16px;
  }

  > div.delete-button {
    cursor: pointer;
  }
`;

// drop-down container
const DropDownContainer = styled.ul`
  background-color: #fff;
  display: block;
  list-style: none;
  margin-top: -1px;
  padding: 0.7rem 0;
  border: 1px solid rgb(223, 223, 223);
  border-radius: 0 0 1rem 1rem;
  box-shadow: 0 4px 6px rgb(32 33 36 / 28%);

  > li:hover {
    background-color: #dddddd;
  }

  > li {
    &.selected {
      background-color: #dddddd;
    }
  }
`;

const DropDown = ({ datalist, onClick, selected }) => {
  return (
    <DropDownContainer>
      {datalist.map((option, index) => {
        return (
          <li
            key={index}
            onClick={() => onClick(option)}
            className={selected === index ? "selected" : ""}
          >
            {option}
          </li>
        );
      })}
    </DropDownContainer>
  );
};

const AutoComplete = ({ data }) => {
  const [autoComplete, setAutoComplete] = useState(false); // drop-down 활성화
  const [dataList, setDataList] = useState(data); // data 담을 state
  const [text, setText] = useState(""); // input창 state
  const [selected] = useState(-1); // drop-down에서 선택한 state

  useEffect(() => {
    if (text === "") {
      setAutoComplete(false);
      setDataList([]);
    } else {
      setDataList(
        data.filter((value) => {
          return value.includes(text);
        })
      );
    }
  }, [text, data]);

  const handleInputChange = (event) => {
    setText(event.target.value);
    setAutoComplete(true);
  };

  return (
    <>
      <InputContainer>
        <input
          type="text"
          value={text}
          defaultValue={text}
          onChange={handleInputChange}
          onKeyUp={handleInputChange}
        ></input>
        <div className="delete-button" onClick={() => setText("")}>
          &times;
        </div>
      </InputContainer>

      {autoComplete && (
        <DropDown
          datalist={dataList}
          onClick={(option) => setText(option)}
          selected={selected}
        />
      )}
    </>
  );
};

export default AutoComplete;
