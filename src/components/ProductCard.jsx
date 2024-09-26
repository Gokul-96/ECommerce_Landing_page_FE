import React from 'react';

//Products should show in card wise using productcard fn with destructured from props (Home component)
const ProductCard = ({ product, onClick }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer" onClick={onClick}>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
        <p className="text-gray-600">{product.description}</p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-xl font-bold text-gray-900">${product.price}</span>
          <span className="text-sm text-gray-500">Qty: {product.quantity}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
