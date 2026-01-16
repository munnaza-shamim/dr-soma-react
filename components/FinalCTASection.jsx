import React from 'react';

export default function FinalCTASection() {
  return (
    <section id="consultation" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Final Thoughts</h2>
        <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-8 italic">
          <p>
            A tummy tuck is not about chasing perfection. It is about restoring structure, comfort, and proportion after life events that permanently change the abdomen. When performed with proper planning, surgical precision, and structured aftercare, it delivers predictable, confidence-restoring results.
          </p>
          <p className="font-bold text-orange-brand uppercase">
            At Dr. Soma Plastic Surgery, tummy tuck procedures are performed with a focus on patient safety, anatomical respect, and natural outcomes, never shortcuts.
          </p>
        </div>
        <p className="mt-12 text-2xl font-bold">
          Restore your abdominal contour with surgeon-performed tummy tuck surgery in Malaysia.
        </p>
        <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6">
          <a 
            href="https://wa.me/yourlink" 
            className="bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-full text-xl font-bold shadow-xl transition-all flex items-center"
          >
            <i className="fab fa-whatsapp mr-3 text-2xl"></i> Chat with Us on WhatsApp
          </a>
          <a 
            href="#" 
            className="bg-orange-brand hover:bg-orange-brand text-white px-10 py-5 rounded-full text-xl font-bold shadow-xl transition-all"
          >
            Book a Consultation Today
          </a>
        </div>
      </div>
    </section>
  );
}
