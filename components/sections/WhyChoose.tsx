'use client';

import { CheckIcon, ShieldCheckIcon, ClockIcon, CurrencyEuroIcon, UserIcon } from '@heroicons/react/24/solid';
import Section from '../ui/Section';
import Card from '../ui/Card';

const features = [
  {
    icon: ShieldCheckIcon,
    title: "Privacy Garantita",
    description: "Mantieni la privacy del tuo numero personale. I clienti chiamano un numero dedicato della piattaforma.",
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  },
  {
    icon: ClockIcon,
    title: "Zero No-Show",
    description: "Sistema di prenotazione integrato che riduce drasticamente i no-show e ottimizza la tua agenda.",
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  },
  {
    icon: CurrencyEuroIcon,
    title: "Pagamento Automatico",
    description: "Ogni chiamata è tracciata e fatturata automaticamente. Zero tempo dedicato alla gestione amministrativa.",
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  },
  {
    icon: UserIcon,
    title: "Clienti Garantiti",
    description: "Pagamento garantito al termine di ogni chiamata. Addio ai solleciti e ai crediti inesigibili.",
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  }
];

export default function WhyChoose() {
  return (
    <Section background="white" className="bg-secondary/5">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
          Perché scegliere{' '}
          <span className="text-secondary">Online PayPhone</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Eliminiamo tutti i problemi che conosci bene. Nessun compromesso, solo vantaggi concreti.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card key={index} hover={false} className="bg-white text-center p-6 hover:shadow-lg transition-all duration-200 ease-out transform-gpu shadow-md">
              <div className={`inline-flex items-center justify-center w-16 h-16 ${feature.bgColor} rounded-2xl mb-4`}>
                <Icon className={`h-8 w-8 ${feature.color}`} />
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </Card>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        <div className="text-center">
          <div className="text-5xl font-bold text-secondary mb-2">0</div>
          <div className="text-dark font-semibold mb-2">Problemi amministrativi</div>
          <p className="text-gray-600 text-sm">Gestione completamente automatizzata</p>
        </div>

        <div className="text-center">
          <div className="text-5xl font-bold text-accent mb-2">100%</div>
          <div className="text-dark font-semibold mb-2">Pagamenti garantiti</div>
          <p className="text-gray-600 text-sm">Nessun rischio di crediti inesigibili</p>
        </div>

        <div className="text-center">
          <div className="text-5xl font-bold text-primary mb-2">24/7</div>
          <div className="text-dark font-semibold mb-2">Disponibilità servizio</div>
          <p className="text-gray-600 text-sm">Supporto e assistenza sempre attivi</p>
        </div>
      </div>
    </Section>
  );
}