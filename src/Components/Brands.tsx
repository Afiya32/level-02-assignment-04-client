import image1 from "../assets/images/brand1.png";
import image2 from "../assets/images/brand2.jpeg";
import image3 from "../assets/images/brand3.webp";
import image4 from "../assets/images/brand4.jpeg";
import image5 from "../assets/images/brand5.png";
import image6 from "../assets/images/brand6.jpg";
const Brands = () => {
  const brands = [
    {
      name: "MonacoKeys",
      logo: image1,
    },
    {
      name: "Logitech",
      logo: image2,
    },
    {
      name: "Zebronics",
      logo: image3,
    },
    {
      name: "Ritcomp",
      logo: image4,
    },
    {
      name: "Apple",
      logo: image5,
    },
    {
      name: "Microsoft.",
      logo: image6,
    },
  ];
  return (
    <div className="my-8">
      <h2 className="text-3xl font-semibold text-center mb-6">
        World Famous Brands
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-white shadow rounded"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="w-20 h-20 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold">{brand.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
