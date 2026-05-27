import React from 'react';
import { Star, Quote } from 'lucide-react';
import SectionReveal from '@/components/SectionReveal';

const reviews = [
  {
    name: 'Paolo',
    date: 'Aprile 2026',
    title: 'Un magico martedì di metà aprile 2026',
    text: 'Un grazie speciale a Francesca e Marco per la disponibilità e la cura con cui hanno gestito ogni aspetto del nostro evento. Villa Angeli è un luogo davvero unico: la bellezza degli spazi, il giardino meraviglioso e l\'atmosfera che si respira rendono tutto perfetto.',
    rating: 5,
  },
  {
    name: 'Valentina & Luca',
    date: '2025',
    title: 'Location da sogno',
    text: 'Abbiamo scelto Villa Angeli per il nostro matrimonio e non potremmo essere più felici. Gli spazi sono magnifici, la gestione impeccabile e ogni nostro desiderio è stato esaudito. I nostri ospiti non hanno smesso di complimentarsi per tutta la serata.',
    rating: 5,
  },
  {
    name: 'Giulia & Matteo',
    date: '2024',
    title: 'Un giorno indimenticabile',
    text: 'Dall\'aperitivo nel giardino pensile al ricevimento nel salone, tutto è stato perfetto. Il personale è stato disponibile e professionale, accompagnandoci in ogni fase dell\'organizzazione con entusiasmo e competenza.',
    rating: 5,
  },
];

function StarRow({ count = 5 }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-accent text-accent" />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="py-28 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest uppercase text-muted-foreground font-body mb-3">
              Cosa dicono di noi
            </p>
            <h2 className="font-display text-4xl lg:text-5xl mb-4">Recensioni</h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <StarRow />
              <span className="font-display text-2xl">5.0</span>
              <span className="text-muted-foreground text-sm font-body">· 7 recensioni su Matrimonio.com</span>
            </div>
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <SectionReveal key={review.name} delay={i * 0.15}>
              <div className="bg-background rounded-sm p-8 flex flex-col h-full">
                <Quote size={28} strokeWidth={1} className="text-accent mb-5 shrink-0" />
                <h3 className="font-display text-lg mb-3 leading-snug">{review.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-body flex-1">
                  "{review.text}"
                </p>
                <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
                  <div>
                    <p className="font-body text-sm font-medium text-foreground">{review.name}</p>
                    <p className="font-body text-xs text-muted-foreground">{review.date}</p>
                  </div>
                  <StarRow />
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.3}>
          <div className="text-center mt-12">
            <a
              href="https://www.matrimonio.com/ville-matrimoni/villa-angeli--e338560"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors font-body"
            >
              Leggi tutte le recensioni su Matrimonio.com →
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}