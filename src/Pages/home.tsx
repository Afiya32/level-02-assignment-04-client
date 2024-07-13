import Banner from "../Components/Banner";
import Brands from "../Components/Brands";
import CustomerReviews from "../Components/Coustomer";
import ExtraPart from "../Components/ExtraPart";
import KeyboardAds from "../Components/ui/Adds";

const HomePage = () => {
  return (
    <div>
      <div className="w-[90%] h-[400vh] mx-auto">
        <KeyboardAds />
        <Banner />
        <Brands />
        <CustomerReviews />
        <ExtraPart />
      </div>
    </div>
  );
};

export default HomePage;
