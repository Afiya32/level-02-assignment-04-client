import { NavLink } from "react-router-dom";
import Banner from "../Components/Banner";
import Brands from "../Components/Brands";
import CustomerReviews from "../Components/Coustomer";
import ExtraPart from "../Components/ExtraPart";
import ProductsGrid from "../Components/ProductsGrid";
import KeyboardAds from "../Components/ui/Adds";
import { useProducts } from "../Hooks/useProduct";


const HomePage: React.FC = () => {
  const { data, isLoading, error } = useProducts();
  const productsToShow = data ? data.slice().reverse().slice(0, 6) : [];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <div className="w-[90%] h-[700vh] mx-auto">
        <KeyboardAds />
        <Banner />
        <Brands />
        <CustomerReviews />
        <ProductsGrid products={productsToShow} title="Top Products" />
        <div className="flex justify-center items-center mt-2">
          <NavLink to='/products'><button className="btn btn-primary">More Products</button></NavLink>
        </div>
        <ExtraPart />
      </div>
    </div>
  );
};

export default HomePage;
