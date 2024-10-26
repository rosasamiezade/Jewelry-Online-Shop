
import * as yup from "yup";

export const authSchema = yup.object().shape({
    phoneNumber: yup
      .string()
      .matches(/^[0-9]{10}$/, "شماره تلفن باید 10 رقم باشد")
      .required("شماره تلفن الزامی است "),
    password: yup
      .string()
      .min(8, "رمز عبور حداقل باید 8 کلمه باشد ")
      .required("وارد کردن رمز عبور الزامی است "),
  });