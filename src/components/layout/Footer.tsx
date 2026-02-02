import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NAVIGATION, PRODUCTS, DIVISIONS, CONTACT_INFO } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8 border-t border-border mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <Link href="/" className="inline-block mb-6">
               {/* Using black/dark logo for contrast if available, or text */}
               <Image 
                src="/images/logo-blue.png" 
                alt="G&G Filtration" 
                width={150} 
                height={50} 
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-muted-foreground mb-6">
              Výrobce technologií pro průmyslové odsávání a filtraci vzduchu.
            </p>
            <div className="text-sm text-muted-foreground">
              <p>{CONTACT_INFO.address}</p>
              <p>{CONTACT_INFO.email}</p>
            </div>
          </div>

          {/* Core Products */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Produkty</h3>
            <ul className="space-y-3">
              {PRODUCTS.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/aplikace" className="text-muted-foreground hover:text-primary transition-colors">
                  Aplikace
                </Link>
              </li>
            </ul>
          </div>

          {/* Divisions */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Naše divize</h3>
            <ul className="space-y-3">
              {DIVISIONS.map((item) => (
                <li key={item.name}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex flex-col">
                    <span className="font-medium">{item.name}</span>
                    <span className="text-xs">{item.description}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">O společnosti</h3>
            <ul className="space-y-3">
              {NAVIGATION.filter(n => ['Reference', 'O nás', 'Partneři', 'Kontakt'].includes(n.name)).map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} G&G filtration, s.r.o. Všechna práva vyhrazena.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <Link href="/zasady-ochrany-osobnich-udaju" className="hover:text-foreground">Zásady ochrany osobních údajů</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
