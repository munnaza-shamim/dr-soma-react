import React from 'react';

export default function ProcedureTypesSection() {
  const procedures = [
    {
      title: 'Full Tummy Tuck',
      features: [
        'Removes excess skin above/below navel',
        'Repairs muscle separation',
        'Repositions the belly button',
        'Most comprehensive correction'
      ]
    },
    {
      title: 'Mini Tummy Tuck',
      features: [
        'Targets mild lower-abdominal skin laxity',
        'Smaller incision',
        'Limited or no muscle repair',
        'Suitable for selected patients'
      ]
    },
    {
      title: 'Extended Tummy Tuck',
      features: [
        'Addresses skin extending to the flanks',
        'Often chosen after massive weight loss',
        'Improves waistline contour',
        'Clinical assessment required'
      ]
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Types of Tummy Tuck Procedures</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {procedures.map((proc, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-lg transition-shadow border border-gray-100"
            >
              <h4 className="text-orange-brand font-bold text-2xl mb-4">{proc.title}</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                {proc.features.map((feature, fidx) => (
                  <li key={fidx}>• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
