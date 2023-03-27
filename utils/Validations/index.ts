import * as Yup from "yup";

export const ValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  birthDate: Yup.date().required(" Date is required"),
  gender: Yup.string().required("Gender is required"),
  
});
