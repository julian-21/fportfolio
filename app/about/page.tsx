'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Magnet } from '@/components/react-bits/Magnet'
import { SpotlightCard } from '@/components/react-bits/SpotlightCard'
import { Particles } from '@/components/react-bits/Particles'
import { ScrollReveal } from '@/components/react-bits/ScrollReveal'
import { TiltedCard } from '@/components/react-bits/TiltedCard'
import { ShinyText } from '@/components/react-bits/ShinyText'
import { DecryptedText } from '@/components/react-bits/DecryptedText'
import ProfileCard from '@/components/ProfileCard'
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
import { FaAws, FaJava } from 'react-icons/fa'

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
  'PHP': SiPhp
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
  'PHP': '#777BB4'
}

export default function AboutPage() {
  const skills = {
    'Frontend': ['React', 'Vue.js', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    'Backend': ['Laravel', 'Node.js', 'Java Spring Boot', 'MySQL', 'PostgreSQL'],
    'Tools': ['Git', 'Docker', 'Vercel', 'AWS', 'VS Code']
  }

  const experience = [
    {
      title: 'IT Support Specialist (Contract)',
      company: 'Rumah Mesin',
      period: 'Dec 2025 - Present',
      description: 'Engineered custom ERP systems aligned with corporate workflows, analyzed operations for unified digital integration, and managed system performance, troubleshooting, and optimization.'
    },
    {
      title: 'Junior Developer',
      company: 'CV. Ardatama Indonesia',
      period: '2025 - Present',
      description: 'Engineered high-performance enterprise applications utilizing Java Spring Boot and Vue.js.'
    },
    {
      title: 'Web Developer (Internship)',
      company: 'Kantor Regional I BKN',
      period: 'Sep - Dec 2023',
      description: 'Developed online booking and coaching clinic portals (VirtueOne) using Laravel and PHP, designed database flowcharts, and structured user interface systems.'
    },
    {
      title: 'Web Developer',
      company: 'Freelance',
      period: '2022 - 2023',
      description: 'Engineered various web projects and desktop client applications as a freelance developer.'
    }
  ]


  return (
    <div className="w-full min-h-screen bg-background relative overflow-hidden">
      {/* Background Particles backdrop */}
      <Particles quantity={60} />

      <Navigation />

      <div className="pt-24 lg:pt-32 px-4 md:px-8 lg:pl-72 lg:pr-32 pb-20 min-h-screen">
        <div className="max-w-2xl lg:max-w-3xl space-y-12 lg:space-y-16">
          
          {/* Header Title & Intro with Profile Image */}
          <section className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-black text-foreground">
              <DecryptedText text="ABOUT ME" scrambleSpeed={50} animateOn="view" />
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
              {/* Text description */}
              <ScrollReveal delay={0.2} yOffset={20} className="md:col-span-7 space-y-3 lg:space-y-4 text-base lg:text-lg font-light text-foreground/80 leading-relaxed">
                <p>
                  As a Computer Science graduate from Amikom University Yogyakarta, I am a passionate <ShinyText text="Full-Stack Developer" color="red" className="font-semibold" /> specializing in building scalable web architectures and robust digital products.
                </p>
                <p>
                  Through hands-on experience developing integrated ERP systems, AI-powered platforms, and enterprise applications—ranging from React & Laravel to Java Spring Boot & Vue.js—I bridge the gap between high-performance backend logic and pixel-perfect user experiences.
                </p>
                <p>
                  Driven by code integrity and continuous innovation, I thrive in translating complex business workflows into seamless, high-impact web applications. Let’s connect and build something extraordinary!
                </p>
              </ScrollReveal>
              
              {/* Profile Card wrapped in ScrollReveal */}
              <ScrollReveal delay={0.3} yOffset={20} className="md:col-span-5 w-full flex justify-center md:justify-start">
                <ProfileCard
                  name="Fikri Julian"
                  title="Fullstack Developer"
                  handle="julian-21"
                  status="Available"
                  contactText="Contact Me"
                  avatarUrl="/julian-portrait.png"
                  showUserInfo={true}
                  enableTilt={true}
                  enableMobileTilt={false}
                  onContactClick={() => window.location.href = '/contact'}
                  behindGlowColor="rgba(255, 0, 85, 0.35)"
                  iconUrl="/fikri-julian-co-logo.svg"
                  behindGlowEnabled={true}
                  innerGradient="linear-gradient(145deg, #0d0d10 0%, rgba(255, 0, 85, 0.15) 100%)"
                />
              </ScrollReveal>
            </div>
          </section>

          {/* Skills Grid with Spotlight Hover Effects */}
          <ScrollReveal delay={0.1} yOffset={25} className="space-y-4 lg:space-y-6 py-6 lg:py-8 border-t border-b border-white/20">
            <h2 className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Skills & Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <SpotlightCard 
                  key={category} 
                  className="p-5 border-foreground/30 bg-card/10 h-full rounded-none"
                  spotlightColor="rgba(255, 0, 60, 0.15)"
                  borderColor="rgba(255, 0, 60, 0.45)"
                >
                  <h3 className="font-bold text-foreground mb-3 text-sm lg:text-base border-b border-foreground/20 pb-2">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => {
                      const IconComponent = techIcons[skill]
                      const brandColor = techColors[skill]
                      return (
                        <Magnet key={skill} range={20} strength={0.15} className="inline-block">
                          <span 
                            className="group/tag text-xs font-light px-2.5 lg:px-3 py-1.5 border border-white/10 text-foreground/80 bg-white/[0.02] hover:bg-white/[0.06] transition-all duration-300 flex items-center gap-2 rounded-none cursor-pointer"
                            style={{ '--brand-color': brandColor } as React.CSSProperties}
                          >
                            {IconComponent && (
                              <IconComponent 
                                className="w-3.5 h-3.5 transition-all duration-300 opacity-60 group-hover/tag:opacity-100"
                                style={{ color: 'currentColor' }}
                                onMouseEnter={(e: React.MouseEvent<SVGElement>) => { if (brandColor) e.currentTarget.style.color = brandColor }}
                                onMouseLeave={(e: React.MouseEvent<SVGElement>) => { e.currentTarget.style.color = 'currentColor' }}
                              />
                            )}
                            <span>{skill}</span>
                          </span>
                        </Magnet>
                      )
                    })}
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </ScrollReveal>

          {/* Experience Section */}
          <section className="space-y-4 lg:space-y-6">
            <h2 className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Experience</h2>
            
            <div className="relative h-[320px] overflow-hidden border border-foreground/15 p-4 bg-card/5 marquee-vertical-container">
              <div className="animate-marquee-vertical-down flex flex-col gap-4 py-2">
                {/* Set 1 */}
                {experience.map((exp, idx) => (
                  <div key={`set1-${idx}`} className="p-4 border border-foreground/10 bg-card/20 rounded-none transition-colors duration-300 hover:border-accent/30">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                      <h3 className="text-sm sm:text-base font-bold text-foreground">
                        <DecryptedText text={exp.title} scrambleSpeed={40} animateOn="view" />
                      </h3>
                      <span className="text-xs font-semibold text-accent">{exp.period}</span>
                    </div>
                    <p className="text-xs font-semibold text-muted-foreground mb-1">{exp.company}</p>
                    <p className="text-[11px] sm:text-xs text-foreground/70 font-light leading-relaxed">{exp.description}</p>
                  </div>
                ))}
                
                {/* Set 2 */}
                {experience.map((exp, idx) => (
                  <div key={`set2-${idx}`} className="p-4 border border-foreground/10 bg-card/20 rounded-none transition-colors duration-300 hover:border-accent/30">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                      <h3 className="text-sm sm:text-base font-bold text-foreground">
                        <DecryptedText text={exp.title} scrambleSpeed={40} animateOn="view" />
                      </h3>
                      <span className="text-xs font-semibold text-accent">{exp.period}</span>
                    </div>
                    <p className="text-xs font-semibold text-muted-foreground mb-1">{exp.company}</p>
                    <p className="text-[11px] sm:text-xs text-foreground/70 font-light leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <ScrollReveal className="pt-6 lg:pt-8 border-t border-white/20">
            <p className="text-sm lg:text-base text-foreground/70 font-light mb-4 lg:mb-6">
              Ready to start a new project?
            </p>
            <Magnet range={50} strength={0.3}>
              <Link 
                href="/contact"
                className="inline-block px-6 lg:px-8 py-2 lg:py-3 bg-foreground text-background font-black uppercase text-xs tracking-widest hover:bg-accent hover:text-foreground transition-all duration-300"
              >
                Start a Project
              </Link>
            </Magnet>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
