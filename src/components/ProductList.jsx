import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]); // الحالة تبدأ بمصفوفة فارغة

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => {
        // تحقق من وجود مفتاح products واستخدامه
        if (data && Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          console.error('Unexpected API response:', data);
        }
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products.length === 0 ? ( // تحقق إذا كانت المصفوفة فارغة
        <p>Loading products...</p>
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
};

export default ProductList;
