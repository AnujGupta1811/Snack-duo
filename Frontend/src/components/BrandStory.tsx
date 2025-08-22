import React, { useEffect, useRef, useState } from 'react';
import { Heart, Award, Users, Leaf } from 'lucide-react';

const BrandStory = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every Thekua is handcrafted with care and traditional recipes passed down through generations"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "We use only the finest ingredients - pure ghee, organic jaggery, and premium wheat flour"
    },
    {
      icon: Users,
      title: "Family Tradition",
      description: "Three generations of expertise in creating authentic Bihar-style Thekua snacks"
    },
    {
      icon: Leaf,
      title: "100% Natural",
      description: "No artificial preservatives, colors, or flavors - just pure, natural goodness"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-repeat" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
             }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                A Story of <span className="text-amber-600">Tradition</span> & <span className="text-amber-600">Taste</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Born in the heart of Bihar, our Thekua carries the essence of authentic Indian tradition. 
                What started as a family recipe has now become a beloved snack that brings the taste of 
                home to thousands of families across the country.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Each piece is carefully handcrafted using time-honored techniques, ensuring that every 
                bite delivers the perfect balance of sweetness, crunch, and nostalgia.
              </p>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl border-l-4 border-amber-600">
              <blockquote className="text-lg italic text-gray-700">
                "Our grandmother's recipe, perfected over generations, now reaches your doorstep with 
                the same love and care she put into every batch."
              </blockquote>
              <cite className="text-amber-600 font-semibold mt-2 block">- Founder, Snackduo</cite>
            </div>
          </div>

          {/* Features Grid */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-gradient-to-br from-amber-100 to-orange-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {[
            { number: "50+", label: "Years of Tradition" },
            { number: "10K+", label: "Happy Customers" },
            { number: "100%", label: "Natural Ingredients" },
            { number: "24/7", label: "Fresh Production" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandStory;