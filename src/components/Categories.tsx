import React from 'react';
import { Mountain, Navigation, Map } from 'lucide-react';

const categories = [
  {
    name: 'Mountain Bikes',
    description: 'Conquer any trail with our rugged mountain bikes',
    icon: Mountain,
    image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'City Bikes',
    description: 'Stylish and practical bikes for urban adventures',
    icon: Navigation,
    image: 'https://images.unsplash.com/photo-1529422643029-d4585747aaf2?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Adventure Bikes',
    description: 'Versatile bikes for the ultimate explorer',
    icon: Map,
    image: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&q=80&w=800',
  },
];

export default function Categories() {
  return (
    <div id="categories" className="py-24 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Categories</h2>
          <p className="mt-2 text-3xl font-extrabold text-secondary-900 sm:text-4xl">
            Find Your Riding Style
          </p>
          <p className="mt-4 max-w-2xl text-xl text-secondary-600 mx-auto">
            Every journey begins with the right bike. Explore our categories to find yours.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <div key={category.name} className="relative group">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center">
                      <category.icon className="h-8 w-8 text-white" />
                      <h3 className="ml-3 text-xl font-bold text-white">{category.name}</h3>
                    </div>
                    <p className="mt-2 text-sm text-white/90">{category.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}