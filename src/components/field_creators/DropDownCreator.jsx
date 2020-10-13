import React, { Component } from 'react';
import { SimpleSelector } from '../SimpleSelector'

const initState = {
  label: "",
  value: "",
  displayValue: "",
  class: "",
  type: "dropdown",
  simple: true,
  options: [],
  uiid: ""
}

export class DropDownCreator extends Component {
  constructor(props) {
    super(props);
    this.state = initState;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addOption = this.addOption.bind(this);
    this.options = this.options.bind(this);
    this.addClass = this.addClass.bind(this);
  }

  handleChange(e) {
    if (e.target.name === "simple") {
      this.setState({ simple: !!parseInt(e.target.value) });
    } else{
      this.setState({[e.target.name]: e.target.value})
    }
  }

  handleSubmit(e){
    e.preventDefault()
    this.setState({ uiid: `${this.state.label}${new Date().getTime()}` }, ()=> {
      this.props.addField(this.state)
      this.setState(initState)
    });
  }

  addOption() {
    this.setState({
      options: [
        ...this.state.options,
        {
          value: this.state.value,
          displayValue: this.state.displayValue,
          uiid: `${this.state.label}${(new Date().getTime)()}`,
        },
      ],
      value: "",
      displayValue: "",
    });
  }

  options() {
    return <select>{this.state.options.map(opt => {
      return  <option key={opt.uiid} value={opt.value}>{opt.displayValue}</option>
    })
    }
    </select>
  }

  addClass() {
    if (!this.state.simple) {
      return (
        <>
          <label htmlFor="class">Class</label>
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

  render() {
    return (
      <div className="f-creator">
        <div className="preview">
          <h4>Dropdown Preview</h4>
          <label>{this.state.label}</label>
          {this.options()}
        </div>
        <SimpleSelector handleChange={this.handleChange} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="drop-down-name">Label</label>
          <input type="text" id="drop-down-name" name="label" onChange={this.handleChange}></input>

          <label htmlFor="display-value">Display Value</label>
          <input
            type="text"
            value={this.state.displayValue}
            onChange={this.handleChange}
            name="displayValue"
          />
          
          <label htmlFor="option-value">Value</label>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            name="value"
            id="option-value"
          />

          {this.addClass()}
          <input
            type="button"
            onClick={this.addOption}
            value="Add option"
          />
          <input type="submit" value="Create Dropdown" />
        </form>
      </div>
    );
  }
}