import "./Button.css";

export const Button = ({
  className = "button",
  onClick = () => {
    return null;
  },
  name = "button",
  text = "",
}) => {
  return (
    <button onClick={onClick} className={className} name={name} id={name}>
      {text}
    </button>
  );
};
