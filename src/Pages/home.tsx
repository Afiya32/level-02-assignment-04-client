import Banner from "../Components/Banner";
import KeyboardAds from "../Components/ui/Adds";

const HomePage = () => {
  return (
    <div>
      <div className="w-[90%] h-[60vh] mx-auto">
        <KeyboardAds/>
        <Banner />
      </div>
    </div>
  );
};

export default HomePage;
