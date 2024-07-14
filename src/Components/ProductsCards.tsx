import {  Link } from "react-router-dom";
import { IProduct } from "../Redux/Features/types";

interface ProductCardProps {
  product: IProduct;
}
const ProductsCards: React.FC<ProductCardProps> = ({ product }) => {
   
  return (
    <div className="card glass w-auto h-auto">
      <figure>
        <img src={product.image} alt={product.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <h2 className="card-title">{product.brand}</h2>
        <h2 className="card-title">
          {product.quantity > 0
            ? `Available Quantity: ${product.quantity}`
            : "Stock Out"}
        </h2>
        <h2 className="card-title">Price: ${product.price}</h2>
        <h2 className="card-title">Rating: {product.rating} Stars</h2>
        <div className="card-actions justify-end">
        <Link to={`/products/${product._id}`} className="btn btn-primary">See more Details</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsCards;
