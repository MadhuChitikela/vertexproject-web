import React from "react";
import { useReveal } from "../../../hooks/useReveal";
import { CheckCircle2, FileText, Zap, ShieldCheck } from "lucide-react";

export const PremiumProblemSection: React.FC = () => {
    const parentRef = useReveal<HTMLElement>();

  return (
    <section className="premium-section pain-section-premium" ref={parentRef}>
      <div className="section-header centered reveal">
        <div className="section-eyebrow">The Best Solution</div>
        <h2 className="section-title-premium">Why Choose Vertex?</h2>
        <p className="section-sub" style={{ fontWeight: '600', color: '#C9A84C' }}>You don’t need to build your project — we’ll do it for you.</p>
      </div>
      <div className="pain-grid">
        <div className="pain-card reveal">
          <div className="pain-icon">
            <CheckCircle2 className="text-[#C9A84C]" size={28} />
          </div>
          <div className="pain-title">Complete Project Handling</div>
          <p className="pain-desc">We handle everything from end-to-end. You just choose your topic, and we deliver a working project.</p>
        </div>
        <div className="pain-card reveal">
          <div className="pain-icon">
            <FileText className="text-[#C9A84C]" size={28} />
          </div>
          <div className="pain-title">Ready Documentation + PPT</div>
          <p className="pain-desc">Get professional, academic-standard project reports and presentation slides ready to submit.</p>
        </div>
        <div className="pain-card reveal">
          <div className="pain-icon">
            <Zap className="text-[#C9A84C]" size={28} />
          </div>
          <div className="pain-title">Fast & On-Time Delivery</div>
          <p className="pain-desc">We respect your submission deadlines. Your project will be ready and tested before you need it.</p>
        </div>
        <div className="pain-card reveal">
          <div className="pain-icon">
            <ShieldCheck className="text-[#C9A84C]" size={28} />
          </div>
          <div className="pain-title">24/7 Support & Viva Help</div>
          <p className="pain-desc">We provide expert support to help you understand your project and clear your viva with confidence.</p>
        </div>
      </div>
    </section>
  );
};
