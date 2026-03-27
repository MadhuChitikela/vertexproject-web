import React from "react";
import { useReveal } from "../../../hooks/useReveal";
import { GraduationCap, Rocket, Briefcase } from "lucide-react";

export const PremiumWhySection: React.FC = () => {
    const parentRef = useReveal<HTMLElement>();

  return (
    <section className="premium-section" ref={parentRef}>
      <div className="why-grid">
        <div className="reveal">
          <div className="section-eyebrow">Why Vertex</div>
          <h2 className="section-title-premium">Students Choose Vertex<br />For One Reason</h2>
          <p className="section-sub" style={{ marginBottom: '2.5rem' }}>We deliver excellence by taking care of the technical heavy lifting, so you can focus on your career.</p>
          <div className="why-features">
            <div className="why-feature">
              <div className="why-feat-icon">
                <GraduationCap className="text-[#C9A84C]" size={20} />
              </div>
              <div>
                <div className="why-feat-title">Viva-Ready Guarantee</div>
                <div className="why-feat-desc">Our projects come with complete walkthroughs so you can answer any examiner's question with confidence.</div>
              </div>
            </div>
            <div className="why-feature">
              <div className="why-feat-icon">
                <Rocket className="text-[#C9A84C]" size={20} />
              </div>
              <div>
                <div className="why-feat-title">Production-Deployed Projects</div>
                <div className="why-feat-desc">Every project can be made live on the web — your GitHub has something real to show recruiters.</div>
              </div>
            </div>
            <div className="why-feature">
              <div className="why-feat-icon">
                <Briefcase className="text-[#C9A84C]" size={20} />
              </div>
              <div>
                <div className="why-feat-title">Job-Interview Ready</div>
                <div className="why-feat-desc">Our high-end project reports and clean source code serve as a polished portfolio for top-tier company interviews.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="why-visual-premium reveal">
          <div className="why-chart-title">Vertex vs. Alternatives</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <div className="comparison-label">Project Quality</div>
              <div className="comparison-bars">
                <div className="bar-row">
                  <span className="bar-name">Vertex</span>
                  <div className="bar-track"><div className="bar-fill vertex" style={{ width: '96%' }}></div></div>
                  <span className="bar-val">96</span>
                </div>
                <div className="bar-row">
                  <span className="bar-name">Others</span>
                  <div className="bar-track"><div className="bar-fill others" style={{ width: '52%' }}></div></div>
                  <span className="bar-val">52</span>
                </div>
              </div>
            </div>
            <div>
              <div className="comparison-label">Viva Readiness</div>
              <div className="comparison-bars">
                <div className="bar-row">
                  <span className="bar-name">Vertex</span>
                  <div className="bar-track"><div className="bar-fill vertex" style={{ width: '94%' }}></div></div>
                  <span className="bar-val">94</span>
                </div>
                <div className="bar-row">
                  <span className="bar-name">Others</span>
                  <div className="bar-track"><div className="bar-fill others" style={{ width: '38%' }}></div></div>
                  <span className="bar-val">38</span>
                </div>
              </div>
            </div>
            <div>
              <div className="comparison-label">Placement Success</div>
              <div className="comparison-bars">
                <div className="bar-row">
                  <span className="bar-name">Vertex</span>
                  <div className="bar-track"><div className="bar-fill vertex" style={{ width: '98%' }}></div></div>
                  <span className="bar-val">98</span>
                </div>
                <div className="bar-row">
                  <span className="bar-name">Others</span>
                  <div className="bar-track"><div className="bar-fill others" style={{ width: '61%' }}></div></div>
                  <span className="bar-val">61</span>
                </div>
              </div>
            </div>
            <div>
              <div className="comparison-label">Mentor Availability</div>
              <div className="comparison-bars">
                <div className="bar-row">
                  <span className="bar-name">Vertex</span>
                  <div className="bar-track"><div className="bar-fill vertex" style={{ width: '100%' }}></div></div>
                  <span className="bar-val">24/7</span>
                </div>
                <div className="bar-row">
                  <span className="bar-name">Others</span>
                  <div className="bar-track"><div className="bar-fill others" style={{ width: '30%' }}></div></div>
                  <span className="bar-val">30</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
