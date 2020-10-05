import React from "react";
import TodoList from "./components/TodoList";
import "./components/Todo.css";
import TodoForm from "./components/TodoForm";

const items = [
  {
    name: "Run",
    id: 123,
    complete: false,
  },
  {
    name: "Shop",
    id: 124,
    complete: false,
  },
  {
    name: "Work",
    id: 1235,
    complete: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      items,
    };
  }
  addItem = (e, item) => {
    e.preventDefault();
    const newItem = {
      name: item,
      id: Date.now(),
      complete: false,
    };
    this.setState({
      items: [...this.state.items, newItem],
    });
  };

  toggleComplete = (id) => {
    this.setState({
      items: this.state.items.map((item) => {
        return id === item.id ? { ...item, complete: !item.complete } : item;
      }),
    });
  };

  clearing = (e) => {
    e.preventDefault();
    this.setState({
      items: this.state.items.filter((item) => !item.complete),
    });
  };
  render() {
    return (
      <div>
        <h2>Things To-Do</h2>
        <TodoList
          items={this.state.items}
          toggle={this.toggleComplete}
          clearing={this.clearing}
        />
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
