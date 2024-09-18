import { Outlet } from "react-router-dom";
import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";

interface ILayoutProps {
    
}
 
const Layout:React.FC<ILayoutProps> = ():JSX.Element => {
    return ( 
      <div className="min-h-screen flex flex-col justify-between">
        <Header/>
       <div className="flex-grow flex items-center justify-center ">
        <Outlet/>
       </div>
        <Footer/>
      </div>
    );
}
 
export default Layout;