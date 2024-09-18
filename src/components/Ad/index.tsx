import location from "../../images/location_2838912.png" ; 
import shield from "../../images/secure-shield_388531.png";
import refresh from '../../images/refresh_9903709.png';
interface AdProps {}

const Ad: React.FC<AdProps> = (): JSX.Element => {
  return (
    <div className="flex justify-around items-center bg-gray-200 p-6 w-full">
    <div className="flex flex-col items-center text-center p-4">
      <img src={location} alt="Free Shipping" className="w-16 h-16 mb-2" />
      <h2 className="text-xl font-bold">Free Shipping</h2>
    </div>
    <div className="flex flex-col items-center text-center p-4">
      <img src={refresh} alt="7-Day Exchange" className="w-16 h-16 mb-2" />
      <h2 className="text-xl font-bold">7-Day Exchange</h2>
    </div>
    <div className="flex flex-col items-center text-center p-4">
      <img src={shield} alt="Product Warranty" className="w-16 h-16 mb-2" />
      <h2 className="text-xl font-bold">Product Warranty</h2>
    </div>
  </div>
  );
};

export default Ad;
