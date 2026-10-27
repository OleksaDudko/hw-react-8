import { Component } from "react";

class Statistics extends Component {
  render() {
    return (
      <div>
        {this.props.option.map((btn) => {
          return (
            <button
              type="button"
              key={btn}
              onClick={() => this.props.onLeaveFeedback(btn)}
            >
              {btn}
            </button>
          );
        })}
      </div>
    );
  }
}

export default Statistics;
