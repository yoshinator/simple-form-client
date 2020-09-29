import React from 'react';

export function SimpleSelector(props){
  return (
    <div onChange={props.handleChange}>
      <input type="radio" id="simple" name="simple" value="1" defaultChecked />
      <label htmlFor="simple">Simple</label>
      <input type="radio" id="advanced" name="simple" value="0" />
      <label htmlFor="advanced">Advanced</label>
    </div>
  );
}