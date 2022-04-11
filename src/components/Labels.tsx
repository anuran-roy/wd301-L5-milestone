import React, { useState, useEffect } from "react";
import { formDataType } from "../types/formTypes";

export function LabelText(props: {
  id: number;
  label: string;
  fieldType: string;
  value: string;
  removeLabelCB: (id: number) => void;
  updateLabelCB: (target: string, id: number) => any;
}) {
  return (
    <>
      <div className="flex">
        <input
          className="my-2 flex-1 border-0 p-2 text-lg hover:border-b-2 hover:border-b-sky-500 focus:border-b-2 focus:border-b-sky-500 focus:outline-none focus:ring-0"
          id={`label-${props.id}`}
          type="text"
          placeholder="Enter field label"
          value={props.label}
          onChange={(e: any) => {
            props.updateLabelCB(e.target.value, props.id);
          }}
        ></input>
        <p className="my-5 mx-3">Input Type: {props.fieldType}</p>
        <button
          onClick={(_) => props.removeLabelCB(props.id)}
          className="btn m-4 rounded-lg bg-white py-2 px-4 font-bold text-red-500 shadow-md hover:bg-red-500 hover:text-white hover:shadow-lg"
        >
          ✖
        </button>
      </div>
    </>
  );
}

export function LabelSelect(props: {
  id: number;
  // kind: "dropdown",
  parent_id: number;
  label: string;
  options: string[];
  updateLabelCB: (target_value: string, id: number) => void;
  removeLabelCB: (id: number) => void;
}) {
  const [optionsState, setOptionsState] = useState(props.options);
  const [newOptionState, setNewOptionState] = useState("");


  const saveOptions = (id: number, options: string[]) => {
    let data: formDataType[] = JSON.parse(localStorage.getItem("savedForms"));
    localStorage.setItem("savedForms",[
      ...data.filter(form => form.id !== props.parent_id)
    ]);


  }

  const addSelectOption = (option: string) => {
    if (option.length === 0) {
      alert("Can't add a field with empty name!");
    }
    else if (!optionsState.includes(option)) {
      setOptionsState([...optionsState, option]);
    }
  };

  const removeSelectOption = (option: string) => {
    if (optionsState.includes(option)) {
      setOptionsState(optionsState.filter(existing_option => existing_option !== option ));
    }
  };

  return (
    <>
      <div className="flex">
        <input
          className="my-2 flex-1 border-0 p-2 text-lg hover:border-b-2 hover:border-b-sky-500 focus:border-b-2 focus:border-b-sky-500 focus:outline-none focus:ring-0"
          id={`label-${props.id}`}
          type="text"
          placeholder="Enter field label"
          value={props.label}
          onChange={(e: any) => {
            props.updateLabelCB(e.target.value, props.id);
          }}
        ></input>
        <p className="my-5 mx-3">
          {/* Options: {"[" + optionsState + "]"}
          {const id=`addNewOption-${props.options.length+2}`;} */}
          <br />
          <div className="flex">
            <input
              className="my-2 px-2 mx-2 rounded-md border-0 bg-gray-100 text-gray-700 hover:text-gray-900 focus:text-gray-900"
              type="text"
              placeholder="Enter option name..."
              id={`addNewOption-${props.options.length + 2}`}
              onChange={(e) => setNewOptionState(e.target.value)}
            ></input>
            <div
              className="button m-2 flex cursor-pointer items-center rounded-md bg-sky-500 hover:bg-sky-700 p-2 font-bold text-white"
              onClick={(_) => addSelectOption(newOptionState)}
            >
              Add
            </div>
          </div>
          <strong>Option</strong>:
          <div className="grid grid-cols-3"><ul className="list-disc"> 
            {optionsState.map((existingOption) => {return (<div className="flex">
            <div className="py-3">{existingOption}</div><p
              className="button m-2 flex cursor-pointer items-center rounded-md bg-red-500 hover:bg-red-700 p-2 font-bold text-white"
              onClick={(_) => {removeSelectOption(existingOption)}}
            >
              ✖
            </p></div>)})}
            </ul></div>
          <div className="flex">
            {/* {optionsState.map()} */}
          </div>
        </p>
        <p id={`options-${props.id}`}></p>
        <div
          onClick={(_) => props.removeLabelCB(props.id)}
          className="btn cursor-pointer m-4 flex items-center rounded-lg bg-white py-2 px-4 font-bold text-red-500 shadow-md hover:bg-red-500 hover:text-white hover:shadow-lg"
        >
          ✖
        </div>
      </div>
    </>
  );
}

export function LabelMultiselect(props: {
  id: number;
  // kind: "multiselect",
  label: string;
  options: string[];
  // value: string[],
  updateLabelCB: (target_value: string, id: number) => void;
  removeLabelCB: (id: number) => void;
}) {
  return (
    <div className="flex">
      <select
        className="mx-3 py-3 px-2"
        onChange={(e: any) => {
          props.updateLabelCB(e.target.value, props.id);
        }}
        multiple
      >
        <option>Select an Option</option>
        {props.options.map((dropdownOption: string, optionIndex: number) => (
          <option value={dropdownOption} key={optionIndex}>
            {dropdownOption}
          </option>
        ))}
      </select>
    </div>
  );
}

export function LabelTextarea(props: {
  id: number;
  label: string;
  value: string;
  updateLabelCB: (target_value: string, id: number) => void;
  removeLabelCB: (id: number) => void;
}) {
  return (
    <>
      <div className="flex">
        <input
          className="my-2 flex-1 border-0 p-2 text-lg hover:border-b-2 hover:border-b-sky-500 focus:border-b-2 focus:border-b-sky-500 focus:outline-none focus:ring-0"
          id={`label-${props.id}`}
          type="text"
          placeholder="Enter field label"
          value={props.label}
          onChange={(e: any) => {
            props.updateLabelCB(e.target.value, props.id);
          }}
        ></input>
        <p className="my-5 mx-3">Input Type: Text Area</p>
        <button
          onClick={(_) => props.removeLabelCB(props.id)}
          className="btn m-4 rounded-lg bg-white py-2 px-4 font-bold text-red-500 shadow-md hover:bg-red-500 hover:text-white hover:shadow-lg"
        >
          ✖
        </button>
      </div>
    </>
  );
}
