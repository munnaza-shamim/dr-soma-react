import React, { useState } from 'react';
import { Plus } from 'lucide-react';

export default function FAQSection() {
  const [openId, setOpenId] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'What is a tummy tuck?',
      answer: 'A tummy tuck is a surgical procedure that removes excess abdominal skin and fat while tightening weakened abdominal muscles to create a flatter abdomen.'
    },
    {
      id: 2,
      question: 'Is a tummy tuck the same as liposuction?',
      answer: 'No. Liposuction removes fat only, while a tummy tuck also removes loose skin and tightens muscles.'
    },
    {
      id: 3,
      question: 'Is tummy tuck surgery safe?',
      answer: 'When performed by a certified plastic surgeon in a regulated facility, it is considered a safe and well-established procedure.'
    },
    {
      id: 4,
      question: 'How long does recovery take?',
      answer: 'Most patients return to daily activities within 2–4 weeks, with final results visible over 3–6 months.'
    },
    {
      id: 5,
      question: 'Will there be a scar?',
      answer: 'Yes, but it is placed low on the abdomen and typically hidden by underwear or swimwear.'
    },
    {
      id: 6,
      question: 'Are tummy tuck results permanent?',
      answer: 'Results are long-lasting if body weight remains stable.'
    },
    {
      id: 7,
      question: 'Can pregnancy affect tummy tuck results?',
      answer: 'Yes. Pregnancy can stretch the abdomen again, so surgery is best after completing childbearing.'
    },
    {
      id: 8,
      question: 'Who should consider a tummy tuck?',
      answer: 'Patients with loose abdominal skin, muscle laxity, stable weight, and realistic expectations.'
    },
    {
      id: 9,
      question: 'Can a tummy tuck improve posture?',
      answer: 'Yes. Muscle repair can enhance core support and posture.'
    },
    {
      id: 10,
      question: 'Can it be combined with other procedures?',
      answer: 'Yes. It is commonly combined with liposuction for enhanced contouring.'
    }
  ];

  return (
    <section className="py-24 container mx-auto px-6 max-w-4xl">
      <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <details 
            key={faq.id}
            open={openId === faq.id}
            className="group bg-white border border-gray-200 rounded-xl overflow-hidden"
          >
            <summary 
              onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              className="flex justify-between items-center p-6 cursor-pointer font-bold bg-white hover:bg-gray-50"
            >
              <span>{faq.id}) {faq.question}</span>
              <Plus className="w-5 h-5 text-orange-brand group-open:rotate-45 transition-transform" />
            </summary>
            <div className="p-6 pt-0 text-gray-600 border-t border-gray-100">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
