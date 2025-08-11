'use client';

import { motion } from 'framer-motion';
import { ClockIcon, CurrencyEuroIcon, ShieldCheckIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Container from '../ui/Container';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center bg-gradient-to-br from-white via-gray-50 to-primary/5 overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-dark leading-tight mb-4">
                La tua consulenza legale inizia da una chiamata.
              </h1>
              <div className="text-4xl font-bold text-dark leading-tight">
                <div>Con PayPhone</div>
                <div>ogni minuto conta:</div>
                <div className="bg-logo-gradient bg-clip-text text-transparent">inizia a monetizzare.</div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Ogni giorno rispondi a richieste legali. Ma quante vengono davvero valorizzate?
                Con PayPhone monetizzi ogni minuto al telefono in modo semplice e professionale.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gradient" size="lg" className="text-center">
                Scarica l'app gratuitamente
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md">
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 z-10"></div>
                <div className="relative z-20">
                  <div className="aspect-square relative overflow-hidden rounded-3xl shadow-xl">
                    <Image
                      src="/images/lawyer-professional.jpg"
                      alt="Avvocato professionale che utilizza PayPhone"
                      width={1080}
                      height={1080}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}