// import React, { useState } from "react";

export function TextFieldInput(props: {
  id: number;
  label: string;
  fieldType: string;
  value: string;
  updateTextInputCB: (e: string, id: number) => void;
}) {
  return (
    <>
      <label>{props.label}:</label>
      <div className="flex">
        <input
          id={`${props.id}`}
          className="my-2 flex-1 rounded-lg border-2 border-gray-200 p-2"
          type={props.fieldType}
          autoComplete="true"
          value={props.value}
          onChange={(e: any) => {
            console.log(e.target.value);
            props.updateTextInputCB(e.target.value, props.id);
          }}
        />
      </div>
    </>
  );
}

export function DropdownFieldInput(props: {
  id: number,
  label: string,
  options: string[],
  value: string,
  updateDropdownCB: (e_value: string, dropdownId: number) => void,
  // removeDropdownCB: (id: number) => void
}) {
  return (<>
    <label
      htmlFor={`${props.id}`}
    >{props.label}:</label>
    <div className="flex my-3 py-3 mx-2" id={`${props.id}`}>
      <select
        className="py-3 mx-3 px-2"
        value={props.value}
        onChange={(e: any) => {props.updateDropdownCB(e.target.value, props.id);}}
      >
        <option>Select an Option</option>
        {
          props.options.map((dropdownOption: string, optionIndex: number) => <option value={dropdownOption} key={optionIndex}>{dropdownOption}</option>)
        }
      </select>
    </div>
    </>
  );
}

export function RadioFieldInput(props: {
  id: number,
  label: string,
  options: string[],
  value: string,
  // updateDropdownCB: (e_value: string, dropdownId: number) => void,
  updateRadioCB: (e_value: string, id: number) => void,
  // removeRadioCB: (id: number) => void
}) {
  return (<>
    <label key={`label-${props.id}`}>{props.label}</label>
    <div className="grid grid-cols-2 justify-center py-3 gap-2" key={`div-${props.id}`}>
        {/* <option>Select an Option</option> */}
        {
          props.options.map(
            (
              radioOption: string,
              optionIndex: number
            ) => <>
              <label htmlFor={`${optionIndex}`} key={`label-${optionIndex}`}>{radioOption}</label>
              <input
              type="radio"
              key={`${props.id}-${optionIndex}`}
              id={`${optionIndex}`}
              name={`radio-${props.id}`}
              className="py-3 mx-3 px-2"
              checked={radioOption === props.value}
              onChange={(e: any) => {props.updateRadioCB(radioOption, props.id);}}
            />
          </>
          )
        }
    </div>
    </>
  );
}

export function MultiselectFieldInput(props: {
  id: number,
  label: string,
  options: string[],
  value: string[],
  updateMultiselectCB: (e_value: string[], id: number) => void, 
  // removeLabelCB: (id: number) => void
}) {
  return (
    <>
      <label htmlFor={`multiselect-${props.id}`}>{props.label}:</label>
      <div className="flex">
        <select
          key={props.id}
          id={`multiselect-${props.id}`}
          className="py-3 mx-3 px-2"
          multiple={true}
          size={1}// {props.options.length}
          // defaultChecked
          >
          {/* <option>Select an Option</option> */}
          {
            props.options.map((dropdownOption: string, optionIndex: number) => {
              // console.log(dropdownOption);
              return <option
                value={dropdownOption}
                key={optionIndex}
                onClick={(e: any) => {
            console.log(e.target.value);
            props.updateMultiselectCB([e.target.value], props.id)
          }}
              >{dropdownOption}</option>
            })
          }
        </select>
      </div>
    </>
  );
}

export function TextAreaInput (props: {
  id: number,
  label: string,
  value: string,
  updateTextAreaCB: (e_value: string, id: number) => void, 
}) {
  return (
    <>
      <label htmlFor={`${props.id}`}>{props.label}:</label><br />
      <div
        className="py-3 px-2 my-3"
      >
        <textarea
          id={`${props.id}`}
          className="py-3 px-2 my-3 border-2 text-gray-700 focus:text-gray-900"
          value={props.value}
          onChange={(e: any) => {props.updateTextAreaCB(e.target.value, props.id)}}
        ></textarea>
      </div>
    </>
  )
}