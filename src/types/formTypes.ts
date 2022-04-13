export type stringOrnumber = string | number;

export type textFieldTypes =
  | "text"
  | "email"
  | "url"
  | "password"
  | "number"
  | "tel"
  | "date";

export type TextField = {
  id: number;
  kind: "text";
  label: string;
  fieldType: textFieldTypes;
  value: string;
};

export type DropdownField = {
  id: number;
  kind: "dropdown";
  label: string;
  options: string[];
  value: string;
};

export type RadioField = {
  id: number;
  kind: "radio";
  label: string;
  options: string[];
  value: string;
};

export type MultiselectField = {
  id: number;
  kind: "multiselect";
  label: string;
  options: string[];
  value: string[];
};

export type TextareaField = {
  id: number;
  kind: "textarea";
  label: string;
  value: string;
};
export type formFieldType =
  | TextField
  | DropdownField
  | RadioField
  | MultiselectField
  | TextareaField;

export type fieldKind =
  | "text"
  | "dropdown"
  | "radio"
  | "multiselect"
  | "textarea";
