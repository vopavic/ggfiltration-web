'use client';

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Wind, Droplets, Factory, ShieldCheck, Zap, Settings, Truck, Building2 } from "lucide-react";
import { PRODUCTS, DIVISIONS } from "@/lib/constants";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center text-white">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero.png" 
            alt="Průmyslová filtrace" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Průmyslové odsávání <br />a filtrace vzduchu
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
              Vyrábíme technologie s vysokou účinností a dlouhou životností. 
              Chráníme pracovní prostředí i přírodu.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/produkty" 
                className="bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded font-semibold text-lg transition-all flex items-center shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Naše produkty <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/kontakt" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Nezávazná poptávka
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section - CEZ Style (Clean blocks) */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Technologie pro čistější průmysl
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Specializujeme se na návrh, výrobu a montáž filtračních zařízení pro průmyslové provozy.
                  Naše řešení jsou navržena tak, aby splňovala nejpřísnější emisní limity a zajišťovala
                  zdravé pracovní prostředí.
                </p>
                <p>
                  Díky vlastní výrobě a týmu zkušených inženýrů dokážeme reagovat na specifické požadavky
                  a dodávat technologie na klíč.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="flex items-start">
                  <ShieldCheck className="text-primary h-8 w-8 mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold">Spolehlivost</h4>
                    <p className="text-sm text-muted-foreground">Ověřená řešení a kvalitní komponenty</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Wind className="text-primary h-8 w-8 mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold">Účinnost</h4>
                    <p className="text-sm text-muted-foreground">Vysoká efektivita filtrace &gt;99%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] bg-secondary rounded-lg overflow-hidden grid grid-cols-2 gap-1 p-1 shadow-inner">
               <div className="bg-white rounded h-full relative group overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                  <Settings className="text-primary/20 h-24 w-24 group-hover:scale-110 transition-transform duration-500" />
                  <span className="absolute bottom-4 left-4 font-bold text-muted-foreground">Engineering</span>
               </div>
               <div className="bg-white rounded h-full relative group overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                  <Factory className="text-primary/20 h-24 w-24 group-hover:scale-110 transition-transform duration-500" />
                  <span className="absolute bottom-4 left-4 font-bold text-muted-foreground">Výroba</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Products Grid */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Naše klíčové technologie</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dodáváme kompletní sortiment pro průmyslovou filtraci od mokrých separátorů po sofistikované systémy pro záchyt VOC látek.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mokrá separace */}
            <Link href="/mokra-separace-prachu" className="group">
              <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all p-8 h-full border border-border group-hover:border-primary/50 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Droplets className="h-40 w-40 text-primary" />
                </div>
                <div className="h-16 w-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Droplets className="h-8 w-8 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Mokrá separace prachu</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Vysokoúčinné mokré separátory s automatickým vyhrabováním sedimentů. Ideální pro hořlavé a explozivní prachy (hliník, titan, hořčík).
                </p>
                <div className="mt-auto pt-4 border-t border-border/50">
                  <span className="text-primary font-bold flex items-center group-hover:translate-x-2 transition-transform">
                    Zjistit více <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>

            {/* VOC */}
            <Link href="/odsavani-voc-zapachu" className="group">
              <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all p-8 h-full border border-border group-hover:border-primary/50 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Wind className="h-40 w-40 text-primary" />
                </div>
                <div className="h-16 w-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Wind className="h-8 w-8 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Odsávání VOC látek</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Systémy snižování VOC látek, katalytické oxidace a adsorpce pro chemický průmysl, lakovny a automotive.
                </p>
                <div className="mt-auto pt-4 border-t border-border/50">
                  <span className="text-primary font-bold flex items-center group-hover:translate-x-2 transition-transform">
                    Zjistit více <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Suchá filtrace */}
            <Link href="/sucha-filtrace-prachu" className="group">
              <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all p-8 h-full border border-border group-hover:border-primary/50 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Factory className="h-40 w-40 text-primary" />
                </div>
                <div className="h-16 w-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Factory className="h-8 w-8 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Suchá filtrace prachu</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Textilní filtrační jednotky s pulzní regenerací. Univerzální použití pro svařování, broušení, a manipulaci se sypkými hmotami.
                </p>
                <div className="mt-auto pt-4 border-t border-border/50">
                  <span className="text-primary font-bold flex items-center group-hover:translate-x-2 transition-transform">
                    Zjistit více <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Divisions Section */}
      <section className="py-20 bg-background text-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-border pb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Divize G&G</h2>
              <p className="text-muted-foreground text-lg">Komplexní služby pod jednou střechou</p>
            </div>
            <Link href="/kontakt" className="text-primary font-semibold hover:underline mt-4 md:mt-0 flex items-center">
              Kontaktovat centrálu <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DIVISIONS.map((division, idx) => {
              const Icon = [Zap, Settings, Factory, Building2][idx % 4];
              return (
                <a 
                  key={division.name} 
                  href={division.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-muted/50 rounded-lg p-8 hover:bg-white hover:shadow-lg transition-all border border-border hover:border-primary/50 group flex flex-col h-64 justify-between"
                >
                  <div className="text-primary/80 group-hover:text-primary transition-colors">
                    <Icon className="h-10 w-10" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{division.name}</h3>
                    <p className="text-sm text-muted-foreground">{division.description}</p>
                  </div>
                  <div className="flex items-center text-xs font-bold uppercase tracking-wider text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all">
                    Navštívit web <ArrowRight className="ml-1 h-3 w-3" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#054da2] text-white relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12" />
        <div className="absolute bottom-0 left-0 w-1/4 h-full bg-white/5 -skew-x-12" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Potřebujete vyřešit odsávání ve vaší firmě?</h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Navrhneme řešení na míru vašemu provozu. Zdarma a nezávazně.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link 
              href="/kontakt" 
              className="bg-white text-[#054da2] px-10 py-5 rounded font-bold text-lg hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
               Kontaktujte nás
            </Link>
            <Link 
              href="/reference" 
              className="bg-[#054da2] border border-white/30 text-white px-10 py-5 rounded font-bold text-lg hover:bg-white/10 transition-all"
            >
               Zobrazit reference
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
