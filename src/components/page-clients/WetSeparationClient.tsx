"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  Droplets, 
  ShieldCheck, 
  Factory, 
  BarChart3, 
  Phone,
  Settings,
  Wrench,
  Mail,
  Zap,
  RefreshCw
} from "lucide-react";
import { ReferenceSlider } from "@/components/sections/ReferenceSlider";
import { GallerySection } from "@/components/sections/GallerySection";
import { LeadPopup } from "@/components/ui/LeadPopup";

export default function WetSeparationClient() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="bg-slate-50 font-sans text-slate-900">
      <LeadPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
        sourcePage="Mokrá separace prachu" 
      />
      
      {/* 1. HERO SEKCE */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 bg-slate-900">
          <Image
            src="/images/wet-clean.png"
            alt="Mokrá separace prachu - G&G Filtration"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight drop-shadow-xl">
              BEZPEČNÁ FILTRACE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
                VÝBUŠNÝCH
              </span>{" "}
              PRACHŮ
            </h1>
            
            <p className="text-xl md:text-2xl text-white mb-10 max-w-2xl leading-relaxed font-light border-l-4 border-teal-500 pl-6">
              Mokré odlučovače <strong>G&G WET SCRUBBER</strong> pro hliník, titan a hořčík. 
              Maximální bezpečnost pro provozy s rizikem výbuchu (ATEX).
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setIsPopupOpen(true)} 
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-teal-600 rounded-lg overflow-hidden transition-all duration-300 hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-600/40"
              >
                <span className="relative z-10 flex items-center">
                  Konzultovat projekt <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <Link 
                href="#technologie" 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-slate-200 border-2 border-slate-600 rounded-lg hover:bg-slate-800/50 hover:text-white hover:border-slate-500 transition-all duration-300 backdrop-blur-sm"
              >
                Jak to funguje
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
                  PRINCIP <br />
                  <span className="relative inline-block">
                    MOKRÉ PRÁČKY
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-teal-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 50 10 100 5 L 100 0 L 0 0 Z" fill="currentColor" />
                    </svg>
                  </span>
                </h2>
              </div>
              
              <div className="text-lg text-slate-600 mb-8 space-y-4">
                <p>
                  Technologie mokrého odlučování funguje na principu intenzivního kontaktu odsávaného vzduchu s kapalinou (vodou). 
                  Proud vzduchu je veden přes vodní lázeň a systém sprch, kde dochází ke smočení prachových částic.
                </p>
                <p>
                  Těžké, vodou nasáklé částice klesají ke dnu odlučovače, odkud jsou automaticky vynášeny hrabicovým dopravníkem jako kal. 
                  Čistý vzduch prochází přes eliminátor kapek zpět do výdechu.
                </p>
                <p>
                  Toto řešení je jediné bezpečné pro odsávání jisker, žhavých okují a explozivních prachů z broušení lehkých kovů (Al, Ti, Mg), 
                  kde by u suchých filtrů hrozilo riziko výbuchu.
                </p>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Automatické vynášení kalu",
                  "Vhodné pro explozivní prachy",
                  "Žádné filtrační tkaniny",
                  "Uhašení jisker ve vodě"
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
              <div className="absolute w-[120%] h-[120%] bg-teal-500/5 rounded-full blur-3xl -z-10 transition-colors duration-700 pointer-events-none"></div>
              
              <div className="relative z-10 w-full max-w-[600px] transform lg:-translate-x-12 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/wet-clean.png"
                  alt="Mokrý odlučovač nerez"
                  width={800}
                  height={1000}
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. HLAVNÍ BENEFITY (Dark Section) */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-50"></div>
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">PROČ ZVOLIT G&G WET?</h2>
            <p className="text-slate-400 text-lg">
              Když suchá filtrace nestačí nebo je nebezpečná.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Box 1 */}
            <div className="group bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-teal-500 transition-all duration-300 hover:bg-slate-800 hover:-translate-y-2">
              <div className="w-16 h-16 bg-teal-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-teal-900/50 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-teal-400 transition-colors">Maximální bezpečnost</h3>
              <p className="text-slate-400 leading-relaxed">
                Voda působí jako přirozená bariéra proti výbuchu. Jiskry jsou okamžitě uhašeny. 
                Zařízení splňuje nejpřísnější požadavky norem pro ATEX zóny.
              </p>
            </div>

            {/* Box 2 */}
            <div className="group bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-teal-500 transition-all duration-300 hover:bg-slate-800 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-900/50 group-hover:scale-110 transition-transform">
                <RefreshCw className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">Nízké náklady na údržbu</h3>
              <p className="text-slate-400 leading-relaxed">
                Žádné drahé výměny filtračních hadic nebo patron. Jediným spotřebním materiálem je voda (kterou recirkulujeme) 
                a případná chemická aditiva pro úpravu pH.
              </p>
            </div>

            {/* Box 3 */}
            <div className="group bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-teal-500 transition-all duration-300 hover:bg-slate-800 hover:-translate-y-2">
              <div className="w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-900/50 group-hover:scale-110 transition-transform">
                <Factory className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">Vysoká účinnost</h3>
              <p className="text-slate-400 leading-relaxed">
                Díky pokročilému designu vnitřních vestaveb dosahujeme účinnosti separace přes 98 % i pro jemné částice. 
                Vzduch vracíme zpět do haly (v zimním období).
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
              <h2 className="text-4xl font-bold text-slate-900 mb-6">TECHNICKÁ DATA</h2>
              <p className="text-lg text-slate-600 mb-8">
                Separátory dodáváme v nerezovém provedení pro maximální životnost.
              </p>
              
               {/* Product Card */}
               <div className="block group relative overflow-hidden rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 mb-8">
                  <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                     <Image
                        src="/images/wet-clean.png"
                        alt="Mokrý odlučovač"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                     />
                  </div>
                  <div className="p-5">
                      <h4 className="font-bold text-slate-900 flex items-center justify-between group-hover:text-teal-600 transition-colors">
                         G&G WET SCRUBBER
                      </h4>
                      <p className="text-sm text-slate-500 mt-2">
                         Nerezové provedení s vynašečem.
                      </p>
                  </div>
               </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-teal-600" />
                  Ke stažení
                </h4>
                <Link href="#" className="block w-full py-3 px-4 bg-slate-100 hover:bg-teal-50 text-slate-700 hover:text-teal-700 rounded-lg text-sm font-semibold transition-colors text-center border border-slate-200">
                  Katalogový list (PDF)
                </Link>
                <Link href="#" className="block w-full py-3 px-4 bg-slate-100 hover:bg-teal-50 text-slate-700 hover:text-teal-700 rounded-lg text-sm font-semibold transition-colors text-center border border-slate-200">
                  Výkres sestavy (DWG)
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
                        <th className="p-6 text-sm font-bold uppercase tracking-wider">Hodnota</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {[
                        { label: "Odsávací výkon", value: "2 000 až 50 000 m³/h" },
                        { label: "Materiál skříně", value: "Nerezová ocel 1.4301 / 1.4404" },
                        { label: "Spotřeba vody", value: "Uzavřený okruh (pouze doplňování odparu)" },
                        { label: "Vynášení kalu", value: "Automatický řetězový dopravník" },
                        { label: "Hladina hluku", value: "< 78 dB(A) (bez ventilátoru)" },
                        { label: "Tlaková ztráta", value: "1200 - 1600 Pa" },
                        { label: "ATEX zóna", value: "Vnitřní zóna bezpečné, vnější dle umístění" }
                      ].map((row, idx) => (
                        <tr key={idx} className="hover:bg-teal-50/50 transition-colors">
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
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">POSTUP REALIZACE</h2>
            <p className="text-slate-500 text-lg">Bezpečnost je pro nás prioritou č. 1.</p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-slate-100">
              <div className="h-full bg-teal-100 w-full" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative">
              {[
                { number: "01", title: "Zhodnocení rizik", desc: "Posouzení výbušnosti prachu a stanovení zón ATEX." },
                { number: "02", title: "Testování", desc: "Možnost testování vzorku prachu v naší laboratoři pro ověření smáčivosti." },
                { number: "03", title: "Výroba", desc: "Svařování nerezové konstrukce s důrazem na vodotěsnost." },
                { number: "04", title: "Instalace", desc: "Napojení na přívod vody, odpad a elektroinstalaci." },
                { number: "05", title: "Školení obsluhy", desc: "Zaškolení údržby pro správný provoz a čištění." }
              ].map((step, idx) => (
                <div key={idx} className="group relative bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 lg:mt-0">
                  <div className="w-12 h-12 bg-teal-600 text-white font-bold text-xl flex items-center justify-center rounded-lg mb-6 relative z-10 shadow-lg group-hover:bg-slate-900 transition-colors">
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

      {/* 6. GALERIE A REFERENCE (Reusing components with specific data if needed, or generic) */}
      <GallerySection 
        title="POHLED NA INSTALACE" 
        items={[
          { 
            src: "/images/wet-clean.png", // Reuse hero for now as we have limited assets
            alt: "Mokrý odlučovač", 
            span: "col-span-2 row-span-2", 
            title: "Instalace v brusírně",
            heightClass: "h-full" 
          },
          // Placeholder structure for grid
          { 
            src: "/images/wet-clean.png", 
            alt: "Detail", 
            span: "col-span-1 row-span-2", 
            title: "Vynašeč kalu",
            heightClass: "h-full"
          },
           { 
            src: "/images/wet-clean.png", 
            alt: "Pohled shora", 
            span: "col-span-1 row-span-1", 
            title: "Eliminátor kapek",
            heightClass: "min-h-[200px]"
          },
           { 
            src: "/images/wet-clean.png", 
            alt: "Potrubí", 
            span: "col-span-1 row-span-1", 
            title: "Sání od brusek",
            heightClass: "min-h-[200px]"
          },
           { 
            src: "/images/wet-clean.png", 
            alt: "Celek", 
            span: "col-span-2 md:col-span-2 row-span-1", 
            title: "Kompletní sestava",
            heightClass: "min-h-[200px]"
          }
        ]}
      />

      {/* SERVIS */}
      <section className="py-0 bg-slate-900 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          <div className="relative h-[400px] lg:h-auto">
            <Image
              src="/images/wet-clean.png"
              alt="Servis mokrých odlučovačů"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-teal-900/40 mix-blend-multiply" />
          </div>
          
          <div className="p-12 lg:p-24 flex flex-col justify-center">
            <div className="inline-flex items-center space-x-2 text-teal-400 font-bold tracking-widest uppercase text-sm mb-6">
              <Wrench className="w-4 h-4" />
              <span>Pravidelná údržba</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              PROVOZNÍ <br />
              <span className="text-teal-400">SPOLEHLIVOST</span>
            </h2>
            
            <div className="space-y-6 text-lg text-slate-300 font-light mb-10">
              <p>
                Mokrá separace vyžaduje specifickou péči - kontrolu hladiny pH, čištění trysek a údržbu vynašeče. 
                Nabízíme servisní smlouvy, které tyto starosti převezmou za vás.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
               <div className="flex items-center space-x-4">
                 <div className="w-12 h-12 bg-teal-600/20 rounded-full flex items-center justify-center text-teal-400">
                    <Phone className="w-6 h-6" />
                 </div>
                 <div>
                    <h4 className="font-bold text-white">Service Hotline</h4>
                    <p className="text-slate-400 text-sm">24/7 Podpora</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BLOK */}
      <section id="kontakt" className="py-24 bg-teal-700 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-teal-700 to-teal-900"></div>
        
        <div className="container relative z-10 mx-auto px-4 max-w-4xl">
           <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
             HLEDÁTE BEZPEČNÉ ODSÁVÁNÍ?
           </h2>
           <p className="text-xl text-teal-100 mb-10 leading-relaxed">
             Neriskujte výbuch filtru. Pro hliník a titan je mokrá cesta jedinou volbou.
             Kontaktujte nás pro nezávaznou konzultaci.
           </p>
           
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <button 
               onClick={() => setIsPopupOpen(true)} 
               className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-teal-900 bg-white rounded-lg shadow-2xl hover:bg-slate-50 transform hover:-translate-y-1 transition-all duration-300"
             >
               <Mail className="mr-2 w-5 h-5" />
               Poptat mokrý odlučovač
             </button>
           </div>
        </div>
      </section>
    </div>
  );
}
