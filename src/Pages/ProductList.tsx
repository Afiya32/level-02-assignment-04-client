import React, { useState } from "react";
import Swal from "sweetalert2";
import { useDeleteProduct, useProducts, useUpdateProduct } from "../Hooks/useProduct";

const ProductList = () => {
  const { data: products, isLoading, error } = useProducts();
  const { mutate: deleteProductMutation } = useDeleteProduct();
  const { mutate:updateProductMutation}= useUpdateProduct();
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: 0,
    quantity: 0,
    description: "",
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
        // Optionally, clear form data or close modal here
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

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
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
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={product.image} alt={product.name} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{product.name}</div>
                    <div className="text-sm opacity-50">ID: {product._id}</div>
                  </div>
                </div>
              </td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                {/* Update button */}
                <button
                  className="btn"
                  onClick={() => {
                    setFormData({
                      name: product.name,
                      image: product.image,
                      price: product.price,
                      quantity: product.quantity,
                      description: product.description,
                    });
                    document.getElementById("my_modal_3").showModal();
                  }}
                >
                  Update
                </button>
                {/* Modal */}
                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box">
                    <form onSubmit={handleSubmit} method="dialog">
                      {/* Close button */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                      {/* Form inputs */}
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
                      {/* Submit and cancel buttons */}
                      <div className="modal-action">
                        <button type="submit" className="btn btn-primary">
                          Update
                        </button>
                        <button
                          type="button"
                          className="btn"
                          onClick={() => {
                            document.getElementById("my_modal_3").close();
                            // Optionally, reset form data here
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </dialog>
                {/* Delete button */}
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
