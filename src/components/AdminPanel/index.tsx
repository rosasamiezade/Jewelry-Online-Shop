import AddProduct from "./AddProduct";
import { useState } from "react";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface AdminPanelProps {
 
}
 
const AdminPanel: React.FC<AdminPanelProps> = (): JSX.Element=> {
    const [isActive,setIsActive]=useState(false);
    return ( <>
  <AddProduct isActive={isActive} handleClick={()=>{setIsActive(!isActive)}}/>

    </> );
}
 
export default AdminPanel;