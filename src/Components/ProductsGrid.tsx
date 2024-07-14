import { IProduct } from "../Redux/Features/types";
import ProductsCards from "./ProductsCards";

interface ProductsGridProps {
    products: IProduct[];
    title?: string;
  }
  
  const ProductsGrid: React.FC<ProductsGridProps> = ({ products, title }) => {
    return (
      <div className="my-8">
        {title && <h2 className="text-2xl text-center font-bold mb-4">{title}</h2>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
          {products.map((product) => (
           <ProductsCards key={product._id} product={product} />
          ))}
        </div>
      </div>
    );
  };
  
  export default ProductsGrid;