'use client'

import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { SplitText } from '@/components/react-bits/SplitText'
import { Magnet } from '@/components/react-bits/Magnet'
import { ShinyText } from '@/components/react-bits/ShinyText'
import { Particles } from '@/components/react-bits/Particles'
import { ScrollReveal } from '@/components/react-bits/ScrollReveal'
import ProfileCard from '@/components/ProfileCard'

export default function HomePage() {
  const projects = [
    { 
      name: 'ERP SYSTEM', 
      year: '2026', 
      description: 'Enterprise Resource Planning module tailored for manufacturing.',
      tags: ['React', 'Laravel', 'ERP']
    },
    { 
      name: 'TURBO AI', 
      year: '2025', 
      description: 'All-in-one AI client suite with integrated payment gateways.',
      tags: ['Node.js', 'React', 'AI']
    },
    { 
      name: 'ARDATAMA', 
      year: '2025', 
      description: 'Enterprise application with Spring Boot and Vue.js.',
      tags: ['Java', 'Spring', 'PostgreSQL']
    },
    { 
      name: 'VIRTUE ONE', 
      year: '2023', 
      description: 'Virtual consulting and booking dashboard application for BKN.',
      tags: ['Laravel', 'MySQL', 'Bootstrap']
    },
  ]

  return (
    <div className="w-full min-h-screen bg-background relative overflow-hidden flex flex-col justify-between">
      {/* Background Particles backdrop */}
      <Particles quantity={65} />

      <Navigation />

      {/* Main Grid Wrapper */}
      <main className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pt-28 lg:pt-36 pb-20 relative z-10 flex-grow">
        
        {/* Giant Watermark Background Text (Y.O.L.O) */}
        <div className="absolute -left-10 lg:-left-20 top-1/2 -translate-y-1/2 pointer-events-none select-none z-0 opacity-20">
          <h2 className="text-[26vw] lg:text-[20vw] font-black leading-none text-foreground/5 tracking-tighter uppercase">
            Y.O.L.O
          </h2>
        </div>

        {/* Two-Column Responsive Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
          
          {/* Left Column: Premium ProfileCard, Quick Details & CTA (Sticky on Desktop) */}
          <div className="lg:col-span-5 w-full flex flex-col items-center lg:items-start lg:sticky lg:top-36 space-y-8">
            
            {/* Interactive Holographic ProfileCard */}
            <ScrollReveal delay={0.2} yOffset={25} className="w-full max-w-[320px] sm:max-w-[345px] transition-transform duration-500 hover:scale-[1.01]">
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
                iconUrl="/fikri-julian-co-logo.svg"
                behindGlowEnabled={true}
                innerGradient="linear-gradient(145deg, #a0002a 0%, #ffcc0022 100%)"
              />
            </ScrollReveal>
            
            {/* Quick Bio Info Card */}
            <ScrollReveal delay={0.3} yOffset={20} className="w-full max-w-[345px] p-5 border border-foreground/20 bg-card/10 backdrop-blur-md rounded space-y-3">
              <h4 className="text-xs uppercase font-black tracking-widest text-accent">About Julian</h4>
              <p className="text-xs font-light text-foreground/80 leading-relaxed">
                Computer Science graduate from Amikom University Yogyakarta. Experienced in creating production-ready web architectures, ERP systems, and AI modules.
              </p>
              <Link href="/about" className="inline-block text-[10px] font-bold uppercase tracking-wider text-foreground hover:text-accent transition-colors duration-300">
                Read full profile →
              </Link>
            </ScrollReveal>

          </div>

          {/* Right Column: Hero Typography & Projects List */}
          <div className="lg:col-span-7 w-full space-y-16">
            
            {/* Hero Text & Stack/Focus Details */}
            <div className="space-y-8 text-left">
              <h3 className="text-5xl md:text-7xl xl:text-8xl font-black leading-[0.85] tracking-tighter uppercase text-foreground">
                <SplitText text="IS" delay={0.1} />
                <br />
                <span className="text-muted-foreground">
                  <SplitText text="THIS" delay={0.2} />
                </span>
                <br />
                <span className="text-accent">
                  <SplitText text="?JULIAN" delay={0.3} />
                </span>
              </h3>

              {/* Stack & Focus Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <ScrollReveal delay={0.4} yOffset={15} className="space-y-2 p-4 border border-foreground/10 bg-foreground/5 rounded">
                  <p className="text-xs uppercase tracking-wider font-bold text-accent">
                    <ShinyText text="STACK" color="gold" />
                  </p>
                  <p className="text-xs font-light leading-relaxed text-foreground/80">
                    Building modern, scalable web architectures using Laravel, React, Vue.js, and Java Spring Boot.
                  </p>
                </ScrollReveal>
                
                <ScrollReveal delay={0.5} yOffset={15} className="space-y-2 p-4 border border-foreground/10 bg-foreground/5 rounded">
                  <p className="text-xs uppercase tracking-wider font-bold text-accent">
                    <ShinyText text="FOCUS" color="gold" />
                  </p>
                  <p className="text-xs font-light leading-relaxed text-foreground/80">
                    Fusing robust backend workflows with pixel-perfect frontend experiences to drive operational efficiency.
                  </p>
                </ScrollReveal>
              </div>
            </div>

            {/* Featured Works Section */}
            <div className="space-y-6 pt-8 border-t border-foreground/20">
              <ScrollReveal className="flex justify-between items-center">
                <h4 className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                  Featured Works
                </h4>
                <div className="h-0.5 w-12 bg-accent"></div>
              </ScrollReveal>

              <div className="divide-y divide-foreground/10">
                {projects.map((project, i) => (
                  <ScrollReveal key={i} delay={i * 0.1} yOffset={25} className="py-6 first:pt-0 last:pb-0">
                    <Link
                      href={`/projects#${project.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="group block"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-baseline gap-4">
                          <span className="text-xs font-mono text-muted-foreground">{project.year}</span>
                          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-foreground group-hover:text-accent group-hover:translate-x-2 transition-all duration-300">
                            {project.name}
                          </h2>
                        </div>
                        <div className="flex flex-wrap items-center gap-1.5">
                          {project.tags.map((tag) => (
                            <span key={tag} className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 border border-foreground/20 rounded bg-foreground/5 text-foreground/75">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal className="pt-8 flex justify-start">
                <Magnet range={60} strength={0.25}>
                  <Link
                    href="/projects"
                    className="inline-block px-6 py-3 bg-accent text-background font-black uppercase text-xs tracking-widest hover:bg-foreground hover:text-accent transition-all duration-300 rounded-sm"
                  >
                    View All Projects →
                  </Link>
                </Magnet>
              </ScrollReveal>
            </div>

          </div>

        </div>
      </main>

      {/* Transparent Footer */}
      <footer className="w-full py-6 border-t border-foreground/10 z-10 relative bg-background/50 backdrop-blur-sm mt-auto">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-center text-xs text-muted-foreground">
          <p>© 2026 — Remotely, Yogyakarta</p>
        </div>
      </footer>
    </div>
  )
}