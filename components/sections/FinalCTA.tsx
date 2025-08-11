'use client';

import Section from '../ui/Section';
import Button from '../ui/Button';

const steps = [
  {
    number: "1",
    title: "Scarica e registrati",
    description: "Download gratuito dell'app. Registrazione in 2 minuti con i tuoi dati professionali e P.IVA."
  },
  {
    number: "2",
    title: "Imposta le tue tariffe",
    description: "Definisci il costo al minuto delle tue consulenze. Puoi differenziare per tipo di pratica o urgenza."
  },
  {
    number: "3",
    title: "Ricevi chiamate e guadagna",
    description: "I clienti ti contattano, il timer parte automaticamente. Al termine, pagamento immediato sul tuo conto."
  }
];

export default function FinalCTA() {
  return (
    <Section background="gray">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
          Come funziona
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Inizia a guadagnare dalle tue consulenze in 3 semplici passi
        </p>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Connecting line - single continuous line */}
        <div className="hidden md:block absolute top-[16%] left-[16.67%] right-[16.67%] h-0.5 bg-gray-300"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Step circle */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-6 mx-auto relative z-10">
                <span className="text-white font-bold text-xl">{step.number}</span>
              </div>
              
              <h3 className="text-xl font-bold text-dark mb-4">
                {step.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-16">
        <Button 
          variant="gradient" 
          size="lg"
        >
          Scarica l'app gratuitamente
        </Button>
      </div>
    </Section>
  );
}