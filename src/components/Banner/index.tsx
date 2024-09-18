import banner1 from "../../images/photo_2024-08-20_15-26-25.jpg";
import banner2 from "../../images/pexels-emre-vonal-51672462-7700270.jpg";

import { useState,useEffect } from "react";
interface BannerProps {
    
    
}
 
const Banner: React.FC<BannerProps> = (): JSX.Element=> {
const banners=[banner1,banner2] ;
const [currentIndex,setCurrentIndex]=useState(0)

useEffect(()=>{
const interval = setInterval(()=>{
setCurrentIndex((index)=>
index===banners.length-1?0:index+1
)
},6000)

return()=>clearInterval(interval)
},[banners.length])
    return (
      (
        <div className="relative w-2/3  m-auto" style={{ height: 'calc(100vh - 64px)' }}>
        <div className="relative w-full h-full overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={banners[currentIndex]}
              alt="banner image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30">
            <p className="text-lg md:text-xl font-semibold text-white mb-2">LUNA</p>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4">COLLECTION</h2>
            <p className="text-sm md:text-lg text-white mb-6 max-w-lg text-center">
              Handmade luxury, creation of art, impressive appearance
            </p>
            <button className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black font-bold px-8 py-4 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              DISCOVER
            </button>
          </div>
        </div>
      </div>
      )
    );
}
 
export default Banner;


