// src/components/ContactFormComponent.tsx
'use client';

import { useState, FormEvent } from 'react';

export default function ContactFormComponent() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const handleContactSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('Sending...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      const result = await response.json();

      if (response.ok) {
        setFormStatus('Message sent successfully!');
        setFormState({ name: '', email: '', message: '' });
      } else if (response.status === 429) {
        setFormStatus('You are sending messages too fast. Please wait a minute.');
      } else {
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
    <section className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-semibold mb-4">Node.js/TS API Showcase</h2>
      <p className="text-gray-600 mb-4">This form uses a rate-limited TypeScript API route.</p>
      <form onSubmit={handleContactSubmit} className="space-y-4">
        {/* Form inputs are the same as before */}
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
  );
}