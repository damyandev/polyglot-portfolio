'use client';

import { useState, FormEvent } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

export function ContactFormComponent() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);
    setFormStatus('Sending message...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else if (response.status === 429) {
        const data = await response.json();
        setFormStatus(data.error || 'You are sending messages too fast. Please wait.');
      } else {
        const data = await response.json();
        setFormStatus(data.error || 'Failed to send message.');
      }
    } catch (error) {
      console.error('An error occurred during form submission:', error);
      setFormStatus('An error occurred while sending the message.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setFormStatus(''), 5000);
    }
  };

  const socialLinks = [
    { icon: Mail, href: 'mailto:073damjan@gmail.com', label: '073damjan@gmail.com', color: 'text-rose-600 bg-rose-50 hover:bg-rose-100' },
    { icon: Linkedin, href: 'https://linkedin.com/in/damjan-radusinović', label: 'damjan-radusinović', color: 'text-blue-600 bg-blue-50 hover:bg-blue-100' },
    { icon: Github, href: 'https://github.com/damyandev', label: 'damyandev', color: 'text-slate-600 bg-slate-100 hover:bg-slate-200' }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Let's Connect</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Ready to discuss your next project? I'm always interested in new opportunities and technical challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-800">Contact me directly</h3>
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-4 p-4 rounded-xl border border-slate-200/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-md hover:border-slate-300 ${link.color}`}>
                <link.icon size={20} />
                <span className="font-medium">{link.label}</span>
              </a>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-800">Or send me a message</h3>
            <div>
              <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200 placeholder-slate-400" placeholder="Your Name" required/>
            </div>
            <div>
              <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200 placeholder-slate-400" placeholder="Your Email" required/>
            </div>
            <div>
              <textarea value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200 resize-none placeholder-slate-400" rows={4} placeholder="Tell me about your project..." required/>
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-indigo-200 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/50 border-t-white rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send size={18} />
                  <span>Send Message</span>
                </>
              )}
            </button>
            {formStatus && (
              <div className={`text-center p-3 rounded-xl text-sm font-medium ${ formStatus.includes('successfully') ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' : 'bg-rose-100 text-rose-800 border border-rose-200' }`}>
                {formStatus}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}