import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionReveal from '@/components/SectionReveal';
import ContactFormSection from '@/components/ContactFormSection';

// Immagini reali Villa Angeli
const FRESCO_IMG = '/images/IMG_9612.jpg';
const DETAIL_IMG = '/images/IMG_9608.jpg';
const HERO_IMG = '/images/IMG_9610.jpg';

const timelineBlocks = [
  {
    period: 'XV Secolo',
    title: 'Le origini gonzaghesche',
    text: 'La storia di Villa Angeli affonda le radici nell\'epoca d\'oro dei Gonzaga, quando Pegognaga era un centro nevralgico del ducato mantovano. Qui i Gonzaga abitarono, eleggendo la villa a dimora privilegiata e simbolo del loro potere nel territorio mantovano.',
  },
  {
    period: 'XVI-XVII Secolo',
    title: 'L\'età dello splendore',
    text: 'Nel periodo rinascimentale, la villa venne ampliata e arricchita di affreschi e sale da ricevimento. Artisti e intellettuali frequentavano questi saloni, rendendo la dimora un crocevia di arte e cultura.',
  },
  {
    period: 'XVIII-XIX Secolo',
    title: 'Trasformazione e rinascita',
    text: 'Attraverso i secoli, la villa ha attraversato periodi di trasformazione, mantenendo sempre il suo carattere elegante. Restauri attenti hanno preservato gli elementi originali, aggiungendo comfort moderni senza alterare l\'identità storica.',
  },
  {
    period: 'Oggi',
    title: 'Una dimora viva',
    text: 'Villa Angeli è oggi una location esclusiva per eventi, dove ogni pietra racconta una storia e ogni sala invita a creare nuovi ricordi. Un luogo dove il passato e il presente si incontrano armoniosamente.',
  },
];

export default function Storia() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={FRESCO_IMG}
            alt="Affreschi storici"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
        <div className="relative z-10 px-6 pb-16 max-w-6xl mx-auto w-full">
        <p className="font-script text-3xl italic text-white/80 mb-1">Patrimonio Gonzaghesco</p>
        <h1 className="font-display text-5xl md:text-7xl text-white font-black uppercase tracking-wide">
          La nostra Storia
        </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <SectionReveal>
            <h2 className="font-display text-4xl lg:text-5xl leading-tight mb-8">
              Secoli di eleganza, un unico racconto
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed font-body">
              Dalle corti gonzaghesche ai giorni nostri, Villa Angeli custodisce
              un patrimonio di bellezza che si rinnova in ogni evento.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-28 px-6">
        <div className="max-w-4xl mx-auto">
          {timelineBlocks.map((block, i) => (
            <SectionReveal key={block.period} delay={i * 0.1}>
              <div className="grid md:grid-cols-12 gap-8 mb-20 last:mb-0">
                {/* Period marker */}
                <div className="md:col-span-3">
                  <div className="md:sticky md:top-28">
                    <p className="text-sm tracking-widest uppercase text-muted-foreground font-body">
                      {block.period}
                    </p>
                    <div className="hidden md:block w-12 h-px bg-border mt-4" />
                  </div>
                </div>
                {/* Content */}
                <div className="md:col-span-9">
                  <h3 className="font-display text-3xl mb-4">{block.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed font-body">
                    {block.text}
                  </p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Image break */}
      <SectionReveal>
        <section className="px-6 pb-28">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="overflow-hidden rounded-sm">
              <img
                src={DETAIL_IMG}
                alt="Dettaglio architettonico della villa"
                className="w-full h-[350px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="overflow-hidden rounded-sm">
              <img
                src={HERO_IMG}
                alt="Facciata di Villa Angeli"
                className="w-full h-[350px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* CTA */}
      <section className="pb-28 px-6 text-center">
        <SectionReveal>
          <h2 className="font-display text-3xl lg:text-4xl mb-6">
            Vuoi vivere la storia di persona?
          </h2>
          <Link
            to="/la-villa"
            className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-foreground hover:gap-4 transition-all duration-300 font-body"
          >
            Scopri la Villa <ArrowRight size={16} />
          </Link>
        </SectionReveal>
      </section>

      {/* Contact Form */}
      <ContactFormSection sourcePage="storia" />
    </>
  );
}