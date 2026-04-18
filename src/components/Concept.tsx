import React from 'react';
import { motion } from 'motion/react';
import { Section } from './Section';
import { useTranslation } from 'react-i18next';

export const Concept: React.FC = () => {
  const { t } = useTranslation();

  const points = Array.from({ length: 8 }, (_, i) => t(`concept.point${i + 1}`));

  return (
    <Section id="concept" className="py-40 px-6 md:px-24 bg-deep-grey text-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-gold font-script text-4xl md:text-5xl mb-8 block"
        >
          {t('concept.script_title')}
        </motion.span>
        
        <div className="relative inline-block max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-serif leading-relaxed tracking-tight text-ivory/90 mb-20"
          >
            {t('concept.description')}
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 max-w-5xl w-full border-t border-ivory/10 pt-20 text-left"
        >
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
            {points.map((point, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 text-ivory/70 text-sm font-sans leading-relaxed"
              >
                <span className="text-gold mt-0.5 shrink-0 text-xs">✦</span>
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-ivory/50 text-sm md:text-base leading-relaxed font-sans italic max-w-3xl text-center"
        >
          {t('concept.closing')}
        </motion.p>
      </div>
    </Section>
  );
};
