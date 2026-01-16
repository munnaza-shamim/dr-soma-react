import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faUserMd, faHospital } from '@fortawesome/free-solid-svg-icons';

export default function TrustSection() {
  return (
    <section className="relative z-20 -mt-16 container mx-auto px-6">
      <div className="bg-white shadow-2xl rounded-2xl grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100 overflow-hidden">
        <div className="p-8 text-center hover:-translate-y-1 transition-transform duration-300">
          <FontAwesomeIcon icon={faCertificate} className="text-orange-brand text-4xl mb-4" />
          <h3 className="font-bold text-lg mb-2 uppercase tracking-wide">MOH Regulated</h3>
          <p className="text-sm text-gray-600 italic">Ministry of Health Malaysia framework ensures safety and professional accountability.</p>
        </div>
        <div className="p-8 text-center hover:-translate-y-1 transition-transform duration-300">
          <FontAwesomeIcon icon={faUserMd} className="text-orange-brand text-4xl mb-4" />
          <h3 className="font-bold text-lg mb-2 uppercase tracking-wide">Dr. Soma</h3>
          <p className="text-sm text-gray-600 italic">Certified plastic surgeon performing all procedures personally with anatomical precision.</p>
        </div>
        <div className="p-8 text-center hover:-translate-y-1 transition-transform duration-300">
          <FontAwesomeIcon icon={faHospital} className="text-orange-brand text-4xl mb-4" />
          <h3 className="font-bold text-lg mb-2 uppercase tracking-wide">Licensed Facilities</h3>
          <p className="text-sm text-gray-600 italic">Surgery performed only in licensed facilities following high postoperative standards.</p>
        </div>
      </div>
    </section>
  );
}
