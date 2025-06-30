import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { kv } from '@vercel/kv';
import { Ratelimit } from '@upstash/ratelimit';

const resend = new Resend(process.env.RESEND_API_KEY);

// Create a new ratelimiter that allows 2 requests per 1 minute
const ratelimit = new Ratelimit({
  redis: kv,
  limiter: Ratelimit.slidingWindow(2, '1 m'),
  analytics: true,
});

export async function POST(request: Request) {
  // Get the IP address of the user
  // Vercel populates this header
  const ip = request.headers.get('x-forwarded-for') ?? '127.0.0.1';

  // Check if the user has exceeded the rate limit
  const { success } = await ratelimit.limit(ip);
  
  if (!success) {
    return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
  }

  // --- If not rate-limited, proceed with sending the email ---
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['073damjan@gmail.com'], // <-- CHANGE THIS TO YOUR EMAIL
      subject: `New Message from ${name} via Portfolio`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`,
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json({ error: 'Error sending email.' }, { status: 500 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}