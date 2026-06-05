'use client'

import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { BlurText } from '@/components/react-bits/BlurText'
import { Magnet } from '@/components/react-bits/Magnet'
import { ShinyText } from '@/components/react-bits/ShinyText'
import { Particles } from '@/components/react-bits/Particles'
import { ScrollReveal } from '@/components/react-bits/ScrollReveal'

export default function HomePage() {
  const projects = [
    { 
      name: 'ERP SYSTEM', 
      year: '2026', 
      description: 'Enterprise Resource Planning',
      tags: ['React', 'Laravel', 'ERP']
    },
    { 
      name: 'TURBO AI', 
      year: '2025', 
      description: 'AI-Powered Platform',
      tags: ['Node.js', 'React', 'AI']
    },
    { 
      name: 'ARDATAMA', 
      year: '2025', 
      description: 'Enterprise Application',
      tags: ['Java', 'Spring', 'PostgreSQL']
    },
    { 
      name: 'VIRTUE ONE', 
      year: '2023', 
      description: 'Laravel Web Application',
      tags: ['Laravel', 'MySQL', 'Bootstrap']
    },
  ]

  return (
    <div className="w-full min-h-screen bg-background relative overflow-hidden">
      {/* Background Particles backdrop */}
      <Particles quantity={70} />

      <Navigation />

      {/* DESKTOP LAYOUT (XL and above) */}
      <div className="hidden xl:block min-h-screen">
        {/* Giant Background Text - Y.O.L.O */}
        <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
          <h2 className="text-[20vw] font-black leading-none text-foreground/[0.06] whitespace-nowrap tracking-tight">
            Y.O.L.O
          </h2>
        </div>

        <div className="min-h-screen flex items-center justify-end pr-32 pl-64">
          <div className="max-w-4xl w-full">
            <div className="relative">

              {/* Main Content */}
              <div className="relative z-10 space-y-16 text-right" dir="rtl">
                {/* Hero Section */}
                <div className="space-y-8 mb-32 mt-20">
                  <h3 className="text-7xl xl:text-8xl 2xl:text-9xl font-black leading-[0.85] tracking-tighter text-right" dir="ltr">
                    <BlurText text="IS" delay={0.05} animateBy="letters" className="inline-block" />
                    <br />
                    <span>
                      <ShinyText text="THIS" color="red" />
                    </span>
                    <br />
                    <BlurText text="JULIAN?" delay={0.05} animateBy="letters" className="inline-block" />
                  </h3>

                  <div className="flex justify-end gap-16">
                    <ScrollReveal delay={0.4} yOffset={15} className="space-y-2 max-w-xs text-right" dir="ltr">
                      <p className="text-xs uppercase tracking-wider font-bold text-muted-foreground">
                        <ShinyText text="STACK" color="red" />
                      </p>
                      <p className="text-sm font-light leading-relaxed text-foreground/80">
                        Building modern, scalable web architectures using Laravel, React, Vue.js, and Java Spring Boot.
                      </p>
                    </ScrollReveal>
                    
                    <ScrollReveal delay={0.5} yOffset={15} className="space-y-2 max-w-xs text-right" dir="ltr">
                      <p className="text-xs uppercase tracking-wider font-bold text-muted-foreground">
                        <ShinyText text="FOCUS" color="red" />
                      </p>
                      <p className="text-sm font-light leading-relaxed text-foreground/80">
                        Fusing robust backend workflows with pixel-perfect frontend experiences to drive operational efficiency.
                      </p>
                    </ScrollReveal>
                  </div>
                </div>

                {/* Projects Section */}
                <div className="pt-16 space-y-12" dir="ltr">
                  <ScrollReveal className="space-y-4 text-right">
                    <h4 className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                      Featured Works
                    </h4>
                    <div className="h-0.5 w-12 bg-accent ml-auto"></div>
                  </ScrollReveal>

                  <div className="space-y-8">
                    {projects.map((project, i) => (
                      <ScrollReveal key={i} delay={i * 0.1} yOffset={25}>
                        <Link
                          href={`/projects#${project.name.toLowerCase().replace(/\s+/g, '-')}`}
                          className="group block transition-all duration-300 hover:-translate-x-2"
                        >
                          <div className="flex items-baseline gap-6 justify-end text-right">
                            <span className="text-base text-muted-foreground whitespace-nowrap">
                              {project.year}
                            </span>
                            <h2 className="text-[18vh] xl:text-[22vh] 2xl:text-[27vh] font-black leading-none text-foreground group-hover:text-accent transition-colors duration-500">
                              {project.name}
                            </h2>
                          </div>
                        </Link>
                      </ScrollReveal>
                    ))}
                  </div>

                  <ScrollReveal className="pt-8 text-right mb-32">
                    <Magnet range={65} strength={0.25}>
                      <Link
                        href="/projects"
                        className="inline-block px-6 py-3 bg-accent text-background font-black uppercase text-xs tracking-widest hover:bg-foreground transition-all duration-300"
                      >
                        ← View All Projects
                      </Link>
                    </Magnet>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="fixed bottom-0 left-0 right-0 py-6 px-8 pointer-events-none z-10">
          <div className="flex justify-center text-xs text-muted-foreground pointer-events-auto">
            <p>© 2026 — Remotely, Yogyakarta</p>
          </div>
        </div>
      </div>

      {/* TABLET LAYOUT (MD to LG) */}
      <div className="hidden md:block xl:hidden min-h-screen pt-28 pb-32 px-8 md:px-16 lg:px-24">
        <div className="max-w-3xl lg:max-w-4xl w-full mx-auto relative">
          {/* Giant Background Text - Tablet */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[40%] -translate-y-1/2 pointer-events-none select-none z-0">
            <h2 className="text-[18vw] font-black leading-none text-foreground/[0.05] whitespace-nowrap tracking-tight">
              Y.O.L.O
            </h2>
          </div>

          {/* Main Content */}
          <div className="relative z-10 space-y-10 lg:space-y-12 text-right" dir="rtl">
            {/* Hero Section */}
            <div className="space-y-5 lg:space-y-6 mb-16 lg:mb-20 mt-16 md:mt-20 lg:mt-24">
              <h3 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.85] tracking-tighter text-right" dir="ltr">
                <BlurText text="IS" delay={0.05} animateBy="letters" className="inline-block" />
                <br />
                <span>
                  <ShinyText text="THIS" color="red" />
                </span>
                <br />
                <BlurText text="JULIAN?" delay={0.05} animateBy="letters" className="inline-block" />
              </h3>

              <div className="flex flex-col lg:flex-row justify-end gap-5 lg:gap-10 items-end">
                <ScrollReveal delay={0.4} yOffset={15} className="space-y-1 max-w-xs text-right" dir="ltr">
                  <p className="text-xs uppercase tracking-wider font-bold text-muted-foreground">
                    <ShinyText text="STACK" color="red" />
                  </p>
                  <p className="text-xs md:text-sm font-light leading-relaxed text-foreground/80">
                    Building modern, scalable web architectures using Laravel, React, Vue.js, and Java Spring Boot.
                  </p>
                </ScrollReveal>
                
                <ScrollReveal delay={0.5} yOffset={15} className="space-y-1 max-w-xs text-right" dir="ltr">
                  <p className="text-xs uppercase tracking-wider font-bold text-muted-foreground">
                    <ShinyText text="FOCUS" color="red" />
                  </p>
                  <p className="text-xs md:text-sm font-light leading-relaxed text-foreground/80">
                    Fusing robust backend workflows with pixel-perfect frontend experiences to drive operational efficiency.
                  </p>
                </ScrollReveal>
              </div>
            </div>

            {/* Projects Section */}
            <div className="pt-6 lg:pt-8 space-y-6 lg:space-y-8" dir="ltr">
              <ScrollReveal className="space-y-2.5 text-right">
                <h4 className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                  Featured Works
                </h4>
                <div className="h-0.5 w-10 bg-accent ml-auto"></div>
              </ScrollReveal>

              <div className="space-y-4 lg:space-y-5">
                {projects.map((project, i) => (
                  <ScrollReveal key={i} delay={i * 0.1} yOffset={20}>
                    <Link
                      href={`/projects#${project.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="group block transition-all duration-300 hover:-translate-x-2"
                    >
                      <div className="flex items-baseline gap-3 md:gap-4 justify-end text-right">
                        <span className="text-xs text-muted-foreground whitespace-nowrap">
                          {project.year}
                        </span>
                        <h2 className="text-[9vw] md:text-[8vw] lg:text-[7vw] font-black leading-none text-foreground group-hover:text-accent transition-colors duration-500">
                          {project.name}
                        </h2>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal className="pt-5 lg:pt-6 text-right mb-24 md:mb-28 lg:mb-32">
                <Magnet range={50} strength={0.25}>
                  <Link
                    href="/projects"
                    className="inline-block px-5 py-2.5 bg-accent text-background font-black uppercase text-xs tracking-widest hover:bg-foreground transition-all duration-300"
                  >
                    ← View All Projects
                  </Link>
                </Magnet>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Footer - Tablet */}
        <div className="fixed bottom-0 left-0 right-0 py-5 px-6 z-10">
          <div className="flex justify-center text-xs text-muted-foreground">
            <p>© 2026 — Remotely, Yogyakarta</p>
          </div>
        </div>
      </div>

      {/* MOBILE LAYOUT (SM and below) */}
      <div className="md:hidden min-h-screen pt-24 pb-28 px-5 sm:px-7">
        <div className="w-full max-w-lg mx-auto relative">
          {/* Giant Background Text - Mobile */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[38%] -translate-y-1/2 pointer-events-none select-none z-0 overflow-hidden w-screen">
            <h2 className="text-[30vw] font-black leading-none text-foreground/[0.06] whitespace-nowrap tracking-tighter text-center">
              Y.O.L.O
            </h2>
          </div>

          {/* Main Content */}
          <div className="relative z-10 space-y-8 sm:space-y-10 text-right" dir="rtl">
            {/* Hero Section */}
            <div className="space-y-5 sm:space-y-6 mb-10 sm:mb-12 mt-16 sm:mt-16">
              <h3 className="text-[12vw] sm:text-[10vw] font-black leading-[0.85] tracking-tighter text-right" dir="ltr">
                <BlurText text="IS" delay={0.05} animateBy="letters" className="inline-block" />
                <br />
                <span>
                  <ShinyText text="THIS" color="red" />
                </span>
                <br />
                <BlurText text="JULIAN?" delay={0.05} animateBy="letters" className="inline-block" />
              </h3>

              <div className="flex flex-col gap-4 sm:gap-5 items-end" dir="ltr">
                <ScrollReveal delay={0.4} yOffset={10} className="space-y-0.5 max-w-xs text-right">
                  <p className="text-[0.6rem] sm:text-xs uppercase tracking-wider font-bold text-muted-foreground">
                    <ShinyText text="STACK" color="red" />
                  </p>
                  <p className="text-[0.7rem] sm:text-xs font-light leading-relaxed text-foreground/80">
                    Building modern, scalable web architectures using Laravel, React, Vue.js, and Java Spring Boot.
                  </p>
                </ScrollReveal>
                
                <ScrollReveal delay={0.5} yOffset={10} className="space-y-0.5 max-w-xs text-right">
                  <p className="text-[0.6rem] sm:text-xs uppercase tracking-wider font-bold text-muted-foreground">
                    <ShinyText text="FOCUS" color="red" />
                  </p>
                  <p className="text-[0.7rem] sm:text-xs font-light leading-relaxed text-foreground/80">
                    Fusing robust backend workflows with pixel-perfect frontend experiences to drive operational efficiency.
                  </p>
                </ScrollReveal>
              </div>
            </div>

            {/* Projects Section */}
            <div className="pt-5 sm:pt-6 space-y-6 sm:space-y-7" dir="ltr">
              <ScrollReveal className="space-y-2 text-right">
                <h4 className="text-[0.6rem] sm:text-xs font-black uppercase tracking-widest text-muted-foreground">
                  Featured Works
                </h4>
                <div className="h-0.5 w-9 bg-accent ml-auto"></div>
              </ScrollReveal>

              <div className="space-y-3 sm:space-y-4">
                {projects.map((project, i) => (
                  <ScrollReveal key={i} delay={i * 0.08} yOffset={15}>
                    <Link
                      href={`/projects#${project.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="group block transition-all duration-300 hover:-translate-x-1"
                    >
                      <div className="flex items-baseline gap-2 sm:gap-2.5 justify-end text-right">
                        <span className="text-[0.65rem] sm:text-xs text-muted-foreground whitespace-nowrap">
                          {project.year}
                        </span>
                        <h2 className={`font-black leading-none text-foreground group-hover:text-accent transition-colors duration-500 ${
                          project.name.length > 10 
                            ? 'text-[10vw] sm:text-[9vw]' 
                            : 'text-[13vw] sm:text-[11vw]'
                        }`}>
                          {project.name}
                        </h2>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal className="pt-4 sm:pt-5 text-right mb-20 sm:mb-24">
                <Magnet range={40} strength={0.25}>
                  <Link
                    href="/projects"
                    className="inline-block px-4 py-2 bg-accent text-background font-black uppercase text-[0.6rem] sm:text-xs tracking-widest hover:bg-foreground transition-all duration-300"
                  >
                    ← View All Projects
                  </Link>
                </Magnet>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Footer - Mobile */}
        <div className="fixed bottom-0 left-0 right-0 py-4 px-4 z-10">
          <div className="flex justify-center text-[0.65rem] sm:text-xs text-muted-foreground">
            <p>© 2026 — Remotely, Yogyakarta</p>
          </div>
        </div>
      </div>
    </div>
  )
}