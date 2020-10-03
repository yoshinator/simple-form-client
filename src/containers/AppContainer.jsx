import React, { Component } from 'react';
import { DisplayFormContainer } from './DisplayFormContainer';
import { WelcomeContainer } from './WelcomeContainer';
import {AddField} from '../components/AddField';
import { InputTextFieldCreator } from '../components/field_creators/InputTextFieldCreator';
import { DropDownCreator } from '../components/field_creators/DropDownCreator';
import { CheckBoxCreator } from '../components/field_creators/CheckBoxCreator';
import { RadioButtonCreator } from '../components/field_creators/RadioButtonCreator';

export class AppContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      formFields: [],
      ready: false,
      type: "input"
    }
    this.handleChange = this.handleChange.bind(this);
    this.inputState = this.inputState.bind(this);
    this.addField = this.addField.bind(this);
    this.removeField = this.removeField.bind(this);
  }

  handleChange(type){
    switch(type){
      case "input":
        this.inputState("input")
        break;
      case "text":
        this.inputState("text")
        break;
      case "dropdown":
        this.inputState("dropdown")
        break;
      case "checkbox":
        this.inputState("checkbox")
        break;
      case "radio":
        this.inputState("radio")
        break;
      default:  
        return;
    }
  }

  inputState(inputType){
    this.setState({type: inputType})
  }
  
  addField(fieldValues){
    this.setState({formFields: [...this.state.formFields, fieldValues]})
  }

  removeField(uiid){
    const filtered = this.state.formFields.filter(field => {
      return field.uiid !== uiid
    })

    this.setState({formFields: filtered})
  }

  render() {
    let showInput = this.state.type === "input" || this.state.type === "text" ? true : false
    return this.state.ready ? 
     (
      <div>
        <DisplayFormContainer key={(new Date().getTime())} fields={this.state.formFields} removeField={this.removeField}/>
        <AddField change={this.handleChange}/>
        {showInput && <InputTextFieldCreator addField={this.addField} type={this.state.type}/>}
        {this.state.type === "dropdown" && <DropDownCreator addField={this.addField} type={this.state.type}/>}
        {this.state.type === "checkbox" && <CheckBoxCreator addField={this.addField} type={this.state.type}/>}
        {this.state.type === "radio" && <RadioButtonCreator addField={this.addField} type={this.state.type}/>}
      </div>
    ) :  <WelcomeContainer ready={()=>this.setState({ready: true})} />
  }
}
