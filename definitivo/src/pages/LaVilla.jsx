import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionReveal from '@/components/SectionReveal';
import ContactFormSection from '@/components/ContactFormSection';

// Immagini reali Villa Angeli
const INTERIOR_IMG = '/images/IMG_9612.jpg';
const DETAIL_IMG = '/images/IMG_9608.jpg';
const AERIAL_IMG = '/images/IMG_9610.jpg';
const NIGHT_IMG = '/images/IMG_9609.jpg';

const features = [
  'Architettura rinascimentale originale',
  'Sale affrescate e saloni storici',
  'Spazi flessibili per eventi da 30 a 300 ospiti',
  'Posizione strategica nel mantovano',
  'Parcheggio privato',
  'Aperta alle visite anche di domenica',
];

export default function LaVilla() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={NIGHT_IMG}
            alt="Villa Angeli al crepuscolo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
        <div className="relative z-10 px-6 pb-16 max-w-6xl mx-auto w-full">
        <p className="font-script text-3xl italic text-white/80 mb-1">Pegognaga, Mantova</p>
        <h1 className="font-display text-5xl md:text-7xl text-white font-black uppercase tracking-wide">
          La Villa
        </h1>
        </div>
      </section>

      {/* Description */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <SectionReveal>
            <h2 className="font-display text-4xl lg:text-5xl leading-tight mb-6">
              Una dimora che racconta secoli di bellezza
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 font-body">
              Villa Angeli sorge nel cuore di Pegognaga, terra gonzaghesca ricca
              di storia e tradizione. La dimora rappresenta un esempio raffinato
              di architettura rinascimentale, con sale affrescate, colonne
              maestose e giardini curati nei minimi dettagli.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed font-body">
              Oggi, la Villa apre le sue porte per ospitare eventi indimenticabili,
              unendo il fascino del passato alla funzionalità del presente.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <div className="overflow-hidden rounded-sm">
              <img
                src={DETAIL_IMG}
                alt="Dettaglio architettonico"
                className="w-full h-[480px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Full-width image */}
      <SectionReveal>
        <section className="px-6">
          <div className="max-w-7xl mx-auto overflow-hidden rounded-sm">
            <img
              src={AERIAL_IMG}
              alt="Vista aerea di Villa Angeli"
              className="w-full h-[400px] lg:h-[500px] object-cover"
            />
          </div>
        </section>
      </SectionReveal>

      {/* Features */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <SectionReveal>
            <div className="overflow-hidden rounded-sm">
              <img
                src={INTERIOR_IMG}
                alt="Interni della villa"
                className="w-full h-[480px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4 font-body">
              Caratteristiche
            </p>
            <h2 className="font-display text-4xl leading-tight mb-8">
              Tutto ciò che serve per un evento perfetto
            </h2>
            <div className="grid gap-4">
              {features.map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-card flex items-center justify-center mt-0.5 shrink-0">
                    <Check size={14} strokeWidth={2} className="text-foreground" />
                  </div>
                  <span className="text-foreground font-body">{f}</span>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link to="/contatti">
                <Button className="h-14 px-10 text-sm tracking-widest uppercase bg-primary text-primary-foreground hover:bg-primary/90">
                  Richiedi Informazioni
                </Button>
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Contact Form */}
      <ContactFormSection sourcePage="la-villa" />
    </>
  );
}