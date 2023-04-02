import React, { Component } from 'react'

export default class Note extends Component {
  note = this.props.note
  render() {
    return (
      <div>
        <div className="noteBlock">
              <button onClick={() => this.props.onDelete(this.note.id)} className="button btnClose">close</button>
              <div className='noteText'><p>{this.note.text}</p></div>
            </div>
      </div>
    )
  }
}
