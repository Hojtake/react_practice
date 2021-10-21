import React from "react";

const ColorfulMessage = (props) => {
  //タグ内で受け取った変数を格納しているオブジェクト
  const styleComponents = {
    color: props.color,
    fontSize: "18px"
  };
  return (
    <>
      <p>how are you ?</p>
      <p style={styleComponents}>{props.children || props.message}</p>
    </>
  );
};

export default ColorfulMessage;
