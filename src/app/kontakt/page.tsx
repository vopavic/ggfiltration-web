'use client';

import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-background min-h-screen pb-20">
      {/* Header */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kontaktujte nás</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Máte dotaz nebo zájem o nezávaznou nabídku? Ozvěte se nám.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Info Card */}
          <div className="bg-primary text-primary-foreground p-8 rounded-lg shadow-xl h-fit">
            <h3 className="text-2xl font-bold mb-8">Kontaktní informace</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 mt-1 opacity-80" />
                <div>
                  <h4 className="font-semibold mb-1">Sídlo společnosti</h4>
                  <p className="opacity-90">
                    G&G filtration, s.r.o.<br />
                    Hviezdoslavova 1092/4<br />
                    627 00 Brno - Slatina
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 mt-1 opacity-80" />
                <div>
                  <h4 className="font-semibold mb-1">Telefon</h4>
                  <p className="opacity-90">+420 123 456 789</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 mt-1 opacity-80" />
                <div>
                  <h4 className="font-semibold mb-1">E-mail</h4>
                  <p className="opacity-90">info@ggfiltration.cz</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 mt-1 opacity-80" />
                <div>
                  <h4 className="font-semibold mb-1">Pracovní doba</h4>
                  <p className="opacity-90">Po - Pá: 7:00 - 15:30</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg lg:col-span-2 border border-border">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Napište nám</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Jméno a příjmení</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Jan Novák" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">E-mail</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="jan.novak@firma.cz" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">Předmět</label>
                <input type="text" id="subject" className="w-full px-4 py-3 rounded border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Poptávka filtrace..." />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Zpráva</label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 rounded border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Popište váš požadavek..."></textarea>
              </div>
              
              <button type="submit" className="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-8 rounded transition-colors shadow-md">
                Odeslat zprávu
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
