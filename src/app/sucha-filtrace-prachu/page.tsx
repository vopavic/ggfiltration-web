import Image from "next/image";
import Link from "next/link";
import { 
  Wind, 
  Zap, 
  ShieldCheck, 
  Settings, 
  Wrench, 
  Factory, 
  ArrowRight, 
  CheckCircle2, 
  BarChart3, 
  Phone,
  FileCheck,
  Mail
} from "lucide-react";
import { ReferenceSlider } from "@/components/sections/ReferenceSlider";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Průmyslová suchá filtrace prachu | G&G Filtration",
  description: "Textilní filtrační jednotky G&G JET BAG s automatickou regenerací. Robustní řešení pro nejtěžší provozy s garancí emisních limitů.",
};

export default function DryFiltrationPage() {
  return (
    <div className="bg-slate-50 font-sans text-slate-900">
      
      {/* 1. HERO SEKCE */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 bg-slate-900">
          <Image
            src="/sucha-filtrace-prachu/1.jpg"
            alt="Průmyslová suchá filtrace prachu - G&G Filtration"
            fill
            className="object-cover object-[20%_center]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 backdrop-blur-sm mb-6 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-blue-300 font-medium text-sm tracking-wide uppercase">Technologie pro 21. století</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight drop-shadow-xl">
              PRŮMYSLOVÁ <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                SUCHÁ FILTRACE
              </span>{" "}
              PRACHU
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl leading-relaxed font-light border-l-4 border-blue-500 pl-6">
              Textilní filtrační jednotky s automatickou regenerací <strong>G&G JET BAG</strong>. 
              Robustní řešení pro nejtěžší provozy s garancí emisních limitů.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="#kontakt" 
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-lg overflow-hidden transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/40"
              >
                <span className="relative z-10 flex items-center">
                  Nezávazná poptávka <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link 
                href="#technologie" 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-slate-200 border-2 border-slate-600 rounded-lg hover:bg-slate-800/50 hover:text-white hover:border-slate-500 transition-all duration-300 backdrop-blur-sm"
              >
                Jak to funguje
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-slate-400 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-blue-400 rounded-full" />
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
                <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm">Inovativní řešení</h2>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                  TECHNOLOGIE PRO <br />
                  <span className="relative inline-block">
                    NEPŘETRŽITÝ PROVOZ
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 50 10 100 5 L 100 0 L 0 0 Z" fill="currentColor" />
                    </svg>
                  </span>{" "}
                  24/7
                </h2>
              </div>
              
              <div className="prose prose-lg text-slate-600">
                <p>
                  Základem našich systémů jsou filtrační jednotky řady <strong>G&G JET BAG</strong>. 
                  Jedná se o suché textilní filtry navržené pro odloučení tuhých znečišťujících látek (TZL) 
                  s účinností přesahující <span className="text-blue-600 font-bold">99,9 %</span>.
                </p>
                <p>
                  Klíčem k bezobslužnému provozu je systém automatické regenerace filtračních hadic pomocí tlakového vzduchu 
                  (<strong>JET-PULS</strong>). Řídicí jednotka cyklicky oklepává filtrační médium, čímž udržuje konstantní 
                  tlakovou ztrátu a stabilní odsávací výkon i při vysokém vstupním zaprášení.
                </p>
                <div className="p-6 bg-slate-50 border-l-4 border-blue-600 rounded-r-lg">
                  <p className="text-slate-800 italic m-0">
                    "Naše technologie je dimenzována pro nasazení v provozech, kde selhávají standardní komerční řešení – 
                    od sléváren a oceláren až po energetiku a zpracování kameniva."
                  </p>
                </div>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Automatická regenerace JET-PULS",
                  "Účinnost filtrace > 99,9 %",
                  "Konstantní tlaková ztráta",
                  "Pro těžký průmysl"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Image/Diagram - Floating Product */}
            <div className="relative group flex justify-center lg:justify-start items-center lg:pl-10">
              {/* Decorative elements */}
              <div className="absolute w-[120%] h-[120%] bg-blue-500/5 rounded-full blur-3xl -z-10 group-hover:bg-blue-500/10 transition-colors duration-700 pointer-events-none"></div>
              
              <div className="relative z-10 w-full max-w-[600px] transform lg:-translate-x-12">
                <Image
                  src="/sucha-filtrace-prachu/jet-bag.png"
                  alt="Filtrační jednotka G&G JET BAG"
                  width={800}
                  height={1000}
                  className="w-full h-auto object-contain drop-shadow-2xl hover:scale-[1.01] transition-transform duration-700"
                />
                
                {/* Floating Detail Tags */}
                {/* 1. Top Right */}
                <div className="absolute top-[10%] -right-4 lg:-right-8 bg-white/90 backdrop-blur shadow-xl p-4 rounded-xl border-l-4 border-blue-600 animate-fade-in-up hover:scale-105 transition-transform cursor-default z-20" style={{ animationDelay: '0.2s' }}>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Technologie</p>
                    <p className="font-bold text-slate-900 text-sm md:text-base">JET-PULS Regenerace</p>
                </div>
                
                {/* 2. Middle Left */}
                <div className="absolute top-[45%] -left-4 lg:-left-12 bg-white/90 backdrop-blur shadow-xl p-4 rounded-xl border-r-4 border-cyan-500 animate-fade-in-up hover:scale-105 transition-transform cursor-default z-20" style={{ animationDelay: '0.4s' }}>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Efektivita</p>
                    <p className="font-bold text-slate-900 text-sm md:text-base">&gt; 99.9% Účinnost</p>
                </div>

                {/* 3. Bottom Right */}
                <div className="absolute bottom-[15%] -right-4 lg:-right-8 bg-white/90 backdrop-blur shadow-xl p-4 rounded-xl border-l-4 border-indigo-500 animate-fade-in-up hover:scale-105 transition-transform cursor-default z-20" style={{ animationDelay: '0.6s' }}>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Konstrukce</p>
                    <p className="font-bold text-slate-900 text-sm md:text-base">Robustní design</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. HLAVNÍ BENEFITY */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">PROČ ZVOLIT G&G?</h2>
            <p className="text-slate-400 text-lg">
              Kombinujeme robustní konstrukci s chytrou technologií pro maximální efektivitu a minimální starosti.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="group bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:bg-slate-800 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-900/50 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">Nízké provozní náklady</h3>
              <p className="text-slate-400 leading-relaxed">
                Díky naddimenzované filtrační ploše a efektivní regeneraci dosahují naše jednotky nízké tlakové ztráty 
                (často pod 1200 Pa). To přímo šetří elektrickou energii na odsávacím ventilátoru.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="group bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:bg-slate-800 hover:-translate-y-2">
              <div className="w-16 h-16 bg-cyan-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-900/50 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">Dlouhá životnost média</h3>
              <p className="text-slate-400 leading-relaxed">
                Používáme ověřené filtrační materiály s gramáží a úpravou přesně dle typu prachu. 
                Životnost hadic u našich instalací běžně přesahuje <span className="text-white font-bold">20 000</span> provozních hodin.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="group bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:bg-slate-800 hover:-translate-y-2">
              <div className="w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-900/50 group-hover:scale-110 transition-transform">
                <FileCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">Garance emisních limitů</h3>
              <p className="text-slate-400 leading-relaxed">
                Garantujeme výstupní koncentrace TZL v souladu s legislativou BAT (Best Available Techniques), 
                často s rezervou pod <span className="text-white font-bold">1–3 mg/m³</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TECHNICKÉ PARAMETRY (Hard Data) */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            <div className="lg:w-1/3">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">TECHNICKÉ SPECIFIKACE</h2>
              <p className="text-lg text-slate-600 mb-8">
                Přehled klíčových parametrů řady G&G JET BAG. Každou jednotku konfigurujeme na míru konkrétní aplikaci.
              </p>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
                  Ke stažení
                </h4>
                <Link href="#" className="block w-full py-3 px-4 bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 rounded-lg text-sm font-semibold transition-colors text-center border border-slate-200 mb-2">
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
                        { label: "Odsávací výkon", value: "1 000 až 500 000+ m³/h (modulární systém)" },
                        { label: "Filtrační rychlost", value: "0,8 – 1,8 m/min (dle typu prachu)" },
                        { label: "Účinnost filtrace", value: "> 99,9 % (výstup < 1-5 mg/m³)" },
                        { label: "Pracovní teplota", value: "Standardně -20 až +150 °C" },
                        { label: "Regenerace", value: "JET-PULS (tlakový vzduch 6 bar)" },
                        { label: "Tlaková ztráta", value: "Provozní: 800 – 1 500 Pa" },
                        { label: "Materiálové provedení", value: "S235 (lakované/zinkované), Nerez 1.4301, Hardox" },
                        { label: "Provedení EX", value: "Volitelně pro výbušné prachy (ATEX zóna 21/22)" }
                      ].map((row, idx) => (
                        <tr key={idx} className="hover:bg-blue-50/50 transition-colors">
                          <td className="p-6 font-semibold text-slate-700 border-r border-slate-100">{row.label}</td>
                          <td className="p-6 text-slate-600 font-mono text-sm">{row.value}</td>
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
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">KOMPLEXNÍ REALIZACE OD VÝROBCE</h2>
            <p className="text-slate-500 text-lg">Od prvního měření po předání klíčů</p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-slate-100">
              <div className="h-full bg-blue-100 w-full" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative">
              {[
                { number: "01", title: "Analýza a měření", desc: "Náš technik navštíví váš provoz, změří stávající stav a definuje požadavky." },
                { number: "02", title: "Vlastní projekce", desc: "Konstrukční oddělení zpracuje 3D model a prováděcí projekt." },
                { number: "03", title: "Výroba v ČR", desc: "Celou technologii vyrábíme v našem vlastním výrobním závodě." },
                { number: "04", title: "Montáž", desc: "Zajišťujeme instalaci, elektro zapojení a nastavení systému." },
                { number: "05", title: "Garanční měření", desc: "Předáváme dílo s protokolem o naměřených emisích." }
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

      {/* NEW GALLERY SECTION */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">POHLED DO VÝROBY A REALIZACÍ</h2>
                <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[280px]">
                {/* Large Item */}
                <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group shadow-lg">
                    <Image 
                      src="/sucha-filtrace-prachu/3.jpg" 
                      alt="Realizace G&G Filtration" 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-1000" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="text-white font-bold text-lg">Velkokapacitní instalace</span>
                    </div>
                </div>
                
                {/* Tall Item */}
                <div className="col-span-1 row-span-2 relative rounded-2xl overflow-hidden group shadow-lg">
                     <Image 
                        src="/sucha-filtrace-prachu/2.jpg" 
                        alt="Detail technologie" 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-1000" 
                     />
                     <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>

                {/* Standard Items */}
                <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group shadow-lg">
                     <Image 
                        src="/sucha-filtrace-prachu/4.jpg" 
                        alt="Výrobní detail" 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-1000" 
                     />
                </div>
                
                <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group shadow-lg">
                     <Image 
                        src="/sucha-filtrace-prachu/5.jpg" 
                        alt="Expedice" 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-1000" 
                     />
                </div>
                
                {/* Wide Item */}
                <div className="col-span-2 md:col-span-2 row-span-1 relative rounded-2xl overflow-hidden group shadow-lg">
                     <Image 
                        src="/sucha-filtrace-prachu/6.jpg" 
                        alt="Kompletní technologie" 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-1000" 
                     />
                </div>
                 
                 <div className="col-span-2 md:col-span-2 row-span-1 relative rounded-2xl overflow-hidden group shadow-lg">
                     <Image 
                        src="/sucha-filtrace-prachu/7.jpg" 
                        alt="Montáž u zákazníka" 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-1000" 
                     />
                </div>
            </div>
        </div>
      </section>

      {/* 6. SERVIS A PODPORA */}
      <section className="py-0 bg-slate-900 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          <div className="relative h-[400px] lg:h-auto">
            <Image
              src="/images/warehouse.png"
              alt="Sklad náhradních dílů G&G"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply" />
          </div>
          
          <div className="p-12 lg:p-24 flex flex-col justify-center">
            <div className="inline-flex items-center space-x-2 text-blue-400 font-bold tracking-widest uppercase text-sm mb-6">
              <Wrench className="w-4 h-4" />
              <span>Podpora 24/7</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              SERVIS A NÁHRADNÍ DÍLY <span className="text-blue-400">SKLADEM</span>
            </h2>
            
            <div className="space-y-6 text-lg text-slate-300 font-light mb-10">
              <p>
                Dodáním technologie naše partnerství nekončí. Provozovatelům garantujeme dostupnost náhradních dílů 
                (filtrační hadice, koše, membránové ventily, řídicí karty) přímo z našeho skladu.
              </p>
              <p>
                Nabízíme servisní smlouvy zahrnující pravidelné profylaktické prohlídky, výměny filtračních médií 
                a expresní servisní zásahy v případě poruchy. Vaše technologie nezůstane stát.
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
                <p className="text-slate-600">Ukázka z více než 500 realizací</p>
             </div>
             <Link href="/reference" className="hidden md:inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors">
                Zobrazit všechny <ArrowRight className="ml-2 w-5 h-5" />
             </Link>
          </div>

          <div className="mb-12">
              <ReferenceSlider />
          </div>

        </div>
      </section>

      {/* 8. CTA BLOK */}
      <section id="kontakt" className="py-24 bg-blue-600 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800"></div>
        
        <div className="container relative z-10 mx-auto px-4 max-w-4xl">
           <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
             HLEDÁTE ŘEŠENÍ PRO SUCHOU FILTRACI?
           </h2>
           <p className="text-xl text-blue-100 mb-10 leading-relaxed">
             Neváhejte nás kontaktovat. Ať už potřebujete konzultaci, náhradu starého filtru nebo kompletní projekt na klíč, 
             naši inženýři jsou vám k dispozici.
           </p>
           
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link 
               href="/kontakt" 
               className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-blue-900 bg-white rounded-lg shadow-2xl hover:bg-slate-50 transform hover:-translate-y-1 transition-all duration-300"
             >
               <Mail className="mr-2 w-5 h-5" />
               Odeslat nezávaznou poptávku
             </Link>
             <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border-2 border-white/30 rounded-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
               <Phone className="mr-2 w-5 h-5" />
               Zavolat obchodnímu zástupci
             </button>
           </div>
        </div>
      </section>

    </div>
  );
}
