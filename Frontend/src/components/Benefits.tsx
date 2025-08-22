import React from 'react';
import { Truck, Shield, HandHeart, Clock, Award, Leaf } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Truck,
      title: "Free Delivery",
      description: "Free shipping on orders above ₹500 across India",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Shield,
      title: "Hygienic Process",
      description: "Made in certified kitchens with strict quality controls",
      color: "from-green-500 to-green-600"
    },
    {
      icon: HandHeart,
      title: "Handcrafted",
      description: "Each piece lovingly made by skilled artisans",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Clock,
      title: "Fresh Daily",
      description: "Made fresh every day and delivered within 24 hours",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Only the finest ingredients for authentic taste",
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: Leaf,
      title: "100% Natural",
      description: "No preservatives, artificial colors, or flavors",
      color: "from-emerald-500 to-emerald-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-amber-600">Snackduo</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to delivering not just delicious Thekua, but an experience that honors tradition while meeting modern standards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-amber-200 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience Authentic Taste?</h3>
            <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have made Snackduo their go-to choice for traditional snacks
            </p>
            <button className="bg-white text-amber-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105 duration-200 shadow-lg">
              Order Your First Pack Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;