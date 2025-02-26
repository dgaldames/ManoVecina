import { type NextRequest } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'

export async function middleware(request: NextRequest) {
    //console.log('Middleware ejecutandose en', request.nextUrl.pathname)
    return await updateSession(request)
}

export const config = {
    matcher: [     
        '/dashboard/:path*'
    ],
}