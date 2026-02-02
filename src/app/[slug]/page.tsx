import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PRODUCTS, NAVIGATION } from "@/lib/constants";

// Extended data map for the purpose of the demo
const PAGE_DATA: Record<string, { title: string; content: string; type: 'product' | 'page' }> = {
  'mokra-separace-prachu': {
    title: 'Mokrá separace prachu',
    type: 'product',
    content: 'Detailní informace o mokré separaci prachu. Zde bude doplněn kompletní text a technické specifikace.'
  },
  'odsavani-voc-zapachu': {
    title: 'Odsávání VOC zápachů',
    type: 'product',
    content: 'Detailní informace o odsávání VOC. Zde bude doplněn kompletní text a technické specifikace.'
  },
  'sucha-filtrace-prachu': {
    title: 'Suchá filtrace prachu',
    type: 'product',
    content: 'Detailní informace o suché filtraci. Zde bude doplněn kompletní text a technické specifikace.'
  },
  'aplikace': {
    title: 'Aplikace v průmyslu',
    type: 'page',
    content: 'Přehled průmyslových odvětví, kde naše filtrace pomáhá.'
  },
  'reference': {
    title: 'Reference',
    type: 'page',
    content: 'Seznam našich realizovaných projektů.'
  },
  'o-nas': {
    title: 'O společnosti',
    type: 'page',
    content: 'Historie a vize společnosti G&G filtration.'
  },
  'partneri': {
    title: 'Naši partneři',
    type: 'page',
    content: 'Spolupracujeme s předními firmami v oboru.'
  },
    'zasady-ochrany-osobnich-udaju': {
    title: 'Zásady ochrany osobních údajů',
    type: 'page',
    content: 'Informace o zpracování osobních údajů.'
  }
};

export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = PAGE_DATA[slug];

  if (!data) {
    return notFound();
  }

  return (
    <div className="bg-background min-h-screen pb-20">
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
            <Link href={data.type === 'product' ? '/produkty' : '/'} className="inline-flex items-center text-muted-foreground hover:text-primary mb-6 text-sm font-medium">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {data.type === 'product' ? 'Zpět na produkty' : 'Zpět na úvod'}
            </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.title}</h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-xl border border-border p-8 md:p-12 shadow-sm min-h-[400px]">
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                {data.content}
            </p>
            <div className="bg-blue-50 border border-blue-100 p-6 rounded-lg text-blue-800">
                <p>
                    <strong>Poznámka pro vývoj:</strong> Obsah této stránky bude migrován ze stávajícího webu nebo dodán klientem. 
                    Design je připraven pro vložení textu, tabulek a galerií.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}
