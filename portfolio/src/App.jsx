import React, { useState, useEffect } from 'react';

// SVGs for Icons
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);

const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' }
  ];

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <div className="relative overflow-hidden w-full">
      {/* Background decoration */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* HEADER / NAVBAR */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/10 shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <span className="text-2xl font-black text-white tracking-tighter">VAUN<span className="text-indigo-500">.</span></span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-slate-300 hover:text-white transition-colors text-sm font-medium tracking-wide">
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-slate-300 hover:text-white focus:outline-none p-2">
                {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-white/10 shadow-2xl absolute w-full left-0 top-20">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-4 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-white/5"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        {/* HERO SECTION */}
        <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[90vh] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Left */}
            <div className="text-center lg:text-left z-10">
              <div className="inline-block px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-semibold tracking-wide mb-6">
                Information Science Engineering
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
                Hi, I'm <span className="text-gradient">Vaun<br/>Repose</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                Motivated 6th-semester student with a strong foundation in C, C++, and Web Development. 
                I love building dynamic interfaces and analyzing data with Power BI. Eager to solve problems and learn new technologies!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#projects" className="px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)]">
                  View Projects
                </a>
                <a href="#contact" className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-bold border border-white/10 transition-all backdrop-blur-sm">
                  Contact Me
                </a>
              </div>
            </div>

            {/* Graphic Right */}
            <div className="relative hidden lg:block z-10">
              <div className="w-full aspect-square max-w-md mx-auto relative">
                {/* Decorative circles */}
                <div className="absolute inset-0 border-2 border-indigo-500/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute inset-4 border-2 border-purple-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                <div className="absolute inset-8 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-full opacity-20 blur-xl"></div>
                {/* Center text/icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/10 select-none">
                    VR
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="py-20 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
              My <span className="text-indigo-400">Education</span>
            </h2>
            
            <div className="max-w-3xl mx-auto relative border-l-2 border-indigo-500/30 pl-8 space-y-12">
              {/* Timeline Item 1 */}
              <div className="relative">
                <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-slate-900 bg-indigo-500"></div>
                <div className="glass glass-hover p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-xl font-bold text-white">B.E in Information Science Engineering</h3>
                    <span className="text-indigo-400 font-medium whitespace-nowrap bg-indigo-500/10 px-3 py-1 rounded-full text-sm mt-2 md:mt-0 w-fit">Sep 2023 - Aug 2027</span>
                  </div>
                  <h4 className="text-lg text-slate-300 font-medium mb-3">Sambhram Institute Of Technology, Bangalore</h4>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 w-[75%] rounded-full"></div>
                    </div>
                    <span className="font-bold text-white">75%</span>
                  </div>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="relative">
                <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-slate-900 bg-purple-500"></div>
                <div className="glass glass-hover p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-xl font-bold text-white">Intermediate (PUC)</h3>
                    <span className="text-indigo-400 font-medium whitespace-nowrap bg-indigo-500/10 px-3 py-1 rounded-full text-sm mt-2 md:mt-0 w-fit">Jun 2021 - Apr 2023</span>
                  </div>
                  <h4 className="text-lg text-slate-300 font-medium mb-3">Narayana PU College, Bangalore</h4>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 w-[81%] rounded-full"></div>
                    </div>
                    <span className="font-bold text-white">81%</span>
                  </div>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="relative">
                <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-slate-900 bg-pink-500"></div>
                <div className="glass glass-hover p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-xl font-bold text-white">SSLC</h3>
                    <span className="text-indigo-400 font-medium whitespace-nowrap bg-indigo-500/10 px-3 py-1 rounded-full text-sm mt-2 md:mt-0 w-fit">Jun 2020 - Mar 2021</span>
                  </div>
                  <h4 className="text-lg text-slate-300 font-medium mb-3">Rajeev Gandhi Memorial School, Bangalore</h4>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-pink-500 to-rose-500 w-[95.5%] rounded-full"></div>
                    </div>
                    <span className="font-bold text-white">95.5%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
              Technical <span className="text-purple-400">Skills</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Box 1 */}
              <div className="glass glass-hover p-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 flex items-center justify-center mb-6 text-indigo-400">
                  <CodeIcon />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Programming</h3>
                <div className="flex flex-wrap gap-2">
                  {['C', 'C++', 'Python (Basic)', 'Java', 'DSA'].map((skill) => (
                    <span key={skill} className="px-3 py-1 rounded-lg bg-slate-800 text-slate-300 text-sm font-medium border border-slate-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Box 2 */}
              <div className="glass glass-hover p-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center mb-6 text-purple-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Web Development & DB</h3>
                <div className="flex flex-wrap gap-2">
                  {['HTML', 'CSS', 'JavaScript (Basic)', 'PHP', 'MySQL', 'React Components'].map((skill) => (
                    <span key={skill} className="px-3 py-1 rounded-lg bg-slate-800 text-slate-300 text-sm font-medium border border-slate-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Box 3 */}
              <div className="glass glass-hover p-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-rose-500/20 border border-pink-500/30 flex items-center justify-center mb-6 text-pink-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Data & OS</h3>
                <div className="flex flex-wrap gap-2">
                  {['Power BI', 'Data Analysis', 'Windows', 'Linux (Basic)'].map((skill) => (
                    <span key={skill} className="px-3 py-1 rounded-lg bg-slate-800 text-slate-300 text-sm font-medium border border-slate-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-20 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
              Featured <span className="text-pink-400">Projects</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Project 1 */}
              <div className="glass glass-hover overflow-hidden group flex flex-col h-full">
                <div className="h-48 bg-gradient-to-br from-indigo-900/50 to-slate-900 flex items-center justify-center border-b border-white/5 group-hover:from-indigo-600/30 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400/50 group-hover:text-indigo-300 group-hover:scale-110 transition-all duration-300"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-3">Online Election Voting System</h3>
                  <p className="text-slate-300 flex-1 leading-relaxed mb-6">
                    Designed a database to manage voter details and prevent duplicate voting. Developed an online voting system with login, vote casting, and thumb impression authentication (Mock/Placeholder).
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700/50">
                    <span className="text-xs font-semibold px-2.5 py-1 bg-indigo-500/20 text-indigo-300 rounded">HTML</span>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-indigo-500/20 text-indigo-300 rounded">CSS</span>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-indigo-500/20 text-indigo-300 rounded">PHP</span>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-indigo-500/20 text-indigo-300 rounded">MySQL</span>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="glass glass-hover overflow-hidden group flex flex-col h-full">
                <div className="h-48 bg-gradient-to-br from-purple-900/50 to-slate-900 flex items-center justify-center border-b border-white/5 group-hover:from-purple-600/30 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400/50 group-hover:text-purple-300 group-hover:scale-110 transition-all duration-300"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-3">Power BI Dashboard</h3>
                  <p className="text-slate-300 flex-1 leading-relaxed mb-6">
                    Built interactive dashboards for data visualization. Analyzed datasets to generate meaningful insights and used charts and KPIs to improve decision-making.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700/50">
                    <span className="text-xs font-semibold px-2.5 py-1 bg-purple-500/20 text-purple-300 rounded">Power BI</span>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-purple-500/20 text-purple-300 rounded">Data Visualization</span>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-purple-500/20 text-purple-300 rounded">KPI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS SECTION */}
        <section id="certifications" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
              Licenses & <span className="text-gradient">Certifications</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="glass p-6 flex flex-col sm:flex-row gap-5 items-start">
                <div className="flex-shrink-0 p-3 bg-indigo-500/10 rounded-lg text-indigo-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Vtricks Technologies Database Management</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Completed comprehensive coding courses in Java, SQL, Power BI, and Unstructured Database Design & Management.
                  </p>
                </div>
              </div>

              <div className="glass p-6 flex flex-col sm:flex-row gap-5 items-start">
                <div className="flex-shrink-0 p-3 bg-purple-500/10 rounded-lg text-purple-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Innovation & Design Thinking</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Certified by Comedkares Innovation Hub for successfully completing a 6-month course focused on Innovation & Design Thinking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER & CONTACT */}
      <section id="contact" className="py-20 border-t border-white/10 bg-slate-950 mt-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white text-gradient">Let's Connect</h2>
          <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
            I'm currently looking for new opportunities and collaborations. My inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <a href="mailto:vaun@example.com" className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors border border-slate-700">
              <MailIcon /> Email Me
            </a>
            <a href="#linkedin" className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors border border-slate-700">
              <LinkedinIcon /> LinkedIn
            </a>
            <a href="#github" className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors border border-slate-700">
              <GithubIcon /> GitHub
            </a>
          </div>

          <div className="text-sm text-slate-500 italic max-w-xl mx-auto p-4 border border-slate-800 rounded-xl bg-slate-900/50">
            "I hereby declare that all the information provided above is true to the best of my knowledge and belief."
            <br/><span className="not-italic mt-2 inline-block font-semibold">— Vaun Repose, Bangalore</span>
          </div>

          <div className="mt-16 pt-8 border-t border-slate-800 text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Vaun Repose. Built with React & Tailwind CSS.</p>
          </div>
        </div>
      </section>

      {/* Tailwind blob animation custom script inclusion inside CSS would be better, but we used standard Tailwind classes. 
          To make animate-blob work, let's inject a quick style tag or just rely on the static colors since we didn't add it to tailwind.config.js yet.
          The classes will just render as standard static elements. */}
    </div>
  );
}

export default App;
