import React from "react";

interface PremiumHeroProps {
  onOpenInquiry: () => void;
}

export const PremiumHero: React.FC<PremiumHeroProps> = ({ onOpenInquiry }) => {
  return (
    <section className="hero-premium">
      <div className="hero-content">
        <div className="hero-eyebrow">Trusted by 500+ Engineering Students</div>
        <h1 className="hero-title-premium">
          Complete Academic & Industry Projects — <em>Done for You</em>
        </h1>
        <p className="hero-subtitle-premium">
          Mini, Major, Final Year & Real-Time Projects — Designed, Developed & Delivered by Experts. We handle everything: Topic, Code, Documentation, PPT & Viva Support.
        </p>
        <div className="hero-actions">
          <button className="btn-hero-primary" onClick={onOpenInquiry}>Get Your Project Now →</button>
          <button className="btn-hero-outline" onClick={onOpenInquiry}>
            Talk to Our Expert
          </button>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-card-stack">
          {/* Main project card */}
          <div className="h-card h-card-main">
            <div className="h-card-label">Active Project</div>
            <div className="h-card-title">AI Churn Prediction System</div>
            <div className="h-card-tags">
              <span className="tag">Machine Learning</span>
              <span className="tag gold">Final Year</span>
              <span className="tag green">Deployed</span>
            </div>
            <div className="progress-row-premium">
              <div className="progress-label"><span>Model Accuracy</span><span>96%</span></div>
              <div className="progress-bar-premium"><div className="progress-fill-premium" style={{ width: '96%' }}></div></div>
            </div>
            <div className="progress-row-premium">
              <div className="progress-label"><span>Documentation</span><span>88%</span></div>
              <div className="progress-bar-premium"><div className="progress-fill-premium" style={{ width: '88%' }}></div></div>
            </div>
            <div className="progress-row-premium">
              <div className="progress-label"><span>Viva Readiness</span><span>94%</span></div>
              <div className="progress-bar-premium"><div className="progress-fill-premium" style={{ width: '94%' }}></div></div>
            </div>
          </div>

          {/* Floating stat card */}
          <div className="h-card h-card-floating">
            <div className="h-card-label">Placement Rate</div>
            <div style={{ fontFamily: '"Playfair Display", serif', fontSize: '2rem', fontWeight: 700, color: '#1A1814' }}>98%</div>
            <div style={{ fontSize: '.75rem', color: '#7A766E', marginTop: '.25rem' }}>Students placed in top firms</div>
          </div>

          {/* Bottom stat */}
          <div className="h-card h-card-stat">
            <div className="stat-icon">⚡</div>
            <div className="stat-text">
              <div className="num">3× Faster</div>
              <div className="lbl">Project completion</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
