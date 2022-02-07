import styled from "styled-components";

const ToggleWrapper = styled.label`
  position: relative;
  text-align: center;
  display: inline-block;

  // toggle background
  > input {
    position: absolute;
    left: -9999px;
    top: -9999px;

    &:checked + span {
      background-position: left;
      background: linear-gradient(to right, #309 50%, #dcdcdc 50%) left;
      transition: 0.8s;
      background-size: 200%;

      &:before {
        left: 30px;
      }
    }
  }

  // toggle circle
  > span {
    display: flex;
    cursor: pointer;
    width: 55px;
    height: 29px;
    border-radius: 100px;
    position: relative;
    background-position: right;
    background: linear-gradient(to left, #dcdcdc 50%, #309 50%) right;
    background-size: 200%;
    transition: 0.8s;

    &:before {
      content: "";
      position: absolute;
      top: 4.5px;
      left: 5px;
      width: 20px;
      height: 20px;
      border-radius: 45px;
      transition: 0.6s;
      background: ${(props) => props.circleColor || "#fff"};
    }
  }
`;

const Toggle = ({ onChange, circleColor, disabled = false }) => {
  return (
    <ToggleWrapper>
      <input type="checkbox" onChange={onChange} disabled={disabled} />
      <span circleColor={circleColor} />
    </ToggleWrapper>
  );
};

export default Toggle;
