import * as yup from "yup";

export const validationSchema = yup.object().shape({
  userName: yup.string().required(),
  userAge: yup.number().required().min(18).max(40),
  userEmail: yup.string().email().required(),
});
