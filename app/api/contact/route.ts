import { NextRequest, NextResponse } from 'next/server'

// In production, integrate with MongoDB and send email notifications
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // TODO: Save to database
    // const contact = await db.contacts.create({
    //   name,
    //   email,
    //   subject,
    //   message,
    //   createdAt: new Date()
    // })

    // TODO: Send email notification
    // await sendEmail({
    //   to: 'admin@fikri.dev',
    //   subject: `New Contact: ${subject}`,
    //   body: `From: ${name} (${email})\n\n${message}`
    // })

    return NextResponse.json(
      { message: 'Contact form submitted successfully', id: 'mock-id' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Contact API endpoint' },
    { status: 200 }
  )
}
