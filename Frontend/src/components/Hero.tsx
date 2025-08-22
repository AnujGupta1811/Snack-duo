import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import ProductShowcase from './ProductShowcase';
import BrandStory from './BrandStory';
import Benefits from './Benefits';
import ThekuaTradition from './ThekuaTradition';

const Hero = () => {
  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://www.jagranimages.com/images/newimg/15112023/15_11_2023-thekua_23580826_15526702.webp')`
          }}
        />

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-amber-400/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-16 w-16 h-16 bg-orange-400/20 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-yellow-400/20 rounded-full animate-ping"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center bg-amber-600/90 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in-up">
            <Star className="h-4 w-4 text-yellow-300 mr-2" />
            <span className="text-sm font-medium">100% Handcrafted Traditional Snacks</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-200">
            <span className="block text-amber-300">स्वाद</span>
            <span className="block">हर घर तक</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl mb-8 text-gray-200 animate-fade-in-up animation-delay-400">
            Authentic handmade Thekua crafted with love, tradition, and the finest ingredients
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg">
              <span>Order Fresh Thekua</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-amber-800 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Our Story
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in-up animation-delay-800">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-300">10K+</div>
              <div className="text-sm text-gray-300">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-300">50+</div>
              <div className="text-sm text-gray-300">Years Tradition</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-300">100%</div>
              <div className="text-sm text-gray-300">Natural</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
      <ProductShowcase />
      <ThekuaTradition />
      <Benefits />
      <BrandStory />

    </>
  );
};

export default Hero;