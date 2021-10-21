import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage.jsx";

const App = () => {
  console.log("1");
  const onClickButton = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0);
  const [flag, setFlag] = useState(false);
  const contenStyle = {
    color: "blue",
    fontSize: "30px"
  };
  useEffect(() => {}, []);
  const changeFlag = () => {
    setFlag(!flag);
  };
  if (num % 3 === 0 && num !== 0) {
    flag || setFlag(true);
  } else {
    flag && setFlag(false);
  }
  return (
    <>
      <h1 style={{ color: "red" }}>hello</h1>
      <p style={contenStyle}>aiou</p>
      <ColorfulMessage color="blue" message="I'm fine" />
      <ColorfulMessage color="pink" message="I'm not fine">
        aaaaa
      </ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
      <br />
      <button onClick={changeFlag}>on/off</button>
      <p>{num}</p>
      {(flag && <p>true</p>) || <p>flase</p>}
    </>
  );
};

export default App;
