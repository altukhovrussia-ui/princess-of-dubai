import React from 'react';
import { Section } from './Section';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { HoverBorderGradient } from './HoverBorderGradient';

export const Partners: React.FC = () => {
  const { t } = useTranslation();

  const partnerNames = [
    t('partners.partner1'), t('partners.partner2'), t('partners.partner3'),
    t('partners.partner4'), t('partners.partner5'),
  ];

  return (
    <>
      <Section id="partners" className="py-40 px-6 md:px-24 bg-deep-grey border-t border-ivory/5">
        <div className="max-w-7xl mx-auto">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center block text-[10px] uppercase tracking-[0.5em] text-gold mb-16 font-bold"
          >
            {t('partners.label')}
          </motion.span>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-16 items-center opacity-60">
            {partnerNames.map((partner, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex justify-center text-center text-ivory/60 font-serif text-sm border-b border-ivory/20 pb-4 hover:border-gold hover:text-gold transition-colors duration-500 cursor-pointer p-4"
              >
                {partner}
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-16">
            <HoverBorderGradient duration={1.5}>
              {t('partners.become_partner')}
            </HoverBorderGradient>
          </div>
        </div>
      </Section>
      
      <Section className="py-40 px-6 md:px-24 bg-crimson text-ivory">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-serif mb-8 text-gold">{t('partners.media_title')}</h2>
            <p className="font-sans leading-loose text-ivory/90 text-lg">
              {t('partners.media_text1')} 
              <br/>{t('partners.media_text2')}
            </p>
          </motion.div>
        </div>
      </Section>
    </>
  );
};
