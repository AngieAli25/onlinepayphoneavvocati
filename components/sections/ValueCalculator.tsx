'use client';

import { useState } from 'react';
import { CurrencyEuroIcon, CalculatorIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import Section from '../ui/Section';
import Card from '../ui/Card';

export default function ValueCalculator() {
  const [params, setParams] = useState({
    callsPerDay: 2,
    workingDays: 5,
    hourlyRate: 100,
    callDuration: 30
  });

  // Calcoli in tempo reale
  const calculations = {
    perCall: (params.hourlyRate * params.callDuration) / 60,
    perDay: (params.hourlyRate * params.callDuration * params.callsPerDay) / 60,
    perMonth: (params.hourlyRate * params.callDuration * params.callsPerDay * 22) / 60,
    perYear: (params.hourlyRate * params.callDuration * params.callsPerDay * 22 * 12) / 60
  };

  const handleInputChange = (field: string, value: number) => {
    setParams(prev => ({
      ...prev,
      [field]: Math.max(0, value) // Previene valori negativi
    }));
  };

  return (
    <Section id="calcola-guadagno" background="white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
          Quanto vale il tuo tempo al telefono?
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Inserisci i tuoi parametri reali e scopri il tuo potenziale guadagno con PayPhone:
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <Card className="bg-white shadow-2xl border-0 p-8 lg:p-12" hover={false}>
          {/* Sezione Parametri - Top Row */}
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                <CalculatorIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-dark">
                I tuoi parametri
              </h3>
            </div>
            
            <p className="text-base text-gray-600 mb-8">
              Modifica i parametri sopra per vedere il tuo guadagno potenziale aggiornato istantaneamente.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">
                  Chiamate al giorno
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    min="0"
                    max="20"
                    value={params.callsPerDay}
                    onChange={(e) => handleInputChange('callsPerDay', parseInt(e.target.value) || 0)}
                    className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  />
                  <span className="text-gray-500 text-sm">chiamate</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">
                  Giorni lavorativi
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    min="1"
                    max="7"
                    value={params.workingDays}
                    onChange={(e) => handleInputChange('workingDays', parseInt(e.target.value) || 1)}
                    className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  />
                  <span className="text-gray-500 text-sm">giorni</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">
                  Tariffa oraria
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    min="0"
                    max="1000"
                    value={params.hourlyRate}
                    onChange={(e) => handleInputChange('hourlyRate', parseInt(e.target.value) || 0)}
                    className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  />
                  <span className="text-gray-500 text-sm">€/ora</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">
                  Durata media chiamata
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    min="5"
                    max="120"
                    value={params.callDuration}
                    onChange={(e) => handleInputChange('callDuration', parseInt(e.target.value) || 5)}
                    className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  />
                  <span className="text-gray-500 text-sm">minuti</span>
                </div>
              </div>
            </div>
          </div>

          {/* Separatore */}
          <div className="border-t border-gray-200 mb-12"></div>

          {/* Sezione Risultati - Bottom */}
          <div>
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-dark mb-1">
                Il tuo potenziale guadagno
              </h3>
              <p className="text-sm text-gray-600">
                Basato sui tuoi parametri personali
              </p>
              <div className="flex items-center justify-center space-x-2 mt-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-600 font-medium">Aggiornamento in tempo reale</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-secondary/10 rounded-lg p-4 text-center transition-all duration-300">
                <div className="text-xs font-bold text-gray-700 mb-1">Per chiamata</div>
                <div className="text-2xl font-bold text-dark transition-all duration-300">
                  €{calculations.perCall.toFixed(0)}
                </div>
              </div>

              <div className="bg-secondary/10 rounded-lg p-4 text-center transition-all duration-300">
                <div className="text-xs font-bold text-gray-700 mb-1">Al giorno</div>
                <div className="text-2xl font-bold text-dark transition-all duration-300">
                  €{calculations.perDay.toFixed(0)}
                </div>
              </div>

              <div className="bg-secondary/10 rounded-lg p-4 text-center transition-all duration-300">
                <div className="text-xs font-bold text-gray-700 mb-1">Al mese</div>
                <div className="text-2xl font-bold text-dark transition-all duration-300">
                  €{calculations.perMonth.toFixed(0)}
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent/20 via-primary/10 to-secondary/20 rounded-lg p-4 text-center shadow-lg transition-all duration-300">
                <div className="text-xs font-bold text-gray-700 mb-1">Guadagno annuale</div>
                <div className="text-3xl font-bold text-dark transition-all duration-300">
                  €{calculations.perYear.toFixed(0)}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}