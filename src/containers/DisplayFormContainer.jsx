import React from 'react';
import "../css/DisplayFormContainer.css"

export function DisplayFormContainer(props){

  function displayDropDown(field){
    return field.options.map(opt => {
      return <option value={opt.value} key={opt.uiid}>{opt.displayValue}</option>
    })
  }

  function displayCheckBoxes(field){
    return field.options.map(opt => {
      return (
        <React.Fragment key={opt.uiid}>
          <input
            type="checkbox"
            name={field.category}
            id={opt.value}
            value={opt.value}
          />
          <label htmlFor={opt.value}>{opt.displayValue}</label>
        </React.Fragment>
      );
    })
  }

  function displayRadioButtons(field){
    return field.options.map(opt => {
      return (
        <React.Fragment key={opt.uiid}>
          <input 
            type="radio" 
            name={field.category} 
            id={opt.displayValue.toLowerCase()} 
            value={opt.value} 
          />
        <label htmlFor={opt.displayValue.toLowerCase()}>{opt.displayValue}</label>
        </React.Fragment>
      )
    })
  }

  function displayFields(){
    return props.fields.map((field, i) => {
      if(field.type === "input"){
        return (
          <div key={field.uiid}  className={field.class}>
            <label>{field.label}</label>
            <input
              value={field.value}
              placeholder={field.placeholder}
              readOnly
            ></input>
            <span className="remove-field" onClick={()=>props.removeField(field.uiid)}>X</span>
          </div>
        );
      }else if (field.type === "text"){
        return (
          <div key={field.uiid} className={field.class}>
            <label>{field.label}</label>
            <textarea
              readOnly
              rows={field.lines}
              value={field.value}
              placeholder={field.placeholder}
            ></textarea>
            <span className="remove-field" onClick={()=>props.removeField(field.uiid)}>X</span>
          </div>
        );
      }else if(field.type === "dropdown" ){
        return (
          <div key={field.uiid} className={field.class}>
            <label>{field.label}</label>
            <select>{displayDropDown(field)}</select>
            <span className="remove-field" onClick={() => props.removeField(field.uiid)}>X</span>
          </div>
        );
      }else if (field.type === "checkbox" ){
        return (
          <div key={field.uiid} className={`${field.class} checkradio-group`}>
            <p>{field.question}</p>
            {displayCheckBoxes(field)}
            <span className="remove-field" onClick={() => props.removeField(field.uiid)}>X</span>
          </div>
        );
      }else if (field.type === "radio"){
        return (
          <div key={field.uiid} className={`${field.class} checkradio-group`}>
            <p>{field.question}</p>
            {displayRadioButtons(field)}
            <span className="remove-field" onClick={() => props.removeField(field.uiid)}>X</span>
          </div>
        )
      }
      else {
        return null
      }

    })
  }

  return <div className="form-preview">
    <h2>Form Preview Area</h2>
    {displayFields()}</div>;
}
