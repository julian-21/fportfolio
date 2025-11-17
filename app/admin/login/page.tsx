"use client"

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Lock } from 'lucide-react'

export default function AdminLoginPage() {
  const router = useRouter()
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      if (credentials.email === 'admin@fikri.dev' && credentials.password === 'admin123') {
        localStorage.setItem('adminAuth', 'true')
        router.push('/admin/dashboard')
      } else {
        setError('Invalid credentials')
      }
    } catch (err) {
      setError('Authentication failed')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <Card className="bg-card border border-foreground p-8 space-y-8">
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="flex justify-center">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Lock className="text-primary" size={24} />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-foreground">Admin Login</h1>
            <p className="text-sm text-muted-foreground">Access the portfolio management dashboard</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-3 bg-destructive/10 border border-destructive rounded-lg">
                <p className="text-sm text-destructive">{error}</p>
              </div>
            )}

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-foreground">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={credentials.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-secondary border border-foreground rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="admin@example.com"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-foreground">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-secondary border border-foreground rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="••••••••"
              />
            </div>

            {/* Submit */}
            <Button
              type="submit"
              size="lg"
              disabled={isLoading}
              className="w-full"
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>
          </form>

          {/* Demo Credentials */}
          <div className="p-3 bg-secondary rounded-lg border border-foreground">
            <p className="text-xs text-muted-foreground text-center">
              Demo: admin@fikri.dev / admin123
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}
