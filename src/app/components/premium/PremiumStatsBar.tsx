import React from "react";
import { useReveal } from "../../../hooks/useReveal";

export const PremiumStatsBar: React.FC = () => {
  const statsRef = useReveal<HTMLDivElement>();

  return (
    <div className="stats-bar-premium" ref={statsRef}>
      <div className="stat-item reveal">
        <div className="stat-num">500+</div>
        <div className="stat-desc">Projects Delivered</div>
      </div>
      <div className="stat-item reveal">
        <div className="stat-num">98%</div>
        <div className="stat-desc">Placement Success</div>
      </div>
      <div className="stat-item reveal">
        <div className="stat-num">3×</div>
        <div className="stat-desc">Faster Than Solo</div>
      </div>
      <div className="stat-item reveal">
        <div className="stat-num">24/7</div>
        <div className="stat-desc">Expert Support</div>
      </div>
    </div>
  );
};
