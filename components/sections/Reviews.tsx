'use client';

import { useState, useEffect, useRef } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Section from '../ui/Section';

const reviews = [
  {
    id: 1,
    name: "Andrea Cappai",
    role: "Avvocato",
    rating: 5,
    text: "App fantastica! Sono riuscito a trasformare le mie competenze in un guadagno extra. Facile da usare e molto conveniente!"
  },
  {
    id: 2,
    name: "Ammamaria De Fazio",
    role: "Professionista",
    rating: 5,
    text: "Ottima app per offrire consulenze! Perfetta per chi vuole lavorare da remoto e aumentare i propri clienti."
  },
  {
    id: 3,
    name: "Marco Rinaldi",
    role: "Professionista",
    rating: 5,
    text: "Online PayPhone garantisce che ogni minuto di consulenza sia pagato. L'app mi ha permesso di attrarre nuovi clienti e aumentare il mio business. Strumento fantastico per professionisti IT!"
  },
  {
    id: 4,
    name: "Francesco Fossi",
    role: "Utente",
    rating: 4,
    text: "Ottima app per offrire consulenze! Perfetta per chi vuole lavorare da remoto e aumentare i propri clienti."
  }
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Create infinite array by repeating reviews
  const infiniteReviews = [...reviews, ...reviews, ...reviews];

  const startAutoPlay = () => {
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const nextSlide = () => {
    stopAutoPlay();
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
    startAutoPlay();
  };

  const prevSlide = () => {
    stopAutoPlay();
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    startAutoPlay();
  };

  const goToSlide = (index: number) => {
    stopAutoPlay();
    setCurrentIndex(index);
    startAutoPlay();
  };

  return (
    <Section background="white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
          Cosa dicono i nostri utenti
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Scopri le esperienze di chi ha già trasformato il proprio tempo in guadagno
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto px-16">
        {/* Carousel Container */}
        <div className="overflow-hidden">
          <div 
            className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
            style={{ transform: `translateX(-${(currentIndex + reviews.length) * 33.333}%)` }}
          >
            {infiniteReviews.map((review, index) => (
              <div key={`${review.id}-${index}`} className="w-1/3 flex-shrink-0 px-4">
                <div className="bg-gray-50 rounded-xl p-6 transition-all duration-300">
                  {/* Author Info - Top */}
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-dark">{review.name}</div>
                      <div className="text-sm text-gray-600">{review.role}</div>
                    </div>
                  </div>

                  {/* Rating Stars - Top */}
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Review Text - Bottom */}
                  <blockquote className="text-base text-gray-700 leading-relaxed">
                    "{review.text}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows - Outside the carousel */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 z-10"
          aria-label="Previous review"
        >
          <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 z-10"
          aria-label="Next review"
        >
          <ChevronRightIcon className="h-6 w-6 text-gray-600" />
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                currentIndex === index
                  ? 'bg-secondary scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
} 