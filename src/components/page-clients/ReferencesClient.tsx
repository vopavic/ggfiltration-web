"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  Factory, 
  MapPin,
  Calendar,
  Search,
  Filter
} from "lucide-react";
import { LeadPopup } from "@/components/ui/LeadPopup";

// Definice referencí
const ALL_REFERENCES = [
  {
    id: 1,
    title: "Odsávání slévárny",
    location: "Slévárna a pískové hospodářství",
    category: "sucha",
    year: "2023",
    image: "/sucha-filtrace-prachu/2.jpg",
    challenge: "Snížení prachu na úpravně písku",
    solution: "Filtr G&G JET BAG 360 s rekuperací",
    result: "Úlet TZL < 0,8 mg/m³",
    tags: ["Suchá filtrace", "Rekuperace"]
  },
  {
    id: 2,
    title: "Odsávání svařovny",
    location: "Automobilový průmysl",
    category: "sucha",
    year: "2023",
    image: "/sucha-filtrace-prachu/3.jpg",
    challenge: "Odsávání 12 robotických hnízd",
    solution: "Centrální jednotka G&G JET BAG 520",
    result: "Úlet TZL < 1,0 mg/m³",
    tags: ["Suchá filtrace", "Automotive"]
  },
  {
    id: 3,
    title: "Recyklace odpadů",
    location: "Zpracování plastů",
    category: "sucha",
    year: "2022",
    image: "/sucha-filtrace-prachu/6.jpg",
    challenge: "Filtrace drtičů a mlýnů",
    solution: "Lokální odsávání, ATEX provedení",
    result: "Úlet TZL < 2,0 mg/m³",
    tags: ["Suchá filtrace", "ATEX"]
  },
  {
    id: 4,
    title: "Energetika - Kotelna",
    location: "Teplárna na biomasu",
    category: "vysokoteplotni",
    year: "2022",
    image: "/sucha-filtrace-prachu/7.jpg",
    challenge: "Odprášení spalin kotle 5MW",
    solution: "Vysokoteplotní filtrace s izolací",
    result: "Úlet TZL < 5,0 mg/m³",
    tags: ["Vysokoteplotní", "Energetika"]
  },
  {
    id: 5,
    title: "Sklářská vana",
    location: "Sklářský průmysl",
    category: "vysokoteplotni",
    year: "2021",
    image: "/vysokoteplotni-filtrace/gallery-1.jpg",
    challenge: "Filtrace horkých plynů 450°C",
    solution: "Keramický filtr s injektáží sody",
    result: "Úlet TZL < 1 mg/m³",
    tags: ["Vysokoteplotní", "Sklo"]
  },
  {
    id: 6,
    title: "Lakovna automotive",
    location: "Automobilový průmysl",
    category: "voc",
    year: "2023",
    image: "/images/voc-clean.png",
    challenge: "Snížení VOC z lakovacích kabin",
    solution: "RTO s rekuperací 92%",
    result: "VOC < 20 mg/m³",
    tags: ["VOC", "Automotive"]
  },
  {
    id: 7,
    title: "Brusírna hliníku",
    location: "Letecký průmysl",
    category: "mokra",
    year: "2022",
    image: "/images/wet-clean.png",
    challenge: "Bezpečné odsávání hliníkového prachu",
    solution: "Mokrý odlučovač s vynašečem",
    result: "Úlet TZL < 1,5 mg/m³",
    tags: ["Mokrá separace", "ATEX"]
  },
  {
    id: 8,
    title: "Dřevozpracující závod",
    location: "Dřevozpracující průmysl",
    category: "potrubi",
    year: "2023",
    image: "/prumyslove-potrubni-systemy/gallery-6.jpg",
    challenge: "Centrální odsávání pilin z 15 strojů",
    solution: "Vnější potrubní most 80m, DN 600",
    result: "Stabilní podtlak, ATEX bezpečnost",
    tags: ["Potrubí", "Dřevo"]
  }
];

