import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Trees, Flower2, Users, Car, Shield, Star } from 'lucide-react';
import SectionReveal from '@/components/SectionReveal';
import ContactFormSection from '@/components/ContactFormSection';

const GARDEN_IMG = '/images/immagine_2026-04-28_113551865.png';
const INTERIOR_IMG = '/images/IMG_9612.jpg';
const AERIAL_IMG = '/images/IMG_9610.jpg';
const DETAIL_IMG = '/images/IMG_9608.jpg';

const gardens = [
  {
    icon: Flower2,
    name: 'Giardino Pensile',
    tag: 'Intimo & Scenografico',
    description:
      "Un angolo sospeso di rara bellezza, ideale per cerimonie intime, aperitivi esclusivi e momenti privati. La sua atmosfera raccolta e scenografica lo rende perfetto per chi cerca un'ambientazione unica e suggestiva.",
  },
  {
    icon: Trees,
    name: 'Giardino Grande',
    tag: 'Matrimoni & Grandi Ricevimenti',
    description:
      "Ampio e versatile, il Giardino Grande è la cornice ideale per matrimoni, ricevimenti all'aperto e cerimonie con numerosi ospiti. La sua estensione consente allestimenti sontuosi e accoglie un numero elevato di invitati.",
  },
];

const features = [
  {
    icon: Users,
    title: 'Capienza modulare',
    desc: 'Il salone centrale ospita fino a 120 persone, espandibile a 250 con le sale adiacenti. Il Giardino Grande accoglie un numero ancora maggiore di invitati.',
  },
  {
    icon: Car,
    title: 'Parcheggio gratuito',
    desc: 'Nelle immediate vicinanze della villa è disponibile un ampio parcheggio gratuito per tutti gli ospiti.',
  },
  {
    icon: Shield,
    title: 'Esclusività garantita',
      desc: "Villa Angeli ospita un unico evento al giorno, con la possibilità di trasferire la festa all'interno in caso di maltempo.",
  },
];

const occasions = [
  'Matrimoni e Feste',
  'Eventi aziendali',
  'Degustazioni',
  'Congressi',
  'Shooting fotografici e cinematografici',
  'Mostre e rassegne',
];

export default function Spazi() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={AERIAL_IMG}
            alt="Spazi di Villa Angeli"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
        <div className="relative z-10 px-6 pb-16 max-w-6xl mx-auto w-full">
        <p className="font-script text-3xl italic text-white/80 mb-1">Spazi su misura</p>
        <h1 className="font-display text-5xl md:text-7xl text-white font-black uppercase tracking-wide">
          Spazi & Personalizzazione
        </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <SectionReveal>
            <h2 className="font-display text-4xl lg:text-5xl leading-tight mb-8">
              Ogni spazio, pensato per voi
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed font-body">
              Gli spazi di Villa Angeli sono totalmente personalizzabili in base alle proprie esigenze
              e si prestano per ospitare qualsiasi tipologia di evento, dall'incontro più intimo
              alla grande celebrazione.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Gardens */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {gardens.map((g, i) => (
            <SectionReveal key={g.name} delay={i * 0.15}>
              <div className="bg-card rounded-sm p-10 h-full flex flex-col">
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center mb-6">
                  <g.icon size={22} strokeWidth={1.5} className="text-foreground" />
                </div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2 font-body">
                  {g.tag}
                </p>
                <h3 className="font-display text-3xl mb-4">{g.name}</h3>
                <p className="text-muted-foreground leading-relaxed font-body flex-1">
                  {g.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Garden image */}
      <SectionReveal>
        <section className="px-6 pb-28">
          <div className="max-w-7xl mx-auto overflow-hidden rounded-sm">
            <img
              src={GARDEN_IMG}
              alt="I giardini di Villa Angeli"
              className="w-full h-[400px] lg:h-[500px] object-cover"
            />
          </div>
        </section>
      </SectionReveal>

      {/* Salone + features */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <SectionReveal>
            <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4 text-center font-body">
              I nostri spazi interni
            </p>
            <h2 className="font-display text-4xl lg:text-5xl text-center mb-16">
              Struttura e servizi inclusi
            </h2>
          </SectionReveal>
          <div className="grid sm:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <SectionReveal key={f.title} delay={i * 0.1}>
                <div className="text-center p-6">
                  <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-background flex items-center justify-center">
                    <f.icon size={24} strokeWidth={1.5} className="text-foreground" />
                  </div>
                  <h3 className="font-display text-xl mb-3">{f.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-body">{f.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interior image + occasions */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <SectionReveal>
            <div className="overflow-hidden rounded-sm">
              <img
                src={INTERIOR_IMG}
                alt="Salone di Villa Angeli"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4 font-body">
              Perfetta per ogni occasione
            </p>
            <h2 className="font-display text-4xl leading-tight mb-8">
              La Villa si presta per ogni tipo di evento
            </h2>
            <div className="space-y-4">
              {occasions.map((occ) => (
                <div key={occ} className="flex items-center gap-4 border-b border-border pb-4 last:border-0 last:pb-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground shrink-0" />
                  <span className="font-display text-xl">{occ}</span>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link
                to="/contatti"
                className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-foreground hover:gap-4 transition-all duration-300 font-body"
              >
                Richiedi informazioni <ArrowRight size={16} />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Contact Form */}
      <ContactFormSection sourcePage="spazi" />
    </>
  );
}