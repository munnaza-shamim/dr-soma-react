import React from 'react';

export default function WhatIsSection() {
  const cards = [
    {
      number: '01',
      title: 'Excess Skin',
      description: 'Addressing excess or sagging abdominal skin that lacks elasticity.'
    },
    {
      number: '02',
      title: 'Stubborn Fat',
      description: 'Accumulated fat resistant to diet and exercise.'
    },
    {
      number: '03',
      title: 'Muscle Repair',
      description: 'Weakened or separated abdominal muscles (diastasis recti).'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6">What Is a Tummy Tuck?</h2>
          <p className="text-gray-600">A surgical procedure that addresses three core issues of the abdomen:</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white p-10 rounded-2xl shadow-sm border-b-4 border-orange-brand">
              <div className="text-orange-brand text-3xl mb-4 font-bold">{card.number}</div>
              <h3 className="text-xl font-bold mb-4">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-700 leading-relaxed mb-6">
            During the procedure, excess skin and fat are removed, and the abdominal muscles are tightened to restore a flatter, firmer abdominal wall. In many cases, the belly button is repositioned to maintain natural proportions. Major medical institutions, including leading surgical bodies and academic hospitals, describe abdominoplasty as a well-established and effective procedure when patient selection, surgical technique, and recovery planning are appropriately managed.
          </p>
          <p className="text-orange-brand font-bold uppercase tracking-widest italic">
            A tummy tuck is not a weight-loss surgery. It is a contour-restoring procedure.
          </p>
        </div>
      </div>
    </section>
  );
}
