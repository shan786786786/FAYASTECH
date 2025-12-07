'use server'

import { Resend } from 'resend'

// Form validation schema
interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormState {
  success: boolean
  message: string
  errors?: {
    name?: string
    email?: string
    subject?: string
    message?: string
  }
}

// Validation helper
function validateForm(data: ContactFormData): FormState['errors'] | null {
  const errors: FormState['errors'] = {}

  // Name validation
  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters'
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!data.email || !emailRegex.test(data.email)) {
    errors.email = 'Please enter a valid email address'
  }

  // Subject validation
  if (!data.subject || data.subject.trim().length < 5) {
    errors.subject = 'Subject must be at least 5 characters'
  }

  // Message validation
  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters'
  }

  return Object.keys(errors).length > 0 ? errors : null
}

// Rate limiting - simple in-memory store (use Redis in production)
const rateLimit = new Map<string, { count: number; timestamp: number }>()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const RATE_LIMIT_MAX = 5 // 5 requests per minute

function checkRateLimit(identifier: string): boolean {
  const now = Date.now()
  const record = rateLimit.get(identifier)

  if (!record || (now - record.timestamp) > RATE_LIMIT_WINDOW) {
    rateLimit.set(identifier, { count: 1, timestamp: now })
    return true
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false
  }

  record.count++
  return true
}

export async function submitContactForm(
  prevState: FormState | null,
  formData: FormData
): Promise<FormState> {
  const data: ContactFormData = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    subject: formData.get('subject') as string,
    message: formData.get('message') as string,
  }

  // Rate limiting check
  if (!checkRateLimit(data.email)) {
    return {
      success: false,
      message: 'Too many requests. Please try again later.',
    }
  }

  // Validate form data
  const errors = validateForm(data)
  if (errors) {
    return {
      success: false,
      message: 'Please fix the errors below',
      errors,
    }
  }

  try {
    // Check if Resend API key is configured
    const resendApiKey = process.env.RESEND_API_KEY

    if (resendApiKey) {
      const resend = new Resend(resendApiKey)

      await resend.emails.send({
        from: 'FayasTech Contact <contact@fayastech.com>',
        to: ['contact@fayastech.com'],
        replyTo: data.email,
        subject: `[Contact Form] ${data.subject}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #06b6d4;">New Contact Form Submission</h2>
            <hr style="border: 1px solid #eee;" />
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Subject:</strong> ${data.subject}</p>
            <h3>Message:</h3>
            <p style="background: #f5f5f5; padding: 15px; border-radius: 8px;">${data.message.replace(/\n/g, '<br/>')}</p>
            <hr style="border: 1px solid #eee;" />
            <p style="color: #666; font-size: 12px;">This email was sent from the FayasTech contact form.</p>
          </div>
        `,
      })

      return {
        success: true,
        message: 'Message sent successfully! I\'ll get back to you soon.',
      }
    }

    // Fallback: Log the message if no email service configured
    console.log('Contact form submission:', data)

    return {
      success: true,
      message: 'Thank you for your message! I\'ll get back to you soon.',
    }
  } catch (error) {
    console.error('Contact form error:', error)
    return {
      success: false,
      message: 'Failed to send message. Please try again or contact me directly.',
    }
  }
}
