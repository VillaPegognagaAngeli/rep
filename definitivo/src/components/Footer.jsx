import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border/40 text-foreground py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/IMG_0287.png"
                alt="Villa Angeli logo"
                className="h-10 w-auto opacity-90"
              />
              <img
                src="/images/IMG_0292.png"
                alt="Villa Angeli"
                className="h-7 w-auto opacity-90"
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed font-body">
              Un luogo senza tempo nel cuore della pianura mantovana,
              dove storia e bellezza si fondono per creare eventi indimenticabili.
            </p>
          </div>

          <div>
            <h4 className="text-sm tracking-widest uppercase mb-4 font-body text-muted-foreground">Navigazione</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'La Villa', path: '/la-villa' },
                { label: 'Storia', path: '/storia' },
                { label: 'Spazi & Personalizzazione', path: '/spazi' },
                { label: 'Eventi & Servizi', path: '/eventi' },
                { label: 'Contatti', path: '/contatti' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm font-body"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm tracking-widest uppercase mb-4 font-body text-muted-foreground">Contatti</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground font-body">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Via C. Battisti, 1 — 46020 Pegognaga (Mantova)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <span>Francesca +39 338 791 3264</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                <span>info@villa-angeli.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/40 pt-8 text-center space-y-3">
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground font-body">
            <a href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <span className="opacity-30">·</span>
            <a href="/cookie-policy" className="hover:text-foreground transition-colors">Cookie Policy</a>
            <span className="opacity-30">·</span>
            <button
              onClick={() => window.openCookieSettings?.()}
              className="hover:text-foreground transition-colors cursor-pointer"
            >
              Gestisci cookie
            </button>
          </div>
          <p className="text-muted-foreground text-xs tracking-wide font-body">
            © {new Date().getFullYear()} Villa Angeli — Pegognaga (MN). Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
}