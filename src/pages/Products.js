import React from 'react';
import ProductGrid from '../components/ProductGrid';

const Products = ({ searchTerm }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-extrabold mb-8 text-center">Our Products</h1>
      <ProductGrid searchTerm={searchTerm} />
    </div>
  );
};

export default Products;
