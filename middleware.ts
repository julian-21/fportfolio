import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Protect admin routes
  if (path.startsWith('/admin/dashboard')) {
    const adminAuth = request.cookies.get('adminAuth')?.value

    if (!adminAuth) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*']
}
