'use client';

import Image from 'next/image';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import Container from '../ui/Container';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="/immagini/logo-bianco-gradiente.png"
                alt="OnlinePayphone"
                width={180}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              La piattaforma che consente agli avvocati di monetizzare ogni minuto speso 
              al telefono, in modo trasparente, immediato e professionale.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:info@onlinepayphone.com" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                <EnvelopeIcon className="h-5 w-5" />
                <span>info@onlinepayphone.com</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Piattaforma</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Come Funziona</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Prezzi</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sicurezza</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Supporto</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legale</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termini di Servizio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Online PayPhone. Tutti i diritti riservati.</p>
        </div>
      </Container>
    </footer>
  );
}