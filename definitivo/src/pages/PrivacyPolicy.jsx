import React from 'react';
import SectionReveal from '@/components/SectionReveal';

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-28 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionReveal>
          <p className="font-script text-3xl italic text-muted-foreground mb-1">Informativa</p>
          <h1 className="font-display text-5xl font-black uppercase tracking-wide mb-12">
            Privacy Policy
          </h1>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="space-y-10 font-body text-muted-foreground leading-relaxed text-base">

            <section>
              <h2 className="font-display text-xl text-foreground mb-3">Titolare del trattamento</h2>
              <p>
                Villa Angeli — Via C. Battisti, 1 — 46020 Pegognaga (Mantova)<br />
                Email: <a href="mailto:info@villa-angeli.com" className="underline text-foreground">info@villa-angeli.com</a><br />
                Tel: Francesca +39 338 791 3264
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-foreground mb-3">Dati raccolti</h2>
              <p className="mb-3">Raccogliamo i seguenti dati personali:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong className="text-foreground">Dati di contatto</strong>: nome, cognome, numero di telefono, email (tramite form di contatto)</li>
                <li><strong className="text-foreground">Dati di navigazione</strong>: indirizzo IP anonimizzato, pagine visitate, durata della visita (solo con consenso analytics)</li>
                <li><strong className="text-foreground">Preferenze cookie</strong>: scelte espresse nel banner cookie</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl text-foreground mb-3">Finalità e basi giuridiche</h2>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-medium text-foreground">Risposta alle richieste di contatto</p>
                  <p>Base giuridica: esecuzione di misure precontrattuali (art. 6(1)(b) GDPR)</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Analisi statistica del sito</p>
                  <p>Base giuridica: consenso (art. 6(1)(a) GDPR) — solo se accettato</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Funzionamento tecnico del sito</p>
                  <p>Base giuridica: interesse legittimo (art. 6(1)(f) GDPR)</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-xl text-foreground mb-3">Conservazione dei dati</h2>
              <p>
                I dati delle richieste di contatto sono conservati per il tempo necessario alla gestione
                della richiesta e, successivamente, per un massimo di 2 anni. I dati di navigazione
                anonimizzati sono conservati per un massimo di 26 mesi (periodo standard Google Analytics).
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-foreground mb-3">Diritti dell'interessato</h2>
              <p className="mb-3">Hai il diritto di:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Accedere ai tuoi dati personali</li>
                <li>Richiedere la rettifica o la cancellazione</li>
                <li>Opporti al trattamento o richiederne la limitazione</li>
                <li>Portabilità dei dati</li>
                <li>Revocare il consenso in qualsiasi momento</li>
                <li>Proporre reclamo al Garante per la Protezione dei Dati Personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="underline text-foreground">www.garanteprivacy.it</a>)</li>
              </ul>
              <p className="mt-4">
                Per esercitare i tuoi diritti scrivi a:{' '}
                <a href="mailto:info@villa-angeli.com" className="underline text-foreground">info@villa-angeli.com</a>
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-foreground mb-3">Sicurezza</h2>
              <p>
                Adottiamo misure tecniche e organizzative adeguate per proteggere i dati personali
                da accessi non autorizzati, perdita o divulgazione. Il sito utilizza connessioni
                cifrate (HTTPS).
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-foreground mb-3">Modifiche alla presente informativa</h2>
              <p>
                Ci riserviamo il diritto di aggiornare questa informativa. In caso di modifiche
                sostanziali, verrà richiesto un nuovo consenso dove necessario.
              </p>
              <p className="mt-3 text-xs opacity-60">Ultimo aggiornamento: aprile 2025</p>
            </section>

          </div>
        </SectionReveal>
      </div>
    </div>
  );
}