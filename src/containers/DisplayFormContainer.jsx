import React from 'react';

export function DisplayFormContainer(props){

  function displayDropDown(field){
    return field.options.map(opt => {
      return <option value={opt.value} key={opt.uiid}>{opt.displayValue}</option>
    })
  }

  function displayCheckBoxes(field){
    return field.options.map(opt => {
      return (
        <>
          <input
            type="checkbox"
            name={field.category}
            id={opt.value}
            value={opt.value}
            key={opt.uiid}
          />
          <label htmlFor={opt.value}>{opt.displayValue}</label>
        </>
      );
    })
  }

  function displayRadioButtons(field){
    return field.options.map(opt => {
      return (
        <>
          <input 
            type="radio" 
            name={field.category} 
            id={opt.displayValue.toLowerCase()} 
            value={opt.value} 
            key={opt.uuid}/>
        <label htmlFor={opt.displayValue.toLowerCase()}>{opt.displayValue}</label>
        </>
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
            <span onClick={()=>props.removeField(field.uiid)}>X</span>
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
            <span onClick={()=>props.removeField(field.uiid)}>X</span>
          </div>
        );
      }else if(field.type === "dropdown" ){
        return (
          <div key={field.uiid} className={field.class}>
            <label>{field.label}</label>
            <select>{displayDropDown(field)}</select>
            <span onClick={() => props.removeField(field.uiid)}>X</span>
          </div>
        );
      }else if (field.type === "checkbox" ){
        return (
          <div uiid={field.uiid} className={field.class}>
            <p>{field.question}</p>
            {displayCheckBoxes(field)}
            <span onClick={() => props.removeField(field.uiid)}>X</span>
          </div>
        );
      }else if (field.type === "radio"){
        return (
          <div uiid={field.uiid} className={field.class}>
            <p>{field.question}</p>
            {displayRadioButtons(field)}
            <span onClick={() => props.removeField(field.uiid)}>X</span>
          </div>
        )
      }
      else {
        return null
      }

    })
  }

  return displayFields()
}
