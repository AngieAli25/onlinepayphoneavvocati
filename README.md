# Online PayPhone - Landing Page

Landing page professionale per Online PayPhone, la piattaforma che consente agli avvocati di monetizzare le consulenze telefoniche.

## 🚀 Tecnologie Utilizzate

- **Next.js 15.4+** - Framework React con rendering ottimizzato
- **TypeScript** - Tipizzazione statica per codice più sicuro
- **Tailwind CSS 4.1+** - Framework CSS utility-first
- **Framer Motion 12+** - Libreria per animazioni fluide
- **Heroicons 2.1+** - Set di icone SVG ottimizzate

## 🎨 Design System

### Colori
- **Primary**: `#a03478` (Viola/Magenta)
- **Secondary**: `#00b7ff` (Azzurro)
- **Accent**: `#F76a00` (Arancione per CTA)
- **Dark**: `#181818` (Testi e contrasti)
- **White**: `#ffffff` (Sfondi e testi su dark)

### Tipografia
- **Font**: Inter Medium
- **Peso**: 500 (medium) come standard

## 🏗️ Struttura del Progetto

```
/
├── app/                    # App Router di Next.js
│   ├── globals.css        # Stili globali
│   ├── layout.tsx         # Layout principale
│   └── page.tsx           # Homepage
├── components/
│   ├── ui/                # Componenti UI riutilizzabili
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   └── Section.tsx
│   └── sections/          # Sezioni della landing page
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── Benefits.tsx
│       ├── ValueCalculator.tsx
│       ├── WhyChoose.tsx
│       ├── FAQ.tsx
│       ├── FinalCTA.tsx
│       └── Footer.tsx
└── documentation.md       # Documentazione del progetto
```

## 🚦 Avvio del Progetto

### Installazione dipendenze
```bash
npm install
```

### Avvio server di sviluppo
```bash
npm run dev
```

Il sito sarà disponibile su `http://localhost:3000`

### Build di produzione
```bash
npm run build
npm start
```

## ✨ Caratteristiche

### Sezioni Implementate
1. **Header** - Navigazione fissa con logo e CTA
2. **Hero** - Sezione principale con value proposition
3. **Benefits** - 5 vantaggi chiave con icone animate
4. **Value Calculator** - Calcolatore interattivo dei guadagni
5. **Why Choose** - 4 motivi per scegliere il servizio
6. **FAQ** - Domande frequenti espandibili
7. **Final CTA** - Call-to-action finale con processo
8. **Footer** - Informazioni e link utili

### Animazioni
- Fade in progressivo delle sezioni durante lo scroll
- Hover effects sui bottoni e cards
- Transizioni smooth per FAQ expansion
- Micro-animazioni su icone e elementi interattivi
- Elementi floating con movimento continuo

### Responsive Design
- Mobile-first approach
- Breakpoints ottimizzati (sm, md, lg, xl)
- Typography scale responsiva
- Spacing e layout adattivi

## 🎯 Ottimizzazioni

### Performance
- Lazy loading automatico per le sezioni
- Ottimizzazione bundle con Next.js 15
- Preload dei font Google
- Componenti ottimizzati con Framer Motion

### SEO
- Meta tag ottimizzati
- Struttura semantica HTML
- Schema markup per Rich Snippets
- Open Graph per social sharing

### Accessibilità
- Focus states personalizzati
- Aria labels appropriati
- Contrast ratio conforme WCAG
- Navigazione da tastiera

## 🔧 Personalizzazione

### Colori
Modifica i colori nel file `tailwind.config.js`:
```js
colors: {
  primary: '#a03478',
  secondary: '#00b7ff',
  accent: '#F76a00',
  // ...
}
```

### Contenuti
I testi sono definiti nei componenti delle sezioni e possono essere facilmente modificati mantenendo la struttura esistente.

### Animazioni
Le animazioni sono configurate con Framer Motion e possono essere personalizzate modificando le varianti nei componenti.

## 📱 Compatibilità Browser

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributi

Per contribuire al progetto:
1. Fork del repository
2. Crea un branch per la feature (`git checkout -b feature/nome-feature`)
3. Commit delle modifiche (`git commit -m 'Aggiunge nuova feature'`)
4. Push del branch (`git push origin feature/nome-feature`)
5. Apri una Pull Request

## 📄 Licenza

Questo progetto è proprietario di Online PayPhone. Tutti i diritti riservati.