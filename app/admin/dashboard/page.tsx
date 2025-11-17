"use client"

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { LogOut, Plus, Edit2, Trash2 } from 'lucide-react'

interface Project {
  id: string
  title: string
  description: string
  tags: string[]
}

export default function AdminDashboard() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [projects, setProjects] = useState<Project[]>([
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'Full-featured e-commerce solution',
      tags: ['Next.js', 'React', 'MongoDB']
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'Collaborative task management',
      tags: ['React', 'Firebase', 'TypeScript']
    }
  ])
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tags: ''
  })

  useEffect(() => {
    const auth = localStorage.getItem('adminAuth')
    if (!auth) {
      router.push('/admin/login')
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('adminAuth')
    router.push('/admin/login')
  }

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.title && formData.description) {
      const newProject: Project = {
        id: Date.now().toString(),
        title: formData.title,
        description: formData.description,
        tags: formData.tags.split(',').map(t => t.trim()).filter(Boolean)
      }
      setProjects([...projects, newProject])
      setFormData({ title: '', description: '', tags: '' })
      setShowForm(false)
    }
  }

  const handleDeleteProject = (id: string) => {
    setProjects(projects.filter(p => p.id !== id))
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Portfolio Dashboard</h1>
            <p className="text-muted-foreground mt-2">Manage your portfolio projects</p>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="gap-2"
          >
            <LogOut size={16} />
            Logout
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-card border border-foreground p-6">
            <p className="text-muted-foreground text-sm mb-2">Total Projects</p>
            <p className="text-3xl font-bold text-primary">{projects.length}</p>
          </Card>
          <Card className="bg-card border border-foreground p-6">
            <p className="text-muted-foreground text-sm mb-2">Skills Showcased</p>
            <p className="text-3xl font-bold text-accent">15+</p>
          </Card>
          <Card className="bg-card border border-foreground p-6">
            <p className="text-muted-foreground text-sm mb-2">Messages Received</p>
            <p className="text-3xl font-bold text-primary">12</p>
          </Card>
        </div>

        {/* Add Project Section */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-foreground">Projects</h2>
            <Button
              onClick={() => setShowForm(!showForm)}
              className="gap-2"
            >
              <Plus size={16} />
              Add Project
            </Button>
          </div>

          {showForm && (
            <Card className="bg-card border border-foreground p-8 mb-8 space-y-6">
              <form onSubmit={handleAddProject} className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Project Title
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    className="w-full px-4 py-2 bg-secondary border border-foreground rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Project name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Description
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="w-full px-4 py-2 bg-secondary border border-foreground rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Project description"
                    rows={3}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Tags (comma-separated)
                  </label>
                  <input
                    type="text"
                    value={formData.tags}
                    onChange={(e) => setFormData({...formData, tags: e.target.value})}
                    className="w-full px-4 py-2 bg-secondary border border-foreground rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="React, Node.js, MongoDB"
                  />
                </div>

                <div className="flex gap-3">
                  <Button type="submit">Save Project</Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowForm(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </Card>
          )}
        </div>

        {/* Projects List */}
        <div className="space-y-4">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-card border border-foreground p-6 hover-lift"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-foreground/80 mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-primary/10 text-primary px-2.5 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 ml-4">
                  <Button size="sm" variant="outline">
                    <Edit2 size={16} />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDeleteProject(project.id)}
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
