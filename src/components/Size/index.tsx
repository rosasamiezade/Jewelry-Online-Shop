import ring from "../../images/photo_2024-08-20_14-36-09.jpg";
import {Link} from 'react-router-dom' ;
interface SizeProps {}

const Size: React.FC<SizeProps> = (): JSX.Element => {
  return (
    <div className="text-gray-300 flex align-center justify-between w-full" >
      <div className="w-3/5 pl-20">
    <div className="w-4/5 mx-auto mt-20">
    <h1 className="text-2xl font-bold leading-tight text-left">
          Guide to measuring your ring size at home with the simplest and most
          convenient tools...!
        </h1>
        <p className=" text-left text-xl mt-8">
          Perhaps you're also looking for a way to easily and effortlessly
          measure your finger and ring size at home, using minimal and the most
          accessible tools.
        </p>
        <p className="mb-10 text-left text-xl "> 
          we aim to teach you the easiest method, which requires only a
          few simple things that can be easily found in any home or anywhere!
        </p>
       <div className="flex justify-center w-full mt-12">
       <Link to="/SizeGuide" className="w-3/5">
             <button className="w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black font-bold px-8 py-4 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-110 mx-auto">continue</button>
        </Link>
       </div>
    </div>
       
      </div>
      <div className="w-2/5 flex justify-end" >
        <img src={ring} alt="ringPhoto" />
      </div>
    </div>
  );
};

export default Size;
