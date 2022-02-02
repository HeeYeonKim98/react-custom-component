import "./App.css";

import { Tab, Tabs } from "./component/Tab";

import AutoComplete from "./component/AutoComplete";
import ClickToEdit from "./component/ClickToEdit";
import Modal from "./component/Modal";
import React from "react";
import Tag from "./component/Tag";
import Toggle from "./component/Toggle";
import styled from "styled-components";
import useInput from "./hooks/useInput";
import useToggle from "./hooks/useToggle";

const Div = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: block;
  display: table;
`;

const Container = styled.div`
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  box-shadow: 1px 1px 2px 0 rgb(0 0 0 / 10%);
  padding: 14px;
  margin: 50px 10px;
`;

const ComponentWrapper = styled.div`
  text-align: center;
  padding: 100px 0;
`;

const App = () => {
  const [toggle, setToggle] = useToggle(false);
  const [tab, , setTab] = useInput("ONE");

  return (
    <>
      <h2 className="app-title">✅ Custom Component</h2>

      <Div>
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
            <Modal title="Open Modal">
              <p>HELLO CODESTATES !</p>
            </Modal>
          </ComponentWrapper>
        </Container>

        {/* Tab Component */}
        <Container>
          <span className="app-content">Tab</span>
          <ComponentWrapper>
            <Tabs>
              <Tab title="Tab1" onClick={() => setTab("ONE")} />
              <Tab title="Tab2" onClick={() => setTab("TWO")} />
              <Tab title="Tab3" onClick={() => setTab("THREE")} />
            </Tabs>
            <p>Tab menu {tab}</p>
          </ComponentWrapper>
        </Container>

        {/* Tag Component */}
        <Container>
          <span className="app-content">Tag</span>
          <ComponentWrapper>
            <Tag tags={["CodeStates", "Kim"]} />
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
            <ClickToEdit id="name" label="이름" />
            <ClickToEdit id="age" label="나이" />
            <p>이름 김코딩 나이 20</p>
          </ComponentWrapper>
        </Container>
      </Div>
    </>
  );
};

export default App;
