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
    background-color: ${(props) => props.onColor || "#309"};

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
  background-color: ${(props) => props.offColor || "#dcdcdc"};
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
    background: ${(props) => props.circleColor || "#fff"};
    box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2);
  }
`;

const Toggle = ({
  onChange,
  onColor,
  offColor,
  circleColor,
  disabled = false,
}) => {
  return (
    <InputWrapper>
      <Input
        type="checkbox"
        onChange={onChange}
        onColor={onColor}
        disabled={disabled}
      />
      <Span offColor={offColor} circleColor={circleColor} />
    </InputWrapper>
  );
};

export default Toggle;
