import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const ContactPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking outside or on a menu item
  useEffect(() => {
    const handleClick = () => {
      if (isMenuOpen) setIsMenuOpen(false);
    };
    
    // Add event listener to body when menu is open
    if (isMenuOpen) {
      // Delay to prevent immediate closing when opening
      setTimeout(() => {
        document.body.addEventListener('click', handleClick);
      }, 100);
    }
    
    return () => {
      document.body.removeEventListener('click', handleClick);
    };
  }, [isMenuOpen]);
  
  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  // Toggle menu function with click stop propagation
  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  // Sample testimonial data
  const testimonials = [
    {
      name: "Leera Neel",
      position: "Buyer",
      description: "Fantastic website and service. Found my dream home in a day. Everything worked out perfectly, couldn't be happier with my experience."
    },
    {
      name: "Ravi Sharma",
      position: "Seller",
      description: "The team at Bangalore Realtors provided excellent service. Their market knowledge, professional approach, and dedication made the sale process smooth."
    },
    {
      name: "Priya Mehta",
      position: "As a first time buyer, I wasn't familiar with the process.",
      description: "The personalized attention and continuous guidance I received throughout made the experience enjoyable and educational."
    },
    {
      name: "Anil Reddy",
      position: "I've been working with them for 5 years.",
      description: "Their property management expertise is unparalleled. I'm very organized and nothing comes back."
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-gray-800 bg-black/70 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-12 w-auto" src={logo} alt="Bangalore Realtors" />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link to="/" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white">Home</Link>
                  <a href="/#about" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white">About</a>
                  <a href="/#testimonials" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white">Testimonials</a>
                  <Link to="/contact" className="rounded-md px-3 py-2 text-sm font-medium text-orange-500 hover:text-orange-400">Contact</Link>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg 
                  className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg 
                  className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div 
          className={`${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} transform transition-all duration-300 ease-in-out fixed inset-0 top-16 z-40 md:hidden`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900 min-h-screen shadow-xl">
            <Link to="/" className="block px-3 py-4 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Home</Link>
            <a href="/#about" className="block px-3 py-4 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">About</a>
            <a href="/#testimonials" className="block px-3 py-4 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Testimonials</a>
            <Link to="/contact" className="block px-3 py-4 rounded-md text-base font-medium text-orange-500 hover:text-orange-400 hover:bg-gray-700">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Contact Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-orange-500 mb-4">CONTACT US</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with our expert team for all your real estate needs in Bangalore
          </p>
        </div>

        <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2 font-medium" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 border-2 border-gray-700 bg-gray-800/50 rounded-lg text-white focus:border-orange-500 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2 font-medium" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border-2 border-gray-700 bg-gray-800/50 rounded-lg text-white focus:border-orange-500 focus:outline-none"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2 font-medium" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full p-3 border-2 border-gray-700 bg-gray-800/50 rounded-lg text-white focus:border-orange-500 focus:outline-none"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    id="sendCopy"
                    type="checkbox"
                    className="h-4 w-4 border-gray-600 rounded bg-gray-700 text-orange-500 focus:ring-orange-500"
                  />
                  <label htmlFor="sendCopy" className="ml-2 block text-sm text-gray-300">
                    Send me a copy of this message
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 md:py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg font-medium hover:from-orange-600 hover:to-amber-600 transition-all shadow-lg shadow-orange-500/30 text-base sm:text-lg transform active:scale-95 active:shadow-md"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="w-full md:w-1/2 bg-gradient-to-br from-gray-800 to-black p-8">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
                  <p className="text-gray-300 mb-2">
                    Feel free to contact us with any questions or inquiries about properties in Bangalore.
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500/20 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Phone</h4>
                    <p className="text-gray-300">+91 12345 67890</p>
                    <p className="text-gray-300">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500/20 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Email</h4>
                    <p className="text-gray-300">bangalorerealots@gmail.com</p>
                    <p className="text-gray-300">info@bangalorerealtors.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500/20 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Office Address</h4>
                    <p className="text-gray-300">123 MG Road, Bengaluru</p>
                    <p className="text-gray-300">Karnataka, India 560001</p>
                  </div>
                </div>

                {/* Contact Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a href="tel:+911234567890" className="flex-1 py-3 px-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all text-center">Call</a>
                  <a href="https://wa.me/911234567890" className="flex-1 py-3 px-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all text-center">WhatsApp</a>
                  <a href="#" className="flex-1 py-3 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all text-center">Schedule call</a>
                </div>

                <div className="pt-6">
                  <h4 className="text-white font-medium mb-3">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition-colors">
                      <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition-colors">
                      <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                      </svg>
                    </a>
                    <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition-colors">
                      <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66V19z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* 
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from our satisfied clients about their experience working with us
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-black border-r border-gray-800 relative overflow-hidden h-full"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="mb-4">
                  <h3 className="text-base font-semibold text-white">{testimonial.name}</h3>
                </div>
                <div className="text-xs text-gray-400 flex-grow">
                  <p className="mb-3 text-gray-500">{testimonial.position}</p>
                  <p className="leading-relaxed">{testimonial.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* Footer */}
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
                <li><Link to="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
                <li><a href="/#about" className="text-gray-400 hover:text-white transition">About</a></li>
                <li><a href="/#testimonials" className="text-gray-400 hover:text-white transition">Testimonials</a></li>
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
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63z" />
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
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66V19z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
