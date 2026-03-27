import React from "react";
import { useReveal } from "../../../hooks/useReveal";

export const PremiumTestimonials: React.FC = () => {
    const parentRef = useReveal<HTMLElement>();

  return (
    <section id="testimonials" className="premium-section testimonials-section-premium" ref={parentRef}>
      <div className="section-header centered reveal">
        <div className="section-eyebrow">Social Proof</div>
        <h2 className="section-title-premium">Trusted By Engineering Students</h2>
        <p className="section-sub">Real outcomes from real students across India.</p>
      </div>
      <div className="testimonials-grid">
        <div className="testimonial-card-premium reveal">
          <div className="stars">
            <span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span>
          </div>
          <p className="testimonial-text">"They completed my final year project on time with full documentation and PPT. The viva support was excellent — I cleared it without any stress."</p>
          <div className="testimonial-author">
            <div className="author-avatar avatar-a">PK</div>
            <div>
              <div className="author-name">Anusha Sharma</div>
              <div className="author-role">Final Year CSE Student</div>
            </div>
          </div>
        </div>
        <div className="testimonial-card-premium reveal">
          <div className="stars">
            <span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span>
          </div>
          <p className="testimonial-text">"Truly a one-stop solution. I needed a custom AI project in 10 days, and they delivered the code and report before the deadline. Highly recommended!"</p>
          <div className="testimonial-author">
            <div className="author-avatar avatar-b">RS</div>
            <div>
              <div className="author-name">Rahul Kumar</div>
              <div className="author-role">ECE Student</div>
            </div>
          </div>
        </div>
        <div className="testimonial-card-premium reveal">
          <div className="stars">
            <span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span>
          </div>
          <p className="testimonial-text">"The report and PPT were high-quality. My guide was impressed with the depth of the project. Vertex handled everything end-to-end flawlessly."</p>
          <div className="testimonial-author">
            <div className="author-avatar avatar-c">AM</div>
            <div>
              <div className="author-name">Vinay M.</div>
              <div className="author-role">Mechanical Engineering</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
