import React from "react";

class ClickCounter extends React.Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <button className="btn btn-primary" onClick={this.handleDecrement}>
          -
        </button>
        <span style={{ fontSize: "2rem", fontStyle: "bold" }}>
          {this.state.count}
        </span>
        <button className="btn btn-primary" onClick={this.handleIncrement}>
          +
        </button>
      </div>
    );
  }
}

export default ClickCounter;
