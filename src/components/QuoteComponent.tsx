import { Quote } from 'lucide-react';

async function getQuote() {
  try {
    const apiUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}/api/quote` : 'http://localhost:3000/api/quote';
    const response = await fetch(apiUrl, {
      next: { revalidate: 3600 }, // Re-fetch every hour
    });
    if (!response.ok) throw new Error('Failed to fetch quote');
    return response.json();
  } catch (error) {
    console.error(error);
    // Provide a fallback quote
    return { text: 'The only way to do great work is to love what you do.', author: 'Steve Jobs' };
  }
}

export async function QuoteComponent() {
  const quote = await getQuote();

  return (
    <div className="group p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-200/50 hover:border-amber-300/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-100/50">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-amber-100 rounded-lg group-hover:bg-amber-200 transition-colors duration-300">
          <Quote className="text-amber-600" size={20} />
        </div>
        <div>
          <h3 className="font-semibold text-slate-800">Daily Inspiration</h3>
          <p className="text-sm text-slate-600">Powered by Python API</p>
        </div>
      </div>
      <blockquote className="border-l-2 border-amber-400 pl-4">
        <p className="text-slate-700 mb-2 italic">{`"${quote.text}"`}</p>
        <footer className="text-amber-700 font-medium text-sm">— {quote.author}</footer>
      </blockquote>
    </div>
  );
}