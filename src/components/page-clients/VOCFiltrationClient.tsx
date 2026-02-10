"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  Wind, 
  ShieldCheck, 
  Factory, 
  BarChart3, 
  Phone,
  Settings,
  Wrench,
  Mail,
  Flame,
  Leaf,
  Zap
} from "lucide-react";
import { ReferenceSlider } from "@/components/sections/ReferenceSlider";
import { GallerySection } from "@/components/sections/GallerySection";
import { LeadPopup } from "@/components/ui/LeadPopup";

export default function VOCFiltrationClient() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="bg-slate-50 font-sans text-slate-900">
      <LeadPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
        sourcePage="Odsávání VOC látek" 
      />
      
      {/* 1. HERO SEKCE */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 bg-slate-900">
          <Image
            src="/images/voc-clean.png"
            alt="Odsávání VOC látek - G&G Filtration"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight drop-shadow-xl">
              SNIŽOVÁNÍ EMISÍ <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
                VOC LÁTEK
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white mb-10 max-w-2xl leading-relaxed font-light border-l-4 border-green-500 pl-6">
              Katalytická oxidace, adsorpce a kondenzace pro lakovny, tiskárny a chemický průmysl. 
              Splňte emisní limity a vraťte energii zpět do výroby.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setIsPopupOpen(true)} 
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-green-600 rounded-lg overflow-hidden transition-all duration-300 hover:bg-green-700 hover:shadow-lg hover:shadow-green-600/40"
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
                  TŘI CESTY <br />
                  <span className="relative inline-block">
                    K ČISTÉMU VZDUCHU
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-green-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 50 10 100 5 L 100 0 L 0 0 Z" fill="currentColor" />
                    </svg>
                  </span>
                </h2>
              </div>
              
              <div className="text-lg text-slate-600 mb-8 space-y-4">
                <p>
                  <strong>1. Katalytická oxidace (RTO/RCO):</strong> Organické látky jsou spáleny při teplotách 350–850 °C 
                  za přítomnosti katalyzátoru. Vzniká CO₂ a vodní pára. Teplo je rekuperováno zpět do procesu.
                </p>
                <p>
                  <strong>2. Adsorpce na aktivním uhlí:</strong> VOC látky jsou zachyceny v pórech aktivního uhlí. 
                  Po nasycení se uhlí regeneruje horkou párou nebo se vyměňuje. Vhodné pro nízké koncentrace.
                </p>
                <p>
                  <strong>3. Kondenzace:</strong> Pro vysoké koncentrace rozpouštědel (lakovny) nabízíme kondenzační jednotky, 
                  které rozpouštědlo zkapalní a umožní jeho opětovné použití.
                </p>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Splnění emisních limitů",
                  "Rekuperace tepla až 95 %",
                  "Možnost zpětného získání rozpouštědel",
                  "Nízké provozní náklady"
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
              <div className="absolute w-[120%] h-[120%] bg-green-500/5 rounded-full blur-3xl -z-10 transition-colors duration-700 pointer-events-none"></div>
              
              <div className="relative z-10 w-full max-w-[600px] transform lg:-translate-x-12 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/voc-clean.png"
                  alt="Katalytický oxidátor"
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
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50"></div>
        
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
              Ekonomika provozu a návratnost investice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Box 1 */}
            <div className="group bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-green-500 transition-all duration-300 hover:bg-slate-800 hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-green-900/50 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-green-400 transition-colors">Úspora energie</h3>
              <p className="text-slate-400 leading-relaxed">
                Díky rekuperaci tepla z oxidace vracíme až 95 % energie zpět. U lakoven to znamená předehřev vzduchu 
                pro sušící tunely – úspora plynu i elektřiny.
              </p>
            </div>

            {/* Box 2 */}
            <div className="group bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-green-500 transition-all duration-300 hover:bg-slate-800 hover:-translate-y-2">
              <div className="w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-900/50 group-hover:scale-110 transition-transform">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">Ekologický přínos</h3>
              <p className="text-slate-400 leading-relaxed">
                Snížení emisí VOC látek o více než 99 %. Splnění nejpřísnějších norem EU i BAT závěrů. 
                Pozitivní dopad na životní prostředí i image firmy.
              </p>
            </div>

            {/* Box 3 */}
            <div className="group bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-green-500 transition-all duration-300 hover:bg-slate-800 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-900/50 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">Garance legislativy</h3>
              <p className="text-slate-400 leading-relaxed">
                Garantujeme splnění emisních limitů dle platné legislativy. Zajistíme autorizované měření 
                a kompletní dokumentaci pro úřady.
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
                Systémy navrhujeme na míru dle typu a koncentrace VOC látek.
              </p>
              
               {/* Product Card */}
               <div className="block group relative overflow-hidden rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 mb-8">
                  <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                     <Image
                        src="/images/voc-clean.png"
                        alt="RTO jednotka"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                     />
                  </div>
                  <div className="p-5">
                      <h4 className="font-bold text-slate-900 flex items-center justify-between group-hover:text-green-600 transition-colors">
                         RTO/RCO Systémy
                      </h4>
                      <p className="text-sm text-slate-500 mt-2">
                         Regenerativní termická oxidace.
                      </p>
                  </div>
               </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-green-600" />
                  Ke stažení
                </h4>
                <Link href="#" className="block w-full py-3 px-4 bg-slate-100 hover:bg-green-50 text-slate-700 hover:text-green-700 rounded-lg text-sm font-semibold transition-colors text-center border border-slate-200">
                  Katalogový list (PDF)
                </Link>
                <Link href="#" className="block w-full py-3 px-4 bg-slate-100 hover:bg-green-50 text-slate-700 hover:text-green-700 rounded-lg text-sm font-semibold transition-colors text-center border border-slate-200">
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
                        <th className="p-6 text-sm font-bold uppercase tracking-wider">Hodnota / Rozsah</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {[
                        { label: "Průtok vzduchu", value: "1 000 až 100 000 m³/h" },
                        { label: "Oxidační teplota", value: "350 – 850 °C (dle typu VOC)" },
                        { label: "Účinnost destrukce VOC", value: "> 99 %" },
                        { label: "Rekuperace tepla", value: "85 – 95 % (RTO), 70 – 85 % (RCO)" },
                        { label: "Spotřeba plynu", value: "Minimální (jen dohřev při nízkých koncentracích)" },
                        { label: "Katalyzátor", value: "Platina/Paladium (životnost 3-5 let)" },
                        { label: "Materiál", value: "Nerezová ocel, žáruvzdorné izolace" }
                      ].map((row, idx) => (
                        <tr key={idx} className="hover:bg-green-50/50 transition-colors">
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
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">OD ANALÝZY PO PROVOZ</h2>
            <p className="text-slate-500 text-lg">Komplexní přístup k řešení VOC emisí.</p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-slate-100">
              <div className="h-full bg-green-100 w-full" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative">
              {[
                { number: "01", title: "Analýza VOC", desc: "Rozbor typu a koncentrace organických látek ve vzduchu." },
                { number: "02", title: "Výběr technologie", desc: "Doporučení optimální metody (RTO/RCO/Adsorpce) dle ekonomiky." },
                { number: "03", title: "Energetická bilance", desc: "Výpočet úspor energie díky rekuperaci tepla." },
                { number: "04", title: "Výroba a montáž", desc: "Dodávka kompletního systému včetně integrace do výroby." },
                { number: "05", title: "Autorizované měření", desc: "Prokázání splnění emisních limitů akreditovanou laboratoří." }
              ].map((step, idx) => (
                <div key={idx} className="group relative bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 lg:mt-0">
                  <div className="w-12 h-12 bg-green-600 text-white font-bold text-xl flex items-center justify-center rounded-lg mb-6 relative z-10 shadow-lg group-hover:bg-slate-900 transition-colors">
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

      {/* GALERIE */}
      <GallerySection 
        title="REALIZACE VOC SYSTÉMŮ" 
        items={[
          { 
            src: "/images/voc-clean.png",
            alt: "RTO jednotka", 
            span: "col-span-2 row-span-2", 
            title: "Instalace RTO",
            heightClass: "h-full" 
          },
          { 
            src: "/images/voc-clean.png", 
            alt: "Detail", 
            span: "col-span-1 row-span-2", 
            title: "Katalyzátor",
            heightClass: "h-full"
          },
          { 
            src: "/images/voc-clean.png", 
            alt: "Pohled", 
            span: "col-span-1 row-span-1", 
            title: "Výměník tepla",
            heightClass: "min-h-[200px]"
          },
          { 
            src: "/images/voc-clean.png", 
            alt: "Celek", 
            span: "col-span-1 row-span-1", 
            title: "Kompletní systém",
            heightClass: "min-h-[200px]"
          }
        ]}
      />

      {/* SERVIS */}
      <section className="py-0 bg-slate-900 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          <div className="relative h-[400px] lg:h-auto">
            <Image
              src="/images/voc-clean.png"
              alt="Servis VOC systémů"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-green-900/40 mix-blend-multiply" />
          </div>
          
          <div className="p-12 lg:p-24 flex flex-col justify-center">
            <div className="inline-flex items-center space-x-2 text-green-400 font-bold tracking-widest uppercase text-sm mb-6">
              <Wrench className="w-4 h-4" />
              <span>Odborný servis</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              DLOUHODOBÁ <br />
              <span className="text-green-400">SPOLEHLIVOST</span>
            </h2>
            
            <div className="space-y-6 text-lg text-slate-300 font-light mb-10">
              <p>
                VOC systémy vyžadují pravidelnou kontrolu katalyzátoru, čištění výměníků a kalibraci senzorů. 
                Nabízíme servisní smlouvy s garantovanou dobou odezvy.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
               <div className="flex items-center space-x-4">
                 <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center text-green-400">
                    <Phone className="w-6 h-6" />
                 </div>
                 <div>
                    <h4 className="font-bold text-white">Hotline</h4>
                    <p className="text-slate-400 text-sm">+420 123 456 789</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* REFERENCE */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
             <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-2">VYBRANÉ REFERENCE</h2>
                <p className="text-slate-600">Příklady použití VOC technologií</p>
             </div>
             <Link href="/reference" className="hidden md:inline-flex items-center text-green-600 font-bold hover:text-green-800 transition-colors">
                Zobrazit všechny <ArrowRight className="ml-2 w-5 h-5" />
             </Link>
          </div>

          <div className="mb-12">
              <ReferenceSlider items={[
                {
                  id: 1,
                  title: "Lakovna automotive",
                  location: "Automobilový průmysl",
                  image: "/images/voc-clean.png",
                  tags: ["Zadání", "Řešení"],
                  desc: ["Snížení VOC z lakovacích kabin", "RTO s rekuperací 92%"],
                  result: "VOC < 20 mg/m³"
                },
                {
                  id: 2,
                  title: "Tiskárna",
                  location: "Polygrafie",
                  image: "/images/voc-clean.png",
                  tags: ["Zadání", "Řešení"],
                  desc: ["Zápachy z tiskových strojů", "Adsorpce na aktivním uhlí"],
                  result: "Odstranění zápachu 95%"
                },
                {
                  id: 3,
                  title: "Chemický závod",
                  location: "Chemie",
                  image: "/images/voc-clean.png",
                  tags: ["Zadání", "Řešení"],
                  desc: ["Emise z reaktorů", "Katalytická oxidace RCO"],
                  result: "VOC < 10 mg/m³"
                }
              ]} />
          </div>
        </div>
      </section>

      {/* CTA BLOK */}
      <section id="kontakt" className="py-24 bg-green-600 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-700"></div>
        
        <div className="container relative z-10 mx-auto px-4 max-w-4xl">
           <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
             POTŘEBUJETE SNÍŽIT EMISE VOC?
           </h2>
           <p className="text-xl text-green-100 mb-10 leading-relaxed">
             Splňte legislativu a ušetřete na energiích díky rekuperaci tepla. 
             Kontaktujte nás pro nezávaznou analýzu.
           </p>
           
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <button 
               onClick={() => setIsPopupOpen(true)} 
               className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-green-900 bg-white rounded-lg shadow-2xl hover:bg-slate-50 transform hover:-translate-y-1 transition-all duration-300"
             >
               <Mail className="mr-2 w-5 h-5" />
               Poptat VOC systém
             </button>
             <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border-2 border-white/30 rounded-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
               <Settings className="mr-2 w-5 h-5" />
               Analýza emisí
             </button>
           </div>
        </div>
      </section>
    </div>
  );
}
