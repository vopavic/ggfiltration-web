'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

const REFERENCES = [
  {
    id: 1,
    title: "Odsávání slévárny",
    location: "Slévárna a pískové hospodářství",
    image: "/sucha-filtrace-prachu/2.jpg",
    tags: ["Zadání", "Řešení"],
    desc: ["Snížení prachu na úpravně písku", "Filtr G&G JET BAG 360 s rekuperací"],
    result: "Úlet TZL < 0,8 mg/m³"
  },
  {
    id: 2,
    title: "Odsávání svařovny",
    location: "Automobilový průmysl",
    image: "/sucha-filtrace-prachu/3.jpg",
    tags: ["Zadání", "Řešení"],
    desc: ["Odsávání 12 robotických hnízd", "Centrální jednotka G&G JET BAG 520"],
    result: "Úlet TZL < 1,0 mg/m³"
  },
  {
    id: 3,
    title: "Recyklace odpadů",
    location: "Zpracování plastů",
    image: "/sucha-filtrace-prachu/6.jpg",
    tags: ["Zadání", "Řešení"],
    desc: ["Filtrace drtičů a mlýnů", "Lokální odsávání,ATEX provedení"],
    result: "Úlet TZL < 2,0 mg/m³"
  },
  {
    id: 4,
    title: "Energetika - Kotelna",
    location: "Teplárna na biomasu",
    image: "/sucha-filtrace-prachu/7.jpg",
    tags: ["Zadání", "Řešení"],
    desc: ["Odprášení spalin kotle 5MW", "Vysokoteplotní filtrace s izolací"],
    result: "Úlet TZL < 5,0 mg/m³"
  }
];

export function ReferenceSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // We want to show 2 items at once on desktop, 1 on mobile
  // The 'visible' slice logic
  const itemsPerPage = 2; // Desktop
  
  // Calculate total pages or just slide by 1
  // Let's slide one by one for smoothness
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % REFERENCES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + REFERENCES.length) % REFERENCES.length);
  };

  // Helper to get visible items in a loop
  const getVisibleReferences = () => {
    const refs = [];
    for (let i = 0; i < itemsPerPage; i++) {
      const index = (currentIndex + i) % REFERENCES.length;
      refs.push(REFERENCES[index]);
    }
    return refs;
  };

  const visibleRefs = getVisibleReferences();

  return (
    <div className="relative">
      {/* Navigation Buttons - Absolute positioned outside or on top */}
      <div className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-10">
        <button 
          onClick={prevSlide}
          className="p-3 rounded-full bg-white shadow-lg border border-slate-100 hover:bg-blue-50 text-slate-700 transition-all hover:scale-110"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
      </div>
      
      <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-10">
        <button 
          onClick={nextSlide}
          className="p-3 rounded-full bg-white shadow-lg border border-slate-100 hover:bg-blue-50 text-slate-700 transition-all hover:scale-110"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>

      <div className="overflow-hidden py-4 -mx-4 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode='popLayout' initial={false}>
            {visibleRefs.map((ref) => (
              <motion.div
                key={`${ref.id}-${currentIndex}`} // Unique key to force re-render/animate on index change
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative h-64 overflow-hidden shrink-0">
                   <Image
                     src={ref.image}
                     alt={ref.title}
                     fill
                     className="object-cover group-hover:scale-105 transition-transform duration-700"
                   />
                   <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded shadow-lg uppercase tracking-wider">
                     {ref.location}
                   </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                   <h3 className="text-2xl font-bold text-slate-900 mb-4">{ref.title}</h3>
                   
                   <div className="space-y-4 mb-6 flex-grow">
                      <div className="flex items-start">
                         <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded mr-3 mt-1 min-w-[60px] text-center">ZADÁNÍ</span>
                         <p className="text-slate-600 text-sm">{ref.desc[0]}</p>
                      </div>
                      <div className="flex items-start">
                         <span className="bg-blue-50 text-blue-600 text-xs font-bold px-2 py-1 rounded mr-3 mt-1 min-w-[60px] text-center">ŘEŠENÍ</span>
                         <p className="text-slate-600 text-sm">{ref.desc[1]}</p>
                      </div>
                   </div>

                   <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                      <span className="text-slate-500 text-sm font-medium">Výsledek</span>
                      <span className="text-green-600 font-bold flex items-center text-sm sm:text-base">
                        <CheckCircle2 className="w-4 h-4 mr-1 lg:mr-2" /> {ref.result}
                      </span>
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {REFERENCES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'w-8 bg-blue-600' : 'bg-slate-300 hover:bg-blue-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
