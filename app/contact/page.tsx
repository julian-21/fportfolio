'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Mail, MapPin, Github, Linkedin, Instagram } from 'lucide-react'

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

      <div className="pt-24 lg:pt-32 px-4 md:px-8 lg:pl-72 lg:pr-32 pb-20 min-h-screen">
        <div className="max-w-2xl lg:max-w-3xl space-y-12 lg:space-y-16">
          <div>
            <h1 className="text-4xl lg:text-6xl font-black text-foreground mb-3 lg:mb-4">GET IN TOUCH</h1>
            <p className="text-base lg:text-lg font-light text-foreground/70">
              Ada pertanyaan atau proyek? Hubungi saya untuk diskusi lebih lanjut.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 py-8 lg:py-12 border-t border-b border-foreground">
            <div className="space-y-6 md:space-y-4">
              <div className="space-y-2">
                <p className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Email</p>
                <a href="mailto:jfikri212@gmail.com" className="text-base lg:text-lg font-light text-foreground hover:text-accent transition-colors block">
                  jfikri212@gmail.com
                </a>
              </div>
              <div className="space-y-2 pt-2 md:pt-4">
                <p className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Location</p>
                <p className="text-foreground font-light text-base lg:text-lg">Kota Yogyakarta, Daerah Istimewa Yogyakarta</p>
              </div>
            </div>

            <div className="space-y-3 md:space-y-4">
              <p className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Follow Me</p>
              <div className="space-y-2 lg:space-y-3">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground hover:text-accent transition-colors font-light text-sm lg:text-base">
                  <Github size={16} /> GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground hover:text-accent transition-colors font-light text-sm lg:text-base">
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a href="https://www.instagram.com/fikrijuliann_/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground hover:text-accent transition-colors font-light text-sm lg:text-base">
                  <Instagram size={16} /> Instagram
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
                className="w-full bg-transparent border-b-2 border-foreground text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors px-0 py-2 font-light text-sm lg:text-base"
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
                className="w-full bg-transparent border-b-2 border-foreground text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors px-0 py-2 font-light text-sm lg:text-base"
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
                className="w-full bg-transparent border-b-2 border-foreground text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors px-0 py-2 font-light text-sm lg:text-base"
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
                className="w-full bg-transparent border-b-2 border-foreground text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors px-0 py-2 font-light text-sm lg:text-base resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-block text-center px-8 py-3 bg-foreground text-background font-black uppercase text-xs tracking-widest hover:bg-accent hover:text-foreground transition-all mt-8 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
