
const About = () => {
  return (
    <div className="py-12 px-4 bg-gradient-to-b from-blue-400 to-purple-500 text-white">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-semibold mb-4">About Us</h2>
      <p className="text-lg mb-8">
        KeyTechHub is dedicated to providing the best selection of mechanical keyboards
        to enthusiasts worldwide. Our mission is to offer high-quality products and
        exceptional customer service.
      </p>
      <div className="flex justify-center space-x-4">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-800">
            To empower keyboard enthusiasts with superior products and expert knowledge.
          </p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
          <p className="text-gray-800">
            To become the leading provider of customizable mechanical keyboards globally.
          </p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Our Values</h3>
          <p className="text-gray-800">
            Customer satisfaction, innovation, and integrity drive everything we do.
          </p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default About;