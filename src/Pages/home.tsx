import Banner from "../Components/Banner";
import Brands from "../Components/Brands";
import KeyboardAds from "../Components/ui/Adds";

const HomePage = () => {
  return (
    <div>
      <div className="w-[90%] h-[60vh] mx-auto">
        <KeyboardAds/>
        <Banner />
        <Brands/>
      </div>
    </div>
  );
};

export default HomePage;
