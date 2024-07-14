
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProduct } from "../Redux/Features/types";
import { fetchProductById } from "../utils/utilis";



const ProductDetails: React.FC = () => {
    const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<IProduct | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        if (!productId) return; 
        const data = await fetchProductById(productId);
        setProduct(data);
        setIsLoading(false);
      } catch (error) {
        
        setError(error instanceof Error ? error.message : "An error occurred");
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);
  
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!product) return <div>Product not found.</div>;

  return (<div>
          <div className="w-[90%] mx-auto my-4">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={product.image} alt={product.name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <h2 className="card-title">Brand: {product.brand}</h2>
          <h2 className="card-title">
            {product.quantity > 0 ? `Available Quantity: ${product.quantity}` : "Stock Out"}
          </h2>
          <h2 className="card-title">Price: ${product.price}</h2>
          <h2 className="card-title">Rating: {product.rating} Stars</h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
    
  );
};

export default ProductDetails;
