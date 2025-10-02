'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOverDarkSection, setIsOverDarkSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Check if navbar is over a dark section
      const navbarHeight = 96; // h-24 = 96px
      const elements = document.elementsFromPoint(window.innerWidth / 2, navbarHeight);
      const hasDarkSection = elements.some(el =>
        el.classList.contains('bg-navy-950') ||
        el.closest('.bg-navy-950')
      );
      setIsOverDarkSection(hasDarkSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/ecosystems/croatia', label: 'Croatian Tech' },
    { href: '/ecosystems/france', label: 'French Tech' },
    { href: '/events', label: 'Events' },
    { href: '/community', label: 'Community' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isOverDarkSection
          ? 'bg-navy-950/90 backdrop-blur-md shadow-md'
          : isScrolled
            ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md'
            : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo-horizontal.png"
              alt="French Innovation Club Croatia"
              width={240}
              height={68}
              className="h-17 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative transition-colors duration-200 font-medium py-2",
                    isOverDarkSection
                      ? "text-white hover:text-primary-300"
                      : "text-foreground hover:text-primary",
                    isActive && (isOverDarkSection ? "text-primary-300" : "text-primary"),
                    isActive && `after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:rounded-full ${isOverDarkSection ? 'after:bg-primary-300' : 'after:bg-primary'}`
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "md:hidden transition-colors",
              isOverDarkSection
                ? "text-white hover:text-primary-300"
                : "text-foreground hover:text-primary"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg">
            <div className="flex flex-col space-y-2 p-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-foreground hover:text-primary transition-colors duration-200 font-medium py-2 px-3 rounded-lg",
                      isActive && "text-primary bg-primary/10"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;