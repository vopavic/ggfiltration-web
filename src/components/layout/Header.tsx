'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { NAVIGATION, PRODUCTS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border h-20">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <Image 
            src="/images/logo-blue.png" 
            alt="G&G Filtration" 
            width={180} 
            height={60} 
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAVIGATION.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link 
            href="/kontakt"
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded hover:bg-blue-700 transition-colors font-semibold"
          >
            Poptat řešení
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 right-0 bg-white border-b border-border p-4 shadow-lg md:hidden"
          >
            <nav className="flex flex-col space-y-4">
              {NAVIGATION.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className="text-lg font-medium text-foreground py-2 border-b border-border/50"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                href="/kontakt"
                className="bg-primary text-primary-foreground px-6 py-3 rounded text-center font-semibold mt-4"
                onClick={() => setIsOpen(false)}
              >
                Poptat řešení
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
