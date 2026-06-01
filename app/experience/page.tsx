'use client'

import { Navigation } from '@/components/navigation'
import { SplitText } from '@/components/react-bits/SplitText'
import { SpotlightCard } from '@/components/react-bits/SpotlightCard'
import { Particles } from '@/components/react-bits/Particles'
import { ScrollReveal } from '@/components/react-bits/ScrollReveal'

const experiences = [
  {
    role: 'Information Technology Support Specialist (Contract)',
    company: 'Rumah Mesin',
    period: 'Dec 2025 - Present',
    description: 'Mengembangkan sistem ERP yang disesuaikan dengan proses bisnis dan kebutuhan operasional perusahaan. Menganalisis alur kerja bisnis untuk diintegrasikan ke dalam solusi digital berbasis ERP, serta melakukan maintenance, troubleshooting, dan optimasi performa sistem.',
    highlights: ['ERP Systems', 'Workflow Analysis', 'System Optimization', 'Troubleshooting']
  },
  {
    role: 'Fullstack Developer',
    company: 'Ardatama',
    period: '2025 - Present',
    description: 'Mengembangkan dan memelihara aplikasi enterprise-grade menggunakan Java Spring Boot dan Vue.js. Fokus pada scalability, performance optimization, dan delivery fitur-fitur kompleks untuk kebutuhan bisnis modern.',
    highlights: ['Java', 'Spring Boot', 'Vue.js', 'PostgreSQL', 'Enterprise Solutions']
  },
  {
    role: 'Freelance Developer',
    company: 'Turbo AI',
    period: 'Jan 2025',
    description: 'Memimpin pengembangan penuh aplikasi Turbo AI menggunakan Laravel dan Blade. Menangani semua aspek dari database design, backend logic, hingga frontend implementation dengan timeline yang ketat.',
    highlights: ['Laravel', 'MySQL', 'Blade Template', 'API Development', 'Full Cycle']
  },
  {
    role: 'Web Developer (Internship)',
    company: 'Kantor Regional I BKN',
    period: 'Sept - Dec 2023',
    description: 'Membangun website layanan konsultasi dan coaching clinic (VirtueOne) menggunakan PHP dan Laravel. Merancang database flowchart, website design, serta banner promosi website. Tautan: https://virtuone.kupjogja.id/',
    highlights: ['Laravel', 'PHP', 'Database Flowchart', 'Web Design', 'VirtueOne Project']
  },
]

export default function ExperiencePage() {
  return (
    <div className="w-full min-h-screen bg-background relative overflow-hidden">
      {/* Background Particles backdrop */}
      <Particles quantity={65} />

      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 px-4 md:px-8 lg:pl-72 lg:pr-32 pb-10 container-custom">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-light text-foreground text-balance leading-tight">
            <SplitText text="Pengalaman Kerja" delay={0.1} />
          </h1>
          <ScrollReveal delay={0.3} yOffset={15}>
            <p className="text-base md:text-xl text-foreground/70 font-light leading-relaxed max-w-xl">
              Perjalanan profesional saya meliputi berbagai peran dan tanggung jawab yang telah membentuk keahlian saya sebagai fullstack developer.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-4 md:px-8 lg:pl-72 lg:pr-32 pb-32 container-custom">
        <div className="max-w-3xl space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group border-l-2 border-foreground pl-8 pb-8 last:pb-0 relative"
            >
              {/* Timeline Dot */}
              <div className="absolute w-4 h-4 rounded-full bg-foreground -left-[9px] top-[26px] border-4 border-background group-hover:scale-125 transition-transform duration-300 z-10" />

              <ScrollReveal delay={index * 0.1} yOffset={25}>
                <SpotlightCard className="p-6 md:p-8 border-foreground/20 bg-card/15 rounded-md hover:border-accent/40 transition-all duration-500">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl md:text-3xl font-light text-foreground group-hover:text-accent transition-colors duration-300">
                        {exp.role}
                      </h3>
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-sm">
                        <p className="text-accent font-bold uppercase tracking-wider">{exp.company}</p>
                        <span className="hidden md:block text-muted-foreground">•</span>
                        <p className="text-muted-foreground font-light">{exp.period}</p>
                      </div>
                    </div>

                    <p className="text-foreground/75 leading-relaxed font-light max-w-2xl text-sm md:text-base">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.highlights.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground border border-foreground/35 px-3 py-1 rounded-full font-light bg-background/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
