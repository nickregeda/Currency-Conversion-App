import * as Yup from "yup";

const ConvertFormSchema = Yup.object().shape({
    value_from: Yup.string()
        .required("required"),
    value_to: Yup.string()
        .required("required"),
    amount: Yup.string()
        .required("required"),
});
export default ConvertFormSchema;