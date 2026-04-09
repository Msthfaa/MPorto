import { Mail } from 'lucide-react';

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5 0-1.4-.5-2.5-1.5-3.5.1-.3.6-1.7-.1-3.5 0 0-1.2-.4-3.9 1.4a12.3 12.3 0 0 0-7 0C3.9 1.1 2.7 1.5 2.7 1.5c-.7 1.8-.2 3.2-.1 3.5-1 1-1.5 2.1-1.5 3.5 0 5 3 6.2 6 6.5-.4.4-.8 1.1-.9 2.2v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-zinc-950 border-t border-zinc-900 text-center relative z-10 w-full flex flex-col items-center justify-center gap-8">
      
      {/* Contact Form Section */}
      <div className="w-full max-w-md mx-auto bg-zinc-900/30 p-6 sm:p-8 rounded-3xl border border-zinc-800/50 backdrop-blur-md">
        <h3 className="text-xl font-semibold text-zinc-100 mb-2">Let's Connect</h3>
        <p className="text-zinc-400 text-sm mb-6">Have an exciting idea? Leave a message below.</p>
        
        {/* Replace the action URL with your Formspree ID or Web3Forms URL */}
        <form action="https://formspree.io/f/YOUR_FORM_ID_HERE" method="POST" className="flex flex-col gap-4 text-left">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-500 mb-1.5 ml-1">Your Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-700/50 focus:border-zinc-700 transition-all" 
              placeholder="hello@example.com" 
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-zinc-500 mb-1.5 ml-1">Message</label>
            <textarea 
              id="message" 
              name="message" 
              required 
              rows={3} 
              className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-700/50 focus:border-zinc-700 transition-all resize-none" 
              placeholder="What's on your mind?"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-zinc-100 text-zinc-950 font-semibold py-3 rounded-xl hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 mt-2"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="flex gap-6 mt-4">
        <a href="https://github.com/Msthfaa" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-100 transition-colors duration-300 hover:scale-110 transform" aria-label="GitHub">
          <GithubIcon size={24} />
        </a>
        <a href="https://linkedin.com/in/musthofaagungdistyawan" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-100 transition-colors duration-300 hover:scale-110 transform" aria-label="LinkedIn">
          <LinkedinIcon size={24} />
        </a>
      </div>
      
      <p className="text-zinc-600 text-sm font-medium tracking-wide">
        © 2026 Musthofa Agung Distyawan
      </p>
    </footer>
  );
}
