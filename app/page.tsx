'use client'

import Link from 'next/link'
import { Navigation } from '@/components/navigation'

export default function HomePage() {
  const projects = [
    { 
      name: 'VIRTUE ONE', 
      year: '2023', 
      description: 'Laravel Web Application',
      tags: ['Laravel', 'MySQL', 'Bootstrap']
    },
    { 
      name: 'TURBO AI', 
      year: '2024', 
      description: 'AI-Powered Platform',
      tags: ['Node.js', 'React', 'AI']
    },
    { 
      name: 'ARDATAMA', 
      year: '2025', 
      description: 'Enterprise Application',
      tags: ['Java', 'Spring', 'PostgreSQL']
    },
  ]

  return (
    <div className="w-full min-h-screen bg-background">
      <Navigation />

      {/* DESKTOP LAYOUT (XL and above) */}
      <div className="hidden xl:block min-h-screen">
        <div className="min-h-screen flex items-center justify-end pr-32 pl-64">
          <div className="max-w-4xl w-full">
            <div className="relative">
              {/* Giant Background Text */}
              <div className="absolute -left-64 top-1/2 -translate-y-1/2 pointer-events-none select-none">
                <h2 className="text-[20vw] font-black leading-none text-foreground/5 whitespace-nowrap tracking-tighter">
                  Y.O.L.O
                </h2>
              </div>

              {/* Main Content */}
              <div className="relative z-10 space-y-16 text-right" dir="rtl">
                {/* Hero Section */}
                <div className="space-y-8 mb-32 mt-20">
                  <h3 className="text-7xl xl:text-8xl 2xl:text-9xl font-black leading-[0.85] tracking-tighter">
                    IS
                    <br />
                    <span className="text-muted-foreground">THIS</span>
                    <br />
                    ?JULIAN
                  </h3>

                  <div className="flex justify-end gap-16">
                    <div className="space-y-2 max-w-xs text-right" dir="ltr">
                      <p className="text-xs uppercase tracking-wider font-bold text-muted-foreground">SC13</p>
                      <p className="text-sm font-light leading-relaxed">
                        Partnering with agencies and brands that value design and development integrity.
                      </p>
                    </div>
                    
                    <div className="space-y-2 max-w-xs text-right" dir="ltr">
                      <p className="text-xs uppercase tracking-wider font-bold text-muted-foreground">ONLY</p>
                      <p className="text-sm font-light leading-relaxed">
                        Delivering highly executed front-end experiences with attention to detail.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Projects Section */}
                <div className="pt-16 space-y-12" dir="ltr">
                  <div className="space-y-4 text-right">
                    <h4 className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                      Featured Works
                    </h4>
                    <div className="h-0.5 w-12 bg-accent ml-auto"></div>
                  </div>

                  <div className="space-y-8">
                    {projects.map((project, i) => (
                      <Link
                        key={i}
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
                    ))}
                  </div>

                  <div className="pt-8 text-right mb-32">
                    <Link
                      href="/projects"
                      className="inline-block px-6 py-3 bg-accent text-background font-black uppercase text-xs tracking-widest hover:bg-foreground transition-all duration-300"
                    >
                      ← View All Projects
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transparent Footer */}
        <div className="fixed bottom-0 left-0 right-0 py-6 px-8 pointer-events-none">
          <div className="flex justify-center text-xs text-muted-foreground pointer-events-auto">
            <p>© 2024 — Remotely, Yogyakarta</p>
          </div>
        </div>
      </div>

      {/* TABLET LAYOUT (MD to LG) */}
      <div className="hidden md:block xl:hidden min-h-screen">
        <div className="min-h-screen flex items-center justify-end pr-12 md:pr-20 lg:pr-28 pl-12 md:pl-20">
          <div className="max-w-3xl lg:max-w-4xl w-full">
            <div className="relative">
              {/* Giant Background Text for Tablet */}
              <div className="absolute -left-32 md:-left-48 lg:-left-56 top-1/2 -translate-y-1/2 pointer-events-none select-none">
                <h2 className="text-[22vw] font-black leading-none text-foreground/5 whitespace-nowrap tracking-tighter">
                  Y.O.L.O
                </h2>
              </div>

              {/* Main Content */}
              <div className="relative z-10 space-y-10 lg:space-y-12 text-right" dir="rtl">
                {/* Hero Section */}
                <div className="space-y-5 lg:space-y-6 mb-16 lg:mb-20 mt-16 md:mt-20 lg:mt-24">
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[0.85] tracking-tighter">
                    IS
                    <br />
                    <span className="text-muted-foreground">THIS</span>
                    <br />
                    ?JULIAN
                  </h3>

                  <div className="flex flex-col lg:flex-row justify-end gap-5 lg:gap-10 items-end">
                    <div className="space-y-1 max-w-xs text-right" dir="ltr">
                      <p className="text-[0.6rem] md:text-[0.65rem] uppercase tracking-wider font-bold text-muted-foreground">SC13</p>
                      <p className="text-[0.7rem] md:text-xs font-light leading-relaxed">
                        Partnering with agencies and brands that value design and development integrity.
                      </p>
                    </div>
                    
                    <div className="space-y-1 max-w-xs text-right" dir="ltr">
                      <p className="text-[0.6rem] md:text-[0.65rem] uppercase tracking-wider font-bold text-muted-foreground">ONLY</p>
                      <p className="text-[0.7rem] md:text-xs font-light leading-relaxed">
                        Delivering highly executed front-end experiences with attention to detail.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Projects Section */}
                <div className="pt-6 lg:pt-8 space-y-6 lg:space-y-8" dir="ltr">
                  <div className="space-y-2.5 text-right">
                    <h4 className="text-[0.6rem] md:text-[0.65rem] font-black uppercase tracking-widest text-muted-foreground">
                      Featured Works
                    </h4>
                    <div className="h-0.5 w-10 bg-accent ml-auto"></div>
                  </div>

                  <div className="space-y-4 lg:space-y-5">
                    {projects.map((project, i) => (
                      <Link
                        key={i}
                        href={`/projects#${project.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="group block transition-all duration-300 hover:-translate-x-2"
                      >
                        <div className="flex items-baseline gap-2.5 md:gap-3 lg:gap-4 justify-end text-right">
                          <span className="text-[0.65rem] md:text-xs text-muted-foreground whitespace-nowrap">
                            {project.year}
                          </span>
                          <h2 className="text-[12vh] md:text-[14vh] lg:text-[16vh] font-black leading-none text-foreground group-hover:text-accent transition-colors duration-500">
                            {project.name}
                          </h2>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="pt-5 lg:pt-6 text-right mb-24 md:mb-28 lg:mb-32">
                    <Link
                      href="/projects"
                      className="inline-block px-4 py-2 bg-accent text-background font-black uppercase text-[0.6rem] md:text-[0.65rem] tracking-widest hover:bg-foreground transition-all duration-300"
                    >
                      ← View All Projects
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transparent Footer */}
        <div className="fixed bottom-0 left-0 right-0 py-5 px-6">
          <div className="flex justify-center text-[0.65rem] md:text-xs text-muted-foreground">
            <p>© 2024 — Remotely, Yogyakarta</p>
          </div>
        </div>
      </div>

      {/* MOBILE LAYOUT (SM and below) */}
      <div className="md:hidden min-h-screen">
        <div className="min-h-screen flex items-center justify-end pr-6 sm:pr-8 pl-6 sm:pl-8">
          <div className="w-full max-w-lg">
            <div className="relative">
              {/* Giant Background Text for Mobile */}
              <div className="absolute -left-20 sm:-left-28 top-1/2 -translate-y-1/2 pointer-events-none select-none">
                <h2 className="text-[28vw] sm:text-[26vw] font-black leading-none text-foreground/5 whitespace-nowrap tracking-tighter">
                  Y.O.L.O
                </h2>
              </div>

              {/* Main Content */}
              <div className="relative z-10 space-y-8 sm:space-y-10 text-right" dir="rtl">
                {/* Hero Section */}
                <div className="space-y-5 sm:space-y-6 mb-10 sm:mb-12 mt-16 sm:mt-16">
                  <h3 className="text-[11vw] sm:text-[9vw] font-black leading-[0.85] tracking-tighter">
                    IS
                    <br />
                    <span className="text-muted-foreground">THIS</span>
                    <br />
                    ?JULIAN
                  </h3>

                  <div className="flex flex-col gap-4 sm:gap-5 items-end" dir="ltr">
                    <div className="space-y-0.5 max-w-xs text-right">
                      <p className="text-[0.55rem] sm:text-[0.6rem] uppercase tracking-wider font-bold text-muted-foreground">SC13</p>
                      <p className="text-[0.65rem] sm:text-[0.7rem] font-light leading-relaxed">
                        Partnering with agencies and brands that value design and development integrity.
                      </p>
                    </div>
                    
                    <div className="space-y-0.5 max-w-xs text-right">
                      <p className="text-[0.55rem] sm:text-[0.6rem] uppercase tracking-wider font-bold text-muted-foreground">ONLY</p>
                      <p className="text-[0.65rem] sm:text-[0.7rem] font-light leading-relaxed">
                        Delivering highly executed front-end experiences with attention to detail.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Projects Section */}
                <div className="pt-5 sm:pt-6 space-y-6 sm:space-y-7" dir="ltr">
                  <div className="space-y-2 text-right">
                    <h4 className="text-[0.55rem] sm:text-[0.6rem] font-black uppercase tracking-widest text-muted-foreground">
                      Featured Works
                    </h4>
                    <div className="h-0.5 w-9 bg-accent ml-auto"></div>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    {projects.map((project, i) => (
                      <Link
                        key={i}
                        href={`/projects#${project.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="group block transition-all duration-300 hover:-translate-x-1"
                      >
                        <div className="flex items-baseline gap-2 sm:gap-2.5 justify-end text-right">
                          <span className="text-[0.6rem] sm:text-[0.65rem] text-muted-foreground whitespace-nowrap">
                            {project.year}
                          </span>
                          <h2 className={`font-black leading-none text-foreground group-hover:text-accent transition-colors duration-500 ${
                            project.name.length > 10 
                              ? 'text-[8.5vh] sm:text-[9.5vh]' 
                              : 'text-[9.5vh] sm:text-[10.5vh]'
                          }`}>
                            {project.name}
                          </h2>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="pt-4 sm:pt-5 text-right mb-20 sm:mb-24">
                    <Link
                      href="/projects"
                      className="inline-block px-3.5 py-2 bg-accent text-background font-black uppercase text-[0.55rem] sm:text-[0.6rem] tracking-widest hover:bg-foreground transition-all duration-300"
                    >
                      ← View All Projects
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transparent Footer */}
        <div className="fixed bottom-0 left-0 right-0 py-4 px-4">
          <div className="flex justify-center text-[0.6rem] sm:text-[0.65rem] text-muted-foreground">
            <p>© 2024 — Remotely, Yogyakarta</p>
          </div>
        </div>
      </div>
    </div>
  )
}