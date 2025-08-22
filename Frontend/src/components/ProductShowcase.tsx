import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart } from 'lucide-react';

const ProductShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    {
      id: 1,
      name: "Classic Thekua",
      price: "₹299",
      originalPrice: "₹399",
      image: "https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=576,fit=crop/cdn-ecommerce/store_01K134WF9R388QSVYED5B2ZDJJ/assets/fa713781-5152-48e8-b270-efa36ea8fc26.png",
      rating: 4.8,
      reviews: 124,
      description: "Traditional recipe with jaggery and wheat flour"
    },
    {
      id: 2,
      name: "Premium Thekua",
      price: "₹399",
      originalPrice: "₹499",
      image: "https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=576,fit=crop/cdn-ecommerce/store_01K134WF9R388QSVYED5B2ZDJJ/assets/fa713781-5152-48e8-b270-efa36ea8fc26.png",
      rating: 4.9,
      reviews: 89,
      description: "Made with pure ghee and premium ingredients"
    },
    {
      id: 3,
      name: "Mini Thekua Pack",
      price: "₹199",
      originalPrice: "₹249",
      image: "https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=576,fit=crop/cdn-ecommerce/store_01K134WF9R388QSVYED5B2ZDJJ/assets/42908158-b92d-45b4-8bc4-4cfe69df3ce9.png",
      rating: 4.7,
      reviews: 156,
      description: "Perfect for gifting and small families"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-amber-600">Signature</span> Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handcrafted with love, each Thekua tells a story of tradition and authentic flavors
          </p>
        </div>

        <div className="relative">
          {/* Main Carousel */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {products.map((product, index) => (
                <div key={product.id} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-12 items-center bg-white p-8 md:p-16 rounded-2xl shadow-xl">
                    {/* Product Image */}
                    <div className="relative group">
                      <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-amber-100 to-orange-100 p-8">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <button className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                        <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
                      </button>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h3>
                        <p className="text-gray-600 text-lg">{product.description}</p>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                        <span className="text-gray-600">({product.reviews} reviews)</span>
                      </div>

                      {/* Price */}
                      <div className="flex items-center space-x-4">
                        <span className="text-3xl font-bold text-amber-600">{product.price}</span>
                        <span className="text-xl text-gray-400 line-through">{product.originalPrice}</span>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                          Save {Math.round(((parseInt(product.originalPrice.slice(1)) - parseInt(product.price.slice(1))) / parseInt(product.originalPrice.slice(1))) * 100)}%
                        </span>
                      </div>

                      {/* CTA Button */}
                      <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide ? 'bg-amber-600 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;