'use client'

import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { ArrowUpRight, ExternalLink } from 'lucide-react'

export default function ProjectsPage() {
  const projects = [
    {
      title: 'VirtueOne',
      description: 'Platform pendaftaran konsultasi dan coaching clinic gratis yang dilaksanakan secara virtual untuk ASN dan non-ASN.',
      fullDescription: 'Sistem manajemen pendaftaran online di Kantor Regional I BKN dengan fitur lengkap untuk booking konsultasi dan coaching clinic, dilengkapi interface yang user-friendly dan sistem pengelolaan data yang efisien.',
      image: '/virtue-one-laravel-web-application.jpg',
      tags: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'Web Development'],
      year: 'Sep - Des 2023',
      link: 'https://virtuone.kanreg1bkn.id/',
      company: 'Kantor Regional I BKN - Badan Kepegawaian Negara RI',
      features: [
        'Sistem pendaftaran online untuk konsultasi dan coaching clinic',
        'Pelayanan gratis yang dilaksanakan secara virtual',
        'Interface user-friendly untuk ASN dan non-ASN',
        'Manajemen data dan jadwal konsultasi yang efisien',
      ],
    },
    {
      title: 'Turbo AI',
      description: 'Platform all-in-one untuk layanan AI: AI Generator, YouTube Summary, Chat GPT-4o, Voice Audio, dan Photo Studio.',
      fullDescription: 'Platform komprehensif dengan integrasi payment gateway Midtrans, sistem pembayaran otomatis (bank transfer, QRIS, GoPay), pengelolaan backend/frontend untuk transaksi seamless, notifikasi real-time, dan deployment via FileZilla.',
      image: '/turbo-ai-platform.jpg',
      tags: ['Laravel', 'MySQL', 'jQuery', 'Midtrans', 'Payment Gateway', 'AI Integration'],
      year: '2024',
      link: 'http://turboai.id/',
      features: [
        'Integrasi Payment Gateway Midtrans dengan callback & validasi transaksi',
        'Backend route & controller untuk handling transaksi otomatis',
        'Frontend Midtrans Snap dengan auto-redirect setelah pembayaran',
        'Sistem notifikasi real-time (pending hingga success)',
        'Multi payment method: Bank Transfer, QRIS, GoPay',
      ],
    },
    {
      title: 'Ardatama',
      description: 'Sebuah Website Company Profile dengan Java Spring Boot backend dan Vue.js frontend untuk real-time data processing.',
      fullDescription: 'Solusi enterprise-grade dengan arsitektur modern menggunakan Java Spring Boot untuk backend yang robust dan Vue.js untuk frontend yang responsive dan interactive.',
      image: '/ardatama-enterprise-application.jpg',
      tags: ['Java', 'Spring Boot', 'Vue.js', 'Enterprise', 'Real-time'],
      year: '2025',
      link: null,
    },
  ]

  return (
    <div className="w-full min-h-screen bg-background">
      <Navigation />

      {/* Main Content */}
      <main className="pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24 min-h-screen">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:pl-64 lg:pr-24 xl:pl-72 xl:pr-40 2xl:pr-48">
          <div className="max-w-6xl mx-auto lg:mx-0">
            
            {/* Header Section */}
            <header className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 animate-fade-in-up">
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <h1 className="text-display font-black text-foreground leading-none tracking-tight">
                  SELECTED<br />WORKS
                </h1>
                <p className="text-body text-foreground/70 max-w-2xl">
                  Koleksi proyek-proyek yang menampilkan keahlian dalam fullstack development, dari enterprise applications hingga AI-powered platforms.
                </p>
              </div>
            </header>

            {/* Projects List */}
            <div className="space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-28">
              {projects.map((project, idx) => (
                <article 
                  key={idx} 
                  className="group animate-fade-in-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden aspect-video sm:aspect-[16/10] lg:aspect-[21/9] mb-4 sm:mb-5 md:mb-6 lg:mb-8 bg-card/50 border-2 border-foreground/20 group-hover:border-accent/50 transition-all duration-500">
                    <img
                      src={project.image || "/api/placeholder/1200/600"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-4 right-4 p-2 sm:p-3 bg-accent text-accent-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110 transform"
                        aria-label="Visit project"
                      >
                        <ExternalLink size={20} className="sm:w-6 sm:h-6" />
                      </a>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="space-y-3 sm:space-y-4 md:space-y-5 pb-8 sm:pb-10 md:pb-12 border-b-2 border-foreground/20">
                    
                    {/* Title & Year */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                      <div className="flex-1">
                        <h2 className="text-title font-black text-foreground group-hover:text-accent transition-colors duration-300 leading-none mb-2">
                          {project.title}
                        </h2>
                        {project.company && (
                          <p className="text-small text-muted-foreground font-medium">
                            {project.company}
                          </p>
                        )}
                      </div>
                      <span className="text-xs sm:text-sm font-bold tracking-widest text-accent uppercase whitespace-nowrap">
                        {project.year}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-body text-foreground/80 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Full Description - Hidden on mobile, shown on larger screens */}
                    {project.fullDescription && (
                      <p className="hidden md:block text-small text-foreground/60 leading-relaxed">
                        {project.fullDescription}
                      </p>
                    )}

                    {/* Features List - Only for featured projects */}
                    {project.features && (
                      <div className="space-y-2 pt-2">
                        <h3 className="text-sm sm:text-base font-bold text-foreground/90 uppercase tracking-wider">
                          Key Features:
                        </h3>
                        <ul className="space-y-1.5 sm:space-y-2">
                          {project.features.map((feature, featureIdx) => (
                            <li 
                              key={featureIdx}
                              className="text-xs sm:text-sm text-foreground/70 flex items-start gap-2"
                            >
                              <span className="text-accent mt-1">▸</span>
                              <span className="flex-1">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-3 sm:pt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-bold uppercase tracking-wider px-2.5 sm:px-3 py-1 sm:py-1.5 border-2 border-foreground/30 text-foreground/70 hover:border-accent hover:text-accent hover:scale-105 transition-all duration-300 cursor-default"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Visit Link - Mobile */}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-accent hover:text-foreground transition-colors duration-300 group/link mt-2"
                      >
                        Visit Project
                        <ArrowUpRight size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>

            {/* CTA Section */}
            <footer className="mt-16 sm:mt-20 md:mt-24 lg:mt-28 pt-12 sm:pt-16 md:pt-20 border-t-2 border-foreground/30 animate-fade-in-up">
              <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
                <div className="space-y-2 sm:space-y-3">
                  <h2 className="text-heading font-black text-foreground">
                    Tertarik Berkolaborasi?
                  </h2>
                  <p className="text-body text-foreground/70 max-w-xl mx-auto lg:mx-0">
                    Mari diskusikan bagaimana saya bisa membantu mewujudkan ide Anda menjadi kenyataan.
                  </p>
                </div>
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 sm:px-10 md:px-12 py-3 sm:py-4 bg-foreground text-background font-black uppercase text-xs sm:text-sm tracking-widest hover:bg-accent hover:text-accent-foreground transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group touch-target"
                >
                  Get In Touch
                  <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </main>
    </div>
  )
}