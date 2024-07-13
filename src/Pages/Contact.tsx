
const Contact = () => {
  return (
    <div className="py-12 px-4 bg-gradient-to-b from-green-400 to-blue-500 text-white">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-semibold mb-4">Contact Us</h2>
      <p className="text-lg mb-8">
        Have questions or feedback? Reach out to us through the channels below.
      </p>
      <div className="flex justify-center space-x-4">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <p className="text-gray-800">
            <a href="mailto:info@keytechhub.com">info@keytechhub.com</a>
          </p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Phone</h3>
          <p className="text-gray-800">
            <a href="tel:+1234567890">+1 (234) 567-890</a>
          </p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Address</h3>
          <p className="text-gray-800">
            123 Keyboard Street, Mechanical City, USA
          </p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Contact;