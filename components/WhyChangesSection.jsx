import React from 'react';

export default function WhyChangesSection() {
  const reasons = [
    'Skin often does not retract fully',
    'Muscle separation does not resolve with exercise alone',
    'Fat distribution becomes uneven',
    'Core support weakens, affecting posture and back comfort'
  ];

  return (
    <section className="py-24 container mx-auto px-6">
      <div className="bg-orange-brand rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
        <div className="md:w-1/2 p-12 lg:p-20 text-white">
          <h2 className="text-3xl font-bold mb-8 italic">Why the Abdomen Changes After Pregnancy or Weight Loss</h2>
          <p className="mb-8 opacity-90 leading-relaxed">
            The abdomen undergoes significant structural stress during pregnancy and major weight fluctuations. Skin fibers stretch beyond their elastic limit, and the rectus abdominal muscles can separate along the midline, a condition known as diastasis recti.
          </p>
          <div className="space-y-4">
            {reasons.map((reason, idx) => (
              <div key={idx} className="flex items-center space-x-4">
                <i className="fas fa-chevron-right"></i>
                <span>{reason}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-1/2 relative min-h-[400px]">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" 
            className="absolute inset-0 w-full h-full object-cover" 
            alt="Health Care"
          />
        </div>
      </div>
    </section>
  );
}
