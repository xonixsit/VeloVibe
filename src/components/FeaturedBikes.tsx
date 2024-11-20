import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';

const bikes = [
  {
    id: 1,
    name: 'Alpine Explorer Pro',
    category: 'Mountain',
    price: 2499,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&q=80&w=800',
    description: 'Professional-grade mountain bike',
  },
  {
    id: 2,
    name: 'Urban Glide X3',
    category: 'City',
    price: 1299,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&q=80&w=800',
    description: 'Sleek city bike perfect for daily commutes',
  },
  {
    id: 3,
    name: 'TrailBlazer Elite',
    category: 'Adventure',
    price: 1899,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=800',
    description: 'Versatile adventure bike for mixed terrain',
  },
];

export default function FeaturedBikes() {
  return (
    <div id="bikes" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Featured Bikes</h2>
          <p className="mt-2 text-3xl font-extrabold text-secondary-900 sm:text-4xl">
            Top-Rated Rides
          </p>
          <p className="mt-4 max-w-2xl text-xl text-secondary-600 mx-auto">
            Discover our most popular bikes, chosen by cycling enthusiasts.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {bikes.map((bike) => (
            <div key={bike.id} className="group relative">
              <div className="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-secondary-100">
                <img
                  src={bike.image}
                  alt={bike.name}
                  className="img-cat w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-secondary-500">{bike.category}</h3>
                  <p className="mt-1 text-lg font-medium text-secondary-900">{bike.name}</p>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <span className="ml-1 text-sm text-secondary-600">{bike.rating}</span>
                </div>
              </div>
              <p className="mt-1 text-sm text-secondary-500">{bike.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <p className="text-xl font-bold text-secondary-900">${bike.price}</p>
                <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}