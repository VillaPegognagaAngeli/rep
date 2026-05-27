import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import SectionReveal from '@/components/SectionReveal';

const faqs = [
  {
    q: 'In caso di maltempo è prevista una soluzione interna?',
    a: 'Certamente. In caso di maltempo o di impossibilità di utilizzare gli spazi esterni, Villa Angeli dispone di ampie sale interne in grado di accogliere fino a 280 ospiti, garantendo continuità e comfort all\'evento senza rinunciare all\'atmosfera della location.',
  },
  {
    q: 'Disponete di un catering interno?',
    a: 'No, la nostra filosofia è lasciare la massima libertà nella scelta di catering e fornitori, così da poter creare un evento davvero personalizzato.\n\nSu richiesta saremo felici di consigliarvi catering e professionisti di fiducia con cui collaboriamo da anni e che condividono il nostro stile e la nostra attenzione ai dettagli.',
  },
  {
    q: 'Create pacchetti su misura?',
    a: 'Sì. Francesca, location manager di Villa Angeli, sarà a disposizione per accompagnarvi nell\'organizzazione dell\'evento, aiutandovi a coordinare fornitori, servizi e allestimenti in base alle vostre esigenze.\n\nPer progetti più strutturati collaboriamo inoltre con wedding planner ed event planner selezionati.',
  },
  {
    q: 'È possibile celebrare il rito civile a Villa Angeli?',
    a: 'Sì, Villa Angeli è Casa Comunale del Comune di Pegognaga ed è quindi possibile celebrare ufficialmente il rito civile all\'interno della proprietà.\n\nLa cerimonia può essere organizzata sia nel parco esterno sia nelle sale interne della villa.',
  },
  {
    q: 'Il parco dispone di illuminazione esterna?',
    a: 'Certamente. Il parco è valorizzato da una suggestiva illuminazione esterna che contribuisce a creare un\'atmosfera elegante e scenografica, ideale per eventi serali, ricevimenti e cene all\'aperto.',
  },
  {
    q: 'Quali allestimenti sono inclusi?',
    a: 'La tariffa comprende l\'utilizzo di tavoli tondi e rettangolari, sedute, pouf, divanetti, tavolini bassi.\n\nSu richiesta è inoltre possibile integrare allestimenti personalizzati e illuminazioni decorative grazie alla collaborazione con partner specializzati e fornitori di fiducia.',
  },
  {
    q: 'Organizzate anche eventi aziendali?',
    a: 'Sì, Villa Angeli ospita anche eventi corporate e incontri professionali. La location si presta perfettamente a convegni, workshop, meeting, cene aziendali, team building, presentazioni ed eventi di networking.\n\nGli spazi interni ed esterni permettono di creare esperienze eleganti e personalizzate, immerse nella natura e lontane dai contesti più convenzionali.',
  },
  {
    q: 'È possibile pernottare in Villa?',
    a: 'Sì, è possibile pernottare in villa. Per la coppia di sposi è disponibile una sistemazione dedicata all\'interno della proprietà, prenotabile con supplemento, per vivere e concludere l\'evento in totale relax e privacy.',
  },
];

function FaqItem({ item, index }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="border-b border-border/40 last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left gap-6 group"
      >
        <span
          className="text-base text-foreground transition-colors group-hover:text-foreground/80"
          style={{ fontFamily: "'Cinzel', serif", fontWeight: 400, letterSpacing: '0.04em' }}
        >
          {item.q}
        </span>
        <span className="shrink-0 w-7 h-7 rounded-full border border-border/60 flex items-center justify-center transition-all duration-300 group-hover:border-foreground/40">
          {open ? <Minus size={13} strokeWidth={1.5} /> : <Plus size={13} strokeWidth={1.5} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p
              className="pb-6 text-muted-foreground leading-relaxed text-base"
              style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 300 }}
            >
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FaqSection() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionReveal>
          <div className="text-center mb-16">
            <p
              className="text-sm tracking-widest uppercase text-muted-foreground mb-4"
              style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 300 }}
            >
              Domande frequenti
            </p>
            <h2
              className="text-4xl lg:text-5xl text-foreground"
              style={{ fontFamily: "'Cinzel', serif", fontWeight: 400 }}
            >
              FAQ
            </h2>
          </div>
        </SectionReveal>

        <div>
          {faqs.map((item, i) => (
            <FaqItem key={i} item={item} index={i} />
          ))}
        </div>

        <SectionReveal delay={0.3}>
          <p
            className="text-center text-muted-foreground text-sm mt-14"
            style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 300 }}
          >
            Non hai trovato risposta?{' '}
            <a
              href="#contattaci"
              className="text-foreground underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              Scrivici direttamente
            </a>
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}