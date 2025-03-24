import React from 'react';
import logo from './assets/logo.png';
import backgroundImage from './assets/buildings_image.png';
import { Button } from './components/ui/moving-border';
import GlowingEffectDemo from './components/glowing-effect-demo';

function App() {
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section with background image */}
      <section className="relative">
        {/* Background image container with overlay */}
        <div className="absolute inset-0 z-0">
          {/* Background image */}
          <img 
            src={backgroundImage} 
            alt="Skyscrapers background" 
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with navigation */}
          <header className="flex justify-between items-center py-6">
            {/* Logo and brand name */}
            <div className="flex items-center">
              <img src={logo} alt="Bangalore Realtors Logo" className="h-8 w-auto" />
              <span className="ml-2 text-white font-semibold">Realtors</span>
            </div>

            {/* Navigation links */}
            <nav className="flex space-x-8">
              <a href="#about" className="text-indigo-500 hover:text-orange-400 transition font-medium">About</a>
              <a href="#contact" className="text-indigo-500 hover:text-orange-400 transition font-medium">Contact</a>
              <a href="#testimonials" className="text-indigo-500 hover:text-orange-400 transition font-medium">Testimonials</a>
            </nav>
          </header>

          {/* Hero content */}
          <div className="min-h-[70vh] flex flex-col justify-center py-16">
            {/* Main headline */}
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight">
              Real Estate Made Easy.
            </h1>
            
            {/* Subheading with highlighted text */}
            <p className="mt-4 text-2xl sm:text-3xl text-white">
              Buy, Sell, Rent with <span className="text-orange-500">Bangalore Realtors</span>!
            </p>

            {/* Action buttons with moving borders */}
            <div className="mt-12 flex flex-wrap gap-6">
              <Button 
                as="a"
                href="tel:+1234567890" 
                className="bg-slate-900 text-white border-slate-800"
                containerClassName="h-12 w-36"
                borderClassName="bg-[radial-gradient(#3b82f6_40%,transparent_60%)]"
              >
                Call
              </Button>
              <Button 
                as="a"
                href="https://wa.me/1234567890" 
                className="bg-slate-900 text-white border-slate-800"
                containerClassName="h-12 w-36"
                borderClassName="bg-[radial-gradient(#3b82f6_40%,transparent_60%)]"
              >
                WhatsApp
              </Button>
              <Button 
                as="a"
                href="#schedule" 
                className="bg-slate-900 text-white border-slate-800"
                containerClassName="h-12 w-36"
                borderClassName="bg-[radial-gradient(#3b82f6_40%,transparent_60%)]"
              >
                Schedule call
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features section with glowing cards */}
      <section className="bg-gradient-to-b from-slate-900 to-black py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Makes Us Different
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We pride ourselves on offering exceptional service and expertise in the Bangalore real estate market.
            </p>
          </div>
          
          <div className="relative bg-black/30 backdrop-blur-sm rounded-3xl p-6 md:p-8">
            <GlowingEffectDemo />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
