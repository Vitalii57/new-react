import React, { Component } from "react";
import Note from "./Note";

export default class Notes extends Component {

  render() {
    if (this.props.notes.length > 0) {
      return (
        <div>
          {this.props.notes.map((el) => (
            <Note onDelete={this.props.onDelete} key={el.id} note={el}/>
          ))}
        </div>
      );
    } else {
      return (
        <div className="noteBlock">
          <h3>Записей нет</h3>
        </div>
      );
    }
  }
}
