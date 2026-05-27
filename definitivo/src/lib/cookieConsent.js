/**
 * Cookie Consent Manager - Villa Angeli
 * Conforme GDPR e Garante Privacy italiano
 */

const CONSENT_KEY = 'villa_angeli_cookie_consent';
const CONSENT_VERSION = '1.0'; // Aggiorna per richiedere nuovo consenso

export const COOKIE_CATEGORIES = {
  necessary: {
    id: 'necessary',
    label: 'Necessari',
    description: 'Cookie essenziali per il funzionamento del sito. Non possono essere disabilitati.',
    required: true,
  },
  analytics: {
    id: 'analytics',
    label: 'Statistici',
    description: 'Ci aiutano a capire come i visitatori interagiscono con il sito, raccogliendo informazioni in forma anonima.',
    required: false,
  },
  marketing: {
    id: 'marketing',
    label: 'Marketing',
    description: 'Utilizzati per mostrare annunci pertinenti e misurare l\'efficacia delle campagne pubblicitarie.',
    required: false,
  },
};

/** Legge il consenso salvato in localStorage */
export function getSavedConsent() {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    // Invalida consenso se la versione è cambiata
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

/** Salva il consenso in localStorage */
export function saveConsent(preferences) {
  const consent = {
    version: CONSENT_VERSION,
    date: new Date().toISOString(),
    preferences: {
      necessary: true, // sempre true
      analytics: preferences.analytics ?? false,
      marketing: preferences.marketing ?? false,
    },
  };
  localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  return consent;
}

/** Attiva Google Analytics solo se l'utente ha dato consenso */
export function loadGoogleAnalytics(measurementId) {
  if (!measurementId) return;
  if (document.getElementById('ga-script')) return; // già caricato

  // gtag script
  const script = document.createElement('script');
  script.id = 'ga-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', measurementId, { anonymize_ip: true });
}

/** Rimuove Google Analytics (best-effort, non cancella cookie già impostati) */
export function removeGoogleAnalytics() {
  const script = document.getElementById('ga-script');
  if (script) script.remove();
  // Segnala a GA di non tracciare
  if (window.gtag) {
    window.gtag('consent', 'update', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
    });
  }
}

/** Applica le preferenze (attiva/disattiva script di terze parti) */
export function applyConsent(preferences, gaId) {
  if (preferences.analytics && gaId) {
    loadGoogleAnalytics(gaId);
  } else {
    removeGoogleAnalytics();
  }
}