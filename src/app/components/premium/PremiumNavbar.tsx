import { Instagram } from "lucide-react";

interface PremiumNavbarProps {
  onOpenInquiry: () => void;
}

export const PremiumNavbar: React.FC<PremiumNavbarProps> = ({ onOpenInquiry }) => {
  return (
    <nav className="premium-nav">
      <div className="nav-logo">Vertex<span>.</span></div>
      <ul className="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#how">How It Works</a></li>
        <li><a href="#testimonials">Reviews</a></li>
      </ul>
      <div className="nav-cta">
        <a href="https://instagram.com/vertexproject.in" target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ display: 'flex', alignItems: 'center', padding: '0.5rem' }} title="Instagram">
          <Instagram size={18} />
        </a>
        <button className="btn-primary" onClick={onOpenInquiry}>Start Project →</button>
      </div>
    </nav>
  );
};
