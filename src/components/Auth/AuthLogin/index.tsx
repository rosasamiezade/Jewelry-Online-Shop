import React from "react";
import { useForm } from "react-hook-form";
import { authSchema } from '../../../validations/authSchema';
import { Link } from "react-router-dom";
import ShowHide from "../../ShowHide";
import { useState } from "react";
import "../style.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast, Bounce } from "react-toastify";

interface IAuthLoginProps {}

const AuthLogin: React.FC<IAuthLoginProps> = (): JSX.Element => {
  const [hide, setHide] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(authSchema),
  });

  const onSubmit = (data: any) => {
    console.log("hi")
  };

  return (
    <div className="w-[30%] flex flex-col rounded-lg shadow-lg my-16 bg-gradient-to-br from-gray-900 to-black mx-auto p-6">
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
        theme="dark"
        transition={Bounce}
      />
      <div className="w-full flex flex-col justify-center">
        <h2 className="text-center text-2xl font-bold text-gray-100 mb-6">
          Login to Account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              {...register("phoneNumber")}
              className="w-full px-4 py-3 border border-gray-700 bg-gray-800 rounded-lg shadow-sm text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-gray-600 transition duration-150 ease-in-out"
            />
            <p className="text-red-500 text-sm mt-2">
              {errors.phoneNumber?.message}
            </p>
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={hide ? "password" : "text"}
                id="password"
                {...register("password")}
                className="w-full px-4 py-3 border border-gray-700 bg-gray-800 rounded-lg shadow-sm text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-gray-600 transition duration-150 ease-in-out"
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
            className="w-full py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-gray-100 font-semibold rounded-lg shadow-md hover:from-gray-700 hover:to-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 transition duration-150 ease-in-out"
          >
            Submit
          </button>
          <p className="mt-4 text-center text-gray-400">
            <Link to="/signup" className="text-gray-500 hover:text-gray-300">Don't have an account? Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AuthLogin;
