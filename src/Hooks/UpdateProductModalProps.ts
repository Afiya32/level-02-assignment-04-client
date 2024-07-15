import { IProduct } from "../Redux/Features/types";

export interface UpdateProductModalProps {
    product: IProduct;
    onUpdate: (updatedProduct: Partial<IProduct>) => void;
    onClose: () => void;
  }