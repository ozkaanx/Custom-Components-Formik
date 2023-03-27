import React, { FC } from "react";
import { FieldProps } from "formik";
import './style.scss'

type DropDownProps = {
    options: Array<{ value: string; label: string }>;
    label?: string;
    placeholder?: string;
};

const DropDown: FC<DropDownProps & FieldProps> = ({
    field,
    form: { touched, errors }, // values dirty, isValid, status, etc.
    options = [],
    ...props
}) => (
    <div className="dropDown">
        <label className="dropDown__label">
           <span className="dropDown__label--span">{props?.label}</span> 
            <select className="dropDown__select" {...field} {...props}>
                {/* //options map here */}
                {options?.map((option, index) => (
                    <option  key={index} value={option?.value}>
                        {option?.label}
                    </option>
                ))}
            </select>
        </label>
        {touched[field.name] && errors[field.name] && (
            <div className="error">{errors[field.name] as string}</div>
        )}
    </div>
);

export default DropDown;

