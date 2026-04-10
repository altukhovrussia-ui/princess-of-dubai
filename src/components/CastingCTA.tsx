import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { HoverBorderGradient } from './HoverBorderGradient';

export const CastingCTA: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="casting" className="relative py-48 px-6 md:px-24 bg-emerald text-ivory overflow-hidden border-t-8 border-gold border-b-8">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="border border-gold/30 p-12 md:p-24 bg-deep-grey/20 backdrop-blur-sm"
        >
          <span className="font-script text-gold text-4xl mb-6 block">{t('castingCta.script_title')}</span>
          <h2 className="text-4xl md:text-6xl font-serif mb-12 leading-tight tracking-wide">
            {t('castingCta.title_line1')} <span className="italic text-gold">{t('castingCta.title_highlight')}</span>
          </h2>
          <p className="text-ivory/80 mx-auto mb-16 text-sm leading-loose font-sans">
            {t('castingCta.description')} 
            <br/><br/>
            <span className="text-gold font-medium">{t('castingCta.inclusions_label')}</span> {t('castingCta.inclusions_text')} 
            <br/><br/>
            <span className="text-xs tracking-[0.2em] uppercase text-ivory/60">{t('castingCta.fee')}</span>
          </p>
          
          <div className="flex justify-center">
            <HoverBorderGradient duration={1.5}>
              {t('castingCta.cta')}
            </HoverBorderGradient>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
