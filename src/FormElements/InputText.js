import { useFormContext } from "react-hook-form";

export default function TextInput({
  name,
  id,
  type = "text",
  label = false,
  placeholder = "",
  defaultValue = "",
  errors = false,
  errorMessage = "",
  customClass = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 bg-gray-100 mb-8",
  ...props
}) {
  const { register } = useFormContext();
  return (
    <div>
      <input
        className={customClass}
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...register(name)}
        {...props}
      />{" "}
      {errorMessage && errors && (
        <p>
          <span>{errorMessage}</span>
        </p>
      )}
    </div>
  );
}
