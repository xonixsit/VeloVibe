import React from 'react';
import { Bike, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-secondary-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <Bike className="h-8 w-8 text-primary-400" />
              <span className="ml-2 text-xl font-bold text-white">VeloVibe</span>
            </div>
            <p className="mt-4 text-secondary-300 max-w-md">
              Discover the perfect ride for your adventures. Quality bikes for every terrain, backed by expert service and passion for cycling.
            </p>
            <div className="mt-6 flex space-x-6">
              <Facebook className="h-6 w-6 text-secondary-400 hover:text-secondary-300" />
              <Instagram className="h-6 w-6 text-secondary-400 hover:text-secondary-300" />
              <Twitter className="h-6 w-6 text-secondary-400 hover:text-secondary-300" />
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-secondary-300 tracking-wider uppercase">Contact</h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-secondary-400" />
                <span className="ml-3 text-secondary-300">contact@velovibe.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-secondary-400" />
                <span className="ml-3 text-secondary-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-secondary-400" />
                <span className="ml-3 text-secondary-300">123 Bike Street, Cycle City</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-secondary-300 tracking-wider uppercase">Quick Links</h3>
            <div className="mt-4 space-y-4">
              <a href="#about" className="block text-secondary-300 hover:text-secondary-100">About Us</a>
              <a href="#bikes" className="block text-secondary-300 hover:text-secondary-100">Shop Bikes</a>
              <a href="#gear" className="block text-secondary-300 hover:text-secondary-100">Gear & Accessories</a>
              <a href="#support" className="block text-secondary-300 hover:text-secondary-100">Support</a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-secondary-800 pt-8">
          <p className="text-center text-secondary-400">© 2024 VeloVibe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}