import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ProductsPage() {
  const products = [
    {
      title: "Rotační separátory",
      slug: "rotacni-separatory",
      description: "Pro papírenské provozy, recyklační provozy.",
      image: "https://www.ggfiltration.cz/liip/cache/product/uploads/dms/product/64fb7f1e399af348712991.png", 
    },
    {
      title: "Transportní ventilátory",
      slug: "transportni-ventilatory",
      description: "Pro dřevovýroby, papírny a recyklační provozy.",
      image: "https://www.ggfiltration.cz/liip/cache/product/uploads/dms/product/64fddd984b8a2807707952.png",
    },
    {
      title: "Separátory jisker",
      slug: "separatory-jisker",
      description: "Do sacího potrubí pro svařovny a brusírny.",
      image: "https://www.ggfiltration.cz/liip/cache/product/uploads/dms/product/64fddd9786e78653151154.png",
    },
    {
      title: "Cyklonové odlučovače",
      slug: "cyklonove-odlucovace",
      description: "Efektivní předseparace hrubého prachu.",
      image: "https://www.ggfiltration.cz/liip/cache/product/uploads/dms/product/64fb7dc6b1618206778938.png",
    },
     {
      title: "Filtrační jednotky",
      slug: "filtracni-jednotky",
      description: "Komplexní systémy pro filtraci vzduchu v průmyslu.",
      image: "https://www.ggfiltration.cz/liip/cache/product/uploads/dms/product/6558ad6cc3258733669995.png",
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#054da2] text-white py-24 lg:py-32">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-[#054da2]/80"></div>
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              PRODUKTY
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mb-10 leading-relaxed font-light">
              Vysoce kvalitní produkty systémů odprášení, odsávání a filtrace vzduchu, pro použití v průmyslových provozech.
            </p>
            <p className="text-lg text-blue-200 mb-8 max-w-3xl">Každá aplikace je unikátní a naší prací je navrhnout řešení, které bude spolehlivě fungovat.</p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/kontakt" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-[#054da2] bg-white rounded-lg shadow-lg hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1"
              >
                Kontaktujte nás <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/konfigurator" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white border-2 border-white/30 rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                Konfigurátor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="py-20 lg:py-28 bg-gray-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {products.map((product) => (
              <Link key={product.slug} href={`/${product.slug}`} className="group block h-full">
                <div className="h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 flex flex-col">
                  {/* Image Container */}
                  <div className="relative h-64 w-full bg-slate-100 p-8 flex items-center justify-center overflow-hidden group-hover:bg-slate-50 transition-colors">
                     {/* We use object-contain to preserve the tech drawing look without cropping */}
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  
                  {/* Content Container */}
                  <div className="p-8 flex flex-col flex-grow">
                    <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#054da2] transition-colors">
                      {product.title}
                    </h2>
                    <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                      {product.description}
                    </p>
                    
                    <div className="mt-auto pt-4 border-t border-slate-100">
                      <span className="inline-flex items-center text-[#054da2] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                        Detail <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Bottom Call to Action */}
       <section className="bg-white py-16 border-t border-slate-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Potřebujete poradit s výběrem?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-8 text-lg">
              Náš tým inženýrů je připraven vám pomoci s návrhem optimálního řešení pro váš provoz.
            </p>
            <Link href="/kontakt" className="inline-block px-8 py-3 bg-[#054da2] text-white rounded-full font-semibold hover:bg-blue-800 transition-colors shadow-lg hover:shadow-blue-900/20">
              Napište nám
            </Link>
          </div>
       </section>
    </div>
  );
}