const CATEGORIES = [
  { id: "all", label: "Všechny reference", color: "blue" },
  { id: "sucha", label: "Suchá filtrace", color: "blue" },
  { id: "vysokoteplotni", label: "Vysokoteplotní", color: "orange" },
  { id: "mokra", label: "Mokrá separace", color: "teal" },
  { id: "voc", label: "VOC systémy", color: "green" },
  { id: "potrubi", label: "Potrubní systémy", color: "indigo" }
];

export default function ReferencesClient() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Filter logic
  const filteredReferences = ALL_REFERENCES.filter(ref => {
     const matchesCategory = activeCategory === "all" || ref.category === activeCategory;
     const matchesSearch = ref.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           ref.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           ref.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
     return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans">
      <LeadPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
        sourcePage="Reference" 
      />

      {/* 1. HERO SECTION */}
      <section className="relative py-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
           <h1 className="text-4xl md:text-6xl font-black mb-6">NAŠE REALIZACE</h1>
           <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
              Přes 500 úspěšně dokončených projektů v České republice i zahraničí. 
              Podívejte se na vybrané reference z našeho portfolia.
           </p>

           <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
              <div className="relative flex-grow">
                 <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                 <input 
                    type="text" 
                    placeholder="Vyhledat referenci..." 
                    className="w-full pl-12 pr-4 py-4 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                 />
              </div>
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
                           ? `bg-${cat.color}-600 text-white shadow-lg shadow-${cat.color}-600/30 scale-105` 
                           : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                     }`}
                  >
                     {cat.label}
                  </button>
               ))}
            </div>

            {/* Results Count */}
            <div className="text-center mb-8">
               <p className="text-slate-500">
                  Zobrazeno <span className="font-bold text-slate-900">{filteredReferences.length}</span> {filteredReferences.length === 1 ? 'reference' : 'referencí'}
               </p>
            </div>

            {/* References Grid */}
            {filteredReferences.length > 0 ? (
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredReferences.map((ref) => (
                     <div key={ref.id} className="group h-full">
                        <div className="h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col group-hover:-translate-y-2">
                           {/* Image Container */}
                           <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                              <Image
                                 src={ref.image}
                                 alt={ref.title}
                                 fill
                                 className="object-cover group-hover:scale-105 transition-transform duration-700"
                                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              />
                              
                              {/* Category Badge */}
                              <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded shadow-lg uppercase tracking-wider">
                                 {ref.location}
                              </div>

                              {/* Year Badge */}
                              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-bold px-3 py-1 rounded shadow-lg flex items-center gap-1">
                                 <Calendar className="w-3 h-3" />
                                 {ref.year}
                              </div>
                           </div>
                           
                           {/* Content Container */}
                           <div className="p-8 flex flex-col flex-grow">
                              <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                                 {ref.title}
                              </h2>
                              
                              <div className="space-y-4 mb-6 flex-grow">
                                 <div className="flex items-start">
                                    <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded mr-3 mt-1 min-w-[70px] text-center">ZADÁNÍ</span>
                                    <p className="text-slate-600 text-sm">{ref.challenge}</p>
                                 </div>
                                 <div className="flex items-start">
                                    <span className="bg-blue-50 text-blue-600 text-xs font-bold px-2 py-1 rounded mr-3 mt-1 min-w-[70px] text-center">ŘEŠENÍ</span>
                                    <p className="text-slate-600 text-sm">{ref.solution}</p>
                                 </div>
                              </div>

                              {/* Result */}
                              <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                                 <span className="text-slate-500 text-sm font-medium">Výsledek</span>
                                 <span className="text-green-600 font-bold flex items-center text-sm">
                                   <CheckCircle2 className="w-4 h-4 mr-1" /> {ref.result}
                                 </span>
                              </div>

                              {/* Tags */}
                              <div className="flex flex-wrap gap-2 mt-4">
                                 {ref.tags.map((tag, idx) => (
                                    <span key={idx} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                                       {tag}
                                    </span>
                                 ))}
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            ) : (
               <div className="text-center py-20">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                     <Search className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Nebyly nalezeny žádné reference</h3>
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
               CHCETE BÝT NAŠÍ DALŠÍ REFERENCÍ?
            </h2>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
               Rádi vám pomůžeme s návrhem a realizací vašeho projektu. 
               Kontaktujte nás pro nezávaznou konzultaci.
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
