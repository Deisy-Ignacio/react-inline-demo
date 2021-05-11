import * as yup from "yup";

export const schema = {
  firstname: {
    name: "firstname",
    id: "firstname",
    type: "text",
    label: "",
    placeholder: "Enter your first name",
    defaultValue: "",
    errorMessage: "",
    validation: yup.string().required(),
  },
  age: {
    name: "age",
    id: "age",
    type: "number",
    label: "",
    placeholder: "Enter your age",
    defaultValue: "",
    errorMessage: "Required field",
    validation: yup.number().positive().integer().required(),
  },
};

const schemaShape = Object.keys(schema).reduce((result, key) => {
  result[key] = schema[key].validation;
  return result;
}, {});

export const resolver = yup.object().shape(schemaShape);

const Schema = {
  schema,
  resolver,
};

export default Schema;
