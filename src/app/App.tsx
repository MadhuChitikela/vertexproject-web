import { useState } from "react";
import { ParticleBackground } from "./components/particle-background";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Services } from "./components/services";
import { WhyChooseUs } from "./components/why-choose-us";
import { Process } from "./components/process";
import { Testimonials } from "./components/testimonials";
import { CTA } from "./components/cta";
import { Footer } from "./components/footer";
import { ProjectInquiryModal } from "./components/project-inquiry-modal";

export default function App() {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white overflow-x-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Navigation */}
      <Navbar onOpenInquiry={() => setIsInquiryModalOpen(true)} />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero onOpenInquiry={() => setIsInquiryModalOpen(true)} />

        {/* Services Section */}
        <Services />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Process Section */}
        <Process />

        {/* Testimonials Section */}
        <Testimonials />

        {/* CTA Section */}
        <CTA onOpenInquiry={() => setIsInquiryModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Inquiry Modal */}
      <ProjectInquiryModal
        isOpen={isInquiryModalOpen}
        onOpenChange={setIsInquiryModalOpen}
      />
    </div>
  );
}
