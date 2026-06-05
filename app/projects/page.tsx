'use client'

import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { ArrowUpRight, ExternalLink, Sparkles, CheckCircle } from 'lucide-react'
import { SplitText } from '@/components/react-bits/SplitText'
import { Magnet } from '@/components/react-bits/Magnet'
import { SpotlightCard } from '@/components/react-bits/SpotlightCard'
import { Particles } from '@/components/react-bits/Particles'
import { ScrollReveal } from '@/components/react-bits/ScrollReveal'
import { TiltedCard } from '@/components/react-bits/TiltedCard'
import { DecryptedText } from '@/components/react-bits/DecryptedText'

export default function ProjectsPage() {
  const projects = [
    {
      title: 'ERP System Rumah Mesin',
      description: 'Integrated ERP system development for Sales, PPIC, and HR modules.',
      fullDescription: 'A comprehensive ERP system development project tailored to Rumah Mesin\'s operational workflows. It connects sales operations, production planning and inventory control (PPIC), and human resource management (HR) into a unified digital platform.',
      image: '/data-visualization-charts.png',
      tags: ['Laravel', 'React', 'MySQL', 'ERP', 'System Development'],
      year: 'Feb 2026 - Present',
      link: null,
      company: 'Rumah Mesin',
      features: [
        'Developing and implementing Sales, PPIC (Production Planning and Inventory Control), and HR modules within the ERP system',
        'Designing integrated business workflows to connect sales operations, production planning, inventory management, and human resource processes',
        'Translating operational requirements into scalable ERP features aligned with company business processes',
        'Collaborating with internal teams to optimize workflow efficiency and improve data integration across departments',
        'Conducting system maintenance, feature enhancement, and continuous improvement to support operational scalability and digital transformation'
      ],
    },
    {
      title: 'VirtueOne',
      description: 'Platform pendaftaran konsultasi dan coaching clinic gratis secara virtual untuk ASN dan non-ASN.',
      fullDescription: 'Sistem manajemen pendaftaran online di Kantor Regional I BKN dengan fitur lengkap untuk booking konsultasi dan coaching clinic, dilengkapi interface yang user-friendly dan sistem pengelolaan data yang efisien.',
      image: '/virtue-one-laravel-web-application.jpg',
      tags: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'Web Development'],
      year: 'Sep - Des 2023',
      link: 'https://virtuone.kupjogja.id/',
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
      year: 'Jan 2025',
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
      description: 'Website Company Profile dengan Java Spring Boot backend dan Vue.js frontend.',
      fullDescription: 'Solusi enterprise-grade dengan arsitektur modern menggunakan Java Spring Boot untuk backend yang robust dan Vue.js untuk frontend yang responsive dan interactive.',
      image: '/ardatama-enterprise-application.jpg',
      tags: ['Java', 'Spring Boot', 'Vue.js', 'Enterprise', 'Real-time'],
      year: '2025',
      link: null,
    },
  ]

  return (
    <div className="w-full min-h-screen bg-background relative overflow-hidden">
      <Particles quantity={65} />
      <Navigation />

      <main className="pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24 min-h-screen">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:pl-64 lg:pr-24 xl:pl-72 xl:pr-48 2xl:pr-64">
          <div className="max-w-6xl mx-auto lg:mx-0">
            
            <header className="mb-12 sm:mb-16">
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <div className="flex items-center gap-2 text-accent text-xs font-bold tracking-widest uppercase">
                  <Sparkles size={14} className="animate-pulse" />
                  <span>Portfolio Showcase</span>
                </div>
                <h1 className="text-display font-black text-foreground leading-none tracking-tight">
                  <SplitText text="SELECTED" delay={0.1} />
                  <br />
                  <SplitText text="WORKS" delay={0.2} />
                </h1>
                <ScrollReveal delay={0.35} yOffset={15}>
                  <p className="text-body text-foreground/70 max-w-2xl font-light">
                    Koleksi proyek pilihan yang mendemonstrasikan keahlian fullstack engineering, integrasi AI, serta arsitektur enterprise yang robust dan modern.
                  </p>
                </ScrollReveal>
              </div>
            </header>

            <ScrollReveal delay={0.4} yOffset={20}>
              <div className="flex flex-wrap gap-8 sm:gap-12 py-8 border-y border-foreground/10 mb-16">
                {[
                  { label: "Projects", val: "04" },
                  { label: "Tech Stack", val: "12+" },
                  { label: "Experience", val: "3y+" },
                  { label: "Quality", val: "100%" }
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl sm:text-3xl font-black text-foreground">
                      <DecryptedText text={stat.val} animateOn="view" delay={100 + (i * 100)} chars="0123456789+%" />
                    </div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <div className="space-y-16 sm:space-y-24">
              
              {/* LAYOUT 1: FEATURED HERO PROJECT (ERP System) */}
              <ScrollReveal delay={0.1} yOffset={30}>
                <section className="relative" id="erp-system">
                  {/* Floating Giant Index */}
                  <div className="absolute -top-12 -left-6 lg:-left-20 project-index-number text-[8rem] sm:text-[12rem] lg:text-[16rem]">
                    <DecryptedText text="01" animateOn="view" scrambleSpeed={50} />
                  </div>
                  
                  <div className="hero-project-card p-6 md:p-10 border-foreground/20 hover:border-accent/40 transition-all duration-500 relative z-10 overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
                    
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      {/* Image side */}
                      <div className="lg:col-span-7 order-1 lg:order-2">
                        <TiltedCard maxRotation={6} className="shadow-2xl rounded-lg overflow-hidden border border-foreground/25">
                          <div className="relative aspect-video bg-card/40 overflow-hidden rounded-lg">
                            <img
                              src={projects[0].image}
                              alt={projects[0].title}
                              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
                          </div>
                        </TiltedCard>
                      </div>

                      {/* Detail side */}
                      <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
                        <div>
                          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">
                            {projects[0].year}
                          </span>
                          <h2 className="text-title font-black text-white leading-tight mb-1">
                            {projects[0].title}
                          </h2>
                          <p className="text-xs font-bold text-muted-foreground tracking-wider uppercase flex items-center gap-1.5">
                            <CheckCircle size={12} className="text-accent" />
                            {projects[0].company}
                          </p>
                        </div>

                        <p className="text-body text-foreground/85 font-light leading-relaxed">
                          {projects[0].description}
                        </p>
                        
                        {projects[0].features && (
                          <div className="space-y-2 pt-1">
                            <h3 className="text-[10px] font-black uppercase tracking-widest text-accent">
                              Key Implementations
                            </h3>
                            <ul className="space-y-1.5">
                              {projects[0].features.slice(0, 3).map((feat, idx) => (
                                <li key={idx} className="text-xs text-foreground/75 flex items-start gap-2 font-light">
                                  <span className="text-accent mt-0.5">✦</span>
                                  <span className="flex-1">{feat}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="flex flex-wrap gap-2 pt-2">
                          {projects[0].tags.map((tag) => (
                            <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 border border-foreground/30 text-foreground/80 hover:border-accent hover:text-accent transition-all duration-300 bg-background/25">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </ScrollReveal>

              {/* Animated Divider */}
              <div className="section-divider" />

              {/* LAYOUT 2: MIRRORED SIDE-BY-SIDE PROJECTS (VirtueOne & Turbo AI) */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
                
                {/* VirtueOne */}
                <ScrollReveal delay={0.1} yOffset={30}>
                  <article className="group relative flex flex-col justify-between h-full" id="virtue-one">
                    <div className="absolute -top-10 -left-4 project-index-number text-[6rem] sm:text-[8rem] z-0">
                      <DecryptedText text="02" animateOn="view" scrambleSpeed={60} />
                    </div>

                    <SpotlightCard className="p-6 md:p-8 border-foreground/20 bg-card/10 rounded-lg hover:border-accent/40 transition-all duration-500 flex flex-col h-full relative z-10 justify-between">
                      <div className="space-y-5">
                        <TiltedCard maxRotation={8} className="shadow-lg rounded-md overflow-hidden border border-foreground/20">
                          <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-card/50">
                            <img
                              src={projects[1].image}
                              alt={projects[1].title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {projects[1].link && (
                              <a
                                href={projects[1].link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute top-4 right-4 p-2.5 bg-accent text-accent-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                                aria-label="Visit project"
                              >
                                <ExternalLink size={16} />
                              </a>
                            )}
                          </div>
                        </TiltedCard>

                        <div className="space-y-1">
                          <div className="flex justify-between items-start">
                            <h2 className="text-heading font-black text-foreground group-hover:text-accent transition-colors duration-300">
                              {projects[1].title}
                            </h2>
                            <span className="text-xs font-bold text-accent tracking-widest">{projects[1].year}</span>
                          </div>
                          {projects[1].company && (
                            <p className="text-[10px] font-bold text-muted-foreground uppercase">{projects[1].company}</p>
                          )}
                        </div>

                        <p className="text-small text-foreground/80 leading-relaxed font-light">
                          {projects[1].description}
                        </p>

                        {projects[1].features && (
                          <ul className="space-y-1.5 pt-1">
                            {projects[1].features.slice(0, 2).map((feat, idx) => (
                              <li key={idx} className="text-[11px] text-foreground/70 flex items-start gap-1.5 font-light">
                                <span className="text-accent">▸</span>
                                <span className="flex-1">{feat}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      <div className="space-y-4 pt-4 mt-6 border-t border-foreground/10">
                        <div className="flex flex-wrap gap-1.5">
                          {projects[1].tags.map((tag) => (
                            <span key={tag} className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 border border-foreground/20 text-foreground/60">
                              {tag}
                            </span>
                          ))}
                        </div>

                        {projects[1].link && (
                          <Magnet range={30} strength={0.2}>
                            <a
                              href={projects[1].link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:text-white transition-colors duration-300"
                            >
                              Live Preview <ArrowUpRight size={14} />
                            </a>
                          </Magnet>
                        )}
                      </div>
                    </SpotlightCard>
                  </article>
                </ScrollReveal>

                {/* Turbo AI */}
                <ScrollReveal delay={0.2} yOffset={30}>
                  <article className="group relative flex flex-col justify-between h-full" id="turbo-ai">
                    <div className="absolute -top-10 -left-4 project-index-number text-[6rem] sm:text-[8rem] z-0">
                      <DecryptedText text="03" animateOn="view" scrambleSpeed={60} />
                    </div>

                    <SpotlightCard className="p-6 md:p-8 border-foreground/20 bg-card/10 rounded-lg hover:border-accent/40 transition-all duration-500 flex flex-col h-full relative z-10 justify-between">
                      <div className="space-y-5">
                        <TiltedCard maxRotation={8} className="shadow-lg rounded-md overflow-hidden border border-foreground/20">
                          <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-card/50">
                            <img
                              src={projects[2].image}
                              alt={projects[2].title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {projects[2].link && (
                              <a
                                href={projects[2].link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute top-4 right-4 p-2.5 bg-accent text-accent-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                                aria-label="Visit project"
                              >
                                <ExternalLink size={16} />
                              </a>
                            )}
                          </div>
                        </TiltedCard>

                        <div className="space-y-1">
                          <div className="flex justify-between items-start">
                            <h2 className="text-heading font-black text-foreground group-hover:text-accent transition-colors duration-300">
                              {projects[2].title}
                            </h2>
                            <span className="text-xs font-bold text-accent tracking-widest">{projects[2].year}</span>
                          </div>
                          <p className="text-[10px] font-bold text-muted-foreground uppercase">AI Application & Gateway Integration</p>
                        </div>

                        <p className="text-small text-foreground/80 leading-relaxed font-light">
                          {projects[2].description}
                        </p>

                        {projects[2].features && (
                          <ul className="space-y-1.5 pt-1">
                            {projects[2].features.slice(0, 2).map((feat, idx) => (
                              <li key={idx} className="text-[11px] text-foreground/70 flex items-start gap-1.5 font-light">
                                <span className="text-accent">▸</span>
                                <span className="flex-1">{feat}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      <div className="space-y-4 pt-4 mt-6 border-t border-foreground/10">
                        <div className="flex flex-wrap gap-1.5">
                          {projects[2].tags.map((tag) => (
                            <span key={tag} className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 border border-foreground/20 text-foreground/60">
                              {tag}
                            </span>
                          ))}
                        </div>

                        {projects[2].link && (
                          <Magnet range={30} strength={0.2}>
                            <a
                              href={projects[2].link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:text-white transition-colors duration-300"
                            >
                              Live Preview <ArrowUpRight size={14} />
                            </a>
                          </Magnet>
                        )}
                      </div>
                    </SpotlightCard>
                  </article>
                </ScrollReveal>
              </div>

              {/* Animated Divider */}
              <div className="section-divider" />

              {/* LAYOUT 3: COMPACT ROW MINIMAL LAYOUT (Ardatama) */}
              <ScrollReveal delay={0.1} yOffset={30}>
                <section className="space-y-6" id="ardatama">
                  <div className="flex items-center justify-between pb-2 border-b border-foreground/10">
                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">More Projects</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-accent">Enterprise Archive</span>
                  </div>
                  
                  <div className="relative group">
                    <div className="compact-project-row cursor-default">
                      <div className="flex items-center gap-6 sm:gap-10">
                        <span className="text-sm font-bold text-accent tracking-widest">
                          <DecryptedText text="04" animateOn="view" scrambleSpeed={70} />
                        </span>
                        <div>
                          <h3 className="text-heading font-black text-foreground group-hover:text-accent transition-colors duration-300">
                            {projects[3].title}
                          </h3>
                          <p className="text-xs text-foreground/60 font-light mt-1 hidden sm:block">
                            {projects[3].description}
                          </p>
                        </div>
                      </div>

                      {/* Image Preview on Hover */}
                      <div className="compact-img-preview">
                        <img 
                          src={projects[3].image} 
                          alt={projects[3].title} 
                          className="w-full h-full object-cover" 
                        />
                      </div>

                      <div className="flex items-center gap-6 text-right">
                        <div className="hidden md:flex flex-wrap gap-2 justify-end">
                          {projects[3].tags.map((tag) => (
                            <span key={tag} className="text-[10px] tracking-wider uppercase px-2 py-0.5 border border-foreground/20 text-foreground/50">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span className="text-xs sm:text-sm font-bold tracking-wider text-foreground/80 whitespace-nowrap">
                          {projects[3].year}
                        </span>
                      </div>
                    </div>
                  </div>
                </section>
              </ScrollReveal>
            </div>

            <ScrollReveal className="mt-20 sm:mt-28 pt-12 border-t border-foreground/25">
              <div className="space-y-6 text-center lg:text-left">
                <h2 className="text-heading font-black text-foreground">Tertarik Berkolaborasi?</h2>
                <Magnet range={60} strength={0.25} className="inline-block">
                  <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-4 bg-foreground text-background font-black uppercase text-xs tracking-widest hover:bg-accent transition-all">
                    Get In Touch <ArrowUpRight size={18} />
                  </Link>
                </Magnet>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </main>
    </div>
  )
}