import React from 'react';
import { Section } from './Section';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { HoverBorderGradient } from './HoverBorderGradient';

export const Partners: React.FC = () => {
  const { t } = useTranslation();

  const partnerNames = [
    t('partners.partner1'), t('partners.partner2'), t('partners.partner3'),
    t('partners.partner4'),
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
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 items-center opacity-60">
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
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <span className="text-ivory/50 text-xs font-bold uppercase tracking-[0.2em] block mb-8">
                {t('partners.media_label')}
              </span>
              <h2 className="font-serif leading-tight whitespace-nowrap" style={{ fontSize: 'clamp(1.1rem, 3vw, 3.75rem)' }}>
                {t('partners.media_title1')}
                <br />
                <span className="italic text-gold">{t('partners.media_title2')}</span>
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:pt-20"
            >
              <p className="font-sans leading-relaxed text-ivory/70 text-lg max-w-lg">
                {t('partners.media_intro')}
              </p>
            </motion.div>
          </div>

          {/* Bottom Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 lg:gap-x-24 lg:gap-y-16">
            {[1, 2, 3, 4].map((num, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="border-t border-ivory/20 pt-6"
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-serif text-ivory">
                    {t(`partners.block${num}_title` as any)}
                  </h3>
                  <span className="text-xl font-serif italic text-gold">0{num}</span>
                </div>
                <p className="text-ivory/60 font-sans leading-relaxed text-sm md:text-base max-w-sm">
                  {t(`partners.block${num}_text` as any)}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Action Button */}
          <div className="mt-20 flex justify-start">
            <HoverBorderGradient duration={1.5}>
              {t('partners.about_platform')}
            </HoverBorderGradient>
          </div>
        </div>
      </Section>
    </>
  );
};
