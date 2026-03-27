import React from "react";
import { useReveal } from "../../../hooks/useReveal";

interface PremiumCTAProps {
  onOpenInquiry: () => void;
}

export const PremiumCTA: React.FC<PremiumCTAProps> = ({ onOpenInquiry }) => {
    const parentRef = useReveal<HTMLElement>();

  return (
    <section className="cta-section-premium" ref={parentRef}>
      <div className="reveal centered">
        <div className="cta-label">Direct Project Delivery</div>
        <h2 className="cta-title-premium">Need your project <em>done right?</em></h2>
        <p className="cta-sub">We deliver complete academic and real-time projects — ready to submit. Source code, Report, PPT and Expert Support included.</p>
        <div className="cta-actions">
        <button className="btn-cta-primary">Browse All Projects →</button>
        <button className="btn-cta-outline-premium" onClick={onOpenInquiry}>Talk to a Mentor</button>
      </div>
      </div>
    </section>
  );
};
