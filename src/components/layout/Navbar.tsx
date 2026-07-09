"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
];

const SIDE_MENU_LINKS = [
  { num: "01", name: "About Us", href: "#" },
  { num: "02", name: "Contact Us", href: "#" },
  { num: "03", name: "Join Waitlist", href: "/register" },
  { num: "04", name: "LinkedIn", href: "#" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled && !isMobileMenuOpen ? "glass-panel py-3 border-b border-border/50 shadow-lg" : "bg-transparent py-5 border-transparent"
        )}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group z-50">
              <div className="w-8 h-8 relative flex items-center justify-center group-hover:opacity-80 transition-opacity rounded-full overflow-hidden">
                <Image src="/logo.jpg" alt="Scalerix Logo" fill className="object-cover" />
              </div>
              <span className="font-heading font-bold text-lg tracking-tight text-white">
                Scalerix
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-text-secondary hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/register"
                className="btn-primary"
              >
                Join Waitlist
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2 z-50 relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Full Screen Side Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.5 }}
            className="fixed inset-0 bg-[#0a0a0a] z-40 flex flex-col justify-center px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 mt-12">
              {SIDE_MENU_LINKS.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between text-2xl font-light text-white group border-b border-white/5 pb-6 pt-2"
                  >
                    <div className="flex items-center gap-6">
                      <span className="text-text-secondary/60 text-lg font-mono">{item.num}</span>
                      <span className="group-hover:translate-x-2 transition-transform duration-300">{item.name}</span>
                    </div>
                    <span className="text-text-secondary/40 font-light text-xl">+</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
