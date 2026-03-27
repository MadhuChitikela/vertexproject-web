import { useState } from "react";
import { useMediaQuery } from "../hooks/use-media-query";
import { PremiumNavbar } from "./components/premium/PremiumNavbar";
import { PremiumHero } from "./components/premium/PremiumHero";
import { PremiumStatsBar } from "./components/premium/PremiumStatsBar";
import { PremiumProblemSection } from "./components/premium/PremiumProblemSection";
import { PremiumAiFeatures } from "./components/premium/PremiumAiFeatures";
import { PremiumServices } from "./components/premium/PremiumServices";
import { PremiumWhySection } from "./components/premium/PremiumWhySection";
import { PremiumProcess } from "./components/premium/PremiumProcess";
import { PremiumTestimonials } from "./components/premium/PremiumTestimonials";
import { PremiumCTA } from "./components/premium/PremiumCTA";
import { PremiumFooter } from "./components/premium/PremiumFooter";

import { ProjectInquiryModal } from "./components/project-inquiry-modal";
import { WhatsAppButton } from "./components/whatsapp-button";
import { AiExplanationButton } from "./components/ai-assistant-button";
import useFluidCursor from "../hooks/useFluidCursor";

export default function App() {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1024px)");

  const handleOpenInquiry = () => {
    setIsInquiryModalOpen(true);
  };

  // Only run fluid cursor on non-mobile devices
  const shouldRunFluid = !isMobile;
  useFluidCursor(shouldRunFluid);

  return (
    <div className="min-h-screen bg-[#FAF8F4] text-[#1A1814] overflow-x-hidden scroll-smooth">
      {/* Navigation */}
      <PremiumNavbar onOpenInquiry={handleOpenInquiry} />

      {/* Main Content */}
      <main>
        <PremiumHero onOpenInquiry={handleOpenInquiry} />
        <PremiumStatsBar />
        <PremiumProblemSection />
        <PremiumAiFeatures />
        <PremiumServices />
        <PremiumWhySection />
        <PremiumProcess />
        <PremiumTestimonials />
        <PremiumCTA onOpenInquiry={handleOpenInquiry} />
      </main>

      {/* Footer */}
      <PremiumFooter />

      {/* Floating Buttons */}
      <WhatsAppButton />
      <AiExplanationButton />

      {/* Project Inquiry Modal */}
      <ProjectInquiryModal
        isOpen={isInquiryModalOpen}
        onOpenChange={setIsInquiryModalOpen}
      />
    </div>
  );
}
