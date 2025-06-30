// src/app/page.tsx
import { Download } from 'lucide-react';
import QuoteComponent from '@/components/QuoteComponent'; // We will create this next
import ContactFormComponent from '@/components/ContactFormComponent'; // We will create this too

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100 font-sans text-gray-800">
      <div className="container mx-auto p-4 md:p-8 lg:p-12">
        {/* --- HEADER --- */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h1 className="text-5xl font-bold text-gray-900">DAMJAN RADUSINOVIĆ</h1>
            <p className="text-2xl text-blue-600 font-light mt-1">Backend Developer</p>
          </div>
          <a
            href="/resume.pdf"
            download="Damjan_Radusinovic_Resume.pdf"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <Download size={18} />
            Download PDF
          </a>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* --- LEFT COLUMN --- */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold border-b-2 border-gray-200 pb-2 mb-4">Summary</h2>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <p className="text-lg text-gray-700 leading-relaxed">
                  {'Self-taught Backend Developer with 4+ years of experience managing 1000+ client systems at enterprise scale. Expert in Python, API development, and microservices architecture. Proven track record of automation solutions reducing deployment times by 90%.'}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold border-b-2 border-gray-200 pb-2 mb-4">Experience</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold">WorldWide Multimedia</h3>
                  <p className="text-lg text-gray-600">Backend Developer | January 2025 - Present</p>
                  <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
                    <li>Reduced server deployment time by <strong>90%</strong> (45 to 2 min) via VM automation system with REST API.</li>
                    <li>Streamlined Android box setup by <strong>85%</strong> (35 to 5 min) through automated SCB configuration.</li>
                    <li>Architected HLS streaming functionality using Python and Liquidsoap.</li>
                    <li>Modernized architecture with Docker microservices and containerization.</li>
                    <li>Engineered full-stack Laravel applications for managing themes and subscriptions.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold border-b-2 border-gray-200 pb-2 mb-4">Key Projects</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold">Kubernetes Microservices Architecture</h3>
                  <p className="text-gray-700">Rebuilt the company's infrastructure into a containerized system including a streaming engine, admin dashboard, and backend APIs. Used Docker, Kubernetes, and Traefik for scalable deployments.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">IoT Medication Tracking</h3>
                  <p className="text-gray-700">Developed an NFC-based Android system integrated with Google Sheets and Tasker for real-time medication tracking and health analytics.</p>
                </div>
              </div>
            </section>
          </div>

          {/* --- RIGHT COLUMN --- */}
          <aside className="lg:col-span-1 space-y-12">
            <section>
              <h2 className="text-2xl font-bold border-b-2 border-gray-200 pb-2 mb-4">Skills</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">Programming & Backend</h3>
                  <p className="text-gray-600">Python, PHP, Node.js, TypeScript, RESTful API Design, Microservices, Laravel</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Databases</h3>
                  <p className="text-gray-600">MySQL, PostgreSQL, Redis, Database Design, Query Optimization</p>
                </div>
                 <div>
                  <h3 className="font-semibold text-lg">Infrastructure & Tools</h3>
                  <p className="text-gray-600">Docker, Kubernetes, Linux, VM Management, Git, Vercel</p>
                </div>
              </div>
            </section>
            
            {/* We will place the API components here */}
            <QuoteComponent />
            <ContactFormComponent />
          </aside>
        </div>
      </div>
    </main>
  );
}