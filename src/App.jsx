import React, { useEffect, useState } from 'react';
import logo from './assets/logo.png';
import backgroundImage from './assets/buildings_image.png';
import { Button } from './components/ui/moving-border';
import GlowingEffectDemo from './components/glowing-effect-demo';

function App() {
  // Add state to track scroll position for fade effect
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Update scroll position when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen w-full relative">
      {/* Hero Section with background image */}
      <section className="relative h-screen w-full flex flex-col">
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col h-full">
          {/* Header with navigation */}
          <header className="flex justify-between items-center py-6">
            {/* Logo and brand name */}
            <div className="flex items-center">
              <img src={logo} alt="Bangalore Realtors Logo" className="h-8 w-auto" />
              <span className="ml-2 text-white font-semibold">Realtors</span>
            </div>

            {/* Navigation links */}
            <nav className="hidden sm:flex space-x-8">
              <a href="#about" className="text-indigo-500 hover:text-orange-400 transition font-medium">About</a>
              <a href="#contact" className="text-indigo-500 hover:text-orange-400 transition font-medium">Contact</a>
              <a href="#testimonials" className="text-indigo-500 hover:text-orange-400 transition font-medium">Testimonials</a>
            </nav>
            
            {/* Mobile navigation toggle - simplified version */}
            <button className="sm:hidden text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </header>

          {/* Hero content - centered vertically and horizontally */}
          <div className="flex-grow flex flex-col justify-center py-8">
            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              Real Estate Made Easy.
            </h1>
            
            {/* Subheading with highlighted text */}
            <p className="mt-4 text-xl sm:text-2xl md:text-3xl text-white">
              Buy, Sell, Rent with <span className="text-orange-500">Bangalore Realtors</span>!
            </p>

            {/* Action buttons with moving borders */}
            <div className="mt-8 sm:mt-12 flex flex-wrap gap-4 sm:gap-6">
              <Button 
                as="a"
                href="tel:+1234567890" 
                className="bg-slate-900 text-white border-slate-800"
                containerClassName="h-10 sm:h-12 w-28 sm:w-36"
                borderClassName="bg-[radial-gradient(#3b82f6_40%,transparent_60%)]"
              >
                Call
              </Button>
              <Button 
                as="a"
                href="https://wa.me/1234567890" 
                className="bg-slate-900 text-white border-slate-800"
                containerClassName="h-10 sm:h-12 w-28 sm:w-36"
                borderClassName="bg-[radial-gradient(#3b82f6_40%,transparent_60%)]"
              >
                WhatsApp
              </Button>
              <Button 
                as="a"
                href="#schedule" 
                className="bg-slate-900 text-white border-slate-800"
                containerClassName="h-10 sm:h-12 w-28 sm:w-36"
                borderClassName="bg-[radial-gradient(#3b82f6_40%,transparent_60%)]"
              >
                Schedule call
              </Button>
            </div>
          </div>
          
          {/* Scroll indicator at the bottom */}
          <div className="flex justify-center pb-6 animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
        
        {/* Fade effect transition to section 2 */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-32 z-10 pointer-events-none" 
          style={{ 
            background: 'linear-gradient(to bottom, transparent, rgba(15, 23, 42, 0.3) 30%, rgba(15, 23, 42, 0.7) 70%, rgb(15, 23, 42) 100%)',
          }}
        ></div>
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
