import React, { useState } from "react";
import ProductsCards from "../Components/ProductsCards";
import { useProducts } from "../utils/useProducts";
const Product: React.FC = () => {
  const { data, isLoading, error } = useProducts();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
    setCurrentPage(1);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const filteredProducts = data?.filter((product) =>
    product.name.toLowerCase().includes(searchTerm) ||
    product.brand.toLowerCase().includes(searchTerm) ||
    product.price.toString().includes(searchTerm) ||
    product.rating.toString().includes(searchTerm)
  ) || [];

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="w-[90%] mx-auto">
      <h2 className="text-2xl font-bold mb-4">All Products</h2>
      <input
        type="text"
        placeholder="Search by name, brand, price, rating"
        className="input input-bordered w-full mb-4"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="grid grid-cols-3 gap-4">
        {currentProducts.map((product) => (
          <ProductsCards key={product._id} product={product} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }, (_, index) => (
          <button
            key={index}
            className={`btn ${index + 1 === currentPage ? "btn-primary" : "btn-secondary"}`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Product;