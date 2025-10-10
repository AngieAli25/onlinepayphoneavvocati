'use client';

import { motion } from 'framer-motion';
import { 
  CurrencyEuroIcon,
  CalendarDaysIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  DocumentTextIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import Section from '../ui/Section';

const benefits = [
  {
    icon: CurrencyEuroIcon,
    title: "Monetizzazione immediata",
    description: "Imposta la tua tariffa oraria e ricevi il pagamento in automatico al termine della consulenza. Nessuna attesa, nessun sollecito.",
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    icon: CalendarDaysIcon,
    title: "Gestione agenda",
    description: "Organizza le tue disponibilità, blocca gli orari e gestisci tutto direttamente da app.",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: ShieldCheckIcon,
    title: "Riservatezza Garantita",
    description: "Offri consulenze legali senza fornire il numero personale. Ogni chiamata avviene tramite piattaforma, in piena sicurezza.",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Piattaforma integrata",
    description: "Chiamata, pagamento, ricevuta, disponibilità: tutto in un'unica app.",
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  },
  {
    icon: DocumentTextIcon,
    title: "Fatturazione automatica",
    description: "Ogni pagamento è accompagnato da fattura immediata e ricevuta digitale. Tutto tracciato, tutto in regola.",
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  },
  {
    icon: UserGroupIcon,
    title: "Visibilità per nuovi clienti",
    description: "Entra in una rete di utenti in cerca di consulenza legale. Ricevi chiamate da nuovi clienti, pronti a pagare per il tuo tempo.",
    color: "text-accent",
    bgColor: "bg-accent/10"
  }
];

export default function Benefits() {
  return (
    <Section id="benefici" background="white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
          Con Online PayPhone puoi:
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Tutti gli strumenti necessari per trasformare le tue consulenze telefoniche in un business redditizio.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start space-x-4 group"
            >
              <div className={`flex-shrink-0 w-12 h-12 ${benefit.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                <Icon className={`h-6 w-6 ${benefit.color}`} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-dark mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}