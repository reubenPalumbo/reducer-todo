import React from "react";

const Todo = ({ item, toggle }) => {
  return (
    <div
      onClick={() => toggle(item.id)}
      className={item.complete ? "marked" : ""}
    >
      <h2>+ {item.name}</h2>
    </div>
  );
};

export default Todo;
