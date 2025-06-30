import { Download, Mail, Github, Linkedin, Code, Server, Database, Cpu, ChevronDown, ExternalLink, MapPin, Phone } from 'lucide-react';
import { QuoteComponent } from '@/components/QuoteComponent';
import { ContactFormComponent } from '@/components/ContactFormComponent';
import { Navigation } from '@/components/Navigation';

const skills = [
  { category: 'Backend', icon: Server, items: ['Python', 'PHP', 'Node.js', 'RESTful APIs', 'Microservices', 'Laravel'], color: 'from-blue-500 to-indigo-500', bg: 'from-blue-50 to-indigo-50' },
  { category: 'Database', icon: Database, items: ['MySQL', 'PostgreSQL', 'Redis', 'SQLAlchemy', 'Query Optimization'], color: 'from-emerald-500 to-teal-500', bg: 'from-emerald-50 to-teal-50' },
  { category: 'Infrastructure', icon: Cpu, items: ['Docker', 'Kubernetes', 'Linux', 'VM Management', 'Traefik'], color: 'from-purple-500 to-pink-500', bg: 'from-purple-50 to-pink-50' },
  { category: 'Development', icon: Code, items: ['TypeScript', 'Kotlin', 'Git', 'API Design', 'IoT Integration'], color: 'from-orange-500 to-red-500', bg: 'from-orange-50 to-red-50' }
];

const projects = [
  { title: 'Kubernetes Microservices', description: 'Containerized infrastructure with streaming engine and admin dashboard.', tech: ['Docker', 'Kubernetes', 'Python'], impact: '90% deployment reduction', color: 'from-blue-500 to-indigo-500' },
  { title: 'IoT Medication Tracking', description: 'NFC-based Android system with real-time health analytics.', tech: ['Android', 'NFC', 'Google Sheets'], impact: 'Real-time analytics', color: 'from-emerald-500 to-teal-500' },
  { title: 'Streaming Automation', description: 'VM automation system managing 1000+ client solutions.', tech: ['Python', 'REST API', 'HLS'], impact: '85% setup reduction', color: 'from-purple-500 to-pink-500' }
];

