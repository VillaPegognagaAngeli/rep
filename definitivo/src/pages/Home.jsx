import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Calendar, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionReveal from '@/components/SectionReveal';
import ContactFormSection from '@/components/ContactFormSection';
import EventCards from '@/components/EventCards';
import ReviewsSection from '@/components/ReviewsSection';
import FaqSection from '@/components/FaqSection';

// Immagini reali Villa Angeli
const HERO_IMG = '/images/unnamed.jpg';
const INTERIOR_IMG = '/images/unnamed1.jpg';
const WEDDING_IMG = '/images/IMG_9611.jpg';

const highlights = [
  {
    icon: Users,
    title: 'Spazi versatili',
    desc: 'Dalla cerimonia intima al grande ricevimento, ogni spazio si adatta alla vostra visione.',
  },
  {
    icon: Calendar,
    title: 'Cura del dettaglio',
    desc: 'Ogni evento viene seguito con attenzione personalizzata, dal primo contatto al giorno stesso.',
  },
  {
    icon: Star,
    title: 'Posizione privilegiata',
    desc: 'Immersa nella pianura mantovana, facilmente raggiungibile dal nord Italia.',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Villa Angeli - Facciata al tramonto"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Centered top text */}
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <p
            className="text-white/95 mb-2"
            style={{ fontFamily: "'Great Vibes', cursive", fontWeight: 400, fontSize: 'clamp(56px, 9vw, 110px)', lineHeight: 1, letterSpacing: '0.02em' }}
          >
            Villa Angeli
          </p>
          <h1
            className="text-white uppercase mb-5"
            style={{ fontFamily: "'Cinzel', serif", fontWeight: 400, letterSpacing: '0.25em', fontSize: 'clamp(16px, 2.2vw, 22px)' }}
          >
            Dove nasce il ricordo
          </h1>
          <p
            className="text-white/75 uppercase mb-0"
            style={{ fontFamily: "'Cinzel', serif", fontWeight: 400, letterSpacing: '0.2em', fontSize: 'clamp(10px, 1.1vw, 13px)' }}
          >
            Una dimora d'epoca per eventi che durano per sempre
          </p>
        </div>

        {/* Divider line */}
        <div className="relative z-10 w-2/3 max-w-2xl h-px bg-white/30 my-10" />

        {/* Welcome + text block */}
        <div className="relative z-10 w-full max-w-5xl px-8 flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-12">
          <div className="shrink-0">
            <p
              className="text-white/90"
              style={{ fontFamily: "'Great Vibes', cursive", fontWeight: 400, fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: 1.2 }}
            >
              Welcome
            </p>
          </div>
          <div className="max-w-xl">
            <p
              className="text-white/80 text-center md:text-left"
              style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 300, fontSize: '17px', lineHeight: 1.8 }}
            >
              Una dimora sospesa tra realtà e incanto, dove la luce danza tra le fronde e ogni 
              passo racconta una poesia. Ogni evento diventa racconto, ogni dettaglio un'emozione 
              scolpita nel cuore. Benvenuti dove l'eleganza è natura e la memoria ha il sapore dell'eternità.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <SectionReveal>
            <div className="overflow-hidden rounded-sm">
              <img
                src={INTERIOR_IMG}
                alt="Interni di Villa Angeli"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="font-script text-3xl italic text-muted-foreground mb-1">Pegognaga, Mantova</p>
            <h2 className="font-display text-4xl lg:text-5xl font-black uppercase leading-tight mb-6">
              Dove la storia diventa la vostra cornice
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 font-body">
              Villa Angeli è una dimora d'epoca immersa nel territorio gonzaghesco,
              un tempo dimora estiva di Maria Gonzaga, restaurata con rispetto per valorizzare ogni ambiente originale.
              Il luogo ideale per chi cerca qualcosa di autentico e indimenticabile.
            </p>
            <Link
              to="/la-villa"
              className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-foreground hover:gap-4 transition-all duration-300 font-body"
            >
              Scopri di più <ArrowRight size={16} />
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-28 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <SectionReveal>
            <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4 text-center font-body">
              Perché Villa Angeli
            </p>
            <h2 className="font-display text-4xl lg:text-5xl text-center mb-16">
              Tre ragioni per sceglierci
            </h2>
          </SectionReveal>
          <div className="grid sm:grid-cols-3 gap-8">
            {highlights.map((item, i) => (
              <SectionReveal key={item.title} delay={i * 0.1}>
                <div className="text-center p-6">
                  <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-background flex items-center justify-center">
                    <item.icon size={24} strokeWidth={1.5} className="text-foreground" />
                  </div>
                  <h3 className="font-display text-xl mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-body">
                    {item.desc}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Events Preview */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <SectionReveal>
            <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4 font-body">
              Gli spazi raccontano
            </p>
            <h2 className="font-display text-4xl lg:text-5xl leading-tight mb-6">
              Ogni occasione merita la cornice giusta
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 font-body">
              Che si tratti di un matrimonio, di una cena aziendale o di una festa privata,
              Villa Angeli offre ambienti capaci di trasformare ogni momento in un ricordo eterno.
            </p>
            <Link to="/eventi">
              <Button className="h-14 px-10 text-sm tracking-widest uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300">
                Scopri gli Eventi
              </Button>
            </Link>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <div className="overflow-hidden rounded-sm">
              <img
                src={WEDDING_IMG}
                alt="Evento a Villa Angeli"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Event Cards */}
      <EventCards />

      {/* Reviews */}
      <ReviewsSection />

      {/* FAQ */}
      <FaqSection />

      {/* Contact Form */}
      <ContactFormSection sourcePage="home" />
    </>
  );
}