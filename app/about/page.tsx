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
    <div className="w-full min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 lg:pt-32 px-4 md:px-8 lg:pl-72 lg:pr-32 pb-20 min-h-screen">
        <div className="max-w-2xl lg:max-w-3xl space-y-12 lg:space-y-16">
          <section className="space-y-3 lg:space-y-4">
            <h1 className="text-4xl lg:text-6xl font-black text-foreground">ABOUT ME</h1>
            <div className="space-y-3 lg:space-y-4 text-base lg:text-lg font-light text-foreground/80 leading-relaxed">
              <p>
                As a Computer Science graduate from Amikom University Yogyakarta, I am a passionate Full-Stack Developer specializing in building scalable web architectures and robust digital products.
              </p>
              <p>
                Through hands-on experience developing integrated ERP systems, AI-powered platforms, and enterprise applications—ranging from React & Laravel to Java Spring Boot & Vue.js—I bridge the gap between high-performance backend logic and pixel-perfect user experiences.
              </p>
              <p>
                Driven by code integrity and continuous innovation, I thrive in translating complex business workflows into seamless, high-impact web applications. Let’s connect and build something extraordinary!
              </p>
            </div>
          </section>

          <section className="space-y-4 lg:space-y-6 py-6 lg:py-8 border-t border-b border-foreground">
            <h2 className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Skills & Tools</h2>
            <div className="space-y-3 lg:space-y-4">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h3 className="font-bold text-foreground mb-2 text-sm lg:text-base">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span key={skill} className="text-xs font-light px-2.5 lg:px-3 py-0.5 lg:py-1 border border-foreground text-foreground/70">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4 lg:space-y-6">
            <h2 className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Experience</h2>
            <div className="space-y-4 lg:space-y-6">
              {experience.map((exp, idx) => (
                <div key={idx} className="pb-4 lg:pb-6 border-b border-foreground/30 last:border-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 lg:gap-2 mb-1 lg:mb-2">
                    <h3 className="text-base lg:text-lg font-bold text-foreground">{exp.title}</h3>
                    <span className="text-xs font-bold tracking-widest text-muted-foreground whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm lg:text-base text-foreground/70 font-light mb-1 lg:mb-2">{exp.company}</p>
                  <p className="text-xs lg:text-sm text-foreground/60 font-light">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="pt-6 lg:pt-8 border-t border-foreground">
            <p className="text-sm lg:text-base text-foreground/70 font-light mb-4 lg:mb-6">
              Siap untuk memulai proyek baru?
            </p>
            <Link 
              href="/contact"
              className="inline-block px-6 lg:px-8 py-2 lg:py-3 bg-foreground text-background font-black uppercase text-xs tracking-widest hover:bg-accent hover:text-foreground transition-all"
            >
              Start a Project
            </Link>
          </section>
        </div>
      </div>
    </div>
  )
}