export default function ModernPortfolio() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-indigo-800 to-purple-800 bg-clip-text text-transparent">
                Damjan Radusinović
              </h1>
              <div className="text-xl md:text-2xl text-slate-600 mb-8 font-medium">
                Backend Developer & Infrastructure Architect
              </div>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                Transforming complex systems into elegant solutions. 
                <span className="font-semibold text-indigo-600"> 4+ years</span> managing 
                <span className="font-semibold text-purple-600"> 1000+ enterprise systems</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <a href="/resume.pdf" download="Damjan_Radusinovic_Resume.pdf" className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-indigo-200 hover:scale-105 transition-all duration-300 flex items-center gap-2">
                <Download size={18} />
                Download Resume
              </a>
              
              <div className="flex gap-3">
                {[
                  { icon: Github, href: 'https://github.com/damyandev', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://linkedin.com/in/damjan-radusinović', label: 'LinkedIn' },
                  { icon: Mail, href: '#contact', label: 'Contact' }
                ].map((social) => (
                  <a key={social.href} href={social.href} className="p-3 bg-white border border-slate-200 rounded-full text-slate-600 hover:border-indigo-300 hover:bg-white hover:text-indigo-600 hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-md" aria-label={social.label}>
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div className="animate-bounce absolute bottom-10 left-1/2 -translate-x-1/2">
              <ChevronDown className="mx-auto text-slate-400" size={24} />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About Me</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Self-taught developer passionate about creating scalable systems that drive real business value.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <div className="p-6 bg-gradient-to-br from-slate-50 to-indigo-50 rounded-2xl border border-slate-200/80">
                  <p className="text-slate-700 leading-relaxed">
                    Specializing in backend development and infrastructure automation, I transform complex business requirements into robust technical solutions.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-slate-600"><MapPin size={18} className="text-indigo-500" /><span>Pančevo, Serbia</span></div>
                  <div className="flex items-center gap-3 text-slate-600"><Phone size={18} className="text-purple-500" /><span>+381 60 454 9049</span></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Client Systems', value: '1000+', color: 'text-blue-600 bg-blue-50 border-blue-200/50' },
                  { label: 'Deployment Reduction', value: '90%', color: 'text-emerald-600 bg-emerald-50 border-emerald-200/50' },
                  { label: 'Years Experience', value: '4+', color: 'text-purple-600 bg-purple-50 border-purple-200/50' },
                  { label: 'Setup Reduction', value: '85%', color: 'text-orange-600 bg-orange-50 border-orange-200/50' }
                ].map((stat) => (
                  <div key={stat.label} className={`text-center p-6 rounded-2xl border ${stat.color}`}>
                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm font-medium opacity-80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 text-center mb-12">Technical Expertise</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill) => (
                <div key={skill.category} className={`group p-6 bg-gradient-to-br ${skill.bg} rounded-2xl border border-slate-200/80 hover:border-slate-300 hover:scale-[1.03] transition-all duration-300 hover:shadow-lg`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 bg-gradient-to-r ${skill.color} rounded-lg shadow-md`}>
                      <skill.icon className="text-white" size={20} />
                    </div>
                    <h4 className="font-semibold text-slate-900">{skill.category}</h4>
                  </div>
                  <ul className="space-y-2">
                    {skill.items.map((item) => (
                      <li key={item} className="text-sm text-slate-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-indigo-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Experience</h2>
              <p className="text-slate-600">Building enterprise solutions at scale</p>
            </div>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-200 to-purple-200 rounded-full"></div>
              <div className="relative flex items-start gap-8">
                <div className="z-10 w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                  <Server className="text-white" size={28} />
                </div>
                <div className="flex-1 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Backend Developer</h3>
                      <p className="text-lg font-semibold text-indigo-600">WorldWide Multimedia</p>
                      <p className="text-slate-600 mt-1">Web radio solutions for 1000+ clients</p>
                    </div>
                    <div className="text-purple-600 font-medium mt-2 lg:mt-0">January 2025 - Present</div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[ 'Reduced deployment time by 90% through VM automation', 'Streamlined Android setup by 85% via automated configuration', 'Architected HLS streaming with Python and Liquidsoap', 'Modernized infrastructure with Docker microservices' ].map((achievement) => (
                      <div key={achievement} className="flex items-start gap-3 p-4 bg-slate-50/70 rounded-xl">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span className="text-slate-700 text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Key Projects</h2>
              <p className="text-slate-600">Solutions that drive real business impact</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {projects.map((project) => (
                <div key={project.title} className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden hover:shadow-xl hover:scale-[1.03] transition-all duration-300">
                  <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                  <div className="p-6 flex flex-col h-full">
                    <h3 className="text-lg font-bold text-slate-900 mb-3">{project.title}</h3>
                    <p className="text-slate-600 mb-4 text-sm leading-relaxed flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => ( <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">{tech}</span> ))}
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
                      <span className="text-emerald-600 font-semibold text-sm">{project.impact}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="max-w-md mx-auto">
              <QuoteComponent />
            </div>
          </div>
        </section>
        
        <ContactFormComponent />

        {/* Footer */}
        <footer className="py-12 px-6 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">Damjan Radusinović</div>
            <p className="text-slate-400 mb-6">Backend Developer & Infrastructure Architect</p>
            <div className="flex justify-center gap-6 mb-8">
              {[ { icon: Github, href: 'https://github.com/damyandev' }, { icon: Linkedin, href: 'https://linkedin.com/in/damjan-radusinović' }, { icon: Mail, href: 'mailto:073damjan@gmail.com' } ].map((social) => (
                <a key={social.href} href={social.href} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300"><social.icon size={20} /></a>
              ))}
            </div>
            <div className="pt-6 border-t border-slate-800 text-slate-500 text-sm">© {new Date().getFullYear()} Damjan Radusinović. Crafted with passion and code.</div>
          </div>
        </footer>
      </main>
    </div>
  );
}