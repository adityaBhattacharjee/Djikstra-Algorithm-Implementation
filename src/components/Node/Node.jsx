import React, { Component } from "react";

import "./Node.css";

export default class Nodes extends Component {
  render() {
    const {
      col,
      isFinish,
      isStart,
      onMouseDown,
      row,
      onMouseEnter,
      onMouseUp,
      isWall,
    } = this.props;

    const extraClassName = isFinish
      ? "node-finish"
      : isStart
      ? "node-start"
      : isWall
      ? "node-wall"
      : "";

    return (
      <div
        id={`node-${row}-${col}`}
        className={`node ${extraClassName}`}
        onMouseDown={() => onMouseDown(row, col)}
        onMouseEnter={() => onMouseEnter(row, col)}
        onMouseUp={() => onMouseUp()}
      />
    );
  }
}
