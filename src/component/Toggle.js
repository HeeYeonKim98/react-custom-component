import styled from "styled-components";

const InputWrapper = styled.label`
  position: relative;
  text-align: center;
  display: inline-block;
`;

const Input = styled.input`
  position: absolute;
  left: -9999px;
  top: -9999px;

  &:checked + span {
    background-color: #309;

    &:before {
      left: 27px;
    }
  }
`;

const Span = styled.span`
  display: flex;
  cursor: pointer;
  width: 52px;
  height: 27px;
  border-radius: 100px;
  background-color: #dcdcdc;
  position: relative;
  transition: backgroud-color 0.2s;
  &:before {
    content: "";
    position: absolute;
    top: 4px;
    left: 6px;
    width: 20px;
    height: 20px;
    border-radius: 45px;
    transition: 0.2s;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2);
  }
`;

const Toggle = ({ onChange }) => {
  return (
    <InputWrapper>
      <Input type="checkbox" onChange={onChange} />
      <Span />
    </InputWrapper>
  );
};

export default Toggle;
