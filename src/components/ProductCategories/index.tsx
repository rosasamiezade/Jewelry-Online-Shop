import Category from "./Category";
import { Link } from "react-router-dom";
import categoryData from "./categoryData";
import DynamicCategory from "../DynamicCategory";
interface ProductCategoriesProps {}

const ProductCategories: React.FC<ProductCategoriesProps> = (): JSX.Element => {
  return (
    <div className="bg-black p-6 w-4/5 m-auto mt-16">
      <h2 className="text-white text-2xl font-bold mb-6 text-center mb-12">Product Categories</h2>
      <div className="flex gap-4 align-center justify-between cursor-pointer" >
      {categoryData?.map((category1) => {
        return (
         
         <Link key={category1.id} to={category1.url}> <Category  {...category1} /></Link>
       
        
        )
      })}
      </div>
    </div>
  );
};

export default ProductCategories;
