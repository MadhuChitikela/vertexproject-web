import { useState } from "react";
import { InteractiveDots } from "./components/interactive-dots";
import useFluidCursor from "../hooks/useFluidCursor";
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

  useFluidCursor();

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white overflow-x-hidden scroll-smooth">
      {/* Interactive Dot Grid Background */}
      <div className="fixed inset-0" style={{ zIndex: 0 }}>
        <InteractiveDots
          backgroundColor="#0B0F19"
          dotColor="#00E5FF"
          gridSpacing={35}
          animationSpeed={0.004}
          removeWaveLine={false}
        />
      </div>




      {/* Navigation */}
      <Navbar onOpenInquiry={() => setIsInquiryModalOpen(true)} />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero — AI-Powered FYP Mastery Platform */}
        <Hero onOpenInquiry={() => setIsInquiryModalOpen(true)} />

        {/* Problem Section — Why Students Struggle */}
        <ProblemSection />

        {/* AI Features — Vertex AI Project Assist™ */}
        <AiFeatures />

        {/* Services — Complete Project Ecosystem */}
        <Services />

        {/* Comparison — Why Students Choose Vertex */}
        <ComparisonSection />

        {/* Process — How It Works */}
        <Process />

        {/* Trust / Testimonials */}
        <Testimonials />

        {/* Final CTA */}
        <CTA onOpenInquiry={() => setIsInquiryModalOpen(true)} />
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
