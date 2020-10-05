import React from "react";

class TodoForm extends React.Component {
  state = {
    item: "",
  };

  change = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submit = (e) => {
    e.preventDefault();
    this.setState({ item: "" });
    this.props.addItem(e, this.state.item);
  };

  render() {
    return (
      <form onSubmit={this.submit}>
        <input
          type="text"
          value={this.state.item}
          name="item"
          onChange={this.change}
        />
        <button>Add Item</button>
      </form>
    );
  }
}

export default TodoForm;
