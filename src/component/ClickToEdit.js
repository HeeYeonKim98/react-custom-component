import React from "react";
import styled from "styled-components";
import useToggle from "../hooks/useToggle";

// 전체 container
const Container = styled.div`
  text-align: center;
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  label {
    margin-right: 20px;
  }

  input {
    width: 150px;
    height: 25px;
    text-align: center;
  }
`;

// edited input
const Div = styled.div`
  border: 1px solid #c0c0c0;
  height: 25px;
  width: 150px;
`;

const ClickToEdit = ({
  id,
  label,
  type,
  onChange,
  value,
  name,
  placeholder,
  onBlur,
}) => {
  const [isEditing, setEditing] = useToggle(false);

  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      {isEditing ? (
        <div onBlur={() => setEditing(false)}>
          <input
            onBlur={onBlur}
            type={type}
            id={id}
            onChange={onChange}
            value={value}
            name={name}
          />
        </div>
      ) : (
        <Div onClick={() => setEditing(true)}>
          <span>{placeholder}</span>
        </Div>
      )}
    </Container>
  );
};
export default ClickToEdit;
