// import React, { useState, useEffect } from 'react';
// import { formFieldType } from "../../types/formTypes";
// import getForms from "../../functions/getForms";
// import saveForms from "../../functions/saveForms";

// export function LabelMultiselect(props: {
//     id: number;
//     label: string;
//     options: string[];
//     parent_id: number;
//     value: string[];
//     updateLabelCB: (target_value: string, id: number) => void;
//     removeLabelCB: (id: number) => void;
//   }) {
//     // return (
//     //   <div className="flex">
//     //     <select
//     //       className="mx-3 py-3 px-2"
//     //       onChange={(e: any) => {
//     //         props.updateLabelCB(e.target.value, props.id);
//     //       }}
//     //       multiple
//     //     >
//     //       <option>Select an Option</option>
//     //       {props.options.map((dropdownOption: string, optionIndex: number) => (
//     //         <option value={dropdownOption} key={optionIndex}>
//     //           {dropdownOption}
//     //         </option>
//     //       ))}
//     //     </select>
//     //   </div>
//     // );

//     const initialState = () => {
//       return getForms().filter(form => form.id === props.parent_id)[0];
//     }
//     const [optionsState, setOptionsState] = useState(props.options);
//     const [newOptionState, setNewOptionState] = useState("");
//     const [formOptionsState, setFormOptionsState] = useState(() => initialState());

//     const saveForm = (currentState: formFieldType) => {
//       console.log(currentState);

//       setFormOptionsState({
//         ...formOptionsState,
//         formFields: [
//           ...formOptionsState.formFields.filter((formField: formFieldType) => formField.id !== props.parent_id),
//           currentState
//         ],
//       });

//       console.log("Getting forms...");
//       console.log(getForms());
//     }

//     const saveOptions = () => {
//       const currentState: formFieldType = {
//         kind: "multiselect",
//         id: props.id,
//         label: props.label,
//         options: optionsState,
//         value: props.value,
//       }

//       console.log("Saving...")

//       saveForm(currentState);

//       const existing_forms =  getForms().filter(form => form.id !== props.parent_id);
//       // console.log(existing_forms);
//       // saveForms(updatedForms);
//       saveForms([...existing_forms, formOptionsState]);
//     }

//     useEffect(() => {
//       saveOptions();
//     }, [optionsState]);

//     const addSelectOption = (option: string) => {
//       if (option.length === 0) {
//         alert("Can't add a field with empty name!");
//       } else if (!optionsState.includes(option)) {
//         setOptionsState([...optionsState, option]);
//       }

//       setNewOptionState("");
//     };

//     const removeSelectOption = (option: string) => {
//       if (optionsState.includes(option)) {
//         setOptionsState(
//           optionsState.filter((existing_option) => existing_option !== option)
//         );
//       }
//     };

//     return (
//       <>
//         <div className="flex">
//           <input
//             className="my-2 flex-1 border-0 p-2 text-lg hover:border-b-2 hover:border-b-sky-500 focus:border-b-2 focus:border-b-sky-500 focus:outline-none focus:ring-0"
//             id={`label-${props.id}`}
//             type="text"
//             placeholder="Enter field label"
//             value={props.label}
//             onChange={(e: any) => {
//               props.updateLabelCB(e.target.value, props.id);
//             }}
//           ></input>
//           <div className="my-5 mx-3">
//             {/* Options: {"[" + optionsState + "]"}
//             {const id=`addNewOption-${props.options.length+2}`;} */}
//             <br />
//             <div className="flex">
//               <input
//                 className="my-2 mx-2 rounded-md border-0 bg-gray-100 px-2 text-gray-700 hover:text-gray-900 focus:text-gray-900"
//                 type="text"
//                 placeholder="Enter option name..."
//                 id={`addNewOption-${props.options.length + 2}`}
//                 value={newOptionState}
//                 onChange={(e) => setNewOptionState(e.target.value)}
//               ></input>
//               <div
//                 className="button m-2 flex cursor-pointer items-center rounded-md bg-sky-500 p-2 font-bold text-white hover:bg-sky-700"
//                 onClick={(_) => addSelectOption(newOptionState)}
//               >
//                 Add
//               </div>
//             </div>
//             <strong>Option</strong>:
//             <ul className="list-disc">
//               {optionsState.map((existingOption) => {
//                 return (
//                   <div className="flex">
//                     <div className="py-3">{existingOption}</div>
//                     <div
//                       className="button m-2 flex cursor-pointer items-center rounded-md bg-red-500 p-2 font-bold text-white hover:bg-red-700"
//                       onClick={(_) => {
//                         removeSelectOption(existingOption);
//                       }}
//                     >
//                       ✖
//                     </div>
//                   </div>
//                 );
//               })}
//             </ul>
//           </div>
//           <p id={`options-${props.id}`}></p>
//           <div
//             onClick={(_) => props.removeLabelCB(props.id)}
//             className="btn m-4 flex cursor-pointer items-center rounded-lg bg-white py-2 px-4 font-bold text-red-500 shadow-md hover:bg-red-500 hover:text-white hover:shadow-lg"
//           >
//             ✖
//           </div>
//         </div>
//       </>
//     );
//   }

import React, { useState } from "react";

export const LabelMultiselect = () => {
  const [items, setItems] = useState(["john", "milos", "steph", "kathreine"]);
  const [selectedItems, setSelected] = useState([]);

  return (
    <div className="autcomplete-wrapper">
      <div className="autcomplete">
        <div className="mx-auto flex w-full flex-col items-center">
          <div className="w-full">
            <div className="relative flex flex-col items-center">
              <div className="w-full ">
                <div className="my-2 flex rounded border border-gray-200 bg-white p-1 ">
                  <div className="flex flex-auto flex-wrap">
                    {selectedItems.map((tag, index) => {
                      return (
                        <div
                          key={index}
                          className="m-1 flex items-center justify-center rounded-full border border-teal-300 bg-white bg-teal-100 py-1 px-2 font-medium text-teal-700 "
                        >
                          <div className="max-w-full flex-initial text-xs font-normal leading-none">
                            {tag}
                          </div>
                          <div className="flex flex-auto flex-row-reverse">
                            <div></div>
                          </div>
                        </div>
                      );
                    })}
                    <div className="flex-1">
                      <input
                        placeholder=""
                        className="h-full w-full appearance-none bg-transparent p-1 px-2 text-gray-800 outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex w-8 items-center border-l border-gray-200 py-1 pl-2 pr-1 text-gray-300">
                    <button className="h-6 w-6 cursor-pointer text-gray-600 outline-none focus:outline-none"></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Dropdown = ({ list, addItem }) => {
  return (
    <div
      id="dropdown"
      className="top-100 lef-0 max-h-select absolute z-40 w-full overflow-y-auto rounded bg-white shadow "
    >
      <div className="flex w-full flex-col">
        {list.map((item, key) => {
          return (
            <div
              key={key}
              className="w-full cursor-pointer rounded-t border-b border-gray-100 hover:bg-teal-100"
              onClick={() => addItem(item)}
            >
              <div className="relative flex w-full items-center border-l-2 border-transparent p-2 pl-2 hover:border-teal-100">
                <div className="flex w-full items-center">
                  <div className="mx-2 leading-6  ">{item}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
