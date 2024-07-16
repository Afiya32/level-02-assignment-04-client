// src/components/updateproductmodel
import React, { useState } from "react";
import Swal from "sweetalert2";
import { useUpdateProduct } from "../Hooks/useProduct";
import { IProduct } from "../Redux/Features/types";
import { UpdateProductModalProps } from "../Hooks/UpdateProductModalProps";

const UpdateProductModal: React.FC<UpdateProductModalProps> = ({ product, onClose }) => {
  const [formData, setFormData] = useState<IProduct>({
    _id: product._id || "",
    name: product.name,
    image: product.image,
    price: product.price,
    quantity: product.quantity,
    description: product.description,
    brand: "", // Ensure all required properties are included
    rating: 0, // Ensure all required properties are included
  });

  const updateProduct = useUpdateProduct();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProduct.mutate(formData, {
      onSuccess: () => {
        Swal.fire("Success", "Product updated successfully", "success");
        onClose();
      },
      onError: (err) => {
        Swal.fire("Error", `Error updating product: ${err.message}`, "error");
      },
    });
  };

  return (
    <div className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Update Product</h3>
        <form onSubmit={handleSubmit}>
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
            <button type="button" className="btn" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProductModal;
