import React from "react";
import ExampleUseState from "./ExampleUseState";
import ExampleClassState from "./ExampleClassState";

const App = () => {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: 20,
      }}
    >
      <ExampleUseState nameprops="Use State" />
      <ExampleClassState nameprops="Class State" />
    </div>
  );
};

export default App;
