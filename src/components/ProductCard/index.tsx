interface ProductProps {
      productName: string;
      productPrice: string;
      productDescription: string;
      productId:string;
      productImage:string;
    }
    
    const ProductCard: React.FC<ProductProps> = ({productName, productPrice, productDescription , productId,productImage}) => {
      return (
        <div className="flex flex-col items-center justify-center bg-zinc-900 rounded-lg shadow-lg overflow-hidden m-auto">
        <img 
          src={productImage} 
          alt={productName} 
          className="w-60 h-72 object-cover rounded-t-lg" 
        />
        <div className="p-4 text-center">
          <h2 className="text-xl font-bold mb-2">{productName}</h2>
          <p className="text-lg font-semibold mb-2">{productPrice}$</p>
          <p className="text-base w-40">{productDescription}</p>
        </div>
      </div>
      );
    };
  
    export default ProductCard;