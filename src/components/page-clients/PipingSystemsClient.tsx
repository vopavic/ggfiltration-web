"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Factory, 
  BarChart3, 
  Phone,
  Settings,
  Wrench,
  Mail,
  Wind,
  Layers,
  Hammer
} from "lucide-react";
import { ReferenceSlider } from "@/components/sections/ReferenceSlider";
import { GallerySection } from "@/components/sections/GallerySection";
import { LeadPopup } from "@/components/ui/LeadPopup";

export default function PipingSystemsClient() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="bg-slate-50 font-sans text-slate-900">
      <LeadPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
        sourcePage="Průmyslové potrubní systémy" 
      />
      
      {/* 1. HERO SEKCE */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 bg-slate-900">
          <Image
            src="/prumyslove-potrubni-systemy/hero-bg.jpg"
            alt="Průmyslové potrubní systémy"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight drop-shadow-xl">
              TĚŽKÉ SVAŘOVANÉ POTRUBÍ <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                PRO ODSÁVÁNÍ
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white mb-10 max-w-2xl leading-relaxed font-light border-l-4 border-blue-500 pl-6">
              Výroba a montáž robustních potrubních tras pro transport vzduchu, prachu a abrazivního materiálu. Skupina I, II a III.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setIsPopupOpen(true)} 
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-lg overflow-hidden transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/40"
              >
                <span className="relative z-10 flex items-center">
                  Poptat potrubí <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <Link 
                href="#technologie" 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-slate-200 border-2 border-slate-600 rounded-lg hover:bg-slate-800/50 hover:text-white hover:border-slate-500 transition-all duration-300 backdrop-blur-sm"
              >
                O technologii
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. O TECHNOLOGII */}
      <section id="technologie" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                  POTRUBÍ DIMENZOVANÉ NA <br />
                  <span className="relative inline-block">
                    VÝKON A TRVANLIVOST
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 50 10 100 5 L 100 0 L 0 0 Z" fill="currentColor" />
                    </svg>
                  </span>
                </h2>
              </div>
              
              <div className="text-lg text-slate-600 mb-8 space-y-4">
                <p>
                  Kvalitní potrubní trasa je základem funkčního odsávacího systému. Specializujeme se na výrobu průmyslového svařovaného potrubí kruhového průřezu, které je určeno pro vysoké podtlaky a transportní rychlosti vzduchu (20–35 m/s).
                </p>
                <p>
                  Na rozdíl od běžného falcovaného (spiro) potrubí jsou naše komponenty vyráběny z ocelových plechů o tloušťce 1,5 až 6,0 mm. Jednotlivé díly jsou spojovány pomocí plochých přírub, což zaručuje dokonalou těsnost soustavy a tvarovou stálost i při rázovém zatížení.
                </p>
                <p>
                  Systémy navrhujeme tak, aby minimalizovaly tlakové ztráty a turbulece, čímž snižujeme hlučnost a energetickou náročnost celého odsávání.
                </p>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Pro vysoké podtlaky",
                  "Transportní rychlost 20-35 m/s",
                  "Materiál tl. 1,5 - 6,0 mm",
                  "Přírubové spoje"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Image/Diagram */}
            <div className="relative group flex justify-center lg:justify-start items-center lg:pl-10">
              <div className="absolute w-[120%] h-[120%] bg-blue-500/5 rounded-full blur-3xl -z-10 transition-colors duration-700 pointer-events-none"></div>
              
              <div className="relative z-10 w-full max-w-[600px] transform lg:-translate-x-12 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/prumyslove-potrubni-systemy/duct-detail.jpg"
                  alt="Detail průmyslového potrubí"
                  width={800}
                  height={1000}
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. HLAVNÍ BENEFITY (Dark Section) */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
        
        <div className="absolute right-0 top-0 h-full w-1/3 opacity-5 pointer-events-none select-none flex items-center justify-end overflow-hidden">
           <div className="relative w-full h-full"> 
             <Image 
               src="/images/logo-white.png" 
               alt="Logo G&G" 
               fill
               className="object-contain object-right transform rotate-90 scale-150 origin-center translate-x-1/4"
             />
           </div>
        </div>
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">PROČ ZVOLIT G&G?</h2>
            <p className="text-slate-400 text-lg">
              Řešení bolestí běžných systémů – žádné prodřená kolena ani netěsnosti.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Box 1 */}
            <div className="group bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:bg-slate-800 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-900/50 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">Vysoká odolnost vůči abrazi</h3>
              <p className="text-slate-400 leading-relaxed">
                Pro transport písku, korundu, cementu nebo skla vyrábíme exponované části (kolena, odbočky) z otěruvzdorných materiálů (např. Hardox) nebo se zesílenou stěnou. Konec častému látání děr.
              </p>
            </div>

            {/* Box 2 */}
            <div className="group bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:bg-slate-800 hover:-translate-y-2">
              <div className="w-16 h-16 bg-cyan-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-900/50 group-hover:scale-110 transition-transform">
                <Wind className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">Těsnost a stabilita</h3>
              <p className="text-slate-400 leading-relaxed">
                Přírubové spoje s kvalitním těsněním zabraňují přisávání falešného vzduchu, který by snižoval účinnost sání u stroje. Masivní konstrukce odolá i případným vibracím či poryvům větru na venkovních mostech.
              </p>
            </div>

            {/* Box 3 */}
            <div className="group bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:bg-slate-800 hover:-translate-y-2">
              <div className="w-16 h-16 bg-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-900/50 group-hover:scale-110 transition-transform">
                <Factory className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-400 transition-colors">Komplexní sortiment</h3>
              <p className="text-slate-400 leading-relaxed">
                Nedodáváme jen trubky. Vyrábíme kompletní příslušenství: regulační a uzavírací klapky (ruční/pneu), kompenzátory, tlumiče hluku, cyklonové odlučovače i nosné ocelové konstrukce.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TECHNICKÉ PARAMETRY */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            <div className="lg:w-1/3">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">VÝROBNÍ SPECIFIKACE</h2>
              <p className="text-lg text-slate-600 mb-8">
                Variabilita výroby pro všechny typy průmyslových aplikací.
              </p>
              
               {/* Product Card */}
               <div className="block group relative overflow-hidden rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 mb-8">
                  <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                     <Image
                        src="/prumyslove-potrubni-systemy/gallery-5.jpg"
                        alt="Potrubní díly"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                     />
                  </div>
                  <div className="p-5">
                      <h4 className="font-bold text-slate-900 flex items-center justify-between group-hover:text-blue-600 transition-colors">
                         Potrubní díly
                      </h4>
                      <p className="text-sm text-slate-500 mt-2">
                         Svařované potrubí a příslušenství.
                      </p>
                  </div>
               </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
                  Ke stažení
                </h4>
                <Link href="#" className="block w-full py-3 px-4 bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 rounded-lg text-sm font-semibold transition-colors text-center border border-slate-200">
                  Katalogový list (PDF)
                </Link>
                <Link href="#" className="block w-full py-3 px-4 bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 rounded-lg text-sm font-semibold transition-colors text-center border border-slate-200">
                  Technický výkres (DWG)
                </Link>
              </div>
            </div>

            <div className="lg:w-2/3 w-full">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-6 text-sm font-bold uppercase tracking-wider w-1/3">Parametr</th>
                        <th className="p-6 text-sm font-bold uppercase tracking-wider">Rozsah / Hodnota</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {[
                        { label: "Průměry potrubí (DN)", value: "80 až 1200+ mm (větší průměry na zakázku)" },
                        { label: "Tloušťka materiálu", value: "1,5 mm / 2,0 mm / 3,0 mm až 6,0 mm" },
                        { label: "Typ potrubí", value: "Podélně svařované, hladké" },
                        { label: "Spojování", value: "Příruby (ploché ocelové), spony (pro lehčí aplikace)" },
                        { label: "Materiál", value: "S235 (konstrukční ocel), 1.4301 (nerez), Hardox (otěr)" },
                        { label: "Povrchová úprava", value: "Práškové lakování (RAL), žárové zinkování, základní nátěr" },
                        { label: "Příslušenství", value: "Klapky, výfukové hlavice, čistící otvory, kompenzátory" }
                      ].map((row, idx) => (
                        <tr key={idx} className="hover:bg-blue-50/50 transition-colors">
                          <td className="p-6 font-semibold text-slate-700 border-r border-slate-100">{row.label}</td>
                          <td className="p-6 text-slate-700 text-sm font-medium">{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROCES REALIZACE */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">REALIZACE VZDUCHOTECHNICKÝCH TRAS</h2>
            <p className="text-slate-500 text-lg">Kompletní proces od zaměření po montáž.</p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-slate-100">
              <div className="h-full bg-blue-100 w-full" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative">
              {[
                { number: "01", title: "3D Skenování", desc: "U složitých tras provádíme 3D scan haly, abychom se vyhnuli kolizím." },
                { number: "02", title: "Dokumentace", desc: "Vytvoříme 3D model trasy a přesnou výkresovou dokumentaci." },
                { number: "03", title: "Výroba", desc: "Potrubí vyrábíme přesně na míru dispozici – žádné 'dořezávání' na stavbě." },
                { number: "04", title: "Montáž", desc: "Tým montérů s oprávněním pro práce ve výškách a manipulační technikou." },
                { number: "05", title: "Zaregulování", desc: "Nastavení klapek a měření průtoků v jednotlivých větvích." }
              ].map((step, idx) => (
                <div key={idx} className="group relative bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 lg:mt-0">
                  <div className="w-12 h-12 bg-blue-600 text-white font-bold text-xl flex items-center justify-center rounded-lg mb-6 relative z-10 shadow-lg group-hover:bg-slate-900 transition-colors">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALERIE REALIZACÍ */}
      <GallerySection 
        title="POHLED DO VÝROBY A REALIZACÍ" 
        items={[
          { 
            src: "/prumyslove-potrubni-systemy/gallery-1.jpg", 
            alt: "Výroba potrubí", 
            span: "col-span-2 row-span-2", 
            title: "Lorem Ipsum",
            heightClass: "h-full" 
          },
          { 
            src: "/prumyslove-potrubni-systemy/gallery-2.jpg", 
            alt: "Sklad potrubí", 
            span: "col-span-1 row-span-2", 
            title: "Lorem Ipsum",
            heightClass: "h-full"
          },
          { 
            src: "/prumyslove-potrubni-systemy/gallery-3.jpg", 
            alt: "Potrubní díly", 
            span: "col-span-1 row-span-1", 
            title: "Lorem Ipsum",
            heightClass: "min-h-[200px]"
          },
          { 
            src: "/prumyslove-potrubni-systemy/gallery-4.jpg", 
            alt: "Detail spojování", 
            span: "col-span-1 row-span-1", 
            title: "Lorem Ipsum",
            heightClass: "min-h-[200px]"
          },
          { 
            src: "/prumyslove-potrubni-systemy/gallery-5.jpg", 
            alt: "Montáž", 
            span: "col-span-2 md:col-span-2 row-span-1", 
            title: "Lorem Ipsum",
            heightClass: "min-h-[200px]"
          },
          { 
            src: "/prumyslove-potrubni-systemy/gallery-6.jpg", 
            alt: "Realizace", 
            span: "col-span-2 md:col-span-2 row-span-1", 
            title: "Lorem Ipsum",
            heightClass: "min-h-[200px]"
          }
        ]}
      />

      {/* 6. SERVIS A RYCHLÁ VÝMĚNA */}
      <section className="py-0 bg-slate-900 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          <div className="relative h-[400px] lg:h-auto">
            <Image
              src="/prumyslove-potrubni-systemy/gallery-5.jpg" // Reusing image as we don't have dedicated service image yet
              alt="Servis potrubních systémů"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply" />
          </div>
          
          <div className="p-12 lg:p-24 flex flex-col justify-center">
            <div className="inline-flex items-center space-x-2 text-blue-400 font-bold tracking-widest uppercase text-sm mb-6">
              <Wrench className="w-4 h-4" />
              <span>Pohotovostní servis</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              RYCHLÁ VÝROBA <br />
              <span className="text-blue-400">NÁHRADNÍCH DÍLŮ</span>
            </h2>
            
            <div className="space-y-6 text-lg text-slate-300 font-light mb-10">
              <p>
                Víme, že i to nejodolnější potrubí se časem v ohybech opotřebí. 
                Díky vlastní výrobě jsme schopni reagovat na havarijní stavy v řádu hodin či dnů.
              </p>
              <p>
                Potřebujete rychle vyrobit atypické koleno, přechodový kus (redukci) nebo poškozenou část trasy? 
                Stačí dodat výkres nebo díl zaměříme a obratem vyrobíme náhradu.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
               <div className="flex items-center space-x-4">
                 <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-400">
                    <Phone className="w-6 h-6" />
                 </div>
                 <div>
                    <h4 className="font-bold text-white">Hotline</h4>
                    <p className="text-slate-400 text-sm">+420 123 456 789</p>
                 </div>
               </div>
               
               <div className="flex items-center space-x-4">
                 <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-400">
                    <Factory className="w-6 h-6" />
                 </div>
                 <div>
                    <h4 className="font-bold text-white">Sklad dílů</h4>
                    <p className="text-slate-400 text-sm">Okamžitá výroba</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. VYBRANÉ REFERENCE */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
             <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-2">VYBRANÉ REFERENCE</h2>
                <p className="text-slate-600">Příklady realizace potrubních tras</p>
             </div>
             <Link href="/reference" className="hidden md:inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors">
                Zobrazit všechny <ArrowRight className="ml-2 w-5 h-5" />
             </Link>
          </div>

          <div className="mb-12">
              <ReferenceSlider items={[
                {
                  id: 1,
                  title: "Dřevozpracující závod",
                  location: "Dřevozpracující průmysl",
                  image: "/prumyslove-potrubni-systemy/gallery-6.jpg",
                  tags: ["Zadání", "Řešení"],
                  desc: ["Centrální odsávání pilin z 15 strojů", "Vnější potrubní most 80m, DN 600"],
                  result: "Stabilní podtlak, ATEX bezpečnost"
                },
                {
                  id: 2,
                  title: "Odsávání cementárny",
                  location: "Stavební hmoty",
                  image: "/prumyslove-potrubni-systemy/gallery-4.jpg",
                  tags: ["Zadání", "Řešení"],
                  desc: ["Transport abrazivního prachu", "Zesílené potrubí tl. 4 mm + vložky"],
                  result: "Životnost trasy 8+ let"
                },
                {
                  id: 3,
                  title: "Svařovna automotive",
                  location: "Automotive",
                  image: "/prumyslove-potrubni-systemy/gallery-1.jpg",
                  tags: ["Zadání", "Řešení"],
                  desc: ["Odsávání svařovacích robotů", "Hladké potrubí pro min. ztráty"],
                  result: "Úspora energie 15 %"
                }
              ]} />
          </div>

        </div>
      </section>

      {/* 8. CTA BLOK */}
      <section id="kontakt" className="py-24 bg-blue-600 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700"></div>
        
        <div className="container relative z-10 mx-auto px-4 max-w-4xl">
           <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
             POTŘEBUJETE VYŘEŠIT POTRUBNÍ TRASU?
           </h2>
           <p className="text-xl text-blue-100 mb-10 leading-relaxed">
             Nenechte unikat vzduch netěsným potrubím. Navrhneme a vyrobíme pro vás trasu, která vydrží. 
             Zašlete nám poptávku nebo projekt k nacenění.
           </p>
           
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <button 
               onClick={() => setIsPopupOpen(true)} 
               className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-blue-900 bg-white rounded-lg shadow-2xl hover:bg-slate-50 transform hover:-translate-y-1 transition-all duration-300"
             >
               <Mail className="mr-2 w-5 h-5" />
               Poptat potrubní díly
             </button>
             <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border-2 border-white/30 rounded-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
               <Settings className="mr-2 w-5 h-5" />
               Chci zaměření na místě
             </button>
           </div>
        </div>
      </section>
    </div>
  );
}
