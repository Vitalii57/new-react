import React, { Component } from 'react'

export default class AddNote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "",
    }
   
  }
  render() {
    return (
      <form ref={(el) => this.myForm = el} className='formSend'>
        <textarea placeholder='Введите текст' onChange={(e) => this.setState({text: e.target.value}) } className='texterea'></textarea>
        <div className='btnBlock'>
        <button onClick={(e) => {
        this.myForm.reset()  
        this.props.onAdd({
          text: this.state.text
        })
        e.preventDefault()}
        } className='button btnSend'>send</button>
        </div>
      </form>
    )
  }
}
// fetch("http://localhost:3000", {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(this.state.text)}).then(() =>res => res.json)