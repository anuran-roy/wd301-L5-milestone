import React from "react";
// import { formFieldType } from "../types/formTypes";


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
  id: number,
  // kind: "dropdown",
  label: string,
  options: string[],
  updateLabelCB: (target_value: string, id: number) => void,
  removeLabelCB: (id: number) => void
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
        <p className="my-5 mx-3">Options: {"[" + props.options + "]"}</p>
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

export function LabelMultiselect(props: {
  id: number,
  // kind: "multiselect",
  label: string,
  options: string[],
  // value: string[],
  updateLabelCB: (target_value: string, id: number) => void, 
  removeLabelCB: (id: number) => void
}) {
  return (
    <div className="flex">
      <select
        className="py-3 mx-3 px-2"
        onChange={(e: any) => {
          props.updateLabelCB(e.target.value, props.id);
        }}
        multiple
        >
        <option>Select an Option</option>
        {
          props.options.map((dropdownOption: string, optionIndex: number) => <option value={dropdownOption} key={optionIndex}>{dropdownOption}</option>)
        }
      </select>
    </div>
  );
}

export function LabelTextarea(props: {
  id: number,
  label: string,
  value: string,
  updateLabelCB: (target_value: string, id: number) => void,
  removeLabelCB: (id: number) => void,
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
    </>);
}