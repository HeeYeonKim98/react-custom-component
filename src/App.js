import "./App.css";

import AutoComplete from "./component/AutoComplete";
import ClickToEdit from "./component/ClickToEdit";
import Modal from "./component/Modal";
import React from "react";
import Tab from "./component/Tab";
import Tag from "./component/Tag";
import Toggle from "./component/Toggle";
import styled from "styled-components";
import useInput from "./hooks/useInput";
import useToggle from "./hooks/useToggle";

const Container = styled.div`
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  box-shadow: 1px 1px 2px 0 rgb(0 0 0 / 10%);
  padding: 12px;
  width: 50%;
  margin-bottom: 70px;
`;

const ComponentWrapper = styled.div`
  text-align: center;
  padding: 100px 0;
`;

const App = () => {
  const [toggle, setToggle] = useToggle(false);
  const [tab, onChangeTab, setTab] = useInput("ONE");

  return (
    <div>
      <h2 className="app-title">✅ Custom Component</h2>

      {/* Toggle Component */}
      <Container>
        <span className="app-content">Toggle</span>
        <ComponentWrapper>
          <Toggle onChange={setToggle} />
          <p>Toggle Switch {toggle ? "ON" : "OFF"}</p>
        </ComponentWrapper>
      </Container>

      {/* Modal Component */}
      <Container>
        <span className="app-content">Modal</span>
        <ComponentWrapper>
          <Modal />
        </ComponentWrapper>
      </Container>

      {/* Tab Component */}
      <Container>
        <span className="app-content">Tab</span>
        <ComponentWrapper>
          <Tab onChange={setTab} />
          <p>Tab menu {tab}</p>
        </ComponentWrapper>
      </Container>

      {/* Tag Component */}
      <Container>
        <span className="app-content">Tag</span>
        <ComponentWrapper>
          <Tag />
        </ComponentWrapper>
      </Container>

      {/* AutoComplete Component */}
      <Container>
        <span className="app-content">AutoComplete</span>
        <ComponentWrapper>
          <AutoComplete />
        </ComponentWrapper>
      </Container>

      {/* ClickToEdit Component */}
      <Container>
        <span className="app-content">ClickToEdit</span>
        <ComponentWrapper>
          <ClickToEdit />
          <p>이름 김코딩 나이 20</p>
        </ComponentWrapper>
      </Container>
    </div>
  );
};

export default App;
