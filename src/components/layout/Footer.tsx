import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 w-fit">
              <div className="w-8 h-8 relative flex items-center justify-center">
                <img src="/logo.jpg" alt="Scalerix Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-white">
                Scalerix
              </span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed mb-6 max-w-xs">
              The premium AI-powered career guidance platform designed to help you navigate, plan, and scale your professional journey with precision.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-secondary hover:text-white hover:border-white transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-secondary hover:text-white hover:border-white transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-secondary hover:text-white hover:border-white transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-medium mb-6">Platform</h4>
            <ul className="space-y-4">
              <li><Link href="#features" className="text-text-secondary hover:text-white transition-colors text-sm">Features</Link></li>
              <li><Link href="#journey" className="text-text-secondary hover:text-white transition-colors text-sm">Career Journey</Link></li>
              <li><Link href="#dashboard" className="text-text-secondary hover:text-white transition-colors text-sm">Dashboard</Link></li>
              <li><Link href="#pricing" className="text-text-secondary hover:text-white transition-colors text-sm">Pricing</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-medium mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><Link href="#blog" className="text-text-secondary hover:text-white transition-colors text-sm">Blog</Link></li>
              <li><Link href="#community" className="text-text-secondary hover:text-white transition-colors text-sm">Community</Link></li>
              <li><Link href="#faq" className="text-text-secondary hover:text-white transition-colors text-sm">FAQ</Link></li>
              <li><Link href="#help" className="text-text-secondary hover:text-white transition-colors text-sm">Help Center</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-medium mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-text-secondary text-sm">
                <Mail size={18} className="shrink-0 mt-0.5" />
                <span>hello@scalerix.com</span>
              </li>
              <li className="flex items-start gap-3 text-text-secondary text-sm">
                <MapPin size={18} className="shrink-0 mt-0.5" />
                <span>123 Innovation Drive, Tech District, CA 94103</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-secondary text-sm">
            © {new Date().getFullYear()} Scalerix. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-text-secondary hover:text-white transition-colors text-sm">Privacy Policy</Link>
            <Link href="#" className="text-text-secondary hover:text-white transition-colors text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
