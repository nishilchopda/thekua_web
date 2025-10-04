import React from 'react';
import Carousel from '../components/Carousel';
import ProductGrid from '../components/ProductGrid';

const Home = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Carousel />
      <section className="mt-12">
        <h2 className="text-3xl font-extrabold mb-6">Our Products</h2>
        <ProductGrid />
      </section>
    </main>
  );
};

export default Home;
