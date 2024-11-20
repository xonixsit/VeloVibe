import React, { useState } from 'react';
import { Menu, X, Bike, ShoppingCart, Search } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount] = useState(0);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-secondary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Bike className="h-8 w-8 text-primary-600" />
            <span className="ml-2 text-xl font-bold text-secondary-800">VeloVibe</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#bikes" className="text-secondary-700 hover:text-primary-500 transition">Bikes</a>
            <a href="#gear" className="text-secondary-700 hover:text-primary-500 transition">Gear</a>
            <a href="#about" className="text-secondary-700 hover:text-primary-500 transition">About</a>
            <div className="relative">
              <input
                type="text"
                placeholder="Search bikes..."
                className="pl-10 pr-4 py-2 border border-secondary-200 rounded-full text-sm focus:ring-primary-500 focus:border-primary-500"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-secondary-400" />
            </div>
            <button className="relative">
              <ShoppingCart className="h-6 w-6 text-primary-600" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-secondary-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b border-secondary-100">
            <a href="#bikes" className="block px-3 py-2 text-secondary-700 hover:text-primary-500">Bikes</a>
            <a href="#gear" className="block px-3 py-2 text-secondary-700 hover:text-primary-500">Gear</a>
            <a href="#about" className="block px-3 py-2 text-secondary-700 hover:text-primary-500">About</a>
            <div className="px-3 py-2">
              <input
                type="text"
                placeholder="Search bikes..."
                className="w-full pl-10 pr-4 py-2 border border-secondary-200 rounded-full text-sm"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}