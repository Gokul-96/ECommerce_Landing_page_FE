import React from 'react';

const ProductCard = ({ product, onClick }) => {
  return (
    <div
      className="border rounded-lg p-4 hover:shadow-lg cursor-pointer"
      onClick={onClick}
    >
      <img src={product.image} alt={product.name} className="h-40 w-full object-cover" />
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-500">${product.price}</p>
    </div>
  );
};

export default ProductCard;
