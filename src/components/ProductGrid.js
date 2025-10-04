import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import ProductModal from './ProductModal';

const products = [
  {
    id: 1,
    name: 'Thekua Coconut Jaggery Magic',
    imageUrl: '/images/product1.png',
    price: '₹250',
    description: 'Authentic thekua made with coconut and jaggery.',
    fullDescription: 'Experience the divine taste of our Thekua Coconut Jaggery Magic. Made with the finest coconut and pure jaggery, this traditional sweet is crafted without any artificial additives. Perfect for festivals or as a healthy snack.',
    ingredients: ['Coconut', 'Jaggery', 'Wheat Flour', 'Ghee'],
  },
  {
    id: 2,
    name: 'Thekua Original Magic',
    imageUrl: '/images/product2.png',
    price: '₹230',
    description: 'Traditional thekua with original taste.',
    fullDescription: 'Our Thekua Original Magic brings back the authentic flavors of traditional thekua. Made with time-tested recipes passed down through generations, this sweet captures the essence of Bihar\'s culinary heritage.',
    ingredients: ['Wheat Flour', 'Jaggery', 'Ghee', 'Cardamom'],
  },
  {
    id: 3,
    name: 'Thekua Special Pack',
    imageUrl: '/images/product3.png',
    price: '₹450',
    description: 'Special pack with assorted thekua flavors.',
    fullDescription: 'Indulge in variety with our Thekua Special Pack. This assortment includes our best-selling flavors in one convenient pack, perfect for gifting or trying multiple tastes.',
    ingredients: ['Wheat Flour', 'Jaggery', 'Ghee', 'Coconut', 'Cardamom'],
  },
  {
    id: 4,
    name: 'Thekua Gift Box',
    imageUrl: '/images/product4.png',
    price: '₹600',
    description: 'Gift box with premium thekua selection.',
    fullDescription: 'Our premium Thekua Gift Box is elegantly packaged and contains a selection of our finest thekua varieties. Ideal for special occasions and festivals.',
    ingredients: ['Premium Wheat Flour', 'Pure Jaggery', 'Ghee', 'Assorted Flavors'],
  },
];

const ProductGrid = ({ searchTerm }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToCart } = useCart();

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
            onClick={() => handleProductClick(product)}
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-yellow-700 font-bold mt-1">{product.price}</p>
              <p className="text-gray-600 mt-2 text-sm">{product.description}</p>
              <button
                className="mt-4 w-full bg-yellow-600 hover:bg-yellow-700 text-black font-bold py-2 rounded transition-colors duration-200"
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart(product);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 mt-8">No products found matching your search.</p>
      )}

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAddToCart={handleAddToCart}
      />
    </>
  );
};

export default ProductGrid;
