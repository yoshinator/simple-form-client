import React, { Component } from 'react';
import { SimpleSelector } from './SimpleSelector';

const initState ={}

export class RadioButtonCreator extends Component {
  constructor(props){
    super(props)
    this.state = initState;

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    if (e.target.name === "simple"){
      this.setState({simple: !!parseInt(e.target.value)})
    } else {
      this.setState({[e.target.name]: e.target.value})
    }
  }

  render(){
    return (
      <div>
        <h4>RadioButtonCreator</h4>
        <SimpleSelector handleChange={this.handleChange}/>
      </div>
    );
  }
}