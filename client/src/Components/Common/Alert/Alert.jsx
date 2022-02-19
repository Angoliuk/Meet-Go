import "./Alert.css";

export const Alert = ({
  onClick = () => {
    return null;
  },
  text = "error",
  type = "success",
}) => {
  return (
    <div className="alertBlock" onClick={onClick}>
      <div className={`alert ${type}`}>{text}</div>
      <div className="alertBackground"></div>
    </div>
  );
};
