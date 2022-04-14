import React, { useState, useEffect } from "react";
import { LabelText } from "./Labels/LabelText";
import { LabelTextarea } from "./Labels/LabelTextarea";
import { LabelSelect } from "./Labels/LabelSelect";
import { LabelRadio } from "./Labels/LabelRadio";
import { LabelMultiselect } from "./Labels/LabelMultiselect";

import getForms from "../functions/getForms";
import saveForms from "../functions/saveForms";
import formDataType from "../types/formDataType";
import AppContainer from "./AppContainer";
import { Link } from "raviger";
import initialFormFields from "../presets/initialFormFields";

import Header from "./Header";
import { formFieldType, textFieldTypes } from "../types/formTypes";

export default function Form(props: { formId: number }) {
  const initialFormState: () => formDataType = () => {
    const localForms = getForms();

    if (localForms.length > 0) {
      return localForms.filter((form) => form.id === props.formId)[0];
    }

    const newForm = {
      created_on: new Date().toString(),
      hash: Number(new Date()),
      id: Number(new Date()),
      title: "New Untitled Form",
      formFields: initialFormFields,
    };

    saveForms([...localForms, newForm]);
    return newForm;
  };

  const [formState, setFormState] = useState(() => initialFormState());
  const [newField, setNewField] = useState("");

  const initialAutoSaveState: () => boolean = () => {
    let prevAutoSaveState: any = localStorage.getItem("autoSave");
    let persistentAutoSaveState: boolean = prevAutoSaveState
      ? JSON.parse(prevAutoSaveState)
      : false;

    return persistentAutoSaveState;
  };

  const [autoSaveState, setAutoSaveState] = useState(initialAutoSaveState());

  const saveForm = (currentState: formDataType) => {
    const localForms = getForms();
    const updatedLocalForms = localForms.map((form) => {
      return form.id === currentState.id ? currentState : form;
    });
    saveForms(updatedLocalForms);
    localStorage.setItem("autoSave", JSON.stringify(autoSaveState));
  };

  useEffect(() => {
    if (autoSaveState === true) {
      const timeout = setTimeout(() => {
        saveForm(formState);
      }, 1000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [formState]);

  const switchAutoSave = () => {
    if (autoSaveState === true) {
      setAutoSaveState(false);
    } else {
      setAutoSaveState(true);
    }
  };

  const addTextField = (field_type: textFieldTypes) => {
    if (newField.length === 0) {
      alert("Can't add a field with empty name!");
    } else {
      setFormState({
        ...formState,
        hash: Number(new Date()),
        formFields: [
          ...formState.formFields,
          {
            kind: "text",
            id: Number(new Date()),
            label: newField,
            fieldType: field_type,
            value: "",
          },
        ],
      });

      setNewField("");
    }
  };

  const addDropdownField: (label: string) => void = (label: string) => {
    if (newField.length === 0) {
      alert("Can't add a field with empty name!");
    } else {
      setFormState({
        ...formState,
        hash: Number(new Date()),
        formFields: [
          ...formState.formFields,
          {
            kind: "dropdown",
            id: Number(new Date()),
            label: newField,
            options: [],
            value: "",
          },
        ],
      });

      setNewField("");
    }
  };

  const addRadioField: (label: string) => void = (label: string) => {
    if (newField.length === 0) {
      alert("Can't add a field with empty name!");
    } else {
      setFormState({
        ...formState,
        hash: Number(new Date()),
        formFields: [
          ...formState.formFields,
          {
            kind: "radio",
            id: Number(new Date()),
            label: newField,
            options: [],
            value: "",
          },
        ],
      });

      setNewField("");
    }
  };

  const addMultiselectField: (label: string) => void = (label: string) => {
    if (newField.length === 0) {
      alert("Can't add a field with empty name!");
    } else {
      setFormState({
        ...formState,
        hash: Number(new Date()),
        formFields: [
          ...formState.formFields,
          {
            kind: "multiselect",
            id: Number(new Date()),
            label: newField,
            options: [],
            value: [],
          },
        ],
      });

      setNewField("");
    }
  };

  const clearLabels = () => {
    setFormState({
      ...formState,
      formFields: formState.formFields.map((field) => {
        return { ...field, label: "" };
      }),
    });
  };

  const removeField = (id: number) => {
    setFormState({
      ...formState,
      hash: Number(new Date()),
      formFields: formState.formFields.filter((field) => {
        return field.id !== id;
      }),
    });
  };

  const updateLabel = (label_value: string, id: number) => {
    setFormState({
      ...formState,
      hash: Number(new Date()),
      formFields: formState.formFields.map((field) => {
        if (field.id === id) {
          return {
            ...field,
            label: label_value,
          };
        }

        return field;
      }),
    });
  };

  const setTitle = (formId: number, title: string) => {
    setFormState({ ...formState, hash: Number(new Date()), title: title });
    saveForm(formState);
  };
  return (
    <AppContainer>
      <Header title="" />
      <div className="m-6 flex flex-col justify-center p-5 align-middle">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="divide-black-500 flex divide-y-8">
            <input
              type="text"
              className="my-2 h-14 w-14 flex-1 items-center border-0 p-2 text-center text-4xl hover:border-b-2 hover:border-b-sky-500 focus:border-b-2 focus:border-b-sky-500 focus:outline-none focus:ring-0"
              value={formState.title}
              onChange={(e) => {
                setTitle(props.formId, e.target.value);
              }}
              placeholder="Enter form name..."
              id="formTitle"
            ></input>
          </div>
          <br />
          {formState.formFields.map((field) => {
            switch (field.kind) {
              case "text":
                return (
                  <LabelText
                    id={field.id}
                    key={field.id}
                    label={field.label}
                    fieldType={field.fieldType}
                    removeLabelCB={removeField}
                    value={field.value}
                    updateLabelCB={updateLabel}
                  />
                );

              case "dropdown":
                return (
                  <LabelSelect
                    key={field.id}
                    id={field.id}
                    parent_id={props.formId}
                    label={field.label}
                    value={field.value}
                    options={field.options}
                    updateLabelCB={updateLabel}
                    removeLabelCB={removeField}
                    formState={formState}
                    setFormStateCB={setFormState}
                  />
                );

              case "radio":
                return (
                  <LabelRadio
                    key={field.id}
                    id={field.id}
                    label={field.label}
                    options={field.options}
                    parent_id={props.formId}
                    value={field.value}
                    // kind="radio"
                    updateLabelCB={updateLabel}
                    removeLabelCB={removeField}
                    formState={formState}
                    setFormStateCB={setFormState}
                  />
                );

              case "multiselect":
                return (
                  <LabelMultiselect
                    key={field.id}
                    id={field.id}
                    parent_id={props.formId}
                    label={field.label}
                    options={field.options}
                    value={field.value}
                    // kind="multiselect"
                    updateLabelCB={updateLabel}
                    removeLabelCB={removeField}
                    formState={formState}
                    setFormStateCB={setFormState}
                  />
                );
              // return <LabelMultiselect />

              case "textarea":
                return (
                  <LabelTextarea
                    key={field.id}
                    id={field.id}
                    label={field.label}
                    value={field.value}
                    updateLabelCB={updateLabel}
                    removeLabelCB={removeField}
                  />
                );
              default:
                return <div>Invalid Field</div>;
            }
          })}
          <div className="flex gap-6">
            <Link href="/">
              <div className="my-4 rounded-md bg-sky-500 py-2 px-4 font-bold text-white hover:bg-sky-700" onClick={(_) => saveForm(formState)}>
                Close Form
              </div>{" "}
            </Link>
            <div
              onClick={clearLabels}
              className="btn my-4 rounded-md bg-sky-500 py-2 px-4 font-bold text-white hover:cursor-pointer hover:bg-sky-700"
            >
              Clear Labels
            </div>
            <div
              onClick={(_) => {
                saveForm(formState);
              }}
              className="btn my-4 rounded-md bg-sky-500 py-2 px-4 font-bold text-white hover:cursor-pointer hover:bg-sky-700"
            >
              Save Form
            </div>
          </div>
        </form>
        <div className="grid md:grid-cols-2 lg:grid-cols-5">
          <input
            type="text"
            className="my-3 flex-1 rounded-md border-2 border-gray-200 p-2"
            placeholder="Enter new field name..."
            id="addTextFieldInput"
            value={newField}
            onChange={(e: any) => {
              e.preventDefault();
              // console.log(e.target.value);
              setNewField(e.target.value);
            }}
          />
          <select
            id="fieldOptions"
            name="fieldOptions"
            className="mx-5 my-3 rounded-md px-3"
          >
            <optgroup label="Textual">
              <option value="text">Text</option>
              <option value="email">Email</option>
              <option value="password">Password</option>
              <option value="date">Date</option>
              <option value="time">Time</option>
              <option value="url">URL</option>
            </optgroup>
            <optgroup label="Numeric">
              <option value="number">Number</option>
              <option value="tel">Phone Number</option>
              <option value="range">Range</option>
            </optgroup>
            <optgroup></optgroup>
            {/* <optgroup label="Multimedia">
              <option value="image">Image Upload</option>
              <option value="file">File Upload</option>
            </optgroup> */}

            {/* <option value="color">Color</option> */}
            {/* <option value="checkbox">Checkbox</option> */}
          </select>
          <div
            onClick={(_) => {
              addTextField(document.getElementById("fieldOptions")?.value);
            }}
            className="btn m-4 cursor-pointer rounded-lg bg-white py-2 px-4 text-2xl font-bold text-green-500 shadow-lg hover:bg-green-500 hover:text-white"
          >
            Text +
          </div>
          <div
            onClick={(_) => {
              addDropdownField(document.getElementById("fieldOptions")?.value);
            }}
            className="btn m-4 cursor-pointer rounded-lg bg-white py-2 px-4 text-2xl font-bold text-purple-500 shadow-lg hover:bg-purple-500 hover:text-white"
          >
            Dropdown +
          </div>
          <div
            onClick={(_) => {
              addRadioField(document.getElementById("fieldOptions")?.value);
            }}
            className="btn m-4 cursor-pointer rounded-lg bg-white py-2 px-4 text-2xl font-bold text-orange-500 shadow-lg hover:bg-orange-500 hover:text-white"
          >
            Radio +
          </div>
          <div
            onClick={(_) => {
              addMultiselectField(
                document.getElementById("fieldOptions")?.value
              );
            }}
            className="btn m-4 cursor-pointer rounded-lg bg-white py-2 px-4 text-2xl font-bold text-teal-500 shadow-lg hover:bg-teal-500 hover:text-white"
          >
            Multiselect +
          </div>
          <div className="my-2 mx-6 flex-1 items-center py-2 px-6">
            <label htmlFor="autoSave" className="my-3 px-2 py-3">
              Autosave?
            </label>
            <input
              type="checkbox"
              name="autosave"
              id="autoSave"
              className="my-3 px-2 py-3"
              defaultChecked={autoSaveState}
              onClick={(_) => {
                switchAutoSave();
              }}
            ></input>
          </div>
        </div>
      </div>
    </AppContainer>
  );
}
