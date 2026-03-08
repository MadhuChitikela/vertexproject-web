'use client'
import React, { Suspense, useRef } from 'react'
import { Bot } from 'lucide-react'
import { ShaderGradient, ShaderGradientCanvas } from '@shadergradient/react'
import { TimelineAnimation } from '@/app/components/ui/timeline-animation'
import { useMediaQuery } from '@/hooks/use-media-query'

interface HeroProps {
  onOpenInquiry: () => void;
}

export function Hero({ onOpenInquiry }: HeroProps) {
  const timelineRef = useRef<HTMLDivElement>(null)
  const isMobile = useMediaQuery('(max-width: 1024px)')

  return (
    <section
      ref={timelineRef}
      className="relative min-h-screen flex flex-col bg-transparent text-white w-full overflow-hidden"
    >
      {!isMobile ? (
        <Suspense fallback={null}>
          <div className="absolute inset-0 opacity-70 brightness-90">
            <ShaderGradientCanvas
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                pointerEvents: 'none',
              }}
              pixelDensity={1}
            >
              <ShaderGradient
                animate="on"
                type="sphere"
                wireframe={false}
                shader="defaults"
                uTime={0}
                uSpeed={0.3}
                uStrength={0.3}
                uDensity={0.8}
                uFrequency={5.5}
                uAmplitude={3.2}
                positionX={-0.1}
                positionY={0}
                positionZ={0}
                rotationX={0}
                rotationY={130}
                rotationZ={70}
                color1="#92dbe0"
                color2="#0b7bff"
                color3="#3865cf"
                reflection={0.4}
                cAzimuthAngle={270}
                cPolarAngle={180}
                cDistance={0.5}
                cameraZoom={15.1}
                lightType="env"
                brightness={0.01}
                envPreset="city"
                grain="on"
                toggleAxis={false}
                zoomOut={false}
              />
            </ShaderGradientCanvas>
          </div>
        </Suspense>
      ) : (
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: 'radial-gradient(circle at 50% 50%, #0b7bff 0%, #0B0F19 100%)',
            filter: 'blur(100px)'
          }}
        />
      )}

      {/* Main Content */}
      <div className="relative z-10 grow flex flex-col justify-center px-8 md:px-24 py-20 pb-32">
        <TimelineAnimation
          as="h1"
          animationNum={4}
          timelineRef={timelineRef as React.RefObject<HTMLDivElement>}
          className="flex flex-col text-[12vw] md:text-[8vw] lg:text-[7.5vw] font-black leading-[1.02] tracking-tighter mb-12 drop-shadow-2xl"
        >
          <span className="text-white [text-shadow:0_4px_20px_rgba(0,0,0,0.6)]">From Idea to</span>
          <span className="bg-gradient-to-r from-[#4da3ff] to-[#1f6fff] bg-clip-text text-transparent filter drop-shadow-md">
            Implementation
          </span>
          <span className="text-white/80 [text-shadow:0_4px_20px_rgba(0,0,0,0.6)] text-[4vw] md:text-[2.5vw] lg:text-[2vw] mt-6 font-medium tracking-normal mb-8">
            We Build Your Project, You Build Your Future
          </span>
        </TimelineAnimation>

        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12">
          <div className="flex flex-wrap gap-5">
            <TimelineAnimation
              as="button"
              animationNum={5}
              timelineRef={timelineRef as React.RefObject<HTMLDivElement>}
              onClick={() => document.getElementById('ai-features')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative cursor-pointer bg-white text-black px-10 py-5 rounded-full font-bold text-xl flex items-center gap-3 shadow-[0_20px_40px_rgba(11,123,255,0.3)] hover:scale-105 transition-transform duration-300"
            >
              <Bot className="w-6 h-6 text-[#0b7bff]" />
              Talk to AI Mentor
            </TimelineAnimation>
            <TimelineAnimation
              as="button"
              animationNum={6}
              timelineRef={timelineRef as React.RefObject<HTMLDivElement>}
              onClick={onOpenInquiry}
              className="cursor-pointer border border-white/20 bg-white/5 backdrop-blur-xl px-10 py-5 rounded-full font-bold text-xl hover:bg-white/10 transition-colors"
            >
              Start Project
            </TimelineAnimation>
          </div>
          <TimelineAnimation
            as="p"
            animationNum={7}
            timelineRef={timelineRef as React.RefObject<HTMLDivElement>}
            className="max-w-xl text-white/90 text-xl md:text-2xl font-light leading-relaxed border-l-2 border-[#0b7bff]/30 pl-8 drop-shadow-lg"
          >
            We don't just build projects. We help you{' '}
            <span className="text-[#0b7bff] font-semibold italic">understand, present</span> and{' '}
            <span className="text-[#92dbe0] font-semibold italic">succeed confidently.</span>
          </TimelineAnimation>
        </div>
      </div>

      {/* Footer Info / Stats */}
      <div className="relative z-10 px-8 md:px-24 pb-12 mt-auto">
        <TimelineAnimation
          animationNum={8}
          timelineRef={timelineRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 bg-white/[0.03] backdrop-blur-2xl p-8 rounded-3xl"
        >
          <div className="space-y-0.5">
            <p className="text-[#0b7bff] text-[10px] font-bold uppercase tracking-[0.2em] mb-0.5">Delivered</p>
            <p className="text-3xl font-bold text-white leading-none">500+</p>
            <p className="text-white/40 text-[10px]">Successful Projects</p>
          </div>
          <div className="space-y-0.5">
            <p className="text-[#92dbe0] text-[10px] font-bold uppercase tracking-[0.2em] mb-0.5">Satisfaction</p>
            <p className="text-3xl font-bold text-white leading-none">98%</p>
            <p className="text-white/40 text-[10px]">Positive Feedback</p>
          </div>
          <div className="space-y-0.5">
            <p className="text-[#0b7bff] text-[10px] font-bold uppercase tracking-[0.2em] mb-0.5">Expertise</p>
            <p className="text-3xl font-bold text-white leading-none">3+ Yrs</p>
            <p className="text-white/40 text-[10px]">Industry Support</p>
          </div>
          <div className="space-y-0.5">
            <p className="text-[#92dbe0] text-[10px] font-bold uppercase tracking-[0.2em] mb-0.5">Response</p>
            <p className="text-3xl font-bold text-white leading-none">24/7</p>
            <p className="text-white/40 text-[10px]">Live Assistance</p>
          </div>
        </TimelineAnimation>
      </div>
    </section>
  )
}
