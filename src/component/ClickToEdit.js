/* eslint-disable no-unused-expressions */
import React from "react";
import styled from "styled-components";
import useInput from "../hooks/useInput";
import useToggle from "../hooks/useToggle";

const LabelWrapper = styled.div`
  text-align: center;
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Label = styled.label`
  margin-right: 20px;
`;

const Input = styled.input`
  width: 150px;
  height: 25px;
  text-align: center;
`;

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
    <LabelWrapper>
      <Label htmlFor={id}>{label}</Label>
      {isEditing ? (
        <div
          onBlur={() => {
            setEditing(false);
          }}
          onBlur={onBlur}
        >
          <Input
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
    </LabelWrapper>
  );
};
export default ClickToEdit;
