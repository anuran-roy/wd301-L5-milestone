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
        <div className="w-full flex flex-col items-center mx-auto">
          <div className="w-full">
            <div className="flex flex-col items-center relative">
              <div className="w-full ">
                <div className="my-2 p-1 flex border border-gray-200 bg-white rounded ">
                  <div className="flex flex-auto flex-wrap">
                    {selectedItems.map((tag, index) => {
                      return (
                        <div
                          key={index}
                          className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-teal-700 bg-teal-100 border border-teal-300 "
                        >
                          <div className="text-xs font-normal leading-none max-w-full flex-initial">
                            {tag}
                          </div>
                          <div className="flex flex-auto flex-row-reverse">
                            <div>

                            </div>
                          </div>
                        </div>
                      );
                    })}
                    <div className="flex-1">
                      <input
                        placeholder=""
                        className="bg-transparent p-1 px-2 appearance-none outline-none h-full w-full text-gray-800"
                      />
                    </div>
                  </div>
                  <div className="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200">
                    <button className="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">

                    </button>
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

export const Dropdown = ({list, addItem}) => {


    return (<div id="dropdown" className="absolute shadow top-100 bg-white z-40 w-full lef-0 rounded max-h-select overflow-y-auto ">
    <div className="flex flex-col w-full">
        { list.map((item, key) => {
            return <div key={key} 
            className="cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-teal-100" 
            onClick={() => addItem(item)}>
            <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100" >
                <div className="w-full items-center flex">
        <   div className="mx-2 leading-6  ">
            { item }
           </div>
          </div>
         </div>
        </div>
        })}
    </div>
</div>);

};
