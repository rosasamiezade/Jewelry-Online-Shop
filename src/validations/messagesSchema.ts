import * as yup from "yup";
export const MessageSchema = yup.object().shape({
    name: yup.string().min(3, "Name must be at least 3 characters").required("Name is required"),
    phoneNumber: yup.string().matches(/^[0-9]{10}$/, "Phone number must be 10 digits").required("Phone number is required"),
    message: yup.string().required("Message is required").min(2, "Message must be at least 2 characters"),
  });