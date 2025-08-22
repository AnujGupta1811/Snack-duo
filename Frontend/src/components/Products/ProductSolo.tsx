import { useState } from 'react';
import { Heart, Share2, Plus, Minus, ShoppingCart, Star, Shield, Truck, RotateCcw, Award } from 'lucide-react';
import ReviewSection from './ReviewSection';

const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const images = [
    "/ProductImage/product1.avif",
    "/ProductImage/product2.avif",
  ];

  const nutritionFacts = [
    { label: 'Calories', value: '450 per 100g' },
    { label: 'Total Fat', value: '18g' },
    { label: 'Protein', value: '8g' },
    { label: 'Carbohydrates', value: '65g' },
    { label: 'Sugar', value: '25g' },
    { label: 'Fiber', value: '3g' }
  ];

  const ingredients = [
    'Premium Wheat Flour',
    'Pure Jaggery',
    'Fresh Ghee',
    'Coconut',
    'Sesame Seeds',
    'Fennel Seeds',
    'Cardamom',
    'Natural Flavoring'
  ];

  const features = [
    { icon: Shield, title: '100% Natural', desc: 'No preservatives or artificial additives' },
    { icon: Award, title: 'Traditional Recipe', desc: '50+ years of authentic preparation' },
    { icon: Truck, title: 'Fresh Delivery', desc: 'Made fresh and delivered within 24 hours' },
    { icon: RotateCcw, title: '30-Day Return', desc: 'Satisfaction guaranteed or money back' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Product Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative group overflow-hidden rounded-2xl bg-white shadow-xl">
                <img
                  src={images[selectedImage]}
                  alt="Premium Thekua"
                  className="w-full h-96 md:h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />

                {/* Discount Badge */}
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                  20% OFF
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex space-x-3 overflow-x-auto pb-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${selectedImage === index
                      ? 'border-orange-500 scale-105'
                      : 'border-gray-200 hover:border-orange-300'
                      }`}
                  >
                    <img
                      src={image}
                      alt={`Thekua view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-semibold">
                    PREMIUM
                  </span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                    FRESH
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Premium Thekua
                </h1>

                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-gray-600 ml-2">4.9 (89 reviews)</span>
                  </div>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Made with pure ghee and premium ingredients, our Premium Thekua offers an authentic taste
                  that captures the essence of traditional Bihar sweets. Each bite is a journey back to
                  childhood memories and festive celebrations.
                </p>
              </div>

              {/* Price Section */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-4xl font-bold text-orange-600">₹399</span>
                  <span className="text-2xl text-gray-400 line-through">₹499</span>
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Save ₹100
                  </span>
                </div>

                <div className="text-sm text-gray-600 mb-4">
                  <span className="font-semibold">Net Weight:</span> 500g |
                  <span className="font-semibold ml-2">Per 100g:</span> ₹79.8
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-sm font-medium text-gray-700">Quantity:</span>
                  <div className="flex items-center space-x-3 bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 hover:bg-white rounded-md transition-colors duration-200"
                    >
                      <Minus className="h-4 w-4 text-gray-600" />
                    </button>
                    <span className="w-12 text-center font-semibold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 hover:bg-white rounded-md transition-colors duration-200"
                    >
                      <Plus className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <button className="flex-1 bg-orange-600 hover:bg-orange-700 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg">
                    <ShoppingCart className="h-5 w-5" />
                    <span>Add to Cart</span>
                  </button>

                  <div className="flex space-x-3">
                    <button
                      onClick={() => setIsFavorite(!isFavorite)}
                      className={`p-4 rounded-xl border-2 transition-all duration-200 ${isFavorite
                        ? 'bg-red-50 border-red-200 text-red-600'
                        : 'bg-white border-gray-200 text-gray-600 hover:border-orange-200 hover:text-orange-600'
                        }`}
                    >
                      <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
                    </button>

                    <button className="p-4 rounded-xl border-2 bg-white border-gray-200 text-gray-600 hover:border-orange-200 hover:text-orange-600 transition-all duration-200">
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group"
                >
                  <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors duration-200">
                    <IconComponent className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Product Details Tabs */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Ingredients */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Award className="h-6 w-6 text-orange-600 mr-2" />
                  Premium Ingredients
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {ingredients.map((ingredient, index) => (
                    <div
                      key={index}
                      className="bg-orange-50 rounded-lg p-3 text-center hover:bg-orange-100 transition-colors duration-200"
                    >
                      <span className="text-sm font-medium text-gray-800">{ingredient}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nutrition Facts */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="h-6 w-6 text-orange-600 mr-2" />
                  Nutrition Facts
                </h3>
                <div className="space-y-3">
                  {nutritionFacts.map((fact, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0"
                    >
                      <span className="font-medium text-gray-800">{fact.label}</span>
                      <span className="text-gray-600">{fact.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <ReviewSection />
        </div>
      </section>
    </div>
  );
};

export default ProductPage;