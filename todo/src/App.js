import React, { useReducer } from "react";
import TodoList from "./components/TodoList";
import "./components/Todo.css";
import TodoForm from "./components/TodoForm";
import { reducer, startState } from "./reducers/reducer";

const App = () => {
  const [state, dispatch] = useReducer(reducer, startState);

  const toggleComplete = (id) => {
    dispatch({ type: "TOGGLE_COMPLETE", payload: id });
  };

  const clearing = (e) => {
    e.preventDefault();
    dispatch({ type: "CLEAR_LIST" });
  };

  const addItem = (e, item) => {
    e.preventDefault();
    dispatch({ type: "ADD_ITEM", payload: item });
  };
  return (
    <div>
      <h2>Things To-Do</h2>
      <TodoList items={state} toggle={toggleComplete} clearing={clearing} />
      <TodoForm addItem={addItem} />
    </div>
  );
};

export default App;
