// src/pages/Carts.tsx
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useAuth } from '../utils/useAuth';
import { fetchCartItemsByUser } from '../api/cartapi';
import Loading from '../Components/Loading';
import ErrorPage from '../Components/Errorpage';

interface CartItem {
  _id: string;
  productId: string;
  productName: string;
  price: number;
  buyerName: string;
  buyerEmail: string;
  phone: string;
  address: string;
  productImage: string;
  quantity: number;
  totalPrice: number;
}

const Carts: React.FC = () => {
  const { user } = useAuth();
  const email = user?.data?.email || '';

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!email) {
      setIsLoading(false);
      return;
    }

    const fetchCartItems = async () => {
      try {
        const data = await fetchCartItemsByUser(email);
        setCartItems(data);
        setIsLoading(false);
      } catch (error) {
        setError( 'Failed to fetch cart items');
        setIsLoading(false);
      }
    };

    fetchCartItems();
  }, [email]);

  const handleDelete = (id: string) => {
    console.log(id);
    Swal.fire({
      title: 'Delete system is under processing',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    });
  };

  const handleBuyNow = (id: string) => {
    console.log(id);
    Swal.fire({
      title: 'Payment system is under processing',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    });
  };

  const handleBuyAll = () => {
    Swal.fire({
      title: 'Payment system is under processing',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    });
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  if (isLoading) return <Loading />;
  if (error) return <ErrorPage message={error} />;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length > 0 ? (
        <>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2">Product Name</th>
                <th className="py-2">Price</th>
                <th className="py-2">Quantity</th>
                <th className="py-2">Total Price</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item._id}>
                  <td className="border px-4 py-2">{item.productName}</td>
                  <td className="border px-4 py-2">${item.price}</td>
                  <td className="border px-4 py-2">{item.quantity}</td>
                  <td className="border px-4 py-2">${item.price * item.quantity}</td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="bg-red-500 text-white px-2 py-1 rounded mr-2"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleBuyNow(item._id)}
                      className="bg-green-500 text-white px-2 py-1 rounded"
                    >
                      Buy Now
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center mt-4">
            <h2 className="text-xl font-bold">Total: ${totalAmount}</h2>
            <button onClick={handleBuyAll} className="bg-blue-500 text-white px-4 py-2 rounded">
              Buy All
            </button>
          </div>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Carts;
