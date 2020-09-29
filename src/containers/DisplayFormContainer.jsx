import React from 'react';

export function DisplayFormContainer(props){

  function displayDropDown(field){
    return field.options.map(opt => {
      return <option value={opt.value} key={opt.uuid}>{opt.displayValue}</option>
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
            key={opt.uuid}
          />
          <label htmlFor={opt.value}>{opt.displayValue}</label>
        </>
      );
    })
  }

  function displayFields(){
    return props.fields.map((field, i) => {
      if(field.type === "input"){
        return (
          <div key={field.uuid}  className={field.class}>
            <label>{field.label}</label>
            <input
              value={field.value}
              placeholder={field.placeholder}
              readOnly
            ></input>
            <span onClick={()=>props.removeField(field.uuid)}>X</span>
          </div>
        );
      }else if (field.type === "text"){
        return (
          <div key={field.uuid} className={field.class}>
            <label>{field.label}</label>
            <textarea
              readOnly
              rows={field.lines}
              value={field.value}
              placeholder={field.placeholder}
            ></textarea>
            <span onClick={()=>props.removeField(field.uuid)}>X</span>
          </div>
        );
      }else if(field.type === "dropdown" ){
        return (
          <div key={field.uuid} className={field.class}>
            <label>{field.label}</label>
            <select>{displayDropDown(field)}</select>
            <span onClick={() => props.removeField(field.uuid)}>X</span>
          </div>
        );
      }else if (field.type === "checkbox" ){
        return (
          <div uuid={field.uuid} className={field.class}>
            <p>{field.question}</p>
            {displayCheckBoxes(field)}
          </div>
        );
      }
      
      else {
        return null
      }

    })
  }

  return displayFields()
}
