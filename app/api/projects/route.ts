import { NextRequest, NextResponse } from 'next/server'

// Placeholder data - replace with MongoDB integration
let projects = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-featured e-commerce solution',
    image: '/ecommerce-platform-concept.png',
    tags: ['Next.js', 'React', 'Stripe', 'MongoDB'],
    links: { live: '#', github: '#' }
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative task management',
    image: '/task-management-dashboard.png',
    tags: ['React', 'Firebase', 'TypeScript'],
    links: { live: '#', github: '#' }
  }
]

export async function GET(request: NextRequest) {
  try {
    // TODO: Fetch from MongoDB
    // const projects = await db.projects.find({})

    return NextResponse.json(
      { data: projects, count: projects.length },
      { status: 200 }
    )
  } catch (error) {
    console.error('Projects API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const isAuthenticated = request.headers.get('x-admin-token') === 'valid'
    if (!isAuthenticated) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { title, description, image, tags } = body

    // TODO: Save to MongoDB
    // const newProject = await db.projects.create({
    //   title,
    //   description,
    //   image,
    //   tags,
    //   createdAt: new Date()
    // })

    const newProject = {
      id: Date.now().toString(),
      title,
      description,
      image,
      tags
    }

    projects.push(newProject)

    return NextResponse.json(
      { message: 'Project created', data: newProject },
      { status: 201 }
    )
  } catch (error) {
    console.error('Projects API error:', error)
    return NextResponse.json(
      { error: 'Failed to create project' },
      { status: 500 }
    )
  }
}
