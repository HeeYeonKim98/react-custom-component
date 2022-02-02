import styled from "styled-components";

const LabelWrapper = styled.label`
  text-align: center;
  display: block;
  margin-bottom: 30px;
`;

const Label = styled.label`
  padding: 15px;
`;

const Input = styled.input`
  height: 25px;
`;

const ClickToEdit = ({ id, label }) => {
  return (
    <LabelWrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} />
    </LabelWrapper>
  );
};
export default ClickToEdit;
