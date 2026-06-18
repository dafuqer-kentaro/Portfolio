"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'sent'>('idle');
  const [inquiryType, setInquiryType] = useState('Full-Stack Project');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    const formData = new FormData(e.target as HTMLFormElement);
    const object = Object.fromEntries(formData.entries());
    
    // Add the Web3Forms access key and the inquiry type
    object.access_key = "66df9f64-d034-402a-88f6-8eb06a5e2edc";
    object.inquiry_type = inquiryType;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(object)
      });
      
      if (response.ok) {
        setFormState('sent');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => {
          setFormState('idle');
        }, 3000);
      } else {
        console.error("Submission failed");
        setFormState('idle');
      }
    } catch (error) {
      console.error(error);
      setFormState('idle');
    }
  };

  return (
    <>
      <header className="bg-surface/80 backdrop-blur-xl fixed top-0 w-full z-50 border-b border-outline-variant/30">
        <nav className="flex justify-between items-center px-margin-desktop h-20 w-full max-w-container-max mx-auto">
          <div className="flex items-center flex-1">
            <Link href="/" className="font-headline-md text-headline-md tracking-tighter text-primary uppercase whitespace-nowrap">KENT SERENCIO</Link>
          </div>
          <div className="hidden md:flex items-center justify-center gap-12 flex-1">
            <Link className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors" href="/#work">Work</Link>
            <span className="font-label-md text-label-md text-secondary border-b-2 border-secondary pb-1">Contact</span>
          </div>
          <div className="flex-1 flex justify-end">
             {/* Empty spacer to keep links perfectly centered */}
          </div>
        </nav>
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
                <a className="font-display-lg text-xl md:text-2xl lg:text-3xl text-primary hover:text-secondary transition-colors duration-300" href="mailto:k.serencio.549361@umindanao.edu.ph">
                  k.serencio.549361@umindanao.edu.ph
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
                  <input required className="bg-surface border-0 border-b-2 border-outline-variant px-0 py-4 font-body-md text-body-md focus:ring-0 focus:border-primary transition-all" id="name" name="name" type="text" />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="font-label-md text-label-md text-on-surface-variant tracking-wider" htmlFor="email">EMAIL ADDRESS</label>
                  <input required className="bg-surface border-0 border-b-2 border-outline-variant px-0 py-4 font-body-md text-body-md focus:ring-0 focus:border-primary transition-all" id="email" name="email" type="email" />
                </div>
              </div>
              
              <div className="flex flex-col gap-3 mt-4">
                <label className="font-label-md text-label-md text-on-surface-variant tracking-wider">INQUIRY TYPE</label>
                <div className="flex flex-wrap gap-3 pt-2">
                  {['Full-Stack Project', 'Frontend', 'Backend'].map((type) => (
                    <button 
                      key={type}
                      className={`px-8 py-3 rounded-full font-label-md text-label-md transition-all ${inquiryType === type ? 'bg-primary text-on-primary shadow-sm' : 'bg-surface-container text-on-surface-variant hover:bg-primary hover:text-on-primary'}`}
                      type="button"
                      onClick={() => setInquiryType(type)}
                    >{type}</button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="font-label-md text-label-md text-on-surface-variant tracking-wider" htmlFor="message">YOUR MESSAGE</label>
                <textarea required className="bg-surface border-0 border-b-2 border-outline-variant px-0 py-4 font-body-md text-body-md focus:ring-0 focus:border-primary transition-all resize-none outline-none" id="message" name="message" rows={6}></textarea>
              </div>

              <div className="mt-6">
                <button disabled={formState !== 'idle'} className={`w-full px-16 py-6 rounded font-label-md text-label-md uppercase tracking-widest transition-all active:scale-95 flex items-center justify-center gap-4 cursor-pointer disabled:cursor-not-allowed ${formState === 'sent' ? 'bg-secondary text-on-secondary' : 'bg-primary text-on-primary hover:bg-secondary'}`} type="submit">
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
