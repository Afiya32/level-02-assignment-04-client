import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IProduct } from "../Redux/Features/types";
import { fetchProductById } from "../utils/utilis";
import { useAuth } from "../utils/useAuth";
import Swal from "sweetalert2";
import Loading from "./Loading";
import ErrorPage from "./Errorpage";
import { useAddToCart } from "../Hooks/useCart";

interface CartData {
  productId: string;
  productName: string;
  price: number;
  buyerName: string;
  buyerEmail: string;
  phone: number;
  address: string;
  productImage: string;
  quantity: number;
  totalPrice: number;
}

const ProductDetails: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<IProduct | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addToCart, loading, error: addToCartError, success } = useAddToCart();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        if (!productId) return;
        const data = await fetchProductById<IProduct>(productId);
        setProduct(data);
        setIsLoading(false);
      } catch (error) {
        setError(error instanceof Error ? error.message : "An error occurred");
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  useEffect(() => {
    if (success) {
      Swal.fire({
        title: "Success",
        text: "Product added to cart successfully!",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        navigate('/dashboard');
      });
    }
  }, [success, navigate]);

  const handleAddToCart = async () => {
    if (!user) {
      Swal.fire({
        title: "Error",
        text: "You need to be logged in to add products to the cart.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    if (!product) {
      Swal.fire({
        title: "Error",
        text: "Product details not available.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    const productPrice: number = product.price || 0;
    const cartData: CartData = {
      productId: product._id || '',
      productName: product.name || "",
      price: productPrice,
      buyerName: user.data.name || "",
      buyerEmail: user.data.email || "",
      phone: user.data.phone || 0,
      address: user.data.address || "",
      productImage: product.image || "",
      quantity,
      totalPrice: productPrice * quantity,
    };

    addToCart(cartData);
  };

  if (isLoading) return <Loading />;
  if (error) return <ErrorPage message="Error fetching product details" />;
  if (!product) return <div>Product not found.</div>;

  return (
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
          <h2 className="card-title">Description: {product.description}</h2>
          <div className="form-control">
            <label className="label">Quantity:</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min="1"
              max={product.quantity}
              className="input input-bordered"
            />
          </div>
          <div className="card-actions justify-end">
            <button onClick={handleAddToCart} className="btn btn-primary" disabled={loading}>
              {loading ? "Adding to Cart..." : "Add to Cart"}
            </button>
          </div>
          {addToCartError && <div className="text-red-500 mt-2">Error: {addToCartError.message}</div>}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
