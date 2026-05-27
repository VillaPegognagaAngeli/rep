/**
 * CookieBanner — Banner GDPR conforme al Garante Privacy italiano.
 * Mostra il banner al primo accesso e permette gestione granulare.
 */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import {
  getSavedConsent,
  saveConsent,
  applyConsent,
  COOKIE_CATEGORIES,
} from '@/lib/cookieConsent';

// ⬇️ Inserisci qui il tuo Measurement ID di Google Analytics (es. "G-XXXXXXXXXX")
// Lascia vuoto ('') per disabilitare GA
const GA_MEASUREMENT_ID = '';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const saved = getSavedConsent();
    if (saved) {
      // Preferenze già salvate: applica senza mostrare banner
      applyConsent(saved.preferences, GA_MEASUREMENT_ID);
    } else {
      // Prima visita: mostra banner
      setVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const prefs = { necessary: true, analytics: true, marketing: true };
    saveConsent(prefs);
    applyConsent(prefs, GA_MEASUREMENT_ID);
    setVisible(false);
  };

  const handleRejectAll = () => {
    const prefs = { necessary: true, analytics: false, marketing: false };
    saveConsent(prefs);
    applyConsent(prefs, GA_MEASUREMENT_ID);
    setVisible(false);
  };

  const handleSavePreferences = () => {
    saveConsent(preferences);
    applyConsent(preferences, GA_MEASUREMENT_ID);
    setVisible(false);
  };

  const toggleCategory = (id) => {
    if (id === 'necessary') return; // non modificabile
    setPreferences((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Esposto globalmente per il link "Gestisci cookie" nel footer
  useEffect(() => {
    window.openCookieSettings = () => setVisible(true);
    return () => { delete window.openCookieSettings; };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Banner minimal — bottom bar */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Gestione preferenze cookie"
            className="fixed bottom-0 left-0 right-0 z-[100] bg-background/95 backdrop-blur-md border-t border-border/40"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 35, stiffness: 300 }}
          >
            <div className="max-w-6xl mx-auto px-6 py-5">

              {/* Dettagli espandibili */}
              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col sm:flex-row gap-3 mb-5 pb-5 border-b border-border/40">
                      {Object.values(COOKIE_CATEGORIES).map((cat) => {
                        const isOn = preferences[cat.id];
                        return (
                          <div key={cat.id} className="flex items-center justify-between sm:flex-col sm:items-start gap-2 flex-1">
                            <div className="flex items-center justify-between w-full">
                              <span className="font-display text-xs uppercase tracking-widest text-foreground">{cat.label}</span>
                              <button
                                disabled={cat.required}
                                onClick={() => toggleCategory(cat.id)}
                                aria-pressed={isOn}
                                className={`relative w-8 h-4 rounded-full transition-colors shrink-0 ${
                                  isOn ? 'bg-foreground' : 'bg-muted'
                                } ${cat.required ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
                              >
                                <span className={`absolute top-0.5 left-0.5 w-3 h-3 bg-background rounded-full shadow transition-transform ${isOn ? 'translate-x-4' : ''}`} />
                              </button>
                            </div>
                            <p className="text-xs text-muted-foreground font-body leading-relaxed">{cat.description}</p>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Main row */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <p className="text-xs text-muted-foreground font-body leading-relaxed flex-1">
                  Utilizziamo cookie per migliorare la tua esperienza.{' '}
                  <a href="/cookie-policy" className="underline hover:text-foreground transition-colors">Cookie Policy</a>
                  {' '}·{' '}
                  <a href="/privacy-policy" className="underline hover:text-foreground transition-colors">Privacy Policy</a>
                </p>
                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors font-body tracking-wide whitespace-nowrap"
                  >
                    {showDetails ? 'Chiudi' : 'Personalizza'}
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors font-body tracking-wide whitespace-nowrap"
                  >
                    Rifiuta
                  </button>
                  {showDetails && (
                    <button
                      onClick={handleSavePreferences}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors font-body tracking-wide whitespace-nowrap"
                    >
                      Salva
                    </button>
                  )}
                  <button
                    onClick={handleAcceptAll}
                    className="text-xs tracking-widest uppercase font-body px-5 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors whitespace-nowrap"
                  >
                    Accetta
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}