import React from 'react';
import LazyLoad from 'react-lazyload';
//Products should show in card wise using productcard fn with destructured from props (Home component)
const ProductCard = ({ product, onClick }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer" onClick={onClick}>
      <LazyLoad height={200} offset={100}>
  <img src={product.image} alt={product.name} />
</LazyLoad>
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
