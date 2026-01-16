import React from 'react';

export default function HeroSection() {
  return (
    <header className="relative h-[85vh] flex items-center overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1579154273821-390407f3536d?auto=format&fit=crop&q=80&w=2000" 
        className="absolute inset-0 w-full h-full object-cover" 
        alt="Medical Aesthetic"
      />
      <div className="absolute inset-0 hero-overlay"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block bg-orange-brand text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 tracking-widest uppercase">
            Expert Body Contouring
          </span>
          <h1 className="text-5xl md:text-7xl text-white font-bold leading-tight mb-6">
            TUMMY TUCK IN <br />
            <span className="text-orange-brand">MALAYSIA</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Restore a Flatter, Firmer Abdomen with Surgical Precision
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#consultation" 
              className="bg-orange-brand hover:bg-white hover:text-orange-brand text-white px-8 py-4 rounded-lg font-bold transition-all duration-300"
            >
              Book a Consultation Today
            </a>
            <a 
              href="https://wa.me/yourlink" 
              className="bg-white hover:bg-orange-brand hover:text-white text-gray-900 px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center"
            >
              <i className="fab fa-whatsapp mr-2 text-xl"></i> Chat with Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
