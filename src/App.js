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
  const [data, onChangeData] = useInput({ name: "", age: "" });
  const [editName, , seteditName] = useInput("");
  const [editAge, , seteditAge] = useInput("");

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
            <ClickToEdit
              label="이름"
              type="text"
              name="name"
              placeholder={data.name}
              value={data.name}
              onChange={onChangeData}
              onBlur={() => seteditName(data.name)}
            />
            <ClickToEdit
              label="나이"
              type="text"
              name="age"
              placeholder={data.age}
              value={data.age}
              onChange={onChangeData}
              onBlur={() => seteditAge(data.age)}
            />
            <div>
              이름 {editName} 나이 {editAge}
            </div>
          </ComponentWrapper>
        </Container>
      </Div>
    </>
  );
};

export default App;
