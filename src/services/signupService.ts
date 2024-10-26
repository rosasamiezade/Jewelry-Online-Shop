import api from "../api";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const createUser = async (userData: { phoneNumber: string; password: string }) => {
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