// src/components/ui/adds
import  { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import image1 from "../../assets/images/keyboard1.avif";
import image2 from "../../assets/images/keyboad2.jpg";
import image3 from "../../assets/images/keyboard3.webp";
import image4 from "../../assets/images/keyboard4.jpeg";

const ads = [
  {
    title: "Free Shipping",
    description: "Enjoy free shipping on all mechanical keyboards.",
    image: image1, 
  },
  {
    title: "Discount Bonus",
    description: "Get a 20% discount on your first purchase.",
    image: image2, 
  },
  {
    title: "Buy One Get One",
    description: "Buy one mechanical keyboard and get another one free.",
    image: image3, 
  },
  {
    title: "Buy One Get One",
    description: "Buy one mechanical keyboard and get another one free.",
    image: image4, 
  },
];

const KeyboardAds = () => {
  const [showAds, setShowAds] = useState(true);
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  useEffect(() => {
    const adTimer = setInterval(() => {
      setCurrentAdIndex((prevIndex) => (prevIndex + 1) % ads.length);
    }, 5000);

    return () => clearInterval(adTimer);
  }, []);

  if (!showAds) {
    return null;
  }

  const dismissAds = () => {
    setShowAds(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="ads-card bg-white p-4 rounded-lg shadow-lg relative max-w-lg mx-auto">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={dismissAds}
        >
          <FaTimes />
        </button>
        <img
          src={ads[currentAdIndex].image}
          alt={ads[currentAdIndex].title}
          className="w-full h-32 object-cover mb-4 rounded"
        />
        <h3 className="text-xl font-semibold">{ads[currentAdIndex].title}</h3>
        <p className="text-sm mt-2">{ads[currentAdIndex].description}</p>
      </div>
    </div>
  );
};

export default KeyboardAds;