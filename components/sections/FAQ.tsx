'use client';

import { useState } from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import Section from '../ui/Section';

const faqs = [
  {
    question: "Come funziona il pagamento?",
    answer: "Il pagamento avviene automaticamente al termine di ogni chiamata. Il sistema calcola la durata della consulenza e addebita l'importo secondo la tua tariffa oraria."
  },
  {
    question: "Il mio numero rimane privato?",
    answer: "Assolutamente sì. I clienti chiamano un numero dedicato della piattaforma, non il tuo numero personale. Tu ricevi la chiamata attraverso l'app."
  },
  {
    question: "Posso bloccare orari specifici?",
    answer: "Sì, hai pieno controllo sulla tua disponibilità. Puoi impostare orari di lavoro, bloccare giorni specifici e gestire la tua agenda."
  },
  {
    question: "Quando ricevo il pagamento?",
    answer: "Subito. Al termine della chiamata, il sistema elabora il pagamento automaticamente. Nessun bonifico da sollecitare, nessun tempo perso."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" background="white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
          Domande frequenti
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Risolvi ogni dubbio prima di iniziare. Abbiamo raccolto le domande più comuni dei nostri utenti.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index}>
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left py-4 flex items-center justify-between transition-colors duration-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 pr-4">
                {faq.question}
              </h3>
              <div className="flex-shrink-0">
                {openIndex === index ? (
                  <MinusIcon className="h-5 w-5 text-gray-500" />
                ) : (
                  <PlusIcon className="h-5 w-5 text-gray-500" />
                )}
              </div>
            </button>
            
            {openIndex === index && (
              <div className="pb-4">
                <p className="text-gray-700 leading-relaxed pl-4">
                  {faq.answer}
                </p>
              </div>
            )}
            
            {index < faqs.length - 1 && (
              <div className="border-b border-gray-200"></div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}