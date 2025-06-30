// src/components/QuoteComponent.tsx

// This is an async Server Component
async function getQuote() {
  try {
    const response = await fetch(`${process.env.VERCEL_URL}/api/quote`, {
      // Revalidate the data every hour, so you don't call the API on every single request
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch quote');
    }
    return response.json();
  } catch (error) {
    console.error(error);
    // Return a fallback quote in case of an error
    return { text: 'The only way to do great work is to love what you do.', author: 'Steve Jobs' };
  }
}

export default async function QuoteComponent() {
  const quote = await getQuote();

  return (
    <section className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-semibold mb-2">Python API Showcase</h2>
      <p className="text-gray-600 mb-4">This quote is served by a Python serverless function:</p>
      <blockquote className="border-l-4 border-blue-500 pl-4 italic">
        <p>{`"${quote.text}"`}</p>
        <footer className="mt-2 text-right font-semibold">- {quote.author}</footer>
      </blockquote>
    </section>
  );
}