import React, { Component } from "react";

export default class Note extends Component {
  note = this.props.note;
  render() {
    return (
      <div>
        <div className="noteBlock">
          <div className="btnClose">
            <button
              onClick={() => this.props.onDelete(this.note.id)}
              className="button"
            >
              close
            </button>
          </div>
          <div className="">
            <p>{this.note.text}</p>
          </div>
        </div>
      </div>
    );
  }
}
