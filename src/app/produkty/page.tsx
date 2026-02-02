import Link from "next/link";
import { ArrowRight, Wind, Droplets, Factory } from "lucide-react";

export default function ProductsPage() {
  const products = [
    {
      title: "Mokrá separace prachu",
      slug: "mokra-separace-prachu",
      description: "Mokré odlučovače jsou určeny pro odlučování prachů, které tvoří se vzduchem explozní směs. Jedná se zejména o broušení hliníku, hořčíku či titanu.",
      icon: Droplets,
    },
    {
      title: "Odsávání VOC látek",
      slug: "odsavani-voc-zapachu",
      description: "Technologie pro likvidaci těkavých organických látek (VOC) vznikajících při průmyslových procesech lakování, odmašťování a chemické výroby.",
      icon: Wind,
    },
    {
      title: "Suchá filtrace prachu",
      slug: "sucha-filtrace-prachu",
      description: "Textilní filtry pro odsávání prachu ze svařování, pálení laserem, tryskání a dalších technologií. Automatická regenerace filtračních médií.",
      icon: Factory,
    }
  ];

  return (
    <div className="bg-background min-h-screen pb-20">
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Naše produkty</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Komplexní řešení pro průmyslovou filtraci vzduchu. Od návrhu po realizaci.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link key={product.slug} href={`/${product.slug}`} className="group h-full">
              <div className="bg-white border border-border rounded-xl p-8 h-full hover:shadow-xl hover:border-primary/50 transition-all flex flex-col">
                <div className="h-16 w-16 bg-secondary rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <product.icon className="h-8 w-8 text-primary group-hover:text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{product.title}</h2>
                <p className="text-muted-foreground mb-8 flex-grow">
                  {product.description}
                </p>
                <div className="flex items-center text-primary font-semibold mt-auto">
                  Detail produktu <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-16 bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Nenašli jste, co hledáte?</h3>
          <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
            Navrhujeme také atypická řešení na míru. Kontaktujte naše engineering oddělení.
          </p>
          <Link href="/kontakt" className="bg-primary text-primary-foreground px-8 py-3 rounded font-bold hover:bg-blue-700 transition-colors inline-block">
            Poptat atypické řešení
          </Link>
        </div>
      </div>
    </div>
  );
}
