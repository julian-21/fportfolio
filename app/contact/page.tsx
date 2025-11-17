'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Silakan lengkapi semua field')
      return
    }

    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="w-full min-h-screen bg-background">
      <Navigation />

      {/* Desktop */}
      <div className="hidden lg:block pt-32 pl-72 pr-32 pb-20 px-12 min-h-screen">
        <div className="max-w-3xl space-y-16">
          <div>
            <h1 className="text-6xl font-black text-foreground mb-4">GET IN TOUCH</h1>
            <p className="text-lg font-light text-foreground/70">
              Ada pertanyaan atau proyek? Hubungi saya untuk diskusi lebih lanjut.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 py-12 border-t border-b border-foreground">
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Email</p>
                <a href="mailto:jfikri212@gmail.com" className="text-lg font-light text-foreground hover:text-accent transition-colors">
                  jfikri212@gmail.com
                </a>
              </div>
              <div className="space-y-2 pt-4">
                <p className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Location</p>
                <p className="text-foreground font-light">Bandung, Indonesia</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Follow Me</p>
              <div className="space-y-3">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground hover:text-accent transition-colors font-light">
                  <Github size={16} /> GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground hover:text-accent transition-colors font-light">
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground hover:text-accent transition-colors font-light">
                  <Twitter size={16} /> Twitter
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
            {submitted && (
              <div className="p-4 bg-accent/10 border border-accent text-foreground font-light text-sm">
                Terima kasih! Pesan Anda telah dikirim.
              </div>
            )}
            {error && (
              <div className="p-4 bg-destructive/10 border border-destructive text-destructive font-light text-sm">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <label className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-foreground text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors px-0 py-2 font-light"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-foreground text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors px-0 py-2 font-light"
                placeholder="your@email.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-foreground text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors px-0 py-2 font-light"
                placeholder="Project inquiry"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full bg-transparent border-b-2 border-foreground text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors px-0 py-2 font-light resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="px-8 py-3 bg-foreground text-background font-black uppercase text-xs tracking-widest hover:bg-accent hover:text-foreground transition-all mt-8 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Mobile/Tablet */}
      <div className="lg:hidden pt-24 px-4 pb-20 min-h-screen">
        <div className="max-w-2xl space-y-12">
          <div>
            <h1 className="text-4xl font-black text-foreground mb-3">GET IN TOUCH</h1>
            <p className="text-base font-light text-foreground/70">
              Ada pertanyaan atau proyek? Hubungi saya.
            </p>
          </div>

          <div className="space-y-8 py-8 border-t border-b border-foreground">
            <div className="space-y-3">
              <p className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Email</p>
              <a href="mailto:jfikri212@gmail.com" className="block text-base font-light text-foreground hover:text-accent transition-colors">
                jfikri212@gmail.com
              </a>
            </div>
            <div className="space-y-3">
              <p className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Location</p>
              <p className="text-foreground font-light">Bandung, Indonesia</p>
            </div>
            <div className="space-y-3 pt-2">
              <p className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Follow Me</p>
              <div className="space-y-2">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="block text-foreground hover:text-accent transition-colors font-light text-sm">
                  GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="block text-foreground hover:text-accent transition-colors font-light text-sm">
                  LinkedIn
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="block text-foreground hover:text-accent transition-colors font-light text-sm">
                  Twitter
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {submitted && (
              <div className="p-3 bg-accent/10 border border-accent text-foreground font-light text-xs">
                Terima kasih! Pesan Anda telah dikirim.
              </div>
            )}
            {error && (
              <div className="p-3 bg-destructive/10 border border-destructive text-destructive font-light text-xs">
                {error}
              </div>
            )}

            <div className="space-y-1">
              <label className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-foreground text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors px-0 py-2 font-light text-sm"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-foreground text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors px-0 py-2 font-light text-sm"
                placeholder="your@email.com"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-foreground text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors px-0 py-2 font-light text-sm"
                placeholder="Project inquiry"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-transparent border-b border-foreground text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors px-0 py-2 font-light text-sm resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 bg-foreground text-background font-black uppercase text-xs tracking-widest hover:bg-accent hover:text-foreground transition-all mt-6 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
