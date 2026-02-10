"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Wind, 
  Droplets, 
  Factory, 
  ShieldCheck, 
  Zap, 
  Settings, 
  Building2, 
  Mail, 
  Phone,
  CheckCircle2,
  Globe
} from "lucide-react";
import { PRODUCTS, DIVISIONS } from "@/lib/constants";
import { motion } from "framer-motion";
import { ReferenceSlider } from "@/components/sections/ReferenceSlider";
import { LeadPopup } from "@/components/ui/LeadPopup";

export default function HomeClient() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans">
      <LeadPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
        sourcePage="Homepage" 
      />

      {/* 1. HERO SECTION */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image/Video */}
        <div className="absolute inset-0 z-0 bg-slate-900">
           <Image 
             src="/images/hero.png" 
             alt="Průmyslová filtrace G&G" 
             fill
             className="object-cover opacity-60"
             priority
           />
           <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 backdrop-blur-sm mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              <span className="text-blue-200 font-medium text-sm tracking-wide uppercase">Lídr v průmyslové filtraci</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tight drop-shadow-2xl">
              ČISTÝ VZDUCH <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                PRO VÁŠ PRŮMYSL
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-2xl leading-relaxed font-light border-l-4 border-blue-500 pl-6">
              Výroba, projekce a montáž filtračních technologií na klíč. 
              Garantujeme emisní limity a dlouhou životnost zařízení.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setIsPopupOpen(true)}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-lg overflow-hidden transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/40"
              >
                <span className="relative z-10 flex items-center">
                  Nezávazná poptávka <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <Link 
                href="/produkty" 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border-2 border-white/30 rounded-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                Přehled produktů
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block text-white/50">
           <ArrowRight className="w-6 h-6 rotate-90" />
        </div>
      </section>

      {/* 2. HLAVNÍ SEGMENTY (Grid) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">KLÍČOVÉ OBLASTI</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">Specializujeme se na náročné aplikace v těžké průmyslu a energetice.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {/* Card 1: Suchá filtrace */}
             <Link href="/sucha-filtrace-prachu" className="group relative block h-[400px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
               <Image 
                 src="/sucha-filtrace-prachu/1.jpg" 
                 alt="Suchá filtrace"
                 fill
                 className="object-cover group-hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
               <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 text-white group-hover:bg-white group-hover:text-blue-600 transition-colors">
                     <Wind className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Suchá filtrace prachu</h3>
                  <p className="text-slate-300 mb-4 line-clamp-2">Filtrační jednotky G&G JET BAG pro odprášení svařoven, brusek a pískování.</p>
                  <span className="text-blue-400 font-bold flex items-center group-hover:text-white transition-colors">
                    Více informací <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </span>
               </div>
             </Link>

             {/* Card 2: Vysokoteplotní filtrace */}
             <Link href="/vysokoteplotni-filtrace" className="group relative block h-[400px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
               <Image 
                 src="/vysokoteplotni-filtrace/hero-bg.jpg" 
                 alt="Vysokoteplotní filtrace"
                 fill
                 className="object-cover group-hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
               <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4 text-white group-hover:bg-white group-hover:text-orange-600 transition-colors">
                     <Factory className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Vysokoteplotní filtrace</h3>
                  <p className="text-slate-300 mb-4 line-clamp-2">Keramické filtry pro teploty až 900°C s integrovaným odsířením a DeNOx.</p>
                  <span className="text-orange-400 font-bold flex items-center group-hover:text-white transition-colors">
                    Více informací <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </span>
               </div>
             </Link>

             {/* Card 3: Potrubní systémy / Mokrá - Let's go with Piping as it is new */}
             <Link href="/prumyslove-potrubni-systemy" className="group relative block h-[400px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
               <Image 
                 src="/prumyslove-potrubni-systemy/hero-bg.jpg" 
                 alt="Potrubní systémy"
                 fill
                 className="object-cover group-hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
               <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4 text-white group-hover:bg-white group-hover:text-indigo-600 transition-colors">
                     <Settings className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Potrubní systémy</h3>
                  <p className="text-slate-300 mb-4 line-clamp-2">Výroba a montáž těžkého svařovaného potrubí pro transport abraziv.</p>
                  <span className="text-indigo-400 font-bold flex items-center group-hover:text-white transition-colors">
                    Více informací <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </span>
               </div>
             </Link>
          </div>

          <div className="mt-12 text-center">
             <Link href="/produkty" className="inline-flex items-center text-slate-600 font-bold hover:text-blue-600 text-lg transition-colors">
                Zobrazit všechny technologie <ArrowRight className="ml-2 w-5 h-5" />
             </Link>
          </div>
        </div>
      </section>

      {/* 3. WHY G&G */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
         <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                     TECHNOLOGIE, KTERÝM MŮŽETE <span className="text-blue-500">DŮVĚŘOVAT</span>.
                  </h2>
                  <div className="space-y-6 text-slate-300 text-lg">
                     <p>
                        Nejsme jen dodavatelé. Jsme výrobci s vlastním inženýringem, projekcí a montážními týmy. 
                        Každý projekt řešíme komplexně od prvotního měření až po garanční servis.
                     </p>
                  </div>
                  
                  <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                     {[
                        "Vlastní výroba v ČR a SK",
                        "20+ let zkušeností",
                        "Garance emisních limitů",
                        "Servis 24/7"
                     ].map((item, i) => (
                        <div key={i} className="flex items-center space-x-3 bg-white/5 p-4 rounded-lg border border-white/10">
                           <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                           <span className="font-semibold">{item}</span>
                        </div>
                     ))}
                  </div>

                  <div className="mt-10">
                     <Link href="/o-nas" className="text-blue-400 font-bold hover:text-white transition-colors inline-flex items-center">
                        Více o společnosti <ArrowRight className="ml-2 w-4 h-4" />
                     </Link>
                  </div>
               </div>
               
               <div className="relative">
                  <div className="absolute -inset-4 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 shadow-2xl">
                     <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-800 p-6 rounded-xl text-center">
                           <div className="text-4xl font-bold text-white mb-1">500+</div>
                           <div className="text-sm text-slate-400">Realizací</div>
                        </div>
                        <div className="bg-slate-800 p-6 rounded-xl text-center">
                           <div className="text-4xl font-bold text-blue-400 mb-1">4</div>
                           <div className="text-sm text-slate-400">Divize</div>
                        </div>
                        <div className="bg-slate-800 p-6 rounded-xl text-center">
                           <div className="text-4xl font-bold text-cyan-400 mb-1">3</div>
                           <div className="text-sm text-slate-400">Výrobní závody</div>
                        </div>
                        <div className="bg-slate-800 p-6 rounded-xl text-center">
                           <div className="text-4xl font-bold text-white mb-1">100%</div>
                           <div className="text-sm text-slate-400">Úspěšnost garancí</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 4. REFERENCE SLIDER */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">VYBRANÉ REFERENCE</h2>
              <p className="text-slate-500 text-lg">Projekty, na které jsme hrdí.</p>
           </div>
           
           <ReferenceSlider />
           
           <div className="mt-12 text-center">
               <Link 
                  href="/reference" 
                  className="px-8 py-4 bg-white border border-slate-200 text-slate-900 font-bold rounded-lg hover:bg-slate-50 hover:border-blue-500 transition-all shadow-sm"
               >
                  Zobrazit všech 500+ realizací
               </Link>
           </div>
        </div>
      </section>

      {/* 5. DIVISIONS */}
      <section className="py-24 bg-white overflow-hidden">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
               <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">SKUPINA G&G</h2>
                  <p className="text-slate-500 text-lg">Komplexní zázemí pro vaše projekty</p>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {DIVISIONS.map((division, idx) => {
                  // Assign icons dynamically based on index for variety
                  const Icon = [Globe, Settings, Factory, Building2][idx % 4];
                  return (
                     <a 
                        key={division.name} 
                        href={division.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-slate-50 rounded-xl p-8 border border-slate-100 hover:border-blue-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-64 justify-between"
                     >
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm text-slate-400 group-hover:text-blue-600 transition-colors">
                           <Icon className="w-6 h-6" />
                        </div>
                        <div>
                           <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{division.name}</h3>
                           <p className="text-sm text-slate-500 font-medium">{division.description}</p>
                        </div>
                        <div className="flex items-center text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-blue-600 transition-colors">
                           Navštívit web <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </div>
                     </a>
                  );
               })}
            </div>
         </div>
      </section>

      {/* 6. CTA FOOTER */}
      <section className="py-24 bg-blue-800 relative overflow-hidden text-center text-white">
         <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
         <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-blue-900"></div>
         
         <div className="container relative z-10 mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
               HLEDÁTE ŘEŠENÍ PRO <br />PROMYSLOVOU FILTRACI?
            </h2>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
               Spojte se s námi. Navrhneme technologii, která splní vaše požadavky i legislativní limity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
               <button 
                  onClick={() => setIsPopupOpen(true)}
                  className="px-10 py-5 bg-white text-blue-900 font-bold rounded-xl shadow-2xl hover:bg-blue-50 hover:scale-105 transition-all duration-300"
               >
                  Odeslat nezávaznou poptávku
               </button>
               <Link 
                  href="/kontakt"
                  className="px-10 py-5 bg-transparent border-2 border-white/20 text-white font-bold rounded-xl hover:bg-white/10 hover:border-white transition-all duration-300"
               >
                  Kontakty a pobočky
               </Link>
            </div>
         </div>
      </section>

    </div>
  );
}
