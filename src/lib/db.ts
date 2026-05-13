import { prisma } from './prisma'

export async function getProducts() {
  return prisma.product.findMany({ orderBy: { id: 'asc' } })
}

export async function getProductBySlug(slug: string) {
  return prisma.product.findUnique({ where: { slug } })
}

export async function getProductsByCategory(category: string) {
  return prisma.product.findMany({ where: { category }, orderBy: { id: 'asc' } })
}

export async function getBlogPosts() {
  return prisma.blogPost.findMany({ orderBy: { publishedAt: 'desc' } })
}

export async function getBlogPostBySlug(slug: string) {
  return prisma.blogPost.findUnique({ where: { slug } })
}

export async function getFeaturedPosts() {
  return prisma.blogPost.findMany({ where: { featured: true }, orderBy: { publishedAt: 'desc' }, take: 3 })
}

export async function getTestimonials() {
  return prisma.testimonial.findMany({ orderBy: { id: 'asc' } })
}
