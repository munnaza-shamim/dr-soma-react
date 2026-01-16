import React from 'react';

export default function HowItWorksSection() {
  const steps = [
    'Pre-operative markings to guide incision placement and symmetry',
    'Removal of excess abdominal skin and fat',
    'Repair and tightening of stretched abdominal muscles',
    'Repositioning of the belly button when required',
    'Layered closure to support healing',
    'Placement of surgical drains when indicated',
    'Application of compression garments'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">How a Tummy Tuck Works</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-orange-brand mb-6">Key Surgical Steps</h3>
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-start space-x-4 p-4 border-b border-gray-100">
                <span className="font-bold text-orange-brand min-w-fit">{String(idx + 1).padStart(2, '0')}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 text-white p-12 rounded-2xl flex flex-col justify-center">
            <p className="text-2xl italic leading-relaxed mb-8">
              "By addressing both skin laxity and muscle separation, abdominoplasty achieves results that liposuction alone cannot provide."
            </p>
            <div className="h-1 w-20 bg-orange-brand"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
