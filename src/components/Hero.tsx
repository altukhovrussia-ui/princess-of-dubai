import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { HoverBorderGradient } from './HoverBorderGradient';

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <motion.div 
        style={{ scale }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="/hero-bg.png" 
          alt={t('hero.skyline_alt')} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="relative z-10 text-center px-4 -mt-40"
      >

        <motion.img 
          src="/logo.png"
          alt={t('hero.logo_alt')}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="w-56 md:w-76 lg:w-96 mx-auto h-auto drop-shadow-xl object-contain"
        />

        <div className="mt-12 flex justify-center">
          <HoverBorderGradient duration={1.5}>
            {t('hero.cta')}
          </HoverBorderGradient>
        </div>
      </motion.div>

    </section>
  );
};
