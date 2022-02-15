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

const Div = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: block;
  display: table;

  span {
    font-weight: 900;
    font-size: larger;
  }

  .app-container {
    border: 1px solid #dcdcdc;
    border-radius: 10px;
    box-shadow: 1px 1px 2px 0 rgb(0 0 0 / 10%);
    padding: 14px;
    margin: 50px 10px;
  }

  .app-component {
    text-align: center;
    padding: 100px 0;
  }
`;

const App = () => {
  const [toggle, setToggle] = useToggle(false);
  const [data, onChangeData] = useInput({ name: "", age: "" });
  const [editName, , seteditName] = useInput("");
  const [editAge, , seteditAge] = useInput("");

  return (
    <>
      <h2 className="app-title">✅ Custom Component</h2>

      <Div>
        {/* Toggle Component */}
        <div className="app-container">
          <span>Toggle</span>
          <div className="app-component">
            <Toggle onChange={setToggle} />
            <p>Toggle Switch {toggle ? "ON" : "OFF"}</p>
          </div>
        </div>

        {/* Modal Component */}
        <div className="app-container">
          <span>Modal</span>
          <div className="app-component">
            <Modal title="Open Modal">HELLO CODESTATES !</Modal>
          </div>
        </div>

        {/* Tab Component */}
        <div className="app-container">
          <span>Tab</span>
          <div className="app-component">
            <Tab
              tabs={[
                { name: "Tab1", content: "ONE" },
                { name: "Tab2", content: "TWO" },
                { name: "Tab3", content: "THREE" },
              ]}
            />
          </div>
        </div>

        {/* Tag Component */}
        <div className="app-container">
          <span>Tag</span>
          <div className="app-component">
            <Tag tags={["CodeStates", "Kim"]} />
          </div>
        </div>

        {/* AutoComplete Component */}
        <div className="app-container">
          <span>AutoComplete</span>
          <div className="app-component">
            <AutoComplete
              data={["antique", "refurbished", "rustic", "vintage", "중고A급"]}
            />
          </div>
        </div>

        {/* ClickToEdit Component */}
        <div className="app-container">
          <span>ClickToEdit</span>
          <div className="app-component">
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
          </div>
        </div>
      </Div>
    </>
  );
};

export default App;
