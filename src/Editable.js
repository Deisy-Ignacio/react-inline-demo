import React, { useState } from "react";
import { useFormContext } from "react-hook-form";

import "./Editable.css";

import iconEdit from "./assets/iconEdit.svg";
import iconSave from "./assets/iconSave.svg";
import iconClose from "./assets/iconCancel.svg";

const Editable = ({
  text,
  placeholder,
  customInput,
  customClass,
  saveField = () => {},
  resetField = () => {},
  ...props
}) => {
  const [isEditing, setEditing] = useState(false);

  const { register, ...methods } = useFormContext();
  const hasError = methods.formState.errors[props.name]?.message || false;

  const handleClickSave = () => {
    if (hasError) return;
    setEditing(false);
    saveField(props.name);
  };

  const handleClickCancel = () => {
    setEditing(false);
    resetField(props.name);
  };

  return (
    <section {...props} className="flex">
      <div style={{ display: isEditing ? "block" : "none" }}>{customInput}</div>

      <div
        style={{ display: !isEditing ? "block" : "none" }}
        className={customClass}
      >
        {text || placeholder}
      </div>
      {!isEditing && (
        <button type="button" onClick={() => setEditing(true)}>
          <img src={iconEdit} alt="Edit field" />
        </button>
      )}
      {isEditing && (
        <>
          <button type="button" onClick={() => handleClickCancel()}>
            <img src={iconClose} alt="Cancel" />
          </button>
          <button
            type="button"
            onClick={() => handleClickSave()}
            disabled={hasError}
          >
            <img src={iconSave} alt="Save" />
          </button>
        </>
      )}
    </section>
  );
};

export default Editable;
