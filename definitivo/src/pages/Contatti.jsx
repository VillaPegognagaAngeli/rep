import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import SectionReveal from '@/components/SectionReveal';
import ContactFormSection from '@/components/ContactFormSection';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Indirizzo',
    value: 'Via C. Battisti, 1 — 46020 Pegognaga (Mantova)',
  },
  {
    icon: Phone,
    label: 'Telefono',
    value: 'Francesca +39 338 791 3264',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@villa-angeli.com',
  },
  {
    icon: Clock,
    label: 'Visite su appuntamento',
    value: 'Lun–Sab, 9:00–18:00',
  },
];

export default function Contatti() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <SectionReveal>
            <p className="font-script text-3xl italic text-muted-foreground mb-1">Siamo qui per voi</p>
            <h1 className="font-display text-5xl md:text-7xl font-black uppercase tracking-wide mb-8">
              Contatti
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed font-body">
              Avete un progetto in mente? Contattateci per una consulenza
              personalizzata e vi guideremo nella scelta degli spazi perfetti.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, i) => (
            <SectionReveal key={info.label} delay={i * 0.1}>
              <div className="bg-card p-6 rounded-sm text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-background flex items-center justify-center">
                  <info.icon size={20} strokeWidth={1.5} className="text-foreground" />
                </div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2 font-body">
                  {info.label}
                </p>
                <p className="text-sm font-body text-foreground">{info.value}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Map */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto overflow-hidden rounded-sm">
          <iframe
            title="Villa Angeli - Pegognaga"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2820.5!2d10.9833!3d44.9971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4780094e3b5e5e5e%3A0x0!2sVia+Cesare+Battisti%2C+1%2C+46020+Pegognaga+MN!5e0!3m2!1sit!2sit!4v1"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </section>

      {/* Contact Form */}
      <ContactFormSection sourcePage="contatti" />
    </>
  );
}