import React, { Component } from "react";
import { SimpleSelector } from "../SimpleSelector";

const initState = {
  question: "",
  category: "",
  displayValue: "",
  value: "",
  options: [],
  class: "",
  type: "radio",
  uiid: "",
  simple: true,
};

export class RadioButtonCreator extends Component {
  constructor(props) {
    super(props);
    this.state = initState;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.options = this.options.bind(this);
    this.addOption = this.addOption.bind(this);
    this.addClass = this.addClass.bind(this);
  }

  handleChange(e) {
    if (e.target.name === "simple") {
      this.setState({ simple: !!parseInt(e.target.value) });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({uiid: `${this.state.category}${new Date().getTime()}`},
    ()=> {
      this.props.addField(this.state)
      this.setState(initState)
    })
  }

  options(){
    return this.state.options.map(option => {
      return (
        <div key={option.uuid}>
          <input type="radio" name={this.state.category} id={option.value} value={option.value}/>
          <label htmlFor={option.value}>{option.displayValue}</label>
        </div>
      )
    })
  }

  addOption(){
    this.setState({
      options: [
        ...this.state.options, {
          value: this.state.value,
          displayValue: this.state.displayValue,
          uiid: `${this.state.label}${new Date().getTime()}`
        },
      ],
      value: "",
      displayValue: ""
    })
  }

  addClass() {
    if (!this.state.simple) {
      return (
        <>
          <label htmlFor="class">Class</label>
          <input
            type="text"
            name="class"
            id="class"
            value={this.state.class}
            onChange={this.handleChange}
          />
        </>
      );
    }
  }

  render() {
    return (
      <div>
        <h4>Preview</h4>
        <p>
          {this.state.category} (Required for grouping purposes only not
          displayed on form)
        </p>
        <p>{this.state.question}</p>
        {this.options()}
        <SimpleSelector handleChange={this.handleChange} />
        <form onSubmit={this.handleSubmit}>
          {this.addClass()}

          <label htmlFor="radio-category">Radio category value (sex, citizenship, etc...)</label>
          <input type="text" name="category" id="radio-category" value={this.state.category} onChange={this.handleChange}/>

          <label htmlFor="question">Question</label>
          <input
            type="text"
            name="question"
            id="question"
            value={this.state.question}
            onChange={this.handleChange}
          />

          <label htmlFor="display-value">Display Value</label>
          <input
            type="text"
            name="displayValue"
            id="display-value"
            value={this.state.displayValue}
            onChange={this.handleChange}
          />

          <label htmlFor="value">Value</label>
          <input
            type="text"
            name="value"
            id="value"
            value={this.state.value}
            onChange={this.handleChange}
          />

          <input type="button" value="Add Radio Button" onClick={this.addOption}/>
          <input type="submit" value="Create Radio Buttons Field"/>
        </form>
      </div>
    );
  }
}
