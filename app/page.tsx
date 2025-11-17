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

      <div className="hidden lg:block pt-32 pl-80 pr-48 pb-20 min-h-screen">
        <div className="max-w-5xl space-y-12 animate-fade-in-up">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-xs font-black uppercase tracking-widest text-muted-foreground">
              Featured Works
            </h2>
            <div className="h-0.5 w-12 bg-foreground"></div>
          </div>

          {/* Projects Grid */}
          <div className="space-y-16">
            {projects.map((project, i) => (
              <Link
                key={i}
                href={`/projects#${project.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="group block cursor-pointer transition-all duration-300 hover:translate-x-2"
              >
                <div className="space-y-4 stagger-item">
                  <div className="flex items-baseline gap-4">
                    <h2 className="text-display font-black leading-none text-foreground group-hover:text-accent transition-colors duration-300">
                      {project.name}
                    </h2>
                    <span className="text-xs font-bold text-muted-foreground whitespace-nowrap">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-sm font-light text-muted-foreground max-w-md">
                    {project.description}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-bold px-3 py-1 bg-foreground text-background"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="h-0.5 w-full bg-foreground/30 group-hover:bg-foreground transition-colors duration-300 mt-4"></div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className="pt-12 border-t-2 border-foreground">
            <Link
              href="/projects"
              className="inline-block px-6 py-3 bg-foreground text-background font-black uppercase text-xs tracking-widest hover:bg-accent hover:text-foreground transition-all duration-300 transform hover:scale-105"
            >
              View All Projects →
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:hidden pt-24 px-4 pb-20 min-h-screen">
        <div className="max-w-2xl space-y-8 animate-fade-in-up">
          {/* Section Header */}
          <div className="space-y-3">
            <h2 className="text-xs font-black uppercase tracking-widest text-muted-foreground">
              Featured Works
            </h2>
            <div className="h-0.5 w-8 bg-foreground"></div>
          </div>

          {/* Projects List */}
          <div className="space-y-12">
            {projects.map((project, i) => (
              <Link
                key={i}
                href={`/projects#${project.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="group block cursor-pointer transition-all duration-300 active:translate-x-1"
              >
                <div className="space-y-3 stagger-item">
                  <div className="flex items-baseline justify-between gap-2">
                    <h2 className="text-3xl sm:text-5xl font-black leading-none text-foreground group-hover:text-accent transition-colors duration-300 flex-1 break-words">
                      {project.name}
                    </h2>
                    <span className="text-xs font-bold text-muted-foreground whitespace-nowrap ml-2">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-sm font-light text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-bold px-2 py-1 bg-foreground text-background"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="h-0.5 w-full bg-foreground/30 group-hover:bg-foreground transition-colors duration-300 mt-4"></div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-8 border-t-2 border-foreground">
            <Link
              href="/projects"
              className="inline-block px-4 py-2 bg-foreground text-background font-black uppercase text-xs tracking-widest hover:bg-accent hover:text-foreground transition-all active:scale-95"
            >
              View All →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
