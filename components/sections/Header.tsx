'use client';

import Image from 'next/image';
import Container from '../ui/Container';
import Button from '../ui/Button';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100 z-50">
      <Container>
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-3">
            <Image
              src="/immagini/logo-nero-gradiente.png"
              alt="OnlinePayphone"
              width={180}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </div>
          
          <Button variant="gradient" size="md">
            Scarica l'app
          </Button>
        </div>
      </Container>
    </header>
  );
}