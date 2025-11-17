'use client'

const experiences = [
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
    period: '2024',
    description: 'Memimpin pengembangan penuh aplikasi Turbo AI menggunakan Laravel dan Blade. Menangani semua aspek dari database design, backend logic, hingga frontend implementation dengan timeline yang ketat.',
    highlights: ['Laravel', 'MySQL', 'Blade Template', 'API Development', 'Full Cycle']
  },
  {
    role: 'Magang Programmer',
    company: 'BKN (Badan Kepegawaian Negara)',
    period: '2023',
    description: 'Berkontribusi pada pengembangan aplikasi VirtueOne untuk manajemen data internal. Mengimplementasikan fitur-fitur kritis menggunakan Laravel, MySQL, dan best practices development.',
    highlights: ['Laravel', 'MySQL', 'Problem Solving', 'Team Collaboration', 'VirtueOne Project']
  },
]

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-32 container-custom">
        <div className="max-w-2xl slide-up space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-foreground text-balance leading-tight">
            Pengalaman Kerja
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed max-w-xl">
            Perjalanan profesional saya meliputi berbagai peran dan tanggung jawab yang telah membentuk keahlian saya sebagai fullstack developer.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-32 container-custom">
        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group border-l-2 border-foreground pl-8 pb-8 last:pb-0 slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Timeline Dot */}
              <div className="absolute w-4 h-4 rounded-full bg-foreground -left-2.5 top-0 border-4 border-background group-hover:scale-110 transition-transform" />

              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-light text-foreground">
                    {exp.role}
                  </h3>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-sm">
                    <p className="text-primary font-light">{exp.company}</p>
                    <span className="hidden md:block text-border">•</span>
                    <p className="text-muted-foreground font-light">{exp.period}</p>
                  </div>
                </div>

                <p className="text-foreground/75 leading-relaxed font-light max-w-2xl">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4">
                  {exp.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs uppercase tracking-wider text-muted-foreground border border-foreground/50 px-3 py-1.5 rounded-full font-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
