import { NextRequest, NextResponse } from 'next/server'

// In production, use proper authentication with bcrypt and JWT tokens
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    // TODO: Validate credentials against MongoDB
    // const admin = await db.admins.findOne({ email })
    // const isValid = await bcrypt.compare(password, admin.passwordHash)

    // Placeholder validation
    const isValid = email === 'admin@fikri.dev' && password === 'admin123'

    if (!isValid) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // TODO: Generate JWT token
    // const token = jwt.sign({ email }, process.env.JWT_SECRET)

    return NextResponse.json(
      {
        message: 'Login successful',
        token: 'mock-jwt-token',
        admin: { email }
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Auth API error:', error)
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    )
  }
}
