import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getBlogPostBySlug, getBlogPosts } from '@/lib/db'
import ReactMarkdown from 'react-markdown'
import { Clock, User, Tag, ArrowLeft } from 'lucide-react'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  const posts = await getBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)
  if (!post) return { title: 'Post nie znaleziony' }
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const [post, allPosts] = await Promise.all([
    getBlogPostBySlug(slug),
    getBlogPosts(),
  ])

  if (!post) notFound()

  const related = allPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3)

  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      {/* Hero */}
      <div className="relative h-80 sm:h-96 bg-[#0F172A] overflow-hidden">
        <Image src={post.imageUrl} alt={post.title} fill className="object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-4xl mx-auto px-4 sm:px-6 pb-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Wróć do bloga
          </Link>
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-[#0052FF] text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
              <Tag className="w-3 h-3" />
              {post.category}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white font-display">{post.title}</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Author info */}
            <div className="flex items-center gap-4 mb-8 p-5 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-[#0052FF]/10 flex items-center justify-center">
                <User className="w-6 h-6 text-[#0052FF]" />
              </div>
              <div>
                <div className="font-bold text-[#0F172A]">{post.author}</div>
                <div className="text-gray-500 text-sm">{post.authorRole}</div>
              </div>
              <div className="ml-auto flex items-center gap-1 text-gray-400 text-sm">
                <Clock className="w-4 h-4" />
                {post.readTime} min
              </div>
            </div>

            {/* Article content */}
            <article className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 prose prose-lg max-w-none prose-headings:font-display prose-headings:text-[#0F172A] prose-a:text-[#0052FF] prose-strong:text-[#0F172A]">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </article>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {related.length > 0 && (
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-[#0F172A] mb-4 font-display">Podobne artykuły</h3>
                <div className="space-y-4">
                  {related.map((r) => (
                    <Link key={r.id} href={`/blog/${r.slug}`} className="block group">
                      <div className="relative h-24 rounded-xl overflow-hidden mb-2">
                        <Image src={r.imageUrl} alt={r.title} fill className="object-cover group-hover:scale-105 transition-transform" />
                      </div>
                      <h4 className="text-sm font-semibold text-[#0F172A] group-hover:text-[#0052FF] transition-colors line-clamp-2">{r.title}</h4>
                      <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                        <Clock className="w-3 h-3" />
                        {r.readTime} min
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-[#0052FF] rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2 font-display">Wypróbuj FleetLink</h3>
              <p className="text-blue-100 text-sm mb-4">14 dni za darmo, bez karty kredytowej</p>
              <Link href="/cennik" className="block text-center bg-white text-[#0052FF] py-2 rounded-xl font-semibold text-sm hover:bg-blue-50 transition-colors">
                Zacznij teraz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
