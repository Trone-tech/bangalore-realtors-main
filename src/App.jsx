import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import logo from './assets/logo.png';
import backgroundImage from './assets/buildings_image.png';
import agentImage from "./assets/agent.png";
import { Button } from './components/ui/moving-border';
import GlowingEffectDemo from './components/glowing-effect-demo';
import ScrollingTestimonials from './components/animata/container/scrolling-testimonials';
import ContactPage from './components/ContactPage';

// Sample testimonial data for the scrolling testimonials component
const testimonialData = [
  {
    name: "Ravi Sharma",
    image: "https://randomuser.me/api/portraits/men/32.jpg", // Using placeholder images from randomuser.me
    description: "The team at Bangalore Realtors helped me find the perfect investment property. Their market knowledge is unmatched!"
  },
  {
    name: "Priya Mehta",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    description: "As a first-time buyer, I was nervous about the process. The guidance and support I received made everything so much easier."
  },
  {
    name: "Anil Reddy",
    image: "https://randomuser.me/api/portraits/men/68.jpg",
    description: "I've been working with Bangalore Realtors for my commercial properties for over 5 years. Their professional approach keeps me coming back."
  },
  {
    name: "Meera Patel",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    description: "The premium marketing strategy they used to sell my luxury home was impressive. Sold above asking price in just 3 weeks!"
  }
];

function App() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
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
    <Routes>
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/" element={
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
                  <Link to="/" className="text-indigo-500 hover:text-orange-400 transition font-medium">Home</Link>
                  <a href="#listings" className="text-indigo-500 hover:text-orange-400 transition font-medium">Listings</a>
                  <a href="#features" className="text-indigo-500 hover:text-orange-400 transition font-medium">Features</a>
                  <a href="#about" className="text-indigo-500 hover:text-orange-400 transition font-medium">About</a>
                  <a href="#testimonials" className="text-indigo-500 hover:text-orange-400 transition font-medium">Testimonials</a>
                  <Link to="/contact" className="text-indigo-500 hover:text-orange-400 transition font-medium">Contact</Link>
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
                  <Link to="/contact" className="bg-slate-900 text-white border-slate-800">
                    <Button 
                      containerClassName="h-10 sm:h-12 w-28 sm:w-36"
                      borderClassName="bg-[radial-gradient(#3b82f6_40%,transparent_60%)]"
                    >
                      Schedule call
                    </Button>
                  </Link>
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
          
          {/* About Us Section */}
          <section id="about" className="bg-black py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
                {/* Left side content */}
                <div className="flex-1 mb-10 md:mb-0">
                  <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">ABOUT US</h2>
                  
                  <h3 className="text-xl md:text-2xl font-medium text-white mb-6">Experienced. Connected. Trusted.</h3>
                  
                  <div className="space-y-6 text-gray-300">
                    <p className="leading-relaxed">
                      At Bangalore Realtors, we bring over 30 years of experience to the real
                      estate market. Our extensive city-wide network covers every corner of
                      Bangalore — from bustling commercial hubs to serene residential
                      neighborhoods.
                    </p>
                    
                    <p className="leading-relaxed">
                      We've partnered with high-profile clients, ensuring their property goals
                      are met with professionalism and ease. Yet, we remain approachable
                      to all clients — building relationships is vital to our success.
                    </p>
                    
                    <div className="pt-4">
                      <h4 className="text-lg font-medium text-orange-500 mb-2">Our commitment?</h4>
                      <p className="leading-relaxed">
                        Expert guidance, seamless transactions, and your success — every step
                        of the way.
                      </p>
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="flex flex-wrap justify-start mt-10 gap-8 md:gap-16 text-white">
                    <div className="flex flex-col items-center">
                      <span className="text-4xl md:text-5xl font-bold">30+</span>
                      <span className="text-xs uppercase tracking-wider mt-1 text-gray-400">YEARS OF EXPERIENCE</span>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <span className="text-4xl md:text-5xl font-bold">50+</span>
                      <span className="text-xs uppercase tracking-wider mt-1 text-gray-400">PROPERTIES TRANSACTED</span>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <span className="text-4xl md:text-5xl font-bold">75+</span>
                      <span className="text-xs uppercase tracking-wider mt-1 text-gray-400">SATISFIED CLIENTS</span>
                    </div>
                  </div>
                </div>
                
                {/* Right side image */}
                <div className="flex-1 flex justify-center md:justify-end">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/30 rounded-lg"></div>
                    <img 
                      src={agentImage} 
                      alt="Professional real estate agent" 
                      className="rounded-lg object-cover w-full h-full max-w-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Testimonials Section */}
          <section id="testimonials" className="bg-black py-12 md:py-16 lg:py-24 overflow-hidden">
            {/* Section header with orange accent and descriptive text */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-12">
              <div className="text-center">
                {/* Main section heading */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-3 md:mb-4">
                  TESTIMONIALS
                </h2>
                
                {/* Subheading explaining the section */}
                <p className="text-base sm:text-lg md:text-xl text-white mb-6 md:mb-8 max-w-3xl mx-auto">
                  What our clients say about working with Bangalore Realtors
                </p>
              </div>
            </div>
            
            {/* Testimonials scrolling container */}
            <div className="relative">
              {/* Subtle gradient overlay for top of testimonials */}
              <div className="absolute top-0 inset-x-0 h-12 sm:h-16 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none"></div>
              
              {/* Scrolling testimonials component */}
              <div className="py-4">
                <ScrollingTestimonials data={testimonialData} />
              </div>
              
              {/* Subtle gradient overlay for bottom of testimonials */}
              <div className="absolute bottom-0 inset-x-0 h-12 sm:h-16 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>
            </div>
          </section>
          
          {/* Footer Section */}
          <footer className="bg-black py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {/* Logo */}
                <div>
                  <div className="flex items-center">
                    <span className="text-orange-500 mr-1">🔶</span>
                    <span className="text-white font-bold text-xl">Bangalore<span className="text-orange-500">Realtors</span></span>
                  </div>
                </div>
                
                {/* Quick Links */}
                <div>
                  <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white transition">Services</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition">Projects</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition">About</a></li>
                    <li><Link to="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
                  </ul>
                </div>
                
                {/* Contact Info */}
                <div>
                  <h3 className="text-white font-semibold mb-4">Contact</h3>
                  <p className="text-gray-400 mb-2">bangalorerealots@gmail.com</p>
                  <p className="text-gray-400">+91 12345 67890</p>
                </div>
              </div>
              
              {/* Bottom Bar with Copyright and Social Icons */}
              <div className="pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
                <p className="text-gray-500 text-sm mb-4 sm:mb-0">2023 TroneTechnologies. All rights reserved.</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344a3.097 3.097 0 011.772-1.153 3.098 3.098 0 01.748-1.15c.353-.137.882-.3 1.857-.344 1.023-.047 1.351-.058 3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    <span className="sr-only">X / Twitter</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      } />
    </Routes>
  );
}

export default App;
