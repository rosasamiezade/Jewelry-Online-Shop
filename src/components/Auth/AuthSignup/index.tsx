import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import ShowHide from "../../ShowHide";
import api from "../../../api";
import { useMutation } from '@tanstack/react-query';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaSpinner } from "react-icons/fa6";
interface IAuthSignupProps {}

const AuthSignup: React.FC<IAuthSignupProps> = (): JSX.Element => {
  const [hide, setHide] = useState(true);
  const createUser = async (userData: { phoneNumber: string; password: string }) => {
    try {
      const res = await api.post('/users', userData);
      if (res.status === 200 || res.status === 201) {
        toast.success('عملیات با موفقیت انجام شد ', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      
      } else {
        toast.error('خطایی در ارتباط با سرور رخ داده است ', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
      }
    } catch (err) {
      console.log(err);
      toast.error('خطایی در ارتباط با سرور رخ داده است ',{
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    }
  };
  const { mutateAsync ,isPending ,isError, isSuccess, error } = useMutation({
    mutationFn:createUser
  }
  );
  const authSchema = yup.object().shape({
    phoneNumber: yup
      .string()
      .matches(/^[0-9]{10}$/, "شماره تلفن باید 10 رقم باشد")
      .required("شماره تلفن الزامی است "),
    password: yup
      .string()
      .min(8, "رمز عبور حداقل باید 8 کلمه باشد ")
      .required("وارد کردن رمز عبور الزامی است "),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref("password")],
        "رمز عبور و تایید رمز عبور باید مطابقت داشته باشند"
      )
      .required("تایید رمز عبور الزامی است"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(authSchema),
  });
  
  const onSubmit =async (data: { phoneNumber: string; password: string })=>{
    try{
      await mutateAsync(data);
      reset(); 
    }
    catch(e){
      console.log(e)
    }
  }

  return (
    <div className="w-[30%] mx-auto p-6 bg-white rounded-lg shadow-lg my-16">
         <ToastContainer
  position="top-center"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="light"
  transition={Bounce}
/>
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        ایجاد حساب کاربری
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
            <div className="absolute inset-y-0 right-0 flex items-center justify-center pr-3 cursor-pointer">
              <ShowHide hide={hide} handleClick={() => setHide(!hide)} />
            </div>
          </div>

          <p className="text-red-500 text-sm mt-2">
            {errors.password?.message}
          </p>
        </div>
        <div className="relative">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            تایید رمز عبور
          </label>
          <div className="relative">
            <input
              type={hide ? "password" : "text"}
              id="confirmPassword"
              {...register("confirmPassword")}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-150 ease-in-out pr-12"
            />
            <div className="absolute inset-y-0 right-0 flex items-center justify-center pr-3 cursor-pointer">
              <ShowHide hide={hide} handleClick={() => setHide(!hide)} />
            </div>
          </div>

          <p className="text-red-500 text-sm mt-2">
            {errors.confirmPassword?.message}
          </p>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:from-teal-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-150 ease-in-out"
        >
          {isPending?<FaSpinner className="animate-ping h-5 w-5 mx-auto"/>:"ارسال" 
             }
        </button>
        <p className="mt-4 text-center text-gray-600">
          <Link to="/login" className="text-teal-600 hover:text-teal-700">
            حساب کاربری دارید؟ وارد شوید
          </Link>
        </p>
      </form>
    </div>
  );
};

export default AuthSignup;
