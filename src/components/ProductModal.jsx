//pop up window when click product image

const ProductModal = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-t-lg" />
        <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <span className="block text-blue-500 text-lg font-semibold mb-2">${product.price}</span>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProductModal;

