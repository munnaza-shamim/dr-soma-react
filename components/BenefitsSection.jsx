import React from 'react';
import { Plus } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    'Removes loose, sagging abdominal skin',
    'Tightens weakened abdominal muscles',
    'Improves abdominal contour and firmness',
    'Enhances posture and core stability',
    'Produces long-lasting results with stable weight',
    'Can be combined with liposuction for refinement'
  ];

  const recovery = [
    'Compression garment for 6–8 weeks',
    'Pain relief medication',
    'Drain care instructions',
    'Wound care guidance',
    'Scheduled follow-up visits'
  ];

  return (
    <section className="py-24 container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-3xl font-bold mb-10">Benefits of Tummy Tuck Surgery</h3>
          <ul className="space-y-4">
            {benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-center">
                <Plus className="w-5 h-5 text-orange-brand mr-4 flex-shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-50 p-10 rounded-3xl">
          <h3 className="text-3xl font-bold mb-8 italic">Post-Operative Recovery</h3>
          <p className="mb-6 text-sm">After surgery, patients typically receive:</p>
          <ul className="space-y-3 mb-8">
            {recovery.map((item, idx) => (
              <li key={idx} className="text-gray-700">• {item}</li>
            ))}
          </ul>
          <p className="text-sm italic text-gray-600">
            Early walking is encouraged to support circulation, while strenuous activity is restricted during healing. Discomfort is commonly described as tightness rather than sharp pain. Clinical guidance aligned with: World Health Organization.
          </p>
        </div>
      </div>
    </section>
  );
}
