import React from 'react';

export default function RecoverySection() {
  const timeline = [
    {
      period: 'Week 1–2',
      description: 'Swelling, tightness, limited mobility'
    },
    {
      period: 'Week 3–4',
      description: 'Improved comfort and posture'
    },
    {
      period: 'Week 6–8',
      description: 'Visible abdominal flattening'
    },
    {
      period: 'Month 3–6',
      description: 'Final contour emerges'
    }
  ];

  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Results & Recovery Timeline</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {timeline.map((item, idx) => (
            <div key={idx} className="relative p-6 border-l border-orange-brand">
              <h4 className="text-orange-brand font-bold mb-2">{item.period}</h4>
              <p className="text-sm opacity-80">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="bg-white/5 p-10 rounded-2xl border border-white/10 italic text-center">
          Postoperative recovery protocols align with internationally recognized surgical safety and postoperative care standards. In Malaysia, tummy tuck surgery is a regulated medical procedure and must be performed by a registered medical practitioner in a licensed healthcare facility under Ministry of Health Malaysia standards.
        </div>
      </div>
    </section>
  );
}
