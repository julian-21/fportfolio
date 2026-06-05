'use client'

import React, { useState, useCallback } from 'react'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { BlurText } from '@/components/react-bits/BlurText'
import { Magnet } from '@/components/react-bits/Magnet'
import { Particles } from '@/components/react-bits/Particles'
import { ScrollReveal } from '@/components/react-bits/ScrollReveal'
import { SpotlightCard } from '@/components/react-bits/SpotlightCard'
import { ShinyText } from '@/components/react-bits/ShinyText'
import { DecryptedText } from '@/components/react-bits/DecryptedText'
import { motion, AnimatePresence } from 'framer-motion'
import {
  SiReact,
  SiVuedotjs,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiLaravel,
  SiNodedotjs,
  SiSpring,
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiVercel,
  SiBootstrap,
  SiJquery,
  SiPhp,
  SiJavascript
} from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'
import { FaAws, FaJava, FaIndustry, FaCogs, FaCloud, FaCreditCard, FaRobot, FaBuilding, FaLock } from 'react-icons/fa'

const techIcons: { [key: string]: React.ComponentType<any> } = {
  'React': SiReact,
  'React.js': SiReact,
  'Vue.js': SiVuedotjs,
  'Next.js': SiNextdotjs,
  'TypeScript': SiTypescript,
  'JavaScript': SiJavascript,
  'Tailwind CSS': SiTailwindcss,
  'Laravel': SiLaravel,
  'Node.js': SiNodedotjs,
  'Java Spring Boot': SiSpringboot,
  'Spring Boot': SiSpringboot,
  'Java': FaJava,
  'MySQL': SiMysql,
  'PostgreSQL': SiPostgresql,
  'Git': SiGit,
  'Docker': SiDocker,
  'Vercel': SiVercel,
  'AWS': FaAws,
  'VS Code': VscCode,
  'Bootstrap': SiBootstrap,
  'jQuery': SiJquery,
  'PHP': SiPhp,
  'ERP Systems': FaIndustry,
  'PPIC Automation': FaCogs,
  'Cloud Infrastructure': FaCloud,
  'Midtrans API': FaCreditCard,
  'AI Multimodality': FaRobot,
  'Enterprise Architecture': FaBuilding
}

const techColors: { [key: string]: string } = {
  'React': '#61DAFB',
  'React.js': '#61DAFB',
  'Vue.js': '#4FC08D',
  'Next.js': '#ffffff',
  'TypeScript': '#3178C6',
  'JavaScript': '#F7DF1E',
  'Tailwind CSS': '#06B6D4',
  'Laravel': '#FF2D20',
  'Node.js': '#5FA04E',
  'Java Spring Boot': '#6DB33F',
  'Spring Boot': '#6DB33F',
  'Java': '#ED8B00',
  'MySQL': '#4479A1',
  'PostgreSQL': '#4169E1',
  'Git': '#F05032',
  'Docker': '#2496ED',
  'Vercel': '#ffffff',
  'AWS': '#FF9900',
  'VS Code': '#007ACC',
  'Bootstrap': '#7952B3',
  'jQuery': '#0769AD',
  'PHP': '#777BB4',
  'ERP Systems': '#FF6B6B',
  'PPIC Automation': '#FFB347',
  'Cloud Infrastructure': '#38BDF8',
  'Midtrans API': '#003D79',
  'AI Multimodality': '#A78BFA',
  'Enterprise Architecture': '#6EE7B7'
}

