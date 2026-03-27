import { Instagram, Mail, MessageCircle, Linkedin } from "lucide-react";

export const PremiumFooter: React.FC = () => {
  return (
    <footer className="premium-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">Vertex<span>.</span></div>
          <p className="footer-tagline">We deliver complete academic and real-time projects — ready to submit.</p>
          <div className="footer-social">
            <a href="https://instagram.com/vertexproject.in" target="_blank" rel="noopener noreferrer" className="social-btn" title="Instagram">
              <Instagram size={18} />
            </a>
            <a href="mailto:vertexproject.in@gmail.com" className="social-btn" title="Email Us">
              <Mail size={18} />
            </a>
            <a href="https://wa.me/919391189053" target="_blank" rel="noopener noreferrer" className="social-btn" title="WhatsApp Support">
              <MessageCircle size={18} />
            </a>
            <a href="#" className="social-btn" title="LinkedIn"><Linkedin size={18} /></a>
          </div>
        </div>
        <div>
          <div className="footer-col-title">Services</div>
          <ul className="footer-links">
            <li><a href="#projects">Project Catalog</a></li>
            <li><a href="#features">AI Topic Finder</a></li>
            <li><a href="#how">How It Works</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Placement Prep</a></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Contact Us</div>
          <ul className="footer-links">
            <li><a href="mailto:vertexproject.in@gmail.com" style={{ textTransform: 'lowercase' }}>vertexproject.in@gmail.com</a></li>
            <li><a href="https://instagram.com/vertexproject.in" target="_blank" rel="noopener noreferrer">@vertexproject.in</a></li>
            <li><a href="https://wa.me/919391189053" target="_blank" rel="noopener noreferrer">WhatsApp Support</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Support</div>
          <ul className="footer-links">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Live Chat</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Vertex. All rights reserved.</span>
        <div className="footer-bottom-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
};
