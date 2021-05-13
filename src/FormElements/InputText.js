import { useFormContext } from "react-hook-form";

export default function TextInput({
  name,
  id,
  type = "text",
  label = false,
  errorMessage = "",
  customClass = "",
  ...props
}) {
  const { register, ...methods } = useFormContext();
  const hasError = methods.formState.errors[name]?.message || false;

  return (
    <div>
      <input
        className={`${customClass} ${
          hasError
            ? "border-red-300 focus:outline-red-300"
            : "border-green-300 focus:outline-green-300"
        }`}
        name={name}
        id={id}
        type={type}
        {...register(name)}
        {...props}
      />{" "}
      <div>{hasError}</div>
    </div>
  );
}