export default function ProjectsPage() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const projects = [
    {
      title: 'ERP System Rumah Mesin',
      description: 'An enterprise-grade ERP system built to streamline and automate PPIC (Production Planning and Inventory Control), Sales, and Human Resource workflows.',
      fullDescription: 'Designed and engineered a centralized digital platform to align manufacturing production schedules, inventory control tracking, CRM, and payroll systems into a single source of truth.',
      image: '/data-visualization-charts.png',
      tags: ['Laravel', 'React.js', 'MySQL', 'ERP Systems', 'PPIC Automation'],
      year: 'Feb 2026 - Present',
      link: null,
      company: 'Rumah Mesin (Yogyakarta, Indonesia)',
      status: 'Stable Build',
      features: [
        'Automated CRM & Billing: Optimized order placement workflows, instant cost estimation, and invoice tracking.',
        'PPIC & Inventory Controls: Streamlined warehousing operations, minimum safety stock triggers, and scheduling.',
        'HR & Payroll Integration: Automated employee attendance tracking, payroll computation, and performance reviews.'
      ],
    },
    {
      title: 'VirtueOne',
      description: 'A digital reservation and scheduling platform built to manage virtual consultation bookings and coaching sessions.',
      fullDescription: 'Engineered an automated scheduling system for the regional office of the National Civil Service Agency (BKN RI), providing a seamless appointment flow and administrative tracking.',
      image: '/virtue-one-laravel-web-application.jpg',
      tags: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'Cloud Infrastructure'],
      year: 'Sep - Dec 2023',
      company: 'BKN RI (National Civil Service Agency of Indonesia)',
      status: 'Live System',
      link: 'https://virtuone.kupjogja.id/',
      features: [
        'Dynamic Appointment Slots: Auto-generated booking schedules based on real-time counselor availability.',
        'Virtual Queue Management: Live queuing dashboard matching counselors and attendees.',
        'Analytical Dashboard: Administrative insights on session analytics, attendee records, and feedback summaries.'
      ],
    },
    {
      title: 'Turbo AI',
      description: 'An all-in-one multimodal SaaS application integrated with automated payment gateways and token systems.',
      fullDescription: 'Architected a premium artificial intelligence portal offering AI text generation, YouTube audio summaries, GPT-4o chat, and dynamic photo studios, backed by automated payment verification.',
      image: '/turbo-ai-platform.jpg',
      tags: ['Laravel', 'MySQL', 'jQuery', 'Midtrans API', 'AI Multimodality'],
      year: 'Jan 2025',
      company: 'Turbo AI Corp',
      status: 'Live SaaS',
      link: 'http://turboai.id/',
      features: [
        'Payment Gateway Integration: Secure payment integration using Midtrans Snap API with webhook verification.',
        'Multimodal AI Engines: Integration of OpenAI GPT-4o, Whisper transcription, and custom image APIs.',
        'SaaS Subscription Tiers: Flexible quota allocation, tokens bookkeeping, and automated upgrades.'
      ],
    },
    {
      title: 'Ardatama',
      description: 'An enterprise company profile portal focused on high-performance real-time data processing.',
      fullDescription: 'Architected and developed a corporate web application featuring a Java Spring Boot backend paired with an interactive Vue.js frontend.',
      image: '/ardatama-enterprise-application.jpg',
      tags: ['Java', 'Spring Boot', 'Vue.js', 'PostgreSQL', 'Enterprise Architecture'],
      year: '2025',
      link: null,
      company: 'CV. Ardatama Indonesia',
      status: 'Stable Archive',
    },
  ]

  const activeProject = projects[activeIndex]

  const selectProject = useCallback((idx: number) => {
    setDirection(idx > activeIndex ? 1 : -1)
    setActiveIndex(idx)
  }, [activeIndex])

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 220,
        damping: 24,
        delay: 0.05
      }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      transition: {
        duration: 0.25
      }
    }),
  }

  const imageVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      rotate: dir > 0 ? 12 : -12,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      rotate: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 25,
      }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      rotate: dir > 0 ? -12 : 12,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.35,
        ease: 'easeInOut'
      }
    }),
  }

  return (
    <div className="w-full min-h-screen bg-background relative overflow-hidden">
      <Particles quantity={65} />
      <Navigation />

      <main className="pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24 min-h-screen">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:pl-64 lg:pr-24 xl:pl-72 xl:pr-48 2xl:pr-64">
          <div className="max-w-6xl mx-auto lg:mx-0">
            
            {/* Header */}
            <header className="mb-10 sm:mb-14">
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <div className="flex items-center gap-1.5 text-accent text-xs font-bold tracking-[0.2em] uppercase">
                  <span>✦</span>
                  <span>Portfolio Showcase</span>
                </div>
                <h1 className="text-display font-black text-foreground leading-none tracking-tight">
                  <BlurText text="SELECTED" delay={0.05} animateBy="letters" className="inline-block" />
                  <br />
                  <BlurText text="WORKS" delay={0.05} animateBy="letters" className="inline-block" />
                </h1>
                <ScrollReveal delay={0.35} yOffset={15}>
                  <p className="text-body text-foreground/70 max-w-2xl font-light">
                    A curated showcase of professional fullstack engineering, bespoke AI integrations, and high-performance enterprise systems.
                  </p>
                </ScrollReveal>
              </div>
            </header>

            {/* ═══════════════════════════════════════════════════════ */}
            {/* CHARACTER SELECT: Main Showcase + Selector Strip       */}
            {/* ═══════════════════════════════════════════════════════ */}
            <ScrollReveal delay={0.3} yOffset={25}>
              <div className="space-y-8">
                
                {/* ── Main Showcase Panel ── */}
                <div className="relative border border-white/10 bg-card/10 overflow-hidden rounded-2xl">
                  {/* Ambient glow behind active card */}
                  <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-[120px] pointer-events-none" />
                  <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[100px] pointer-events-none" />
                  
                  <div className="grid grid-cols-1 lg:grid-cols-12 relative z-10">
                    
                    {/* Image Panel */}
                    <div className="lg:col-span-7 relative overflow-hidden bg-card/20">
                      <div className="relative aspect-[16/10] sm:aspect-video lg:aspect-auto lg:h-full lg:min-h-[420px] overflow-hidden">
                        <AnimatePresence mode="wait" custom={direction}>
                          <motion.div
                            key={activeIndex}
                            custom={direction}
                            variants={imageVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="absolute inset-0"
                          >
                            <img
                              src={activeProject.image}
                              alt={activeProject.title}
                              className="w-full h-full object-cover"
                            />
                          </motion.div>
                        </AnimatePresence>
                        
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/20 to-transparent pointer-events-none lg:block hidden" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent pointer-events-none" />
                        
                        {/* Project index badge */}
                        <div className="absolute top-4 left-4 z-20">
                          <span className="text-[10px] font-black tracking-[0.3em] uppercase px-3 py-1.5 bg-accent/90 text-white backdrop-blur-sm rounded-br-xl">
                            {String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                          </span>
                        </div>

                        {/* Visit button / Status Badge */}
                        <div className="absolute top-4 right-4 z-20">
                          {activeProject.link ? (
                            <Magnet range={30} strength={0.2}>
                              <a
                                href={activeProject.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/10 backdrop-blur-md text-white font-bold text-[10px] tracking-widest uppercase border border-white/20 hover:bg-accent hover:border-accent transition-all duration-300 rounded-md"
                              >
                                VISIT LIVE ↗
                              </a>
                            </Magnet>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/5 backdrop-blur-md text-white/40 font-bold text-[10px] tracking-widest uppercase border border-white/10 select-none rounded-md">
                              PRIVATE BUILD <FaLock className="w-2.5 h-2.5" />
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Info Panel */}
                    <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-center relative">
                      <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                          key={activeIndex}
                          custom={direction}
                          variants={slideVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                          className="space-y-5"
                        >
                          {/* Status & Year */}
                          <div className="flex items-center gap-3">
                            <ShinyText text={activeProject.status} color="red" className="text-[10px] font-black tracking-widest uppercase" />
                            <span className="w-px h-3 bg-foreground/20" />
                            <span className="text-[10px] font-semibold tracking-wider text-muted-foreground uppercase">{activeProject.year}</span>
                          </div>
                          
                          {/* Title with decrypt animation */}
                          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground leading-[1.1] tracking-tight">
                            <DecryptedText 
                              key={`title-${activeIndex}`}
                              text={activeProject.title} 
                              scrambleSpeed={35} 
                              animateOn="view" 
                            />
                          </h2>
                          
                          {/* Company */}
                          {activeProject.company && (
                            <p className="text-xs font-semibold text-muted-foreground tracking-wide uppercase">
                              {activeProject.company}
                            </p>
                          )}
                          
                          {/* Description */}
                          <p className="text-sm text-foreground/70 font-light leading-relaxed">
                            {activeProject.description}
                          </p>
                          
                          {/* Tech Tags */}
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {activeProject.tags.map((tag) => {
                              const IconComponent = techIcons[tag]
                              const brandColor = techColors[tag]
                              return (
                                <Magnet key={tag} range={18} strength={0.12} className="inline-block">
                                  <span 
                                    className="group/tag text-[9px] font-semibold tracking-wider px-2.5 py-1 border border-white/10 text-foreground/60 bg-white/[0.03] hover:bg-white/[0.08] transition-all duration-300 flex items-center gap-1.5 cursor-pointer rounded-md"
                                  >
                                    {IconComponent && (
                                      <IconComponent 
                                        className="w-3 h-3 transition-all duration-300 opacity-50 group-hover/tag:opacity-100"
                                        style={{ color: 'currentColor' }}
                                        onMouseEnter={(e: React.MouseEvent<SVGElement>) => { if (brandColor) e.currentTarget.style.color = brandColor }}
                                        onMouseLeave={(e: React.MouseEvent<SVGElement>) => { e.currentTarget.style.color = 'currentColor' }}
                                      />
                                    )}
                                    <span>{tag}</span>
                                  </span>
                                </Magnet>
                              )
                            })}
                          </div>
                          
                          {/* Action */}
                          <div className="pt-2">
                            {activeProject.link ? (
                              <Magnet range={25} strength={0.15} className="inline-block">
                                <a
                                  href={activeProject.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent hover:text-white transition-colors duration-300"
                                >
                                  <span>View Project</span>
                                  <span className="text-base">↗</span>
                                </a>
                              </Magnet>
                            ) : (
                              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground/50 select-none">
                                <span>Private Repository</span>
                                <FaLock className="w-3 h-3" />
                              </span>
                            )}
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                {/* ── Project Selector Strip (Character Select) ── */}
                <div className="relative">
                  {/* Label */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-muted-foreground">
                      Select Project
                    </span>
                    <span className="text-[10px] font-bold tracking-widest text-muted-foreground/50">
                      {String(activeIndex + 1).padStart(2, '0')} OF {String(projects.length).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Selector Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                    {projects.map((project, idx) => {
                      const isActive = idx === activeIndex
                      return (
                        <SpotlightCard
                          key={idx}
                          className={`p-0 cursor-pointer transition-all duration-500 rounded-xl ${
                            isActive 
                              ? 'border-accent/60 ring-1 ring-accent/20 scale-[1.02]' 
                              : 'border-white/8 hover:border-white/20 opacity-60 hover:opacity-90'
                          }`}
                          spotlightColor="rgba(255, 0, 60, 0.12)"
                          borderColor={isActive ? 'rgba(255, 0, 60, 0.6)' : 'rgba(255, 255, 255, 0.15)'}
                        >
                          <button
                            onClick={() => selectProject(idx)}
                            className="w-full text-left focus:outline-none"
                            aria-label={`Select ${project.title}`}
                          >
                            {/* Thumbnail */}
                            <div className="relative aspect-[16/9] overflow-hidden rounded-t-xl">
                              <img
                                src={project.image}
                                alt={project.title}
                                className={`w-full h-full object-cover transition-all duration-500 ${
                                  isActive ? 'scale-105' : 'scale-100 grayscale-[30%] hover:grayscale-0'
                                }`}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                              
                              {/* Active indicator bar */}
                              <motion.div 
                                className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                                initial={false}
                                animate={{ 
                                  scaleX: isActive ? 1 : 0,
                                  opacity: isActive ? 1 : 0 
                                }}
                                transition={{ duration: 0.4 }}
                              />
                              
                              {/* Index number overlay */}
                              <div className="absolute top-2 left-2">
                                <span className={`text-[9px] font-black tracking-widest px-1.5 py-0.5 transition-all duration-300 ${
                                  isActive 
                                    ? 'bg-accent text-white' 
                                    : 'bg-white/10 text-white/60 backdrop-blur-sm'
                                }`}>
                                  {String(idx + 1).padStart(2, '0')}
                                </span>
                              </div>
                            </div>

                            {/* Card Info */}
                            <div className="p-3 space-y-1">
                              <h3 className={`text-xs sm:text-sm font-bold leading-tight transition-colors duration-300 truncate ${
                                isActive ? 'text-foreground' : 'text-foreground/60'
                              }`}>
                                {project.title}
                              </h3>
                              <div className="flex items-center gap-2">
                                <span className={`text-[9px] font-semibold tracking-wider transition-colors duration-300 ${
                                  isActive ? 'text-accent' : 'text-muted-foreground/60'
                                }`}>
                                  {project.status}
                                </span>
                                <span className="text-muted-foreground/30">•</span>
                                <span className="text-[9px] text-muted-foreground/50 font-medium">
                                  {project.year}
                                </span>
                              </div>
                              
                              {/* Mini tech icons */}
                              <div className="flex items-center gap-1 pt-1">
                                {project.tags.slice(0, 3).map((tag) => {
                                  const IconComponent = techIcons[tag]
                                  const brandColor = techColors[tag]
                                  return IconComponent ? (
                                    <IconComponent 
                                      key={tag} 
                                      className={`w-2.5 h-2.5 transition-all duration-300 ${
                                        isActive ? 'opacity-70' : 'opacity-30'
                                      }`}
                                      style={{ color: isActive ? (brandColor || 'currentColor') : 'currentColor' }}
                                    />
                                  ) : null
                                })}
                                {project.tags.length > 3 && (
                                  <span className={`text-[8px] font-bold transition-colors duration-300 ${
                                    isActive ? 'text-muted-foreground' : 'text-muted-foreground/30'
                                  }`}>
                                    +{project.tags.length - 3}
                                  </span>
                                )}
                              </div>
                            </div>
                          </button>
                        </SpotlightCard>
                      )
                    })}
                  </div>
                  
                  {/* Navigation arrows for extra interactivity */}
                  <div className="flex items-center justify-center gap-3 mt-6">
                    <Magnet range={25} strength={0.2}>
                      <button
                        onClick={() => selectProject(activeIndex === 0 ? projects.length - 1 : activeIndex - 1)}
                        className="w-10 h-10 border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] hover:border-accent/40 transition-all duration-300 flex items-center justify-center text-foreground/60 hover:text-accent rounded-xl"
                        aria-label="Previous project"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                    </Magnet>

                    {/* Dot indicators */}
                    <div className="flex items-center gap-2">
                      {projects.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => selectProject(idx)}
                          className="group relative p-1"
                          aria-label={`Go to project ${idx + 1}`}
                        >
                          <motion.div
                            className={`transition-all duration-300 ${
                              idx === activeIndex 
                                ? 'w-6 h-1 bg-accent rounded-full' 
                                : 'w-1.5 h-1.5 bg-foreground/20 rounded-full group-hover:bg-foreground/40'
                            }`}
                            layout
                            transition={{ duration: 0.3 }}
                          />
                        </button>
                      ))}
                    </div>

                    <Magnet range={25} strength={0.2}>
                      <button
                        onClick={() => selectProject(activeIndex === projects.length - 1 ? 0 : activeIndex + 1)}
                        className="w-10 h-10 border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] hover:border-accent/40 transition-all duration-300 flex items-center justify-center text-foreground/60 hover:text-accent rounded-xl"
                        aria-label="Next project"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </Magnet>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* CTA Section */}
            <ScrollReveal className="mt-20 sm:mt-28 pt-12 border-t border-foreground/25">
              <div className="space-y-6 text-center lg:text-left">
                <h2 className="text-heading font-black text-foreground">Interested in Collaborating?</h2>
                <p className="text-body text-foreground/75 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Let's discuss how we can turn your vision into a production-ready reality.
                </p>
                <div className="pt-2">
                  <Magnet range={60} strength={0.25} className="inline-block">
                    <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-4 bg-foreground text-background font-black uppercase text-xs tracking-widest hover:bg-accent transition-all">
                      Get In Touch ↗
                    </Link>
                  </Magnet>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </main>
    </div>
  )
}