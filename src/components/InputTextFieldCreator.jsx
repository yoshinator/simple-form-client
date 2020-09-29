import React, { Component } from 'react';
import { SimpleSelector} from './SimpleSelector';

const initState = {
  simple: true,
  type: "input",
  label: "",
  value: "",
  placeholder: "",
  class: "",
  lines: "",
  uiid: ""
};

export class InputTextFieldCreator extends Component{

  constructor(props){
    super(props)
    this.state = initState
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({type: this.props.type, uiid: `${this.state.label}${new Date().getTime()}`} , ()=> {
      this.props.addField(this.state)
      this.setState(initState)
    }) 
  }
  handleChange(e){
    if (e.target.name === "simple") {
      this.setState({ simple: !!parseInt(e.target.value) })
    }
    else {
      this.setState({[e.target.name]: e.target.value, type: this.props.type})
    }
  }

  lineNumbers(){
    if(this.props.type === "text" && !this.state.simple){
      return <>
        <label htmlFor="lines">Number of lines</label>
        <input value={this.state.lines} onChange={this.handleChange} name="lines" id="lines"></input>
      </>
    }
    return null;
  }

  addClass(){
    if(!this.state.simple){
      return (
        <>
          <label htmlFor="class">class</label>
          <input
            value={this.state.class}
            onChange={this.handleChange}
            name="class"
            id="class"
          ></input>
        </>
      );
    }
    return null;
  }

  render(){
    return (
      <div>
        <SimpleSelector handleChange={this.handleChange}/>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="label">label</label>
          <input  value={this.state.label} 
                  name="label" 
                  onChange={this.handleChange} 
                  id="label">
          </input>
          <label htmlFor="value">default value</label>
          <input  value={this.state.value} 
                  onChange={this.handleChange} 
                  name="value" 
                  id="value"></input>
          <label htmlFor="placeholder">placeholder text</label>
          <input value={this.state.placeholder} onChange={this.handleChange} name="placeholder" id="placeholder"></input>
          {this.addClass()}
          {this.lineNumbers()}
          <input type="submit" value="Add Field"/>
        </form>
      </div>
      )
  }
}