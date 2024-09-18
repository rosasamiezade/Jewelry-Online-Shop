import { useParams } from "react-router-dom";
import api from "../../api";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "../ProductCard";
interface DynamicCategoryProps {}
type ProductData = {
  productCategory: string;
  productName: string;
  productPrice: string;
  productDescription: string;
  productId: string;
  productImage:string;
};

const DynamicCategory: React.FC<DynamicCategoryProps> = (): JSX.Element => {
  const { ProductCategory } = useParams<{ ProductCategory: string }>();
  const fetchProducts = async () => {
    try {
      const response = await api.get(`/${ProductCategory}`);
      if (response.data) {
        return response.data;
      } else {
        return [];
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };

  const { data, isLoading, isError } = useQuery<ProductData[]>({
    queryFn: fetchProducts,
    queryKey: [ProductCategory],
  });

  if (isLoading) return <div className="text-white">Loading...</div>;
  if (isError) return <div className="text-white">Error loading data</div>;
  return (
    <div className="text-white px-4 py-6 flex flex-col items-center">
    <h2 className="text-3xl font-bold mb-6 text-center">{ProductCategory} Products</h2>
    <div className="flex flex-wrap gap-6 w-4/5 m-auto justify-start inline-flex flex-auto">
      {data?.map((product: ProductData) => (
        <ProductCard 
          key={product.productId} 
          {...product} 
        />
      ))}
    </div>
  </div>
  );
};

export default DynamicCategory;
