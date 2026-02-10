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
  Filter,
  Search,
  CheckCircle2,
  Globe
} from "lucide-react";
import { LeadPopup } from "@/components/ui/LeadPopup";

// Definice produktů
const ALL_PRODUCTS = [
   {
      id: "sucha",
      title: "Suchá filtrace prachu",
      slug: "sucha-filtrace-prachu",
      category: "filtrace",
      description: "Textilní filtrační jednotky s automatickou regenerací G&G JET BAG. Robustní řešení pro nejtěžší provozy.",
      image: "/sucha-filtrace-prachu/1.jpg", 
   },
   {
      id: "vysokoteplotni",
      title: "Vysokoteplotní filtrace",
      slug: "vysokoteplotni-filtrace",
      category: "filtrace",
      description: "Pokročilé systémy s keramickými elementy pro teploty až 900 °C. Komplexní čištění spalin: odprášení + odsíření + DeNOx.",
      image: "/vysokoteplotni-filtrace/hero-bg.jpg",
   },
   {
      id: "potrubi",
      title: "Průmyslové potrubí",
      slug: "prumyslove-potrubni-systemy",
      category: "komponenty",
      description: "Výroba a montáž robustních potrubních tras pro transport vzduchu, prachu a abrazivního materiálu.",
      image: "/prumyslove-potrubni-systemy/hero-bg.jpg",
   },
   {
      id: "mokra",
      title: "Mokrá separace",
      slug: "mokra-separace-prachu",
      category: "filtrace",
      description: "Vysoce účinné mokré odlučovače pro explozivní a hořlavé prachy (hliník, titan, hořčík).",
      image: "/images/wet-clean.png",
   },
   {
      id: "voc",
      title: "Odsávání VOC látek",
      slug: "odsavani-voc-zapachu",
      category: "filtrace",
      description: "Technologie pro snižování emisí těkavých organických látek, katalytická oxidace a adsorpce.",
      image: "/images/voc-clean.png",
   },
   {
      id: "komponenty",
      title: "Komponenty vzduchotechniky",
      slug: "komponenty-vzduchotechniky",
      category: "komponenty",
      description: "Klapky, cyklony, rotační podavače a další příslušenství pro průmyslové odsávání.",
      image: "/images/hero.png",
   }
];

const CATEGORIES = [
   { id: "all", label: "Všechny produkty" },
   { id: "filtrace", label: "Filtrační jednotky" },
   { id: "komponenty", label: "Komponenty a potrubí" },
];

export default function ProductsClient() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Filter logic
  const filteredProducts = ALL_PRODUCTS.filter(product => {
     const matchesCategory = activeCategory === "all" || product.category === activeCategory;
     const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
     return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans">
      <LeadPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
        sourcePage="Katalog produktů" 
      />

      {/* 1. HERO SECTION */}
      <section className="relative py-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
           <h1 className="text-4xl md:text-6xl font-black mb-6">PŘEHLED TECHNOLOGIÍ</h1>
           <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
              Kompletní sortiment pro průmyslovou filtraci od mokrých separátorů po sofistikované systémy pro záchyt VOC látek.
           </p>

           <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
              <div className="relative flex-grow">
                 <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                 <input 
                    type="text" 
                    placeholder="Vyhledat technologii..." 
                    className="w-full pl-12 pr-4 py-4 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                 />
              </div>
              <button 
                 onClick={() => setIsPopupOpen(true)}
                 className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors whitespace-nowrap"
              >
                 Nezávazná poptávka
              </button>
           </div>
        </div>
      </section>

      {/* 2. FILTER & GRID */}
      <section className="py-16">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-4 justify-center mb-12">
               {CATEGORIES.map(cat => (
                  <button
                     key={cat.id}
                     onClick={() => setActiveCategory(cat.id)}
                     className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                        activeCategory === cat.id 
                           ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105" 
                           : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                     }`}
                  >
                     {cat.label}
                  </button>
               ))}
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.map((product) => (
                     <Link key={product.id} href={`/${product.slug}`} className="group h-full">
                        <div className="h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col group-hover:-translate-y-2">
                           {/* Image Container */}
                           <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                              {product.image && !product.image.includes("placeholder") ? (
                                 <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                 />
                              ) : (
                                 <div className="absolute inset-0 flex items-center justify-center bg-slate-200 text-slate-400">
                                    <span className="text-sm font-semibold uppercase tracking-wider">Obrázek připravujeme</span>
                                 </div>
                              )}
                              
                              {/* Overlay for quick action */}
                              <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-300" />
                           </div>
                           
                           {/* Content Container */}
                           <div className="p-8 flex flex-col flex-grow">
                              <div className="flex justify-between items-start mb-4">
                                 <div>
                                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2 block">{CATEGORIES.find(c => c.id === product.category)?.label || "Produkt"}</span>
                                    <h2 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                                       {product.title}
                                    </h2>
                                 </div>
                                 <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:rotate-[-45deg]">
                                    <ArrowRight className="w-5 h-5" />
                                 </div>
                              </div>
                              
                              <p className="text-slate-600 mb-6 flex-grow leading-relaxed line-clamp-3">
                                 {product.description}
                              </p>
                              
                              <div className="pt-4 border-t border-slate-100 mt-auto">
                                 <span className="text-sm font-bold text-slate-900 flex items-center group-hover:translate-x-1 transition-transform">
                                    Detailní specifikace <ArrowRight className="ml-2 h-4 w-4 text-blue-500" />
                                 </span>
                              </div>
                           </div>
                        </div>
                     </Link>
                  ))}
               </div>
            ) : (
               <div className="text-center py-20">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                     <Search className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Nebyly nalezeny žádné produkty</h3>
                  <p className="text-slate-500">Zkuste změnit kritéria vyhledávání nebo vyberte jinou kategorii.</p>
                  <button 
                     onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
                     className="mt-6 text-blue-600 font-bold hover:underline"
                  >
                     Resetovat filtry
                  </button>
               </div>
            )}
            
         </div>
      </section>

      {/* 3. CTA FOOTER */}
      <section className="py-24 bg-blue-600 relative overflow-hidden text-center text-white">
         <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
         <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700"></div>
         
         <div className="container relative z-10 mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
               NENAŠLI JSTE, CO HLEDÁTE?
            </h2>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
               Vyrábíme filtrační systémy na zakázku. Popište nám svůj problém a my navrhneme řešení.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
               <button 
                  onClick={() => setIsPopupOpen(true)}
                  className="px-10 py-5 bg-white text-blue-900 font-bold rounded-xl shadow-2xl hover:bg-blue-50 hover:scale-105 transition-all duration-300"
               >
                  Nezávazná poptávka
               </button>
               <Link 
                  href="/kontakt"
                  className="px-10 py-5 bg-transparent border-2 border-white/20 text-white font-bold rounded-xl hover:bg-white/10 hover:border-white transition-all duration-300"
               >
                  Kontaktovat centrálu
               </Link>
            </div>
         </div>
      </section>

    </div>
  );
}
