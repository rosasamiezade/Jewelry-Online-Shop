import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import ShowHide from "../../ShowHide";
import { useState } from "react";
import "../style.css";
import api from "../../../api";
interface IAuthLoginProps {}

const AuthLogin: React.FC<IAuthLoginProps> = (): JSX.Element => {
  const [hide, setHide] = useState(true);

  const authSchema = yup.object().shape({
    phoneNumber: yup
      .string()
      .matches(/^[0-9]{10}$/, "شماره تلفن باید 10 رقم باشد")
      .required("شماره تلفن الزامی است "),
    password: yup
      .string()
      .min(8, "رمز عبور حداقل باید 8 کلمه باشد ")
      .required("وارد کردن رمز عبور الزامی است "),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(authSchema),
  });

  const onSubmit = (data:any) => {
  console.log("hi")
  };

  return (
    <div className="w-[30%] flex flex-col rounded-lg shadow-lg my-16 bg-white mx-auto p-6">
      <div className="w-full flex flex-col justify-center">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
          ورود به حساب کاربری
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              شماره تلفن
            </label>
            <input
              type="text"
              id="phoneNumber"
              {...register("phoneNumber")}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-150 ease-in-out"
            />
            <p className="text-red-500 text-sm mt-2">
              {errors.phoneNumber?.message}
            </p>
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              رمز عبور
            </label>
            <div className="relative">
              <input
                type={hide ? "password" : "text"}
                id="password"
                {...register("password")}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-150 ease-in-out pr-12"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                <ShowHide hide={hide} handleClick={() => setHide(!hide)} />
              </div>
            </div>
            <p className="text-red-500 text-sm mt-2">
              {errors.password?.message}
            </p>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:from-teal-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-150 ease-in-out"
          >
            ارسال
          </button>
          <p className="text-teal-600 hover:text-teal-700 text-center mt-4">
            <Link to="/signup">حساب کاربری ندارید؟ ایجاد حساب کاربری</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AuthLogin;
