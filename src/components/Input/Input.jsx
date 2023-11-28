import { InputStyled } from "./Input.styled.js";

const Input = ({ type = "text", value = "", name, min, max, placeholder, required = true, onChange }) => {
  return (
    <InputStyled
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      minLength={min}
      maxLength={max}
      required={required}
      onChange={onChange}
    />
  );
};

export default Input;
