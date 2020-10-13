import React from 'react';
import "../css/SimpleSelector.css"

export function SimpleSelector(props){
  return (
    <div className="flex" onChange={props.handleChange}>
      <input type="radio" id="simple" name="simple" value="1" defaultChecked />
      <label htmlFor="simple">Simple</label>
      <input type="radio" id="advanced" name="simple" value="0" />
      <label htmlFor="advanced">Advanced</label>
    </div>
  );
}