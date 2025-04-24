import * as Yup from "yup";
export const validationSchema = Yup.object().shape({
  Name: Yup.string().required("name_required"),
  Title: Yup.string().required("title_required"),
  Description: Yup.string().required("description_required"),
});
