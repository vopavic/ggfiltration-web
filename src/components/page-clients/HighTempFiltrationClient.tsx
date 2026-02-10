"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Zap, 
  ShieldCheck, 
  Factory, 
  ArrowRight, 
  CheckCircle2, 
  BarChart3, 
  Phone,
  Settings,
  Wrench,
  Mail,
  Flame,
  ThermometerSun,
  Combine
} from "lucide-react";
import { ReferenceSlider } from "@/components/sections/ReferenceSlider";
import { GallerySection } from "@/components/sections/GallerySection";
import { LeadPopup } from "@/components/ui/LeadPopup";

export default function HighTempFiltrationClient() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="bg-slate-50 font-sans text-slate-900">
      <LeadPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
        sourcePage="Vysokoteplotní filtrace" 
      />
      
      {/* 1. HERO SEKCE */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 bg-slate-900">
          <Image
            src="/vysokoteplotni-filtrace/hero-bg.jpg"
            alt="Vysokoteplotní filtrace spalin - G&G Filtration"
            fill
            className="object-cover object-left"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight drop-shadow-xl">
              FILTRACE SPALIN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
                A HORKÝCH
              </span>{" "}
              PLYNŮ
            </h1>
            
            <p className="text-xl md:text-2xl text-white mb-10 max-w-2xl leading-relaxed font-light border-l-4 border-orange-500 pl-6">
              Pokročilé systémy s keramickými elementy pro teploty až 900 °C. 
              Komplexní čištění spalin: odprášení + odsíření + DeNOx v jednom kroku.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setIsPopupOpen(true)} 
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-orange-600 rounded-lg overflow-hidden transition-all duration-300 hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-600/40"
              >
                <span className="relative z-10 flex items-center">
                  Konzultovat projekt <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
                  INOVATIVNÍ <br />
                  <span className="relative inline-block">
                    KERAMICKÁ
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-orange-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 50 10 100 5 L 100 0 L 0 0 Z" fill="currentColor" />
                    </svg>
                  </span>{" "}
                  FILTRACE
                </h2>
              </div>
              
              <div className="text-lg text-slate-600 mb-8 space-y-4">
                <p>
                  Pro aplikace, kde teplota spalin překračuje limity textilních filtrů (nad 
                  <span className="font-bold text-orange-600"> 260 °C</span>) 
                  nebo kde hrozí riziko zahoření (jiskry), nasazujeme technologii keramických filtračních elementů. 
                  Tyto filtry jsou vyrobeny ze žáruvzdorných vláken, která odolávají teplotním šokům a agresivnímu chemickému prostředí.
                </p>
                <p>
                  Systém nefunguje jen jako mechanická zábrana pro TZL. Díky možnosti injektáže sorbentů (vápenný hydrát, soda) 
                  přímo do spalinového potrubí probíhá na povrchu keramického filtru vysoce účinná chemická reakce (suchá sorpce). 
                  Tím dochází k odstranění kyselých složek (SOx, HCl, HF) současně s odprášením.
                </p>
                <p>
                  Pro redukci oxidů dusíku (NOx) dodáváme keramické tyče impregnované katalyzátorem, které plní funkci 
                  katalytického reaktoru bez nutnosti instalace dalšího stupně technologie.
                </p>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Teplotní odolnost do 900 °C",
                  "Odolnost vůči jiskrám a ohni",
                  "Integrovaná DeNOx katalýza",
                  "Vysoká chemická odolnost"
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
              <div className="absolute w-[120%] h-[120%] bg-orange-500/5 rounded-full blur-3xl -z-10 transition-colors duration-700 pointer-events-none"></div>
              
              <div className="relative z-10 w-full max-w-[600px] transform lg:-translate-x-12 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/vysokoteplotni-filtrace/ceramic-filter-detail.jpg"
                  alt="Keramická filtrační svíčka"
                  width={800}
                  height={1000}
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. HLAVNÍ BENEFITY */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50"></div>
        
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
              Ekonomická a provozní výhoda díky 3v1 řešení a rekuperaci.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Box 1 */}
            <div className="group bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-orange-500 transition-all duration-300 hover:bg-slate-800 hover:-translate-y-2">
              <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-orange-900/50 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-400 transition-colors">Rekuperace tepla</h3>
              <p className="text-slate-400 leading-relaxed">
                Technologie nevyžaduje ochlazování spalin přisáváním falešného vzduchu. Spaliny čistíme horké, 
                což umožňuje zařadit výměník pro rekuperaci tepla až za filtr. Získáte tak maximum čisté energie zpět.
              </p>
            </div>

            {/* Box 2 */}
            <div className="group bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-orange-500 transition-all duration-300 hover:bg-slate-800 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-900/50 group-hover:scale-110 transition-transform">
                <Combine className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">3v1: All-in-One řešení</h3>
              <p className="text-slate-400 leading-relaxed">
                Jediné zařízení zvládne odprášení, odsíření i denitrifikaci (DeNOx). Šetříte místo v hale 
                (zastavěnou plochu) a snižujete investiční náklady oproti stavbě tří separátních technologií.
              </p>
            </div>

            {/* Box 3 */}
            <div className="group bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-orange-500 transition-all duration-300 hover:bg-slate-800 hover:-translate-y-2">
              <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-red-900/50 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-red-400 transition-colors">Odolnost a bezpečnost</h3>
              <p className="text-slate-400 leading-relaxed">
                Keramika je nehořlavá. Eliminuje se riziko požáru ve filtru od nedohořelých částic z biomasy 
                nebo jisker ze slévárenských pecí. Systém je robustní a chemicky inertní.
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
              <h2 className="text-4xl font-bold text-slate-900 mb-6">TECHNICKÉ SPECIFIKACE</h2>
              <p className="text-lg text-slate-600 mb-8">
                Přehled klíčových parametrů řady G&G Ceramic Jet. Jednotky konfigurujeme na míru konkrétní aplikaci.
              </p>
              
               {/* Product Card */}
               <div className="block group relative overflow-hidden rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 mb-8">
                  <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                     <Image
                        src="/vysokoteplotni-filtrace/ceramic-unit-thumb.jpg"
                        alt="Keramická filtrační jednotka"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                     />
                  </div>
                  <div className="p-5">
                      <h4 className="font-bold text-slate-900 flex items-center justify-between group-hover:text-orange-600 transition-colors">
                         Vysokoteplotní jednotka
                      </h4>
                      <p className="text-sm text-slate-500 mt-2">
                         Robustní řešení pro náročné průmyslové aplikace.
                      </p>
                  </div>
               </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-orange-600" />
                  Ke stažení
                </h4>
                <Link href="#" className="block w-full py-3 px-4 bg-slate-100 hover:bg-orange-50 text-slate-700 hover:text-orange-700 rounded-lg text-sm font-semibold transition-colors text-center border border-slate-200">
                  Katalogový list (PDF)
                </Link>
                <Link href="#" className="block w-full py-3 px-4 bg-slate-100 hover:bg-orange-50 text-slate-700 hover:text-orange-700 rounded-lg text-sm font-semibold transition-colors text-center border border-slate-200">
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
                        <th className="p-6 text-sm font-bold uppercase tracking-wider">Hodnota / Specifikace</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {[
                        { label: "Pracovní teplota", value: "Běžně 250 – 450 °C (max. až 900 °C)" },
                        { label: "Filtrační médium", value: "Keramické vláknité tyče (délka 1–3 m)" },
                        { label: "Účinnost odprášení", value: "Výstup TZL < 1 mg/m³" },
                        { label: "Redukce SOx / HCl", value: "Účinnost > 90 % (dle dávkování sorbentu)" },
                        { label: "Redukce NOx", value: "Volitelně (katalytické elementy + čpavková voda/močovina)" },
                        { label: "Regenerace", value: "Reverzní profuk tlakovým vzduchem (JET-PULS)" },
                        { label: "Tlaková ztráta", value: "1 500 – 2 200 Pa" },
                        { label: "Tepelná izolace", value: "Tloušťka 100–200 mm (krytí Al/Zn nebo Nerez plech)" }
                      ].map((row, idx) => (
                        <tr key={idx} className="hover:bg-orange-50/50 transition-colors">
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
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">INŽENÝRING A VÝROBA NA MÍRU</h2>
            <p className="text-slate-500 text-lg">Zdůrazňujeme inženýrskou náročnost, kterou zvládáme.</p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-slate-100">
              <div className="h-full bg-orange-100 w-full" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative">
              {[
                { number: "01", title: "Analýza spalin", desc: "Provedeme rozbor složení spalin a tepelnou bilanci zdroje." },
                { number: "02", title: "Návrh sorpce", desc: "Vypočítáme potřebné množství sorbentu pro splnění emisních limitů." },
                { number: "03", title: "Konstrukce", desc: "Navrhneme izolovanou skříň filtru s ohledem na tepelnou roztažnost materiálů." },
                { number: "04", title: "Výroba a montáž", desc: "Vyrobíme technologii a nainstalujeme ji včetně dávkování sorbentů a spalinových ventilátorů." },
                { number: "05", title: "Seřízení a garance", desc: "Nastavíme regenerační cykly a prokážeme plnění limitů BAT autorizovaným měřením." }
              ].map((step, idx) => (
                <div key={idx} className="group relative bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 lg:mt-0">
                  <div className="w-12 h-12 bg-orange-600 text-white font-bold text-xl flex items-center justify-center rounded-lg mb-6 relative z-10 shadow-lg group-hover:bg-slate-900 transition-colors">
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
            src: "/vysokoteplotni-filtrace/gallery-1.jpg", 
            alt: "Výroba keramické filtrace", 
            span: "col-span-2 row-span-2", 
            title: "Lorem Ipsum",
            heightClass: "h-full" 
          },
          { 
            src: "/vysokoteplotni-filtrace/gallery-2.jpg", 
            alt: "Detail technologie", 
            span: "col-span-1 row-span-2", 
            title: "Lorem Ipsum",
            heightClass: "h-full"
          },
          { 
            src: "/vysokoteplotni-filtrace/gallery-3.jpg", 
            alt: "Montáž", 
            span: "col-span-1 row-span-1", 
            title: "Lorem Ipsum",
            heightClass: "min-h-[200px]"
          },
          { 
            src: "/vysokoteplotni-filtrace/gallery-4.jpg", 
            alt: "Detail filtru", 
            span: "col-span-1 row-span-1", 
            title: "Lorem Ipsum",
            heightClass: "min-h-[200px]"
          },
          { 
            src: "/vysokoteplotni-filtrace/gallery-5.jpg", 
            alt: "Realizace", 
            span: "col-span-2 md:col-span-2 row-span-1", 
            title: "Lorem Ipsum",
            heightClass: "min-h-[200px]"
          },
          { 
            src: "/vysokoteplotni-filtrace/gallery-6.jpg", 
            alt: "Instalace", 
            span: "col-span-2 md:col-span-2 row-span-1", 
            title: "Lorem Ipsum",
            heightClass: "min-h-[200px]"
          }
        ]}
      />

      {/* 6. SERVIS A PODPORA */}
      <section className="py-0 bg-slate-900 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          <div className="relative h-[400px] lg:h-auto">
            <Image
              src="/vysokoteplotni-filtrace/service-support.jpg"
              alt="Servis vysokoteplotních systémů"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-orange-900/40 mix-blend-multiply" />
          </div>
          
          <div className="p-12 lg:p-24 flex flex-col justify-center">
            <div className="inline-flex items-center space-x-2 text-orange-400 font-bold tracking-widest uppercase text-sm mb-6">
              <Wrench className="w-4 h-4" />
              <span>Odborný servis</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              ODBORNÝ SERVIS <br />
              <span className="text-orange-400">VYSOKOTEPLOTNÍCH SYSTÉMŮ</span>
            </h2>
            
            <div className="space-y-6 text-lg text-slate-300 font-light mb-10">
              <p>
                Technologie filtrace spalin vyžaduje odbornou údržbu. Náš servisní tým je vyškolen 
                pro manipulaci s keramickými elementy a práci na horkých technologiích.
              </p>
              <p>
                Držíme skladem sady náhradních keramických tyčí, těsnění odolných vysokým teplotám 
                a komponenty pro dávkování sorbentů. Zajišťujeme pravidelné kontroly stavu spalinových tras 
                a funkčnosti regenerace, abychom předešli zanášení systému.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
               <div className="flex items-center space-x-4">
                 <div className="w-12 h-12 bg-orange-600/20 rounded-full flex items-center justify-center text-orange-400">
                    <Phone className="w-6 h-6" />
                 </div>
                 <div>
                    <h4 className="font-bold text-white">Hotline</h4>
                    <p className="text-slate-400 text-sm">+420 123 456 789</p>
                 </div>
               </div>
               
               <div className="flex items-center space-x-4">
                 <div className="w-12 h-12 bg-orange-600/20 rounded-full flex items-center justify-center text-orange-400">
                    <Factory className="w-6 h-6" />
                 </div>
                 <div>
                    <h4 className="font-bold text-white">Sklad dílů</h4>
                    <p className="text-slate-400 text-sm">Odeslání do 24h</p>
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
                <p className="text-slate-600">Příklady použití vysokoteplotní filtrace</p>
             </div>
             <Link href="/reference" className="hidden md:inline-flex items-center text-orange-600 font-bold hover:text-orange-800 transition-colors">
                Zobrazit všechny <ArrowRight className="ml-2 w-5 h-5" />
             </Link>
          </div>

          <div className="mb-12">
              <ReferenceSlider items={[
                {
                  id: 1,
                  title: "Sklářská vana",
                  location: "Sklářský průmysl",
                  image: "/vysokoteplotni-filtrace/gallery-1.jpg",
                  tags: ["Zadání", "Řešení"],
                  desc: ["Filtrace horkých plynů 450°C", "Keramický filtr s injektáží sody"],
                  result: "Úlet TZL < 1 mg/m³"
                },
                {
                  id: 2,
                  title: "Kotelna na biomasu",
                  location: "Energetika",
                  image: "/vysokoteplotni-filtrace/gallery-2.jpg",
                  tags: ["Zadání", "Řešení"],
                  desc: ["Odprášení kotle 5 MW", "Kompaktní keramická jednotka"],
                  result: "Úlet TZL < 2 mg/m³"
                },
                {
                  id: 3,
                  title: "Spalovna odpadů",
                  location: "Likvidace odpadů",
                  image: "/vysokoteplotni-filtrace/gallery-3.jpg",
                  tags: ["Zadání", "Řešení"],
                  desc: ["Čištění spalin s obsahem HCl", "DeNOx katalytická filtrace"],
                  result: "NOx < 100 mg/m³"
                }
              ]} />
          </div>

        </div>
      </section>

      {/* 8. CTA BLOK */}
      <section id="kontakt" className="py-24 bg-orange-600 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-red-700"></div>
        
        <div className="container relative z-10 mx-auto px-4 max-w-4xl">
           <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
             POTŘEBUJETE VYŘEŠIT EMISE Z KOTLE NEBO PECI?
           </h2>
           <p className="text-xl text-orange-100 mb-10 leading-relaxed">
             Vysokoteplotní filtrace je disciplína pro experty. Svěřte svůj projekt do rukou G&G Filtration. 
             Navrhneme řešení, které splní limity a vrátí vám energii zpět do výroby.
           </p>
           
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <button 
               onClick={() => setIsPopupOpen(true)} 
               className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-orange-900 bg-white rounded-lg shadow-2xl hover:bg-slate-50 transform hover:-translate-y-1 transition-all duration-300"
             >
               <Mail className="mr-2 w-5 h-5" />
               Konzultovat projekt
             </button>
             <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border-2 border-white/30 rounded-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
               <Settings className="mr-2 w-5 h-5" />
               Poptávka technologie
             </button>
           </div>
        </div>
      </section>

    </div>
  );
}
