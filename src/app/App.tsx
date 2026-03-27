import { useState, useEffect } from "react";
import { InteractiveDots } from "./components/interactive-dots";
import { motion } from "motion/react";
import useFluidCursor from "../hooks/useFluidCursor";
import { useMediaQuery } from "../hooks/use-media-query";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { ProblemSection } from "./components/problem-section";
import { AiFeatures } from "./components/ai-features";
import { Services } from "./components/services";
import { ComparisonSection } from "./components/comparison-section";
import { Process } from "./components/process";
import { Testimonials } from "./components/testimonials";
import { CTA } from "./components/cta";
import { Footer } from "./components/footer";
import { ProjectInquiryModal } from "./components/project-inquiry-modal";
import { WhatsAppButton } from "./components/whatsapp-button";

export default function App() {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const isTablet = useMediaQuery("(max-width: 1280px)");

  const handleOpenInquiry = () => {
    setIsInquiryModalOpen(true);
  };

  // Only run fluid cursor on non-mobile devices
  const shouldRunFluid = !isMobile;
  useFluidCursor(shouldRunFluid);

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white overflow-x-hidden scroll-smooth">
      {/* Interactive Dot Grid Background - Disabled on Mobile for performance */}
      {!isMobile && (
        <div className="fixed inset-0" style={{ zIndex: 0 }}>
          <InteractiveDots
            backgroundColor="#0B0F19"
            dotColor="#0b7bff"
            gridSpacing={isTablet ? 60 : 45}
            animationSpeed={0.004}
            removeWaveLine={false}
          />
        </div>
      )}


      {/* Navigation */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero onOpenInquiry={handleOpenInquiry} />

        {/* Unified Background Wrapper for Everything after Hero */}
        <div className="relative">
          {/* Base Section Background (Gradient + Grid) - GLOBAL CONTINUITY */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19] via-[#0f1421] to-[#0B0F19]" />

          {/* Animated Grid Overlay */}
          <div className="fixed inset-0 opacity-[0.15] pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(146, 219, 224, 0.2) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(11, 123, 255, 0.2) 1px, transparent 1px)
                `,
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          <div className="relative z-10">
            <ProblemSection />

            {/* AI Features — Vertex AI Project Assist™ */}
            <AiFeatures onOpenInquiry={handleOpenInquiry} />

            {/* Services — Complete Project Ecosystem */}
            <Services onOpenInquiry={handleOpenInquiry} />

            {/* Comparison — Why Students Choose Vertex */}
            <ComparisonSection />

            {/* Process — How It Works */}
            <Process />

            {/* Trust / Testimonials */}
            <Testimonials />

            {/* Final CTA */}
            <CTA onOpenInquiry={handleOpenInquiry} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />

      {/* Project Inquiry Modal */}
      <ProjectInquiryModal
        isOpen={isInquiryModalOpen}
        onOpenChange={setIsInquiryModalOpen}
      />
    </div>
  );
}
