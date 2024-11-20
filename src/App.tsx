import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedBikes from './components/FeaturedBikes';
import Categories from './components/Categories';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-secondary-50">
      <Navbar />
      <main>
        <Hero />
        <FeaturedBikes />
        <Categories />
      </main>
      <Footer />
    </div>
  );
}

export default App;