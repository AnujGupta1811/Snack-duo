import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Phone, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // useLocation must be inside the component
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#fff7ed] backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-amber-800">
              <span className="text-amber-600">Snack</span>duo
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${isHome
                      ? isScrolled
                        ? 'text-gray-700 hover:text-amber-600'
                        : 'text-white hover:text-amber-300'
                      : 'text-gray-700 hover:text-amber-600'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className={`transition-colors ${isHome && !isScrolled ? 'text-white' : 'text-gray-700 hover:text-amber-600'}`}>
              <ShoppingCart className="h-6 w-6" />
            </button>
            <Link
              to="/signin"
              className={`transition-colors ${isHome && !isScrolled ? 'text-white' : 'text-gray-700 hover:text-amber-600'
                }`}
            >
              <User className="h-6 w-6" />
            </Link>
            <button className="bg-amber-600 text-white px-4 py-2 rounded-full hover:bg-amber-700 transition-colors flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>Order Now</span>
            </button>

          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors ${isHome && !isScrolled ? 'text-white' : 'text-gray-700'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-amber-600 block px-3 py-2 text-base font-medium"
              >
                {item.name}
              </Link>
            ))}
            <button className="w-full bg-amber-600 text-white px-4 py-2 rounded-full hover:bg-amber-700 transition-colors flex items-center justify-center space-x-2 mt-4">
              <Phone className="h-4 w-4" />
              <span>Order Now</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
