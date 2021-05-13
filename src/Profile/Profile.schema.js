/* eslint-disable no-template-curly-in-string */
import * as yup from "yup";

export const schema = {
  firstname: {
    name: "firstname",
    id: "firstname",
    type: "text",
    label: "",
    placeholder: "Enter your first name",
    defaultValue: "",
    validation: yup
      .string()
      .required()
      .min(1, "It should at least 1 character"),
  },
  bio: {
    name: "bio",
    id: "bio",
    type: "text",
    label: "",
    placeholder: "",
    defaultValue: "",
    validation: yup
      .string()
      .required()
      .max(500, "It should be ${max} characters or less"),
  },
  age: {
    name: "age",
    id: "age",
    type: "number",
    label: "",
    placeholder: "Enter your age",
    defaultValue: "",
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
