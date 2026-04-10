import React from 'react';
import { motion } from 'motion/react';
import { Section } from './Section';
import { useTranslation } from 'react-i18next';

export const Concept: React.FC = () => {
  const { t } = useTranslation();

  const pillars = [
    { title: t('concept.pillar1_title'), text: t('concept.pillar1_text') },
    { title: t('concept.pillar2_title'), text: t('concept.pillar2_text') },
    { title: t('concept.pillar3_title'), text: t('concept.pillar3_text') },
  ];

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

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-16 text-left max-w-5xl mx-auto border-t border-ivory/10 pt-20">
          {pillars.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * i, duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-gold font-serif text-2xl leading-tight border-b border-gold/20 pb-4">{item.title}</h3>
              <p className="text-ivory/60 text-sm leading-loose font-sans">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
