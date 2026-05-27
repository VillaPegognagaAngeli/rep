import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const cards = [
  {
    label: 'Feste',
    subtitle: 'Celebra i tuoi momenti',
    image: '/IMG_5693.jpg',
    path: '/eventi#eventi-privati',
  },
  {
    label: 'Matrimoni',
    subtitle: 'Il giorno più bello',
    image: '/images/IMG_9607.jpg',
    path: '/eventi#matrimoni',
  },
  {
    label: 'Eventi Aziendali',
    subtitle: 'Professionalità e stile',
    image: '/images/unnamed2.jpg',
    path: '/eventi#eventi-aziendali',
  },
  {
    label: '18esimi',
    subtitle: 'Un compleanno da ricordare',
    image: '/images/unnamed3.jpg',
    path: '/eventi#eventi-privati',
  },
];

export default function EventCards() {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();

  const handleClick = (path) => {
    const [route, anchor] = path.split('#');
    navigate(route);
    if (anchor) {
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm tracking-widest uppercase text-muted-foreground font-body mb-2">
            Per ogni occasione
          </p>
          <h2 className="font-display text-4xl lg:text-5xl">
            Scegli il tuo evento
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, i) => (
            <div onClick={() => handleClick(card.path)} key={card.label} className="cursor-pointer">
              <motion.div
                className="relative overflow-hidden rounded-sm cursor-pointer h-[380px] group"
                onHoverStart={() => setHovered(i)}
                onHoverEnd={() => setHovered(null)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${card.image})` }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-500 group-hover:from-black/90" />
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <p className="text-white/60 text-xs tracking-widest uppercase font-body mb-2 transition-all duration-300 group-hover:text-white/80">
                    {card.subtitle}
                  </p>
                  <h3 className="font-display text-2xl text-white font-black uppercase tracking-wide mb-4">
                    {card.label}
                  </h3>
                  <div className="flex items-center gap-2 text-white/70 text-xs tracking-widest uppercase font-body transition-all duration-300 group-hover:gap-4 group-hover:text-white">
                    <span>Scopri</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}