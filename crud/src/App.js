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
      notes: [
        {
          id: 1,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vitae tempore at quaerat architecto dolor, saepe ratione sequi labore! Cupiditate in enim maiores veniam eligendi deleniti aut repudiandae dolore velit.",
        },
        {
          id: 2,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vitae tempore at quaerat architecto dolor, saepe ratione sequi labore! Cupiditate in enim maiores veniam eligendi deleniti aut repudiandae dolore velit.",
        },
      ],
    };
    this.addNotes = this.addNotes.bind(this)
    this.delNotes = this.delNotes.bind(this)
  }
  
  //  componentDidMount() {
   
  //     fetch("http://localhost:3000", {
  //       method: "POST", 
  //       headers: {"Content-Type": "application/json"}, 
  //       body: JSON.stringify(this.state.notes)})
  //       console.log(this.state.notes)
  //     } 
   
  

  componentWillUnmount(){}
  


  render() {
    return (
      <div className="App">
        <Notes onDelete = {this.delNotes} notes = {this.state.notes} />
        <AddNote onAdd = {this.addNotes} />
      </div>
    );
  }


  addNotes(note) {
    const id = this.state.notes.length + 1
    this.setState({notes: [...this.state.notes, {id, ...note}]})
    // console.log(note)
    
    return fetch(" http://localhost:7070/notes ", {
        method: "POST", 
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify(this.state.notes)
      })
      .then(res => console.log(res))
      .catch(err => console.log(err))

  }

  delNotes(id) {
    this.setState({
      notes: this.state.notes.filter((el) => el.id !== id)
    })
  }



}


// const postD = async () => {
//   const a = await fetch("http://localhost:3000", {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(this.state.text)}).then(() =>res => res.json)
//   return a
// }