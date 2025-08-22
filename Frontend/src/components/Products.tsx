import React, { useState } from 'react';
import { Star, ShoppingCart, Heart, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [favorites, setFavorites] = useState<number[]>([]);

  const products = [
    {
      id: 1,
      name: "Classic Thekua",
      price: 299,
      originalPrice: 399,
      image: "/ProductImage/product1.avif",
      rating: 4.8,
      reviews: 124,
      category: "classic",
      weight: "500g",
      description: "Traditional recipe with jaggery and wheat flour"
    },
    {
      id: 2,
      name: "Premium Thekua",
      price: 399,
      originalPrice: 499,
      image: "/ProductImage/product1.avif",
      rating: 4.9,
      reviews: 89,
      category: "premium",
      weight: "500g",
      description: "Made with pure ghee and premium ingredients"
    },
    {
      id: 3,
      name: "Mini Thekua Pack",
      price: 199,
      originalPrice: 249,
      image: "/ProductImage/product2.avif",
      rating: 4.7,
      reviews: 156,
      category: "mini",
      weight: "250g",
      description: "Perfect for gifting and small families"
    }

  ];


  const filteredProducts = selectedFilter === 'all'
    ? products
    : products.filter(product => product.category === selectedFilter);

  const toggleFavorite = (productId: number) => {
    setFavorites(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-amber-600">Delicious</span> Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From traditional classics to premium varieties, find the perfect Thekua for every occasion
          </p>
        </div>



        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* Discount Badge */}
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </div>

                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
                >
                  <Heart
                    className={`h-5 w-5 ${favorites.includes(product.id)
                      ? 'text-red-500 fill-current'
                      : 'text-gray-600'
                      }`}
                  />
                </button>

                {/* Quick View Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link to="/product"><button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                    Quick View
                  </button></Link>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                    {product.name}
                  </h3>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {product.weight}
                  </span>
                </div>

                <p className="text-gray-600 mb-4">{product.description}</p>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                          }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-amber-600">₹{product.price}</span>
                    <span className="text-lg text-gray-400 line-through">₹{product.originalPrice}</span>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg">
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-gray-100 hover:bg-amber-100 text-gray-700 hover:text-amber-700 px-8 py-3 rounded-full font-semibold transition-colors">
            Load More Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;