import { NextResponse } from 'next/server'
import { getBlogPosts } from '@/lib/db'

export const dynamic = 'force-static'

export async function GET() {
  try {
    const posts = await getBlogPosts()
    return NextResponse.json(posts)
  } catch {
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 })
  }
}
