'use client'

import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { SplitText } from '@/components/react-bits/SplitText'
import { Magnet } from '@/components/react-bits/Magnet'
import { SpotlightCard } from '@/components/react-bits/SpotlightCard'
import { Particles } from '@/components/react-bits/Particles'
import { ScrollReveal } from '@/components/react-bits/ScrollReveal'
import { TiltedCard } from '@/components/react-bits/TiltedCard'
import ProfileCard from '@/components/ProfileCard'

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
      period: 'Des 2025 - Present',
      description: 'Mengembangkan sistem ERP yang disesuaikan dengan proses bisnis perusahaan, menganalisis alur kerja untuk solusi digital terintegrasi, serta mengelola pemeliharaan, troubleshooting, dan optimasi performa sistem.'
    },
    {
      title: 'Junior Developer',
      company: 'CV. Ardatama Indonesia',
      period: '2025 - Present',
      description: 'Mengembangkan aplikasi enterprise dengan Java Spring Boot dan Vue.js.'
    },
    {
      title: 'Web Developer (Internship)',
      company: 'Kantor Regional I BKN',
      period: 'Sep - Des 2023',
      description: 'Mengembangkan website layanan konsultasi dan coaching clinic menggunakan Laravel dan PHP, merancang diagram alur database, serta membuat desain website.'
    },
    {
      title: 'Web Developer',
      company: 'Freelance',
      period: '2022 - 2023',
      description: 'Mengembangkan various web projects dan desktop applications.'
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
              <SplitText text="ABOUT ME" delay={0.1} />
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
              {/* Text description */}
              <ScrollReveal delay={0.2} yOffset={20} className="md:col-span-7 space-y-3 lg:space-y-4 text-base lg:text-lg font-light text-foreground/80 leading-relaxed">
                <p>
                  As a Computer Science graduate from Amikom University Yogyakarta, I am a passionate Full-Stack Developer specializing in building scalable web architectures and robust digital products.
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
                  behindGlowColor="rgba(255, 204, 0, 0.4)"
                  iconUrl="/placeholder-logo.svg"
                  behindGlowEnabled={true}
                  innerGradient="linear-gradient(145deg, #a0002a 0%, #ffcc0033 100%)"
                />
              </ScrollReveal>
            </div>
          </section>

          {/* Skills Grid with Spotlight Hover Effects */}
          <ScrollReveal delay={0.1} yOffset={25} className="space-y-4 lg:space-y-6 py-6 lg:py-8 border-t border-b border-foreground">
            <h2 className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Skills & Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <SpotlightCard 
                  key={category} 
                  className="p-5 border-foreground/30 bg-card/10 h-full rounded"
                >
                  <h3 className="font-bold text-foreground mb-3 text-sm lg:text-base border-b border-foreground/20 pb-2">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span 
                        key={skill} 
                        className="text-xs font-light px-2.5 lg:px-3 py-0.5 lg:py-1 border border-foreground/40 text-foreground/85 bg-background/25 hover:border-accent hover:text-accent hover:scale-105 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </ScrollReveal>

          {/* Experience Section */}
          <section className="space-y-4 lg:space-y-6">
            <h2 className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Experience</h2>
            <div className="space-y-4 lg:space-y-6">
              {experience.map((exp, idx) => (
                <ScrollReveal 
                  key={idx} 
                  delay={idx * 0.08}
                  yOffset={20}
                  className="pb-4 lg:pb-6 border-b border-foreground/30 last:border-0"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 lg:gap-2 mb-1 lg:mb-2">
                    <h3 className="text-base lg:text-lg font-bold text-foreground">{exp.title}</h3>
                    <span className="text-xs font-bold tracking-widest text-muted-foreground whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm lg:text-base text-foreground/70 font-light mb-1 lg:mb-2">{exp.company}</p>
                  <p className="text-xs lg:text-sm text-foreground/60 font-light">{exp.description}</p>
                </ScrollReveal>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <ScrollReveal className="pt-6 lg:pt-8 border-t border-foreground">
            <p className="text-sm lg:text-base text-foreground/70 font-light mb-4 lg:mb-6">
              Siap untuk memulai proyek baru?
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
