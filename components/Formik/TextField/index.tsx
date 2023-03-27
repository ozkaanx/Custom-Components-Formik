import React, { FC } from "react";
import { FieldProps } from "formik";
import "./style.scss";

type inputProps = {
  className?: string;
  helperText?: {
    label: string;
    position: string,
  }
};

const TextField: FC<inputProps & FieldProps> = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // values dirty, isValid, status, etc.
  className='',
  helperText = {
    label: '',
    position: "left"
  },
  ...props
}) => (
  <div className="textField"> 
    <input {...field} {...props} className={`textField__textFieldInput ${className}`  } />
    {touched[field.name] && errors[field.name] ? (
      <div className="textField__error">{errors[field.name] as string}</div>
    ) : helperText?.label ? <span className={`textField__helperText ${helperText?.position}`}>{helperText?.label}</span> : null}
  </div>
);

export default TextField;
