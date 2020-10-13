import React from 'react';
import "../css/WelcomeContainer.css"
export function WelcomeContainer(props){
  return (
    <div className="container welcome">
      <h1>Simple form creator</h1>
      <p>Create and embed simple forms on your static website.</p>
      <button onClick={props.ready}>Get started</button>
    </div>
  );
}