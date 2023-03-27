import React, { FC } from "react";
import { FieldProps } from "formik";
import "./style.scss";



type CheckboxTypes = {
    label: string;
}


const Checkbox: FC<CheckboxTypes & FieldProps> = ({
    field,
    form: { touched, errors }, // values dirty, isValid, status, etc.
    ...props
}) => (
    <>
        <label className="formCheck">
            <input {...field} {...props} type="checkbox" />
            {props.label}
        </label>
        {touched[field.name] && errors[field.name] && (
            <div className="error">{errors[field.name] as string}</div>
        )}
    </>
);

export default Checkbox;