"use client";
import { Field, Form, Formik, FormikProps } from "formik";
import { initialValues } from "@/utils/Initialvalues";
import TextField from "../Formik/TextField";
import Checkbox from "../Formik/Checkbox";
import "./style.scss";
import { ValidationSchema } from "@/utils/Validations";
import DropDown from "../Formik/Dropdown";
import FormButton from "../Formik/Buttons";

export default function AppForm() {

  const options = [

    { value: "1", label: "Man" },
    { value: "2", label: "Woman" },
  ];
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidationSchema}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(props: FormikProps<any>) => (
        <Form>
          <Field
            name="firstName"
            component={TextField}
            placeholder="Enter your first name"
            maxLength="20"
            helperText={{
              label: `${props.values.firstName.length}/20`,
              position: "right",
            }}
          />
          <Field
            name="lastName"
            component={TextField}
            placeholder="Enter your last name"
          />
          <Field
            name="birthDate"
            component={TextField}
            type="date"
          />

          <Field
            name="gender"
            label="Gender"
            options={options}
            component={DropDown}
            placeholder="Select"
          />

          <FormButton type="submit" name="Submit" variant="primary" />
        </Form>
      )}
    </Formik>
  );
}
