import React from "react";
import { useReveal } from "../../../hooks/useReveal";

export const PremiumAiFeatures: React.FC = () => {
    const parentRef = useReveal<HTMLElement>();

  return (
    <section id="features" className="premium-section" ref={parentRef}>
      <div className="section-header centered reveal">
        <div className="section-eyebrow">The Result</div>
        <h2 className="section-title-premium">Complete Project Solutions<br />In One Place</h2>
        <p className="section-sub">We take your project from idea to submission ready. No more stress about deadline or coding.</p>
      </div>
      <div className="ecosystem-grid">
        <div className="eco-card reveal">
          <div className="eco-card-badge ai">Delivered</div>
          <div className="eco-card-title">Everything You Get</div>
          <ul className="eco-feature-list">
            <li>Working Project Source Code</li>
            <li>Standard Project Report (.pdf/.docx)</li>
            <li>Professionally Designed PPT</li>
            <li>Full Source Code & Explanation</li>
            <li>Setup & Deployment Help</li>
          </ul>
        </div>
        <div className="eco-card featured reveal">
          <div className="eco-card-badge auto">Premium</div>
          <div className="eco-card-title">Full Submission Support</div>
          <p className="eco-card-desc">We don't just give you the code; we make sure you can submit and defend it successfully.</p>
          <ul className="eco-feature-list">
            <li>Review & Modification Support</li>
            <li>Viva Question Bank & Practice</li>
            <li>Step-by-Step Walkthrough</li>
            <li>Custom Theme Implementation</li>
          </ul>
        </div>
        <div className="eco-card reveal">
          <div className="eco-card-badge mentor">Custom</div>
          <div className="eco-card-title">All Project Types</div>
          <p className="eco-card-desc">From complex AI models to simple mini projects, we handle all domains with precision.</p>
          <ul className="eco-feature-list">
            <li>Final Year & Major Projects</li>
            <li>Mini & Real-Time Projects</li>
            <li>IEEE & Custom Research</li>
            <li>Any Domain (AI, ML, Web, IoT)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
