import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, Send } from 'lucide-react';

const howFoundOptions = [
  'Social (Instagram, TikTok, Facebook)',
  'LinkedIn',
  'Passaparola',
  'Altri siti web',
];

export default function ContactFormSection({ sourcePage = 'home' }) {
  const [fsState, fsHandleSubmit] = useForm('xlgvonpq');
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    contact_info: '',
    contact_type: 'telefono',
    how_found_us: '',
  });
  /** @type {[Record<string, string|undefined>, Function]} */
  const [errors, setErrors] = useState(/** @type {Record<string, string|undefined>} */({}));

  const validate = () => {
    /** @type {Record<string, string>} */
    const errs = {};
    if (!form.first_name.trim()) errs.first_name = 'Campo obbligatorio';
    if (!form.last_name.trim()) errs.last_name = 'Campo obbligatorio';
    if (!form.contact_info.trim()) errs.contact_info = 'Campo obbligatorio';
    if (!form.how_found_us) errs.how_found_us = "Seleziona un'opzione";
    return errs;
  };

  /** @param {import('react').FormEvent<HTMLFormElement>} e */
  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    fsHandleSubmit(e);
  };

  /**
   * @param {string} field
   * @param {string} value
   */
  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((/** @type {Record<string, string|undefined>} */ prev) => ({ ...prev, [field]: undefined }));
  };

  if (fsState.succeeded) {
    return (
      <section className="bg-card py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto text-center"
        >
          <CheckCircle2 className="w-16 h-16 text-foreground mx-auto mb-6" strokeWidth={1} />
          <h3 className="font-display text-3xl mb-3">Grazie per averci contattato</h3>
          <p className="text-muted-foreground font-body">
            Vi risponderemo al più presto.
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="bg-card py-24 px-6" id="contattaci">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left text */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-4xl lg:text-5xl leading-tight mb-6">
                Inizia il tuo capitolo a Villa Angeli
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Compila il form e ti ricontatteremo entro 24 ore per realizzare il tuo evento perfetto.
              </p>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Hidden fields for state-driven values */}
              <input type="hidden" name="contact_type" value={form.contact_type} />
              <input type="hidden" name="how_found_us" value={form.how_found_us} />
              <input type="hidden" name="source_page" value={sourcePage} />

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="first_name" className="text-sm tracking-wide uppercase text-muted-foreground mb-2 block">
                    Nome *
                  </Label>
                  <Input
                    id="first_name"
                    name="first_name"
                    value={form.first_name}
                    onChange={(e) => handleChange('first_name', e.target.value)}
                    className="h-14 bg-background border-border text-base"
                    placeholder="Il tuo nome"
                  />
                  {errors.first_name && (
                    <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.first_name}
                    </p>
                  )}
                  <ValidationError field="first_name" errors={fsState.errors} className="text-destructive text-sm mt-1" />
                </div>
                <div>
                  <Label htmlFor="last_name" className="text-sm tracking-wide uppercase text-muted-foreground mb-2 block">
                    Cognome *
                  </Label>
                  <Input
                    id="last_name"
                    name="last_name"
                    value={form.last_name}
                    onChange={(e) => handleChange('last_name', e.target.value)}
                    className="h-14 bg-background border-border text-base"
                    placeholder="Il tuo cognome"
                  />
                  {errors.last_name && (
                    <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.last_name}
                    </p>
                  )}
                  <ValidationError field="last_name" errors={fsState.errors} className="text-destructive text-sm mt-1" />
                </div>
              </div>

              {/* Contact type toggle */}
              <div>
                <Label className="text-sm tracking-wide uppercase text-muted-foreground mb-3 block">
                  Preferenza di contatto *
                </Label>
                <div className="flex gap-3 mb-3">
                  {['telefono', 'email'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => handleChange('contact_type', type)}
                      className={`px-6 py-3 rounded-full text-sm font-body tracking-wide transition-all duration-300 ${
                        form.contact_type === type
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-background border border-border text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {type === 'telefono' ? 'Telefono' : 'Email'}
                    </button>
                  ))}
                </div>
                <Input
                  name="contact_info"
                  value={form.contact_info}
                  onChange={(e) => handleChange('contact_info', e.target.value)}
                  className="h-14 bg-background border-border text-base"
                  placeholder={form.contact_type === 'telefono' ? '+39 ...' : 'email@esempio.it'}
                  type={form.contact_type === 'email' ? 'email' : 'tel'}
                />
                {errors.contact_info && (
                  <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.contact_info}
                  </p>
                )}
                <ValidationError field="contact_info" errors={fsState.errors} className="text-destructive text-sm mt-1" />
              </div>

              {/* How found us - pills */}
              <div>
                <Label className="text-sm tracking-wide uppercase text-muted-foreground mb-3 block">
                  Come ci hai conosciuti? *
                </Label>
                <div className="flex flex-wrap gap-3">
                  {howFoundOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleChange('how_found_us', option)}
                      className={`px-5 py-3 rounded-full text-sm font-body tracking-wide transition-all duration-300 ${
                        form.how_found_us === option
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-background border border-border text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                {errors.how_found_us && (
                  <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.how_found_us}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={fsState.submitting}
                className="w-full h-14 bg-primary text-primary-foreground text-base tracking-widest uppercase hover:bg-primary/90 transition-all duration-300"
              >
                {fsState.submitting ? (
                  <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Invia Richiesta
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
