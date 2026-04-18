import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SmoothScroll } from './components/SmoothScroll';
import { Hero } from './components/Hero';
import { Patronage } from './components/Patronage';
import { Concept } from './components/Concept';
import { Timeline } from './components/Timeline';
import { CastingCTA } from './components/CastingCTA';
import { Crowns } from './components/Crowns';
import { Jury } from './components/Jury';
import { Partners } from './components/Partners';
import { Footer } from './components/Footer';
import { CrownAnimation } from './components/CrownAnimation';
import { LanguageSwitcher, MobileLanguageSwitcher } from './components/LanguageSwitcher';
import { Preloader } from './components/Preloader';
import About from './pages/About';
import { HoverBorderGradient } from './components/HoverBorderGradient';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 80; // navbar height
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-12 py-6 flex justify-between items-center ${isScrolled ? 'bg-ivory/80 backdrop-blur-md py-4 shadow-sm' : ''}`}
    >
      <Link
        to="/"
        onClick={() => {
          if (isHome) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
        className="font-serif text-xl tracking-tighter font-bold hover:text-gold transition-colors whitespace-nowrap"
      >
        {t('navbar.logo_princess')} <span className="italic">{t('navbar.logo_of')}</span> {t('navbar.logo_dubai')}
      </Link>
      
      <div className="hidden md:flex gap-6 text-[10px] uppercase tracking-[0.2em] font-medium whitespace-nowrap">
        <Link to="/about" className={`hover:text-gold transition-colors ${!isHome ? 'text-gold' : ''}`}>{t('navbar.about')}</Link>
        {isHome ? (
          <>
            <a href="#concept" onClick={(e) => scrollToSection(e, 'concept')} className="hover:text-gold transition-colors cursor-pointer">{t('navbar.concept')}</a>
            <a href="#program" onClick={(e) => scrollToSection(e, 'program')} className="hover:text-gold transition-colors cursor-pointer">{t('navbar.program')}</a>
            <a href="#nominations" onClick={(e) => scrollToSection(e, 'nominations')} className="hover:text-gold transition-colors cursor-pointer">{t('navbar.nominations')}</a>
            <a href="#jury" onClick={(e) => scrollToSection(e, 'jury')} className="hover:text-gold transition-colors cursor-pointer">{t('navbar.jury')}</a>
            <a href="#partners" onClick={(e) => scrollToSection(e, 'partners')} className="hover:text-gold transition-colors cursor-pointer">{t('navbar.partners')}</a>
          </>
        ) : (
          <>
            <a href="#mission" onClick={(e) => scrollToSection(e, 'mission')} className="hover:text-gold transition-colors cursor-pointer">{t('navbar.mission')}</a>
            <a href="#program" onClick={(e) => scrollToSection(e, 'program')} className="hover:text-gold transition-colors cursor-pointer">{t('navbar.program')}</a>
            <a href="#participants" onClick={(e) => scrollToSection(e, 'participants')} className="hover:text-gold transition-colors cursor-pointer">{t('navbar.participants')}</a>
            <a href="#media" onClick={(e) => scrollToSection(e, 'media')} className="hover:text-gold transition-colors cursor-pointer">{t('navbar.media')}</a>
          </>
        )}
      </div>

      <div className="flex items-center gap-4">
        <LanguageSwitcher />
        <a href="#casting" onClick={(e) => scrollToSection(e, 'casting')} className="cursor-pointer">
          <HoverBorderGradient duration={1.5}>
            {t('navbar.apply')}
          </HoverBorderGradient>
        </a>
      </div>
    </motion.nav>
  );
};

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage: React.FC = () => (
  <main>
    <Hero />
    <Patronage />
    <CrownAnimation />
    <Concept />
    <Timeline />
    <CastingCTA />
    <Crowns />
    <Jury />
    <Partners />
  </main>
);

export default function App() {
  const [isLoading, setIsLoading] = useState(() => {
    return !sessionStorage.getItem('preloader_shown');
  });

  const handlePreloaderComplete = () => {
    sessionStorage.setItem('preloader_shown', 'true');
    setIsLoading(false);
  };

  return (
    <BrowserRouter>
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      <SmoothScroll>
        <div className="relative min-h-screen bg-ivory">
          <Navbar />
          <MobileLanguageSwitcher />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </SmoothScroll>
    </BrowserRouter>
  );
}
