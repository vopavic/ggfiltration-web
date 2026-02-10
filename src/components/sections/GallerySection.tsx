'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface GalleryItem {
  src: string;
  alt: string;
  span: string;
  title: string;
  heightClass: string;
}

const DEFAULT_GALLERY_ITEMS: GalleryItem[] = [
  { 
    src: "/sucha-filtrace-prachu/3.jpg", 
    alt: "Realizace G&G Filtration", 
    span: "col-span-2 row-span-2", 
    title: "Lorem Ipsum",
    heightClass: "h-full" 
  },
  { 
    src: "/sucha-filtrace-prachu/2.jpg", 
    alt: "Detail technologie", 
    span: "col-span-1 row-span-2", 
    title: "Lorem Ipsum",
    heightClass: "h-full"
  },
  { 
    src: "/sucha-filtrace-prachu/4.jpg", 
    alt: "Výrobní detail", 
    span: "col-span-1 row-span-1", 
    title: "Lorem Ipsum",
    heightClass: "min-h-[200px]"
  },
  { 
    src: "/sucha-filtrace-prachu/5.jpg", 
    alt: "Expedice", 
    span: "col-span-1 row-span-1", 
    title: "Lorem Ipsum",
    heightClass: "min-h-[200px]"
  },
  { 
    src: "/sucha-filtrace-prachu/6.jpg", 
    alt: "Kompletní technologie", 
    span: "col-span-2 md:col-span-2 row-span-1", 
    title: "Lorem Ipsum",
    heightClass: "min-h-[200px]"
  },
  { 
    src: "/sucha-filtrace-prachu/7.jpg", 
    alt: "Montáž u zákazníka", 
    span: "col-span-2 md:col-span-2 row-span-1", 
    title: "Lorem Ipsum",
    heightClass: "min-h-[200px]"
  }
];

interface GallerySectionProps {
  title?: string;
  items?: GalleryItem[];
}

export function GallerySection({ 
  title = "POHLED DO VÝROBY A REALIZACÍ", 
  items = DEFAULT_GALLERY_ITEMS 
}: GallerySectionProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">{title}</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[280px]">
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className={`${item.span} relative rounded-2xl overflow-hidden group shadow-lg cursor-pointer`}
              onClick={() => setSelectedImage(item.src)}
            >
              <Image 
                src={item.src} 
                alt={item.alt} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                 <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-white font-bold text-lg flex items-center gap-2">
                        {item.title} <ZoomIn className="w-4 h-4 text-slate-300" />
                    </span>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl h-[80vh] rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={selectedImage} 
                alt="Detail" 
                fill 
                className="object-contain" 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
