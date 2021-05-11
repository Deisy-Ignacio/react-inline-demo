import React, { useState } from "react";
import "./Editable.css";

const Editable = ({
  text,
  type,
  placeholder,
  customInput,

  customClass,

  ...props
}) => {
  const [isEditing, setEditing] = useState(false);

  const handleKeyDown = (event, type) => {
    const { key } = event;
    const keys = ["Escape", "Tab"];
    const enterKey = "Enter";
    const allKeys = [...keys, enterKey];
    if (
      (type === "textarea" && keys.indexOf(key) > -1) ||
      (type !== "textarea" && allKeys.indexOf(key) > -1)
    ) {
      setEditing(false);
    }
  };

  return (
    <section {...props} className="flex">
      <div
        style={{ display: isEditing ? "block" : "none" }}
        onBlur={() => setEditing(false)}
        onKeyDown={(e) => handleKeyDown(e, type)}
      >
        {customInput}
      </div>

      <div
        style={{ display: !isEditing ? "block" : "none" }}
        className={customClass}
      >
        {text || placeholder}
      </div>
      <div onClick={() => setEditing(true)}>
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.674 11.2434V18.9148C17.674 19.6517 17.0767 20.249 16.3399 20.249H6.3336C5.59676 20.249 4.99944 19.6517 4.99944 18.9148V7.5744C4.99944 6.83756 5.59676 6.24023 6.3336 6.24023H15.0057"
            stroke="#A9A9A9"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.2099 13.4541L10.8511 14.3974L11.7943 12.0386L17.9268 5.90674L19.3417 7.32162L13.2099 13.4541Z"
            stroke="#A9A9A9"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.3417 7.32159L17.9268 5.90671L18.634 5.19893C19.0249 4.80804 19.6586 4.80804 20.0495 5.19893C20.4404 5.58983 20.4404 6.22359 20.0495 6.61448L19.3417 7.32159Z"
            stroke="#A9A9A9"
          />
        </svg>
      </div>
    </section>
  );
};

export default Editable;
