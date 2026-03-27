import React from "react";
import { useReveal } from "../../../hooks/useReveal";
import { ClipboardCheck, Settings, Target } from "lucide-react";

export const PremiumProcess: React.FC = () => {
    const parentRef = useReveal<HTMLElement>();

  return (
    <section id="how" className="premium-section how-section-premium" ref={parentRef}>
      <div className="section-header centered reveal">
        <div className="section-eyebrow">The Process</div>
        <h2 className="section-title-premium">How It Works</h2>
        <p className="section-sub">From idea to submission in three clear steps.</p>
      </div>
      <div className="steps-grid">
        <div className="step-card reveal">
          <div className="step-num">01</div>
          <div className="step-icon">
            <ClipboardCheck className="text-[#C9A84C]" size={24} />
          </div>
          <div className="step-title">Select Your Domain</div>
          <p className="step-desc">Pick a topic from our catalog or tell us your custom requirement. We cover AI, ML, Web, IoT, and all major engineering branches.</p>
        </div>
        <div className="step-card reveal">
          <div className="step-num">02</div>
          <div className="step-icon">
            <Settings className="text-[#C9A84C]" size={24} />
          </div>
          <div className="step-title">We Build It For You</div>
          <p className="step-desc">Our experts design and develop your complete project from scratch, ensuring high-quality source code and accurate results.</p>
        </div>
        <div className="step-card reveal">
          <div className="step-num">03</div>
          <div className="step-icon">
            <Target className="text-[#C9A84C]" size={24} />
          </div>
          <div className="step-title">Expert Viva & Handover</div>
          <p className="step-desc">Receive your full project kit: Source Code, Report, PPT, and a detailed walkthrough to help you clear your viva with full marks.</p>
        </div>
      </div>
    </section>
  );
};
