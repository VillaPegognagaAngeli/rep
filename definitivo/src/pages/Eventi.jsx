import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Briefcase, PartyPopper, ArrowRight } from 'lucide-react';
import SectionReveal from '@/components/SectionReveal';
import ContactFormSection from '@/components/ContactFormSection';

// Immagini reali Villa Angeli
const WEDDING_IMG = '/images/IMG_9607.jpg';
const CORPORATE_IMG = '/images/unnamed2.jpg';
const PRIVATE_IMG = '/IMG_5693.jpg';

const events = [
  {
    id: 'matrimoni',
    icon: Heart,
    title: 'Matrimoni',
    subtitle: 'Il giorno più bello, nella cornice perfetta',
    description:
      'Celebrate il vostro amore in una dimora che sembra uscita da un sogno. Sale affrescate per la cerimonia, giardini incantati per il ricevimento, e un team che cura ogni dettaglio.',
    image: WEDDING_IMG,
    features: [
      'Cerimonia civile in villa',
      'Ricevimenti fino a 300 ospiti',
      'Giardino per aperitivo e festa',
      'Suite per gli sposi',
      'Coordinamento con fornitori',
    ],
  },
  {
    id: 'eventi-aziendali',
    icon: Briefcase,
    title: 'Eventi Aziendali',
    subtitle: 'Dove il business incontra l\'ispirazione',
    description:
      'Meeting, convention e team building in un ambiente che stimola la creatività e lascia un\'impressione duratura su clienti e collaboratori.',
    image: CORPORATE_IMG,
    features: [
      'Sale meeting attrezzate',
      'Servizio catering personalizzato',
      'Aree break e networking',
      'Supporto tecnico dedicato',
    ],
  },
  {
    id: 'eventi-privati',
    icon: PartyPopper,
    title: 'Eventi Privati',
    subtitle: 'Momenti intimi, scenari grandiosi',
    description:
      'Compleanni, anniversari, cene di gala. Ogni celebrazione diventa unica negli spazi di Villa Angeli, con un servizio attento e personalizzato.',
    image: PRIVATE_IMG,
    features: [
      'Feste private esclusive',
      'Cene di gala',
      'Anniversari e celebrazioni',
      'Menu personalizzabili',
      'Allestimenti su misura',
    ],
  },
];

export default function Eventi() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={WEDDING_IMG}
            alt="Eventi a Villa Angeli"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
        <div className="relative z-10 px-6 pb-16 max-w-6xl mx-auto w-full">
        <p className="font-script text-3xl italic text-white/80 mb-1">I nostri servizi</p>
        <h1 className="font-display text-5xl md:text-7xl text-white font-black uppercase tracking-wide">
          Eventi & Servizi
        </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <SectionReveal>
            <h2 className="font-display text-4xl lg:text-5xl leading-tight mb-8">
              Ogni evento merita un palcoscenico straordinario
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed font-body">
              Matrimoni, meeting aziendali, celebrazioni private: ogni occasione
              trova a Villa Angeli lo spazio ideale per diventare indimenticabile.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Event Sections */}
      {events.map((event, i) => (
        <section
          key={event.title}
          id={event.id}
          className={`py-20 px-6 ${i % 2 === 1 ? 'bg-card' : ''}`}
        >
          <div className="max-w-6xl mx-auto">
            <div
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                i % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <SectionReveal className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="overflow-hidden rounded-sm">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center">
                    <event.icon size={20} strokeWidth={1.5} className="text-foreground" />
                  </div>
                  <p className="text-sm tracking-widest uppercase text-muted-foreground font-body">
                    {event.subtitle}
                  </p>
                </div>
                <h3 className="font-display text-4xl mb-6">{event.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8 font-body">
                  {event.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {event.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-foreground font-body">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contattaci"
                  className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-foreground hover:gap-4 transition-all duration-300 font-body"
                >
                  Richiedi informazioni <ArrowRight size={16} />
                </a>
              </SectionReveal>
            </div>
          </div>
        </section>
      ))}

      {/* Contact Form */}
      <ContactFormSection sourcePage="eventi" />
    </>
  );
}