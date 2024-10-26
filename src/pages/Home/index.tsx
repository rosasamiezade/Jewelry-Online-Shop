import { Link } from "react-router-dom";
import Banner from "../../components/Banner";
import ProductCategories from "../../components/ProductCategories";
import Ad from "../../components/Ad";
import CustomerClub from "../../components/CustomerClub";
import Size from "../../components/Size";
interface HomeProps {}

const Home: React.FC<HomeProps> = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-col w-full">
        <Banner />
        <ProductCategories />
        <Ad />
        <Size/>
        <CustomerClub/>
      </div>
    </>
  );
};

export default Home;
