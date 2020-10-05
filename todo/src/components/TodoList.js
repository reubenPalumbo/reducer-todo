import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div>
      {props.items.map((item) => (
        <Todo key={item.id} item={item} toggle={props.toggle} />
      ))}
      <button onClick={props.clearing}>Clear Completed</button>
    </div>
  );
};

export default TodoList;
