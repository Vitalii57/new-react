import "./App.css";
import Notes from "./components/Notes";
import AddNote from "./components/AddNote";

import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      notes: [],
    };
    this.addNotes = this.addNotes.bind(this);
    this.delNotes = this.delNotes.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:7070/notes")
    .then((res) => res.json())
    .then((json) => this.setState({notes: json}))
  }

  addNotes(note) {
   
    fetch('http://localhost:7070/notes', {
      method: 'POST',
      headers: {'Content-Type' : "application/json"},
      body: JSON.stringify(note)

    }).then(()=> {
     return fetch("http://localhost:7070/notes")
    })
    .then((res) => res.json())
    .then((json) => this.setState({notes: json}))
  }

  delNotes(id) {
    this.setState({
      notes: this.state.notes.filter((el) => el.id !== id),
    });

    fetch(`http://localhost:7070/notes/${id}`, {
      method: "DELETE",
    })
    .then(()=> {
      return fetch("http://localhost:7070/notes")
     })
     .then((res) => res.json())
  }

  componentWillUnmount() {}

  render() {
    return (
      <div className="App">
        <Notes onDelete={this.delNotes} notes={this.state.notes} />
        <AddNote onAdd={this.addNotes} />
      </div>
    );
  }
}
