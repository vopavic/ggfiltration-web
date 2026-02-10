'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, useAnimation, PanInfo } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ReferenceItem {
  id: number;
  title: string;
  location: string;
  image: string;
  tags: string[];
  desc: string[];
  result: string;
}

const DEFAULT_REFERENCES: ReferenceItem[] = [
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

interface ReferenceSliderProps {
  items?: ReferenceItem[];
}

export function ReferenceSlider({ items = DEFAULT_REFERENCES }: ReferenceSliderProps) {
  // Duplicate items for infinite loop effect
  // [Copy 1, Copy 2, Copy 3]
  const extendedReferences = [...items, ...items, ...items];

  const [currentIndex, setCurrentIndex] = useState(items.length);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Responsive logic
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth >= 768 ? 2 : 1);
    };
    
    // Initial check
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, [isTransitioning]);

  const handlePrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, [isTransitioning]);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      if (Math.abs(info.offset.x) > 50) {
          if (info.offset.x > 0) {
              handlePrev();
          } else {
              handleNext();
          }
      }
  };

  const handleAnimationComplete = () => {
    setIsTransitioning(false);
    // Reset index silently to Loop
    // Center set is index [length] to [2*length - 1]
    // If current index >= 2*length (start of 3rd set), jump back to length (start of 2nd set)
    if (currentIndex >= 2 * items.length) {
      setCurrentIndex(currentIndex - items.length);
    } 
    // If current index < length (end of 1st set), jump forward to length + deviation
    else if (currentIndex < items.length) {
      setCurrentIndex(currentIndex + items.length);
    }
  };

  // Calculate slide percentage
  // We move X% based on index. Each item is 100% / itemsPerPage width.
  // The Track width is effectively numberOfItems * (100% / itemsPerPage) relative to container?
  // Easier: translateX( -currentIndex * (100 / itemsPerPage) % ) relative to container width?
  // No, percentage in translateX refers to the element width itself.
  // TranslateX(-100%) moves the whole track.
  // We want to move by 1 Item Width.
  // Item Width = Track Width / TotalItems.
  // So move by 1/TotalItems * 100 % of Track Width.
  // shift = currentIndex * (100 / extendedReferences.length)
  
  const xOffset = -(currentIndex * (100 / extendedReferences.length));

  return (
    <div className="relative group">
      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-10 hidden md:block">
        <button 
          onClick={handlePrev}
          disabled={isTransitioning}
          className="p-3 rounded-full bg-white shadow-lg border border-slate-100 hover:bg-blue-50 text-slate-700 transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
      </div>
      
      <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-10 hidden md:block">
        <button 
          onClick={handleNext}
          disabled={isTransitioning}
          className="p-3 rounded-full bg-white shadow-lg border border-slate-100 hover:bg-blue-50 text-slate-700 transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>

      <div className="overflow-hidden py-8 -mx-4 px-4">
        {/* Track Container */}
        {/* We use a motion div for the track. Width should be enough to hold all items. 
            Each item is 100% (mobile) or 50% (desktop) of the Viewport.
            So Track Width = TotalItems * ItemWidth.
        */}
        <motion.div 
            className="flex"
            animate={{ x: `${xOffset}%` }}
            transition={{ 
                duration: isTransitioning ? 0.5 : 0, 
                ease: "easeInOut" 
            }}
            onAnimationComplete={handleAnimationComplete}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }} // Just for elasticity effect or none
            dragElastic={0.05}
            onDragEnd={handleDragEnd}
            style={{ 
                width: `${(extendedReferences.length * 100) / itemsPerPage}%`,
                cursor: 'grab'
            }}
            whileTap={{ cursor: 'grabbing' }}
        >
            {extendedReferences.map((ref, idx) => (
              <div 
                key={`${ref.id}-${idx}`} 
                className="relative px-4"
                style={{ width: `${100 / extendedReferences.length}%` }}
              >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
                    <div className="relative h-64 overflow-hidden shrink-0">
                       <Image
                         src={ref.image}
                         alt={ref.title}
                         fill
                         className="object-cover group-hover/card:scale-105 transition-transform duration-700"
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
                  </div>
              </div>
            ))}
        </motion.div>
      </div>
      
      {/* Mobile Controls */}
      <div className="flex justify-center mt-4 md:hidden space-x-4">
           <button 
             onClick={handlePrev}
             disabled={isTransitioning}
             className="p-2 rounded-full bg-slate-100/50 hover:bg-blue-50 text-slate-700 disabled:opacity-50"
           >
             <ArrowLeft className="w-6 h-6" />
           </button>
           <button 
             onClick={handleNext}
             disabled={isTransitioning}
             className="p-2 rounded-full bg-slate-100/50 hover:bg-blue-50 text-slate-700 disabled:opacity-50"
           >
             <ArrowRight className="w-6 h-6" />
           </button>
      </div>

      {/* Dots Indicator (Mapped to original refs length) */}
      <div className="flex justify-center mt-8 space-x-2">
        {items.map((_, idx) => {
           // We need to map current index (which is boosted by loop) to 0..3
           // Current index range is theoretically anywhere, but usually [length..2*length]
           const realIndex = currentIndex % items.length;
           return (
              <button
                key={idx}
                onClick={() => {
                   if (isTransitioning) return;
                   // Calculate distance to new index
                   // Simplest: just jump to the one in middle set
                   const targetInMiddleSet = items.length + idx;
                   setIsTransitioning(true);
                   setCurrentIndex(targetInMiddleSet);
                }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  idx === realIndex ? 'w-8 bg-blue-600' : 'bg-slate-300 hover:bg-blue-400'
                )}
              />
           );
        })}
      </div>
    </div>
  );
}
