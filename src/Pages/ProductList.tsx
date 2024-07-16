// src/pages/productlist
import React, { useState } from "react";
import Swal from "sweetalert2";
import { useDeleteProduct, useProducts, useUpdateProduct } from "../Hooks/useProduct";
import { IProduct } from "../Redux/Features/types";
import ErrorPage from "../Components/Errorpage";
import Loading from "../Components/Loading";

const ProductList: React.FC = () => {
  const { data: products, isLoading, error } = useProducts();
  const { mutate: deleteProductMutation } = useDeleteProduct();
  const { mutate: updateProductMutation } = useUpdateProduct();
  const [formData, setFormData] = useState<IProduct>({
    _id: "",
    name: "",
    image: "",
    price: 0,
    quantity: 0,
    description: "",
    brand: "", // Ensure all required properties are included
    rating: 0, // Ensure all required properties are included
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProductMutation(formData, {
      onSuccess: () => {
        Swal.fire("Success", "Product updated successfully", "success");
      },
      onError: (err) => {
        Swal.fire("Error", `Error updating product: ${err.message}`, "error");
      },
    });
  };

  const handleDelete = (productId: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProductMutation(productId, {
          onSuccess: () => {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          },
          onError: (err) => {
            Swal.fire("Error", `Error deleting product: ${err.message}`, "error");
          },
        });
      }
    });
  };

  if (isLoading) return <Loading/>;
  if (error) return <ErrorPage message={error.message}/>;

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr key={product._id}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={product.image} alt={product.name} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{product.brand}</div>
                    <div className="text-sm opacity-50">ID: {product.name}</div>
                  </div>
                </div>
              </td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <button
                  className="btn"
                  onClick={() => {
                    setFormData({ ...product }); // Set form data for update
                    const modal = document.getElementById("my_modal_3") as HTMLDialogElement | null;
                    if (modal) modal.showModal();
                  }}
                >
                  Update
                </button>
                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box">
                    <form onSubmit={handleSubmit} method="dialog">
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Name</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Image URL</span>
                        </label>
                        <input
                          type="text"
                          name="image"
                          value={formData.image}
                          onChange={handleChange}
                          className="input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Price</span>
                        </label>
                        <input
                          type="number"
                          name="price"
                          value={formData.price}
                          onChange={handleChange}
                          className="input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Quantity</span>
                        </label>
                        <input
                          type="number"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          className="input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Details</span>
                        </label>
                        <input
                          type="text"
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          className="input input-bordered"
                          required
                        />
                      </div>
                      <div className="modal-action">
                        <button type="submit" className="btn btn-primary">
                          Update
                        </button>
                        <button
                          type="button"
                          className="btn"
                          onClick={() => {
                            const modal = document.getElementById("my_modal_3") as HTMLDialogElement | null;
                            if (modal) modal.close();
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </dialog>
                <button
                  className="btn btn-ghost btn-xs"
                  onClick={() => handleDelete(product._id || "")}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
