import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-sm text-gray-100 bg-gray-700 border-[2px] border-white rounded-3xl shadow-md p-4">
      <img
        className="rounded-t-lg w-full h-48 object-cover"
        src={product.image}
        alt={product.title}
      />
      <div className="p-4 ">
        <h5 className="text-lg font-bold mb-2">{product.title}</h5>
        <p className=" mb-4">{product.description}</p>
        <span className="text-xl font-semibold text-red-600">
          ${product.price}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
