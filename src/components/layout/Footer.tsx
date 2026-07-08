import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 relative rounded-full overflow-hidden">
              <Image src="/logo.jpg" alt="Scalerix Logo" fill className="object-cover" />
            </div>
            <span className="font-heading font-bold text-lg text-white">
              Scalerix
            </span>
          </Link>
          <p className="text-text-secondary text-sm max-w-xs text-center md:text-left font-light">
            AI-Powered Career Guidance. Start your learning journey with confidence.
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm text-text-secondary">
          <Link href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <a href="mailto:support@scalerix.com" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-white/5 text-center text-sm text-text-secondary">
        &copy; {new Date().getFullYear()} Scalerix. All rights reserved.
      </div>
    </footer>
  );
}
