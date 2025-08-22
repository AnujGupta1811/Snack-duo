import React, { useEffect, useRef, useState } from 'react';
import { Clock, MapPin, Users, Award } from 'lucide-react';

const About = () => {
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

  const timeline = [
    {
      year: "1970",
      title: "The Beginning",
      description: "Started as a small family business in rural Bihar, making Thekua for local festivals",
      icon: MapPin
    },
    {
      year: "1995",
      title: "Growing Recognition",
      description: "Our authentic taste gained popularity across neighboring states",
      icon: Users
    },
    {
      year: "2010",
      title: "Modern Facilities",
      description: "Established certified production facilities while maintaining traditional methods",
      icon: Award
    },
    {
      year: "2020",
      title: "Digital Expansion",
      description: "Launched online platform to bring authentic Thekua to homes nationwide",
      icon: Clock
    }
  ];

  const values = [
    {
      title: "Tradition",
      description: "Preserving authentic recipes and time-honored cooking methods",
      color: "from-amber-400 to-orange-500"
    },
    {
      title: "Hygiene",
      description: "Maintaining the highest standards of cleanliness and food safety",
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Love",
      description: "Every product is made with care, passion, and attention to detail",
      color: "from-red-400 to-pink-500"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-amber-600">Journey</span> of Taste
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From a humble beginning in Bihar to becoming a trusted name in traditional snacks, 
            our story is one of passion, tradition, and unwavering commitment to quality.
          </p>
        </div>

        {/* Story Section */}
        <div className={`grid lg:grid-cols-2 gap-16 items-center mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              More Than Just a <span className="text-amber-600">Snack</span>
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Snackduo was born from a simple belief: that authentic taste should never be compromised. 
              What started as our grandmother's special recipe for Chhath Puja has evolved into a 
              mission to preserve and share the rich culinary heritage of Bihar with the world.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Today, we combine traditional wisdom with modern food safety standards, ensuring that 
              every bite of our Thekua carries the same love and authenticity that made it special 
              in the first place.
            </p>
            <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-amber-600">
              <h4 className="font-bold text-gray-900 mb-2">Our Mission</h4>
              <p className="text-gray-600">
                To bring the authentic taste of traditional Indian snacks to every home, 
                preserving our cultural heritage while meeting modern quality standards.
              </p>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=576,fit=crop/cdn-ecommerce/store_01K134WF9R388QSVYED5B2ZDJJ/assets/fa713781-5152-48e8-b270-efa36ea8fc26.png" 
              alt="Traditional Thekua making process"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm">Years of Tradition</div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className={`mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Journey Through Time</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-400 to-orange-500 rounded-full"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                          <item.icon className="h-5 w-5 text-white" />
                        </div>
                        <span className={`text-2xl font-bold text-amber-600 ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                          {item.year}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="w-6 h-6 bg-amber-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl font-bold text-white">{value.title[0]}</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;