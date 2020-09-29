import React, { Component } from 'react';

export class AddField extends Component{
  constructor(props){
    super(props)
    this.state = {
      value: "input"
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({value: e.target.value}, ()=>{
      this.props.change(this.state.value)
    })
  }

  render(){
    return(
      <form>
        <label htmlFor="field">Choose a form field to add</label>
        <select value={this.state.value} onChange={this.handleChange} id="field">
          <option value="input">regular input</option>
          <option value="text">text box</option>
          <option value="dropdown">dropdown</option>
          <option value="checkbox">checkboxes</option>
          <option value="radio">radio buttons</option>
        </select>
      </form>
    );
  }
}