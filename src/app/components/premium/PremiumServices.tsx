import React from "react";
import { useReveal } from "../../../hooks/useReveal";

export const PremiumServices: React.FC = () => {
    const parentRef = useReveal<HTMLElement>();

  return (
    <section id="projects" className="premium-section projects-section-premium" ref={parentRef}>
      <div className="section-header reveal">
        <div className="section-eyebrow">Our Services</div>
        <h2 className="section-title-premium">One-Stop Project Delivery</h2>
        <p className="section-sub">We handle Topic, Code, Report, PPT & Viva support. Select your requirement below.</p>
      </div>
      <div className="projects-grid">
        <div className="project-card reveal">
          <div className="project-card-header">
            <span className="project-difficulty diff-beginner">Standard</span>
            <span className="project-number">01</span>
          </div>
          <div className="project-card-body">
            <div className="project-card-title">Full Project (Minor/Major)</div>
            <p className="project-card-desc">Working source code + dataset + environment setup for all domains like AI, ML, Web, App.</p>
            <div className="project-tech-stack">
              <span className="tech-tag">Source Code</span><span className="tech-tag">Dataset</span><span className="tech-tag">Setup</span>
            </div>
          </div>
        </div>
        <div className="project-card reveal">
          <div className="project-card-header">
            <span className="project-difficulty diff-intermediate">Premium</span>
            <span className="project-number">02</span>
          </div>
          <div className="project-card-body">
            <div className="project-card-title">Research & Custom Theme</div>
            <p className="project-card-desc">Advanced projects with custom modifications, research-standard papers, and novel implementations.</p>
            <div className="project-tech-stack">
              <span className="tech-tag">Research Paper</span><span className="tech-tag">Novelty</span><span className="tech-tag">Custom Add-on</span>
            </div>
          </div>
        </div>
        <div className="project-card reveal">
          <div className="project-card-header">
            <span className="project-difficulty diff-advanced">The Works</span>
            <span className="project-number">03</span>
          </div>
          <div className="project-card-body">
            <div className="project-card-title">End-to-End Submission</div>
            <p className="project-card-desc">Everything: Full Source Code + 50-100 page Report + Professional PPT + Viva Video Guidance.</p>
            <div className="project-tech-stack">
              <span className="tech-tag">Report</span><span className="tech-tag">PPT</span><span className="tech-tag">Viva Prep</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
