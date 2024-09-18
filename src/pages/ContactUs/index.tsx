import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import api from "../../api";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMutation } from "@tanstack/react-query";
import { FaSpinner } from "react-icons/fa6";
import photo from "../../images/photooo.jpg" ;
interface IContactUsProps {}
type FormFields = {
  name: string;
  phoneNumber: string;
  message: string;
};


const ContactUs: React.FC<IContactUsProps> = (): JSX.Element => {

  const addMessage = async (userMessage: { name: string; phoneNumber: string; message: string }) => {
    try {
      const res = await api.post('/messages', userMessage);
      if (res.status === 200 || res.status === 201) {
        toast.success('Message sent successfully!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      } else {
        toast.error('An error occurred with the server.', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      }
    } catch (err) {
      console.log(err);
      toast.error('An error occurred with the server.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  }

  const { mutateAsync, isPending } = useMutation({
    mutationFn: addMessage,
  });

  const MessageSchema = yup.object().shape({
    name: yup.string().min(3, "Name must be at least 3 characters").required("Name is required"),
    phoneNumber: yup.string().matches(/^[0-9]{10}$/, "Phone number must be 10 digits").required("Phone number is required"),
    message: yup.string().required("Message is required").min(2, "Message must be at least 2 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormFields>({
    resolver: yupResolver(MessageSchema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await mutateAsync(data);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
<div className="w-full bg-black text-white  flex justify-between my-12">
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
        <div className="w-1/3">
        <img src={photo} alt="image" />
      </div>
     <div className=" w-2/3 align-center" >
     <h1 className="text-4xl font-bold text-center mb-8 text-white">
        Contact Us
      </h1>
      <p className="text-lg text-gray-400 mb-6 text-center">
        If you have any questions or need assistance, please contact us. Our team is ready to help you.
      </p>

      <div className="flex flex-col md:flex-row justify-between mb-12">
        <div className="m-auto">
          <h2 className="text-2xl font-bold text-white mb-4">
            Contact Information
          </h2>
          <p className="text-lg text-gray-400 mb-2">
            <strong>Address:</strong> Tehran, Enghelab St., No. 123
          </p>
          <p className="text-lg text-gray-400 mb-2">
            <strong>Phone:</strong> 0910-8841417
          </p>
          <p className="text-lg text-gray-400 mb-2">
            <strong>Email:</strong> rozasamizade@gmail.com
          </p>
          <p className="text-lg text-gray-400">
            <strong>Working Hours:</strong> Saturday to Thursday 9 AM - 6 PM
          </p>
        </div>
      </div>
      <div className="max-w-md mx-auto p-6 bg-black rounded-lg shadow-lg border border-gray-800">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name")}
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-white"
          />

          {errors.name && (
            <div className="text-red-400">{errors.name.message}</div>
          )}

          <input
            {...register("phoneNumber")}
            type="text"
            placeholder="Phone Number"
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-white"
          />

          {errors.phoneNumber && (
            <div className="text-red-400">{errors.phoneNumber.message}</div>
          )}

          <textarea
            {...register("message")}
            placeholder="Your Message"
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-white"
          ></textarea>

          {errors.message && (
            <div className="text-red-400">{errors.message.message}</div>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            {isPending ? <FaSpinner className="animate-spin h-5 w-5 mx-auto" /> : "Send"}
          </button>
        </form>
      </div>
      
     </div>
   
    </div>
  );
};

export default ContactUs;
