'use client';

import { useState, useEffect, FormEvent } from 'react';

interface Quote {
  author: string;
  text: string;
}

export default function HomePage() {
  // State for the Python API
  const [quote, setQuote] = useState<Quote | null>(null);

  // State for the Node.js API (Contact Form)
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  // Fetch the quote from the Python API when the component mounts
  useEffect(() => {
    async function fetchQuote() {
      try {
        // NOTE: In production, this will be your Vercel URL
        const response = await fetch('/api/quote');
        const data: Quote = await response.json();
        setQuote(data);
      } catch (error) {
        console.error('Failed to fetch quote:', error);
      }
    }
    fetchQuote();
  }, []);

  // Handle contact form submission
  const handleContactSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('Sending...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setFormStatus('Message sent successfully!');
        setFormState({ name: '', email: '', message: '' }); // Clear form
      } else {
        const result = await response.json();
        setFormStatus(result.error || 'Failed to send message.');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setFormStatus('An error occurred.');
    }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({...prevState, [name]: value }));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-50 text-gray-800">
      <div className="w-full max-w-2xl space-y-12">
        
        <section className="text-center">
          <h1 className="text-4xl font-bold">Damjan Radusinović</h1>
          <p className="text-xl text-gray-600 mt-2">Backend Developer</p>
        </section>
        
        {/* Python API Showcase */}
        <section className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold mb-2">Python API Showcase</h2>
          <p className="text-gray-600 mb-4">This quote is served by a Python serverless function:</p>
          {quote ? (
            <blockquote className="border-l-4 border-blue-500 pl-4 italic">
              <p>"{quote.text}"</p>
              <footer className="mt-2 text-right font-semibold">- {quote.author}</footer>
            </blockquote>
          ) : (
            <p>Loading inspirational quote...</p>
          )}
        </section>

        {/* Node.js API Showcase */}
        <section className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4">Node.js/TS API Showcase</h2>
          <p className="text-gray-600 mb-4">This contact form is powered by a TypeScript Next.js API route.</p>
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" value={formState.name} onChange={handleInputChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" value={formState.email} onChange={handleInputChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows={4} value={formState.message} onChange={handleInputChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Send Message
              </button>
              {formStatus && <p className="text-sm text-gray-600">{formStatus}</p>}
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}