'use client'

import Link from 'next/link'
import { Navigation } from '@/components/navigation'

export default function AboutPage() {
  const skills = {
    'Frontend': ['React', 'Vue.js', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    'Backend': ['Laravel', 'Node.js', 'Java Spring Boot', 'MySQL', 'PostgreSQL'],
    'Tools': ['Git', 'Docker', 'Vercel', 'AWS', 'VS Code']
  }

  const experience = [
    {
      title: 'Junior Developer',
      company: 'CV. Ardatama Indonesia',
      period: '2024 - Present',
      description: 'Mengembangkan aplikasi enterprise dengan Java Spring Boot dan Vue.js'
    },
    {
      title: 'Full Stack Developer',
      company: 'Internship at BKN',
      period: '2023 - 2024',
      description: 'Membangun sistem manajemen data internal dengan Laravel dan MySQL'
    },
    {
      title: 'Web Developer',
      company: 'Freelance',
      period: '2022 - 2023',
      description: 'Mengembangkan various web projects dan desktop applications'
    }
  ]

  return (
    <div className="w-full min-h-screen bg-background">
      <Navigation />

      {/* Desktop */}
      <div className="hidden lg:block pt-32 pl-72 pr-32 pb-20 px-12 min-h-screen">
        <div className="max-w-3xl space-y-16">
          <section className="space-y-4">
            <h1 className="text-6xl font-black text-foreground">ABOUT ME</h1>
            <div className="space-y-3 text-lg font-light text-foreground/80 leading-relaxed">
              <p>
                Saya adalah Fullstack Web Developer dengan spesialisasi dalam Laravel & MySQL, 
                yang bersemangat dalam menciptakan solusi web yang inovatif dan user-friendly.
              </p>
              <p>
                Dengan pengalaman di berbagai proyek enterprise dan aplikasi komersial, 
                saya menggabungkan pemahaman mendalam tentang backend logic dengan 
                attention to detail dalam user interface design.
              </p>
            </div>
          </section>

          <section className="space-y-6 py-8 border-t border-b border-foreground">
            <h2 className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Skills & Tools</h2>
            <div className="space-y-4">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h3 className="font-bold text-foreground mb-2">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span key={skill} className="text-xs font-light px-3 py-1 border border-foreground text-foreground/70">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Experience</h2>
            <div className="space-y-6">
              {experience.map((exp, idx) => (
                <div key={idx} className="pb-6 border-b border-foreground/30 last:border-0">
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-foreground">{exp.title}</h3>
                    <span className="text-xs font-bold tracking-widest text-muted-foreground whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-base text-foreground/70 font-light mb-2">{exp.company}</p>
                  <p className="text-sm text-foreground/60 font-light">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="pt-8 border-t border-foreground">
            <p className="text-base text-foreground/70 font-light mb-6">
              Siap untuk memulai proyek baru?
            </p>
            <Link 
              href="/contact"
              className="inline-block px-8 py-3 bg-foreground text-background font-black uppercase text-xs tracking-widest hover:bg-accent hover:text-foreground transition-all"
            >
              Start a Project
            </Link>
          </section>
        </div>
      </div>

      {/* Mobile/Tablet */}
      <div className="lg:hidden pt-24 px-4 pb-20 min-h-screen">
        <div className="max-w-2xl space-y-12">
          <section className="space-y-3">
            <h1 className="text-4xl font-black text-foreground">ABOUT ME</h1>
            <div className="space-y-2 text-base font-light text-foreground/80 leading-relaxed">
              <p>
                Saya adalah Fullstack Web Developer dengan spesialisasi dalam Laravel & MySQL.
              </p>
              <p>
                Dengan pengalaman di berbagai proyek enterprise dan aplikasi komersial, 
                saya menggabungkan pemahaman mendalam tentang backend logic dengan 
                attention to detail dalam user interface design.
              </p>
            </div>
          </section>

          <section className="space-y-4 py-6 border-t border-b border-foreground">
            <h2 className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Skills & Tools</h2>
            <div className="space-y-3">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h3 className="font-bold text-foreground mb-2 text-sm">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span key={skill} className="text-xs font-light px-2 py-0.5 border border-foreground text-foreground/70">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Experience</h2>
            <div className="space-y-4">
              {experience.map((exp, idx) => (
                <div key={idx} className="pb-4 border-b border-foreground/30 last:border-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                    <h3 className="text-base font-bold text-foreground">{exp.title}</h3>
                    <span className="text-xs font-bold tracking-widest text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/70 font-light mb-1">{exp.company}</p>
                  <p className="text-xs text-foreground/60 font-light">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="pt-6 border-t border-foreground">
            <p className="text-sm text-foreground/70 font-light mb-4">
              Siap untuk memulai proyek baru?
            </p>
            <Link 
              href="/contact"
              className="inline-block px-6 py-2 bg-foreground text-background font-black uppercase text-xs tracking-widest hover:bg-accent hover:text-foreground transition-all"
            >
              Start a Project
            </Link>
          </section>
        </div>
      </div>
    </div>
  )
}
