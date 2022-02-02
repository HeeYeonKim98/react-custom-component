import styled from "styled-components";
import useToggle from "../hooks/useToggle";

const ModalButton = styled.button`
  border-radius: 30px;
  width: 120px;
  height: 60px;
  color: ${(props) => props.textColor || "#fff"};
  background: ${(props) => props.backgroundColor || "#309"};
  border: 0;
`;

const Background = styled.div`
  background: rgba(0, 0, 0, 0.55);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: white;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 15px;
  border-radius: 10px;
  width: 25%;
  height: 10%;
`;

const ModalContent = styled.div`
  p {
    color: #309;
    margin-top: 25px;
  }
  button {
    border: 0;
    background-color: transparent;
    font-size: 3px;
    font-weight: bold;
    cursor: pointer;
  }
`;

const Modal = ({ title, children, textColor, backgroundColor }) => {
  const [toggle, setToggle] = useToggle(false);

  const onClickCloseButton = () => {
    document.body.style.overflow = "unset";
    setToggle();
  };

  return (
    <>
      <ModalButton
        textColor={textColor}
        backgroundColor={backgroundColor}
        onClick={() => setToggle()}
      >
        {title}
      </ModalButton>

      {toggle && (document.body.style.overflow = "hidden") && (
        <Background>
          <ModalContainer>
            <ModalContent>
              <button onClick={onClickCloseButton}>X</button>
              {children}
            </ModalContent>
          </ModalContainer>
        </Background>
      )}
    </>
  );
};
export default Modal;
