import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-surface/80 backdrop-blur-xl fixed top-0 w-full z-50 border-b border-outline-variant/30">
        <nav className="flex justify-between items-center px-margin-desktop h-20 w-full max-w-container-max mx-auto">
          <div className="flex items-center flex-1">
            <a className="font-headline-md text-headline-md tracking-tighter text-primary uppercase whitespace-nowrap" href="#">KENT SERENCIO</a>
          </div>
          <div className="hidden md:flex items-center justify-center gap-12 flex-1">
            <a className="relative font-label-md text-label-md text-secondary border-b-2 border-secondary pb-1 transition-all duration-300 ease-in-out" href="#work">Work</a>
            <a className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors" href="/contact">Contact</a>
          </div>
          <div className="flex-1 flex justify-end">
            <a href="/contact" className="bg-primary text-on-primary px-8 py-3 rounded-full font-label-md hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-secondary/20">
              Hire Me
            </a>
          </div>
        </nav>
      </header>
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="min-h-[90vh] flex flex-col justify-center px-margin-desktop max-w-container-max mx-auto py-stack-xl">
          <div className="grid grid-cols-12 gap-gutter">
            <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
              <h1 className="font-display-lg text-display-lg mb-stack-md animate-fade-in">
                About Me
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg leading-relaxed max-w-2xl">
                I'm Kent Serencio, a passionate Computer Science student based in Davao City. I am eager to learn and grow in full-stack development, applying my problem-solving skills and hands-on experience to build reliable backend systems and create meaningful digital experiences. I am looking forward to gaining real-world experience and continuously improving my skills through practical opportunities.
              </p>
              <div className="flex flex-row gap-6">
                <a href="#work" className="bg-primary text-on-primary px-10 py-5 rounded font-label-md hover:bg-secondary transition-all duration-300 flex items-center justify-center gap-3 group text-lg">
                  View Projects
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_forward</span>
                </a>
                <a href="/contact" className="bg-transparent border border-primary/20 text-primary px-10 py-5 rounded font-label-md hover:bg-primary hover:text-on-primary transition-all duration-300 flex items-center justify-center text-lg">
                  Contact Me
                </a>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5 flex items-center justify-center lg:justify-end animate-fade-in">
              <div className="w-full max-w-md aspect-square overflow-hidden rounded-xl border border-outline-variant/30 relative bg-surface-container-low group">
                <Image 
                  src="/profile3.jpg" 
                  alt="Kent Serencio Profile" 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section className="px-margin-desktop max-w-container-max mx-auto pb-stack-xl">
          <div className="flex justify-between items-baseline mb-stack-lg border-b border-outline-variant/30 pb-8">
            <h2 className="font-headline-lg text-headline-lg">Capabilities</h2>
            <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-[0.2em]">Tech Stack</span>
          </div>
          <div className="flex flex-wrap gap-4">
            {["React.js", "Next.js", "Laravel", "Python", "PHP", "TypeScript", "Tailwind CSS", "FastAPI", "MySQL", "Firebase", "SimPy"].map((skill) => (
              <span key={skill} className="bg-surface-container text-on-surface-variant px-6 py-3 rounded-full font-label-md text-sm uppercase tracking-wider hover:bg-surface-variant transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Featured Work Section */}
        <section id="work" className="px-margin-desktop max-w-container-max mx-auto pb-stack-xl">
          <div className="flex justify-between items-baseline mb-stack-lg border-b border-outline-variant/30 pb-8">
            <h2 className="font-headline-lg text-headline-lg">Selected Projects</h2>
            <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-[0.2em]">Portfolio / {new Date().getFullYear()}</span>
          </div>
          
          <div className="grid grid-cols-12 gap-x-gutter gap-y-stack-xl">
            {/* Project 1 */}
            <div className="project-card group cursor-pointer col-span-12 lg:col-span-8">
              <div className="overflow-hidden rounded-xl bg-surface-container relative mb-8 border border-outline-variant/10">
                {/* Image 1 (POS - visible by default, sets container height) */}
                <Image src="/projects/anvy.png" alt="Anvys Hub POS" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="relative z-10 block opacity-100 group-hover:opacity-0 transition-opacity duration-700 ease-in-out" />
                
                {/* Image 2 (Dashboard - hidden by default, revealed on hover) */}
                <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out overflow-hidden">
                  <Image src="/projects/anvy1.png" alt="Anvys Hub Dashboard" fill className="object-cover object-top" />
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div className="max-w-2xl">
                  <div className="flex gap-3 mb-4">
                    <span className="bg-surface-container text-on-surface-variant px-4 py-1.5 rounded-full font-label-md text-xs uppercase tracking-wider">Full-Stack</span>
                    <span className="bg-surface-container text-on-surface-variant px-4 py-1.5 rounded-full font-label-md text-xs uppercase tracking-wider">Laravel & React</span>
                  </div>
                  <h3 className="font-headline-md text-4xl group-hover:text-secondary transition-colors">Anvys Hub</h3>
                  <p className="font-body-md text-body-lg text-on-surface-variant mt-4">
                    Full-stack enterprise management system with real-time POS, automated payroll, and Zero-Trust IP Geofencing.
                  </p>
                </div>
                <span className="material-symbols-outlined text-4xl opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-20px] group-hover:translate-x-0">arrow_outward</span>
              </div>
            </div>

            {/* Project 2: Queuing Simulator */}
            <div className="project-card group cursor-pointer col-span-12 lg:col-span-6">
              <div className="overflow-hidden rounded-xl bg-surface-container mb-8 border border-outline-variant/10">
                 <Image src="/projects/cafe.png" alt="Queuing Simulator" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="scale-100 group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>
              <div className="mt-8">
                <div className="flex gap-3 mb-4">
                  <span className="bg-surface-container text-on-surface-variant px-4 py-1.5 rounded-full font-label-md text-xs uppercase tracking-wider">Python</span>
                  <span className="bg-surface-container text-on-surface-variant px-4 py-1.5 rounded-full font-label-md text-xs uppercase tracking-wider">Simulation</span>
                </div>
                <h3 className="font-headline-md text-3xl group-hover:text-secondary transition-colors">Internet Cafe Queuing Simulator</h3>
                <p className="font-body-md text-on-surface-variant mt-2 max-w-md">
                  Full-stack simulation engine to model customer queuing dynamics and hardware efficiency.
                </p>
              </div>
            </div>

            {/* Project 3: GYMRAI */}
            <div className="project-card group cursor-pointer col-span-12 lg:col-span-6">
              <div className="overflow-hidden rounded-xl bg-surface-container mb-8 border border-outline-variant/10">
                 <Image src="/projects/gymrai.png" alt="GYMRAI" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="scale-100 group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>
              <div className="mt-8">
                <div className="flex gap-3 mb-4">
                  <span className="bg-surface-container text-on-surface-variant px-4 py-1.5 rounded-full font-label-md text-xs uppercase tracking-wider">Next.js</span>
                  <span className="bg-surface-container text-on-surface-variant px-4 py-1.5 rounded-full font-label-md text-xs uppercase tracking-wider">TypeScript</span>
                </div>
                <h3 className="font-headline-md text-3xl group-hover:text-secondary transition-colors">GYMRAI</h3>
                <p className="font-body-md text-on-surface-variant mt-2 max-w-md">
                  Elite performance tracking application featuring a highly responsive, custom-designed UI and real-time metric visualization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="px-margin-desktop max-w-container-max mx-auto pb-stack-xl">
          <div className="flex justify-between items-baseline mb-stack-lg border-b border-outline-variant/30 pb-8">
            <h2 className="font-headline-lg text-headline-lg">Certifications</h2>
            <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-[0.2em]">Credentials</span>
          </div>
          
          <div className="grid grid-cols-12 gap-x-gutter gap-y-stack-xl">
            {/* Certification 1 */}
            <div className="project-card group cursor-pointer col-span-12 lg:col-span-6">
              <div className="aspect-[4/3] bg-surface-container rounded-lg mb-6 overflow-hidden relative group">
                <Image src="/certificates/Cybersecurity.png" alt="Cybersecurity Certificate" fill className="object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="mt-8 flex justify-between items-start">
                <div>
                  <div className="flex gap-3 mb-4">
                    <span className="bg-surface-container text-on-surface-variant px-4 py-1.5 rounded-full font-label-md text-xs uppercase tracking-wider">Certiport</span>
                    <span className="bg-surface-container text-on-surface-variant px-4 py-1.5 rounded-full font-label-md text-xs uppercase tracking-wider">Security</span>
                  </div>
                  <h3 className="font-headline-md text-2xl group-hover:text-secondary transition-colors leading-snug">Information Technology Specialist in Cybersecurity</h3>
                </div>
                <a href="/certificates/Cybersecurity.pdf" target="_blank" rel="noopener noreferrer" className="ml-4 flex-shrink-0 bg-on-surface text-surface px-4 py-2 rounded font-label-md text-sm hover:bg-secondary transition-colors flex items-center gap-2 cursor-pointer">
                  View <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              </div>
            </div>

            {/* Certification 2 */}
            <div className="project-card group cursor-pointer col-span-12 lg:col-span-6">
              <div className="aspect-[4/3] bg-surface-container rounded-lg mb-6 overflow-hidden relative group">
                <Image src="/certificates/Databases.png" alt="Databases Certificate" fill className="object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="mt-8 flex justify-between items-start">
                <div>
                  <div className="flex gap-3 mb-4">
                    <span className="bg-surface-container text-on-surface-variant px-4 py-1.5 rounded-full font-label-md text-xs uppercase tracking-wider">Certiport</span>
                    <span className="bg-surface-container text-on-surface-variant px-4 py-1.5 rounded-full font-label-md text-xs uppercase tracking-wider">Data</span>
                  </div>
                  <h3 className="font-headline-md text-2xl group-hover:text-secondary transition-colors leading-snug">Information Technology Specialist in Databases</h3>
                </div>
                <a href="/certificates/Databases.pdf" target="_blank" rel="noopener noreferrer" className="ml-4 flex-shrink-0 bg-on-surface text-surface px-4 py-2 rounded font-label-md text-sm hover:bg-secondary transition-colors flex items-center gap-2 cursor-pointer">
                  View <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-lowest border-t border-outline-variant/30 w-full py-24 px-margin-desktop flex flex-col items-center text-center">
        <div className="max-w-container-max w-full grid grid-cols-12 gap-gutter text-left">
          <div className="col-span-12 lg:col-span-4 mb-12 lg:mb-0">
            <span className="font-headline-md text-headline-md text-primary mb-6 block uppercase">KENT SERENCIO</span>
            <p className="font-body-md text-on-surface-variant max-w-xs">
              Computer Science student passionate about technology, eager to learn, and seeking real-world experience in developing modern and meaningful digital solutions.
            </p>
          </div>
          
          <div className="col-span-6 lg:col-span-2 lg:col-start-7">
            <h4 className="font-label-md uppercase tracking-widest text-xs mb-8 text-on-surface-variant">Social</h4>
            <div className="flex flex-col gap-4">
              <a className="text-primary hover:text-secondary transition-colors font-body-md" href="https://www.linkedin.com/in/kent-serencio-575a20417" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a className="text-primary hover:text-secondary transition-colors font-body-md" href="https://github.com/dafuqer-kentaro" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
          
          <div className="col-span-6 lg:col-span-2">
            <h4 className="font-label-md uppercase tracking-widest text-xs mb-8 text-on-surface-variant">Contact</h4>
            <div className="flex flex-col gap-4">
              <a className="text-primary hover:text-secondary transition-colors font-body-md" href="mailto:k.serencio.549361@umindanao.edu.ph">Email Me</a>
              <a className="text-primary hover:text-secondary transition-colors font-body-md" href="#">Book a Call</a>
            </div>
          </div>

          <div className="col-span-12 mt-20 pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body-md text-sm text-on-surface-variant">© {new Date().getFullYear()} Kent E. Serencio. All rights reserved.</p>
            <p className="font-body-md text-sm text-on-surface-variant italic">Crafted with precision & care.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
