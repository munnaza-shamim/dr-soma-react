import React from 'react';
import HeroSection from './components/HeroSection';
import TrustSection from './components/TrustSection';
import IntroductionSection from './components/IntroductionSection';
import WhatIsSection from './components/WhatIsSection';
import WhyChangesSection from './components/WhyChangesSection';
import HowItWorksSection from './components/HowItWorksSection';
import ProcedureTypesSection from './components/ProcedureTypesSection';
import CandidatesSection from './components/CandidatesSection';
import RecoverySection from './components/RecoverySection';
import BenefitsSection from './components/BenefitsSection';
import SafetyBanner from './components/SafetyBanner';
import FAQSection from './components/FAQSection';
import FinalCTASection from './components/FinalCTASection';

function App() {
  return (
    <div className="bg-white text-gray-800 antialiased">
      <HeroSection />
      <TrustSection />
      <IntroductionSection />
      <WhatIsSection />
      <WhyChangesSection />
      <HowItWorksSection />
      <ProcedureTypesSection />
      <CandidatesSection />
      <RecoverySection />
      <BenefitsSection />
      <SafetyBanner />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
}

export default App;
