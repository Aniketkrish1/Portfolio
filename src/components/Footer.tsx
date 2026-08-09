import { Container } from '@/components/ui/Container';

export function Footer() {
  return (
    <footer className="py-12 border-t border-[#1f1f23]">
      <Container>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="font-display text-sm text-[#555558]">
            ANIKET <span className="mx-2">·</span> Bengaluru, India
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 font-mono text-xs text-[#555558]">
            <a href="https://github.com/Aniketkrish1" target="_blank" rel="noopener noreferrer" className="hover:text-[#8a8a8e] transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/aniketpatil11" target="_blank" rel="noopener noreferrer" className="hover:text-[#8a8a8e] transition-colors">LinkedIn</a>
            <a href="https://leetcode.com/u/aniketkrish11" target="_blank" rel="noopener noreferrer" className="hover:text-[#8a8a8e] transition-colors">LeetCode</a>
            <a href="mailto:aniketpatilkrish11@gmail.com" className="hover:text-[#8a8a8e] transition-colors">Email</a>
          </div>
        </div>
        
        <div className="text-center mt-8 text-[10px] text-[#555558] font-mono">
          © 2026
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

