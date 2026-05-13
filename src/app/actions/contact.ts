'use server'

import { prisma } from '@/lib/prisma'

export type ContactState = {
  success?: boolean
  error?: string
}

export async function submitContact(prevState: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot check
  const honeypot = formData.get('website') as string
  if (honeypot && honeypot.length > 0) {
    return { success: true } // Silent success for bots
  }

  // Time check (must be > 3 seconds after page load)
  const startTime = Number(formData.get('_formStartTime') || '0')
  const elapsed = Date.now() - startTime
  if (elapsed < 3000) {
    return { error: 'Formularz wypełniony zbyt szybko. Spróbuj ponownie.' }
  }

  const name = (formData.get('name') as string)?.trim()
  const email = (formData.get('email') as string)?.trim()
  const phone = (formData.get('phone') as string)?.trim() || undefined
  const company = (formData.get('company') as string)?.trim() || undefined
  const subject = (formData.get('subject') as string)?.trim()
  const message = (formData.get('message') as string)?.trim()

  if (!name || !email || !subject || !message) {
    return { error: 'Proszę wypełnić wszystkie wymagane pola.' }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: 'Nieprawidłowy adres e-mail.' }
  }

  try {
    await prisma.contactMessage.create({
      data: { name, email, phone, company, subject, message },
    })
    return { success: true }
  } catch {
    return { error: 'Wystąpił błąd podczas wysyłania. Spróbuj ponownie.' }
  }
}
