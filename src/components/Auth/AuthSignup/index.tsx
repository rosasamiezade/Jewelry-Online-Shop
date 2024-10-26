import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { authSchema } from "../../../validations/signupSchema";
import { Link } from "react-router-dom";
import ShowHide from "../../ShowHide";
import { useMutation } from '@tanstack/react-query';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaSpinner } from "react-icons/fa6";
import { createUser } from "../../../services/signupService";
interface IAuthSignupProps {}

const AuthSignup: React.FC<IAuthSignupProps> = (): JSX.Element => {
  const [hide, setHide] = useState(true);
  
  const { mutateAsync, isPending, isError, isSuccess, error } = useMutation({
    mutationFn: createUser
  });
 
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(authSchema),
  });
  
  const onSubmit = async (data: { phoneNumber: string; password: string }) => {
    try {
      await mutateAsync(data);
      reset(); 
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="w-[30%] mx-auto p-6 bg-gradient-to-br from-gray-900 to-black rounded-lg shadow-lg my-16">
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
  <h2 className="text-2xl font-bold text-gray-100 mb-6 text-center">
    Create an Account
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
          className="w-full px-4 py-3 border border-gray-700 bg-gray-800 rounded-lg shadow-sm text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-gray-600 transition duration-150 ease-in-out pr-12"
        />
        <div className="absolute inset-y-0 right-0 flex items-center justify-center pr-3 cursor-pointer ">
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
        className="block text-sm font-medium text-gray-300 mb-2"
      >
        Confirm Password
      </label>
      <div className="relative">
        <input
          type={hide ? "password" : "text"}
          id="confirmPassword"
          {...register("confirmPassword")}
          className="w-full px-4 py-3 border border-gray-700 bg-gray-800 rounded-lg shadow-sm text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-gray-600 transition duration-150 ease-in-out pr-12"
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
      className="w-full py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-gray-100 font-semibold rounded-lg shadow-md hover:from-gray-700 hover:to-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 transition duration-150 ease-in-out"
    >
      {isPending ? <FaSpinner className="animate-ping h-5 w-5 mx-auto" /> : "Submit"}
    </button>
    <p className="mt-4 text-center text-gray-400">
      <Link to="/login" className="text-gray-500 hover:text-gray-300">
        Already have an account? Log in
      </Link>
    </p>
  </form>
</div>

  );
};

export default AuthSignup;
