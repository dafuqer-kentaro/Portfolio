"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('sent');
      (e.target as HTMLFormElement).reset();
      setTimeout(() => {
        setFormState('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-surface-container h-20 flex justify-between items-center px-margin-mobile md:px-margin-desktop transition-all duration-300">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-headline-md text-headline-md tracking-tighter text-primary uppercase">KENT SERENCIO</Link>
        </div>
        <nav className="nav-web hidden md:flex items-center gap-gutter">
          <Link className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors" href="/#work">Work</Link>
          <span className="font-label-md text-label-md text-secondary border-b-2 border-secondary pb-1">Contact</span>
        </nav>
        <button className="bg-primary text-on-primary px-8 py-3 rounded-lg font-label-md text-label-md hover:bg-secondary transition-all active:scale-95">
          Hire Me
        </button>
      </header>

      <main className="pt-32 pb-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto min-h-screen">
        <div className="flex flex-col lg:flex-row gap-gutter lg:gap-stack-xl items-start">
          
          <div className="lg:w-1/2 flex flex-col gap-stack-md">
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary leading-tight">
              Let's work together.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              Have a project in mind or just want to say hi? I'm currently looking for new full-stack opportunities.
            </p>

            <div className="mt-stack-lg flex flex-col gap-stack-md">
              <div className="flex flex-col">
                <span className="font-label-md text-label-md text-on-surface-variant uppercase mb-2 tracking-widest">Direct Inquiry</span>
                <a className="font-display-lg text-xl md:text-2xl lg:text-3xl text-primary hover:text-secondary transition-colors duration-300" href="mailto:serencio.kent@yahoo.com">
                  serencio.kent@yahoo.com
                </a>
              </div>
              <div className="flex flex-col mt-4">
                <span className="font-label-md text-label-md text-on-surface-variant uppercase mb-4 tracking-widest">Follow</span>
                <div className="flex flex-wrap gap-stack-md">
                  <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors border-b border-transparent hover:border-primary" href="https://www.linkedin.com/in/kent-serencio-575a20417" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors border-b border-transparent hover:border-primary" href="https://github.com/dafuqer-kentaro" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>

            <div className="relative mt-stack-md rounded-xl overflow-hidden aspect-[16/9] shadow-sm hidden lg:block border border-surface-container">
              <Image 
                src="/workspace.png" 
                alt="Developer workspace" 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            </div>

          </div>

          <div className="lg:w-1/2 w-full bg-surface-container-lowest p-8 md:p-16 rounded-xl shadow-[0px_4px_40px_rgba(0,0,0,0.03)] border border-surface-container">
            <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <label className="font-label-md text-label-md text-on-surface-variant tracking-wider" htmlFor="name">FULL NAME</label>
                  <input required className="bg-surface border-0 border-b-2 border-outline-variant px-0 py-4 font-body-md text-body-md focus:ring-0 focus:border-primary transition-all placeholder:text-outline-variant" id="name" name="name" placeholder="John Doe" type="text" />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="font-label-md text-label-md text-on-surface-variant tracking-wider" htmlFor="email">EMAIL ADDRESS</label>
                  <input required className="bg-surface border-0 border-b-2 border-outline-variant px-0 py-4 font-body-md text-body-md focus:ring-0 focus:border-primary transition-all placeholder:text-outline-variant" id="email" name="email" placeholder="john@example.com" type="email" />
                </div>
              </div>
              
              <div className="flex flex-col gap-3 mt-4">
                <label className="font-label-md text-label-md text-on-surface-variant tracking-wider">INQUIRY TYPE</label>
                <div className="flex flex-wrap gap-3 pt-2">
                  <button className="px-8 py-3 rounded-full font-label-md text-label-md bg-primary text-on-primary shadow-sm" type="button">Full-Stack Project</button>
                  <button className="px-8 py-3 rounded-full font-label-md text-label-md bg-surface-container text-on-surface-variant hover:bg-primary hover:text-on-primary transition-all" type="button">Frontend</button>
                  <button className="px-8 py-3 rounded-full font-label-md text-label-md bg-surface-container text-on-surface-variant hover:bg-primary hover:text-on-primary transition-all" type="button">Backend</button>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="font-label-md text-label-md text-on-surface-variant tracking-wider" htmlFor="message">YOUR MESSAGE</label>
                <textarea required className="bg-surface border-0 border-b-2 border-outline-variant px-0 py-4 font-body-md text-body-md focus:ring-0 focus:border-primary transition-all resize-none placeholder:text-outline-variant outline-none" id="message" name="message" placeholder="Tell me about your vision..." rows={6}></textarea>
              </div>

              <div className="mt-6">
                <button disabled={formState !== 'idle'} className={`w-full px-16 py-6 rounded font-label-md text-label-md uppercase tracking-widest transition-all active:scale-95 flex items-center justify-center gap-4 ${formState === 'sent' ? 'bg-secondary text-on-secondary' : 'bg-primary text-on-primary hover:bg-secondary'}`} type="submit">
                  {formState === 'idle' && <>Send Message <span className="material-symbols-outlined text-[20px]">arrow_forward</span></>}
                  {formState === 'submitting' && <><span className="material-symbols-outlined animate-spin text-[20px]">refresh</span> SENDING...</>}
                  {formState === 'sent' && 'MESSAGE SENT!'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <footer className="bg-surface-container-lowest border-t border-outline-variant/30 w-full py-24 px-margin-desktop flex flex-col items-center text-center">
        <div className="max-w-container-max w-full grid grid-cols-12 gap-gutter text-left">
          <div className="col-span-12 lg:col-span-4 mb-12 lg:mb-0">
            <span className="font-headline-md text-headline-md text-primary mb-6 block uppercase">KENT SERENCIO</span>
            <p className="font-body-md text-on-surface-variant max-w-xs">
              Computer Science student and full-stack developer focused on building premium digital products for a global audience.
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
              <a className="text-primary hover:text-secondary transition-colors font-body-md" href="mailto:serencio.kent@yahoo.com">Email Me</a>
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
