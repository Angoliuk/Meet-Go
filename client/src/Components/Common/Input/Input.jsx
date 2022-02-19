import "./Input.css";

export const Input = ({
  className = "input",
  value = "",
  type = "text",
  onChange = () => {
    return null;
  },
  name = "button",
  text = "",
}) => {
  return (
    <div>
      <input
        onChange={onChange}
        type={type}
        value={value}
        className={className}
        name={name}
        id={name}
      />
      <label htmlFor={name}>{text}</label>
    </div>
  );
};
