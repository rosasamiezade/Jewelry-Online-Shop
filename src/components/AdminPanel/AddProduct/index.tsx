import { useState } from "react";
import * as Yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../../api";
import { useMutation } from "@tanstack/react-query";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaSpinner } from "react-icons/fa6";

// types
interface IAddProduct {
  isActive: boolean;
  handleClick: () => void;
}
type FormFields = {
  productCategory: string;
  productName: string;
  productPrice: string;
  productDescription: string;
  productId: string;
  productImage:string;
};
type ProductData = {
  productCategory: string;
  productName: string;
  productPrice: string;
  productDescription: string;
  productId: string;
  productImage:string;
};

// main function
const AddProduct: React.FC<IAddProduct> = ({
  isActive,
  handleClick,
}): JSX.Element => {
  
  const categories = [
    "ring",
    "necklace",
    "anklet",
    "earings",
    "weddingRing",
    "bracelet",
  ];

  // adding products to the server
  const addingProduct = async (productData: ProductData) => {
    try {
      const res = await api.post(`/${productData.productCategory}`, productData);
      if (res.status === 200 || res.status === 201) {
        toast.success("Operation successful", {
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
        toast.error("Error communicating with the server", {
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
      toast.error("Error communicating with the server", {
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

  // using useMutation
  const { mutateAsync: adding, isPending } = useMutation({
    mutationFn: addingProduct,
  });

  // using Yup
  const productSchema = Yup.object().shape({
    productCategory: Yup.string().required("Product category is required"),
    productName: Yup.string().required("Product name is required"),
    productPrice: Yup.string()
      .required("Product price is required")
      .matches(/^\d+$/, "Price should only contain numbers"),
    productDescription: Yup.string()
      .required("Product description is required")
      .min(10, "Description must be at least 10 characters")
      .max(500, "Description must be no more than 500 characters"),
    productId: Yup.string()
      .required("Product ID is required")
      .matches(/^[a-zA-Z0-9]{6,12}$/, "ID should be between 6 and 12 alphanumeric characters"),
      productImage: Yup.string()
      .required("Product ID is required")
  });

  // using useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormFields>({
    resolver: yupResolver(productSchema),
  });

  // onSubmit function
  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await adding({
        productCategory: data.productCategory,
        productName: data.productName,
        productPrice: data.productPrice,
        productDescription: data.productDescription,
        productId: data.productId,
        productImage:data.productImage
      });
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-4">
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Add New Product
      </button>
      {isActive && (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <select
                {...register("productCategory")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              {errors.productCategory && (
                <div className="text-red-500">{errors.productCategory.message}</div>
              )}
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Product Name"
                {...register("productName")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.productName && (
                <div className="text-red-500">{errors.productName.message}</div>
              )}
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Product Price"
                {...register("productPrice")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.productPrice && (
                <div className="text-red-500">{errors.productPrice.message}</div>
              )}
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Product Description"
                {...register("productDescription")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            {errors.productDescription && (
              <div className="text-red-500">{errors.productDescription.message}</div>
            )}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Product ID"
                {...register("productId")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.productId && (
                <div className="text-red-500">{errors.productId.message}</div>
              )}
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Product image"
                {...register("productImage")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.productImage && (
                <div className="text-red-500">{errors.productImage.message}</div>
              )}
            </div>
            <button
              type="submit"
              disabled={isPending}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
            >
              {isPending ? (
                <FaSpinner className="animate-ping h-5 w-5 mx-auto" />
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddProduct;
