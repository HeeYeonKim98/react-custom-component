import styled from "styled-components";

const Input = styled.input`
  border-radius: 10px;
  border-color: #dcdcdc;
  width: 100%;
  height: 40px;
`;

const AutoComplete = () => {
  return (
    <>
      <Input type="text" list="search-bar" />
      <datalist id="search-bar">
        <option value="김희연" />
      </datalist>
    </>
  );
};
export default AutoComplete;
