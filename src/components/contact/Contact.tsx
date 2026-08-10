'use client';

import { SectionLabel } from '@/components/ui/SectionLabel';
import { Reveal } from '@/components/ui/Reveal';
import { Container } from '@/components/ui/Container';

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <Container>
        <div className="text-center flex flex-col items-center">
          <Reveal>
            <div className="flex justify-center mb-8">
              <SectionLabel label="Let's Connect" />
            </div>
            
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold">
              <div className="text-[#f0ece5]">BUILD</div>
              <div className="text-[#f0ece5]">SOMETHING</div>
              <div className="text-[#3ecf8e]">INTELLIGENT.</div>
            </h2>

            <div className="flex justify-center flex-wrap gap-8 mt-12">
              <a href="https://github.com/Aniketkrish1" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                <svg className="w-5 h-5 text-[#8a8a8e] group-hover:text-[#3ecf8e] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <span className="font-mono text-xs text-[#8a8a8e] group-hover:text-[#3ecf8e] transition-colors">GitHub</span>
              </a>

              <a href="https://www.linkedin.com/in/aniketpatil11" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                <svg className="w-5 h-5 text-[#8a8a8e] group-hover:text-[#3ecf8e] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span className="font-mono text-xs text-[#8a8a8e] group-hover:text-[#3ecf8e] transition-colors">LinkedIn</span>
              </a>

              <a href="mailto:aniketpatilkrish11@gmail.com" className="flex flex-col items-center gap-2 group">
                <svg className="w-5 h-5 text-[#8a8a8e] group-hover:text-[#3ecf8e] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span className="font-mono text-xs text-[#8a8a8e] group-hover:text-[#3ecf8e] transition-colors">Email</span>
              </a>

              <a href="https://leetcode.com/u/aniketkrish11" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                <svg className="w-5 h-5 text-[#8a8a8e] group-hover:text-[#3ecf8e] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.701-1.158-.701-1.863s.234-1.396.701-1.863l4.304-4.303c.466-.467 1.111-.662 1.823-.662s1.357.195 1.824.662l2.697 2.607c.466.467.466 1.26 0 1.726l-1.802 1.777c-.466.467-1.26.467-1.726 0l-.895-.884c-.467-.467-1.26-.467-1.727 0l-2.58 2.58c-.466.467-.466 1.26 0 1.726l2.58 2.58c.466.467 1.26.467 1.726 0l.895-.884c.466-.467 1.26-.467 1.726 0l1.802 1.777c.466.467.466 1.26 0 1.726z"></path>
                </svg>
                <span className="font-mono text-xs text-[#8a8a8e] group-hover:text-[#3ecf8e] transition-colors">LeetCode</span>
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
