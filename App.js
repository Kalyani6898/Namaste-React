import React from "react";
import  ReactDOM   from "react-dom/client";
const heading = React.createElement("div", { id: "parent", xyz: "abc" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "This is Namaste React"),
    React.createElement("h2", {}, "I am h2 Tag from child1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 Tag from child2"),
    React.createElement("h2", {}, "I am h2 Tag from child2"),
  ]),
]);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

