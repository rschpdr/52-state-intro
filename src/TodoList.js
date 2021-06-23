import React from "react";

class TodoList extends React.Component {
  state = {
    todoList: ["An item", "A second item"],
    newTodo: "",
  };

  handleChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  handleClick = () => {
    const clone = [...this.state.todoList];
    clone.push(this.state.newTodo);
    this.setState({ todoList: clone });
  };

  handleDelete = (index) => {
    const clone = [...this.state.todoList];

    // const index = clone.indexOf(currentListItem);
    clone.splice(index, 1);

    this.setState({ todoList: clone });
  };

  render() {
    return (
      <div>
        <ul className="list-group">
          {this.state.todoList.map((todoElement, index) => {
            return (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {todoElement}
                <button
                  className="btn"
                  onClick={() => {
                    this.handleDelete(index);
                  }}
                >
                  <i className="fas fa-times"></i>
                </button>
              </li>
            );
          })}
        </ul>
        <div className="input-group">
          <input
            className="form-control form-control-lg"
            placeholder="Digite uma nova tarefa"
            onChange={this.handleChange}
            value={this.state.newTodo}
          />
          <div className="input-group-append">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={this.handleClick}
            >
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;
