import React from 'react';

export default function SafetyBanner() {
  return (
    <section className="py-16 bg-orange-brand">
      <div className="container mx-auto px-6 text-center text-white">
        <h2 className="text-3xl font-bold mb-6 italic underline decoration-white underline-offset-8">
          Safety, Regulation, and Medical Standards in Malaysia
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          <div className="p-4 border border-white/30 rounded-lg">Licensed Facilities</div>
          <div className="p-4 border border-white/30 rounded-lg">Registered Practitioners</div>
          <div className="p-4 border border-white/30 rounded-lg">Safety Protocols</div>
          <div className="p-4 border border-white/30 rounded-lg">Professional Accountability</div>
        </div>
      </div>
    </section>
  );
}
