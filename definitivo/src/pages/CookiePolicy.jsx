import React from 'react';
import SectionReveal from '@/components/SectionReveal';

export default function CookiePolicy() {
  return (
    <div className="pt-32 pb-28 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionReveal>
          <p className="font-script text-3xl italic text-muted-foreground mb-1">Informativa</p>
          <h1 className="font-display text-5xl font-black uppercase tracking-wide mb-12">
            Cookie Policy
          </h1>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="space-y-10 font-body text-muted-foreground leading-relaxed text-base">

            <section>
              <h2 className="font-display text-xl text-foreground mb-3">Cosa sono i cookie</h2>
              <p>
                I cookie sono piccoli file di testo che vengono salvati sul tuo dispositivo quando visiti un sito web.
                Vengono utilizzati per far funzionare il sito correttamente, migliorare la tua esperienza di navigazione
                e raccogliere informazioni statistiche anonime.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-foreground mb-3">Tipologie di cookie utilizzati</h2>

              <div className="space-y-6">
                <div className="border border-border/50 rounded-sm p-5">
                  <h3 className="font-display text-base text-foreground mb-2">Cookie Necessari</h3>
                  <p className="text-sm mb-2">
                    Indispensabili per il corretto funzionamento del sito. Non raccolgono dati personali
                    e non possono essere disattivati. Tra questi rientrano:
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Cookie di sessione per la navigazione</li>
                    <li>Cookie per le preferenze di consenso (<code className="bg-card px-1 rounded text-xs">villa_angeli_cookie_consent</code>)</li>
                  </ul>
                  <p className="text-xs mt-3 opacity-70">Durata: sessione / 12 mesi · Base giuridica: interesse legittimo</p>
                </div>

                <div className="border border-border/50 rounded-sm p-5">
                  <h3 className="font-display text-base text-foreground mb-2">Cookie Statistici</h3>
                  <p className="text-sm mb-2">
                    Ci aiutano a capire come i visitatori interagiscono con il sito raccogliendo informazioni
                    in forma anonima (es. pagine visitate, tempo di permanenza). Utilizziamo Google Analytics
                    con anonimizzazione dell'IP attivata.
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Google Analytics (<code className="bg-card px-1 rounded text-xs">_ga</code>, <code className="bg-card px-1 rounded text-xs">_ga_*</code>)</li>
                  </ul>
                  <p className="text-xs mt-3 opacity-70">Durata: fino a 24 mesi · Base giuridica: consenso</p>
                </div>

                <div className="border border-border/50 rounded-sm p-5">
                  <h3 className="font-display text-base text-foreground mb-2">Cookie di Marketing</h3>
                  <p className="text-sm mb-2">
                    Utilizzati per mostrare annunci personalizzati e misurare l'efficacia delle campagne pubblicitarie.
                    Attualmente non utilizziamo cookie di marketing.
                  </p>
                  <p className="text-xs mt-3 opacity-70">Base giuridica: consenso</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-xl text-foreground mb-3">Come gestire i cookie</h2>
              <p className="mb-3">
                Puoi modificare le tue preferenze in qualsiasi momento cliccando su{' '}
                <button
                  onClick={() => window.openCookieSettings?.()}
                  className="underline text-foreground hover:opacity-70 transition-opacity cursor-pointer"
                >
                  "Gestisci cookie"
                </button>{' '}
                in fondo a ogni pagina del sito.
              </p>
              <p>
                Puoi anche bloccare i cookie direttamente dalle impostazioni del tuo browser. Tieni presente
                che disabilitare alcuni cookie potrebbe influire sulla funzionalità del sito.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-foreground mb-3">Trasferimento dati extra-UE</h2>
              <p>
                Google Analytics potrebbe trasferire dati negli Stati Uniti. Google LLC aderisce
                al Data Privacy Framework EU-USA. Per maggiori informazioni consulta la{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-foreground"
                >
                  Privacy Policy di Google
                </a>.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-foreground mb-3">Contatti</h2>
              <p>
                Per qualsiasi domanda relativa ai cookie, puoi contattarci a:{' '}
                <a href="mailto:info@villa-angeli.com" className="underline text-foreground">
                  info@villa-angeli.com
                </a>
              </p>
              <p className="mt-3 text-xs opacity-60">Ultimo aggiornamento: aprile 2025</p>
            </section>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}