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

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.2 }}
           viewport={{ once: true }}
           className="border border-gold/30 p-8 md:p-12 lg:p-16 bg-deep-grey/20 backdrop-blur-sm"
        >
          <span className="font-script text-gold text-4xl mb-6 block">{t('castingCta.script_title')}</span>
          <h2 className="font-serif mb-12 leading-tight tracking-wide text-center whitespace-nowrap" style={{ fontSize: 'clamp(1rem, 2.8vw, 3rem)' }}>
            {t('castingCta.title_line1')} <span className="italic text-gold">{t('castingCta.title_highlight')}</span>
          </h2>
          <div className="text-ivory/80 mx-auto mb-12 font-sans px-2 md:px-0">
            <p className="mb-3 text-xs sm:text-sm md:text-[15px] leading-relaxed md:whitespace-nowrap w-full">
              {t('castingCta.description')}
            </p>
            <p className="text-xs sm:text-sm md:text-[15px] leading-relaxed md:whitespace-nowrap w-full">
              <span className="text-gold font-medium">{t('castingCta.inclusions_label')}</span> {t('castingCta.inclusions_text')}
            </p>
          </div>

          <div className="flex justify-center mb-16">
            <HoverBorderGradient duration={1.5}>
              {t('castingCta.cta')}
            </HoverBorderGradient>
          </div>

          <div>
            <span className="text-xs tracking-[0.2em] uppercase text-ivory/60 block mb-6">{t('castingCta.fee_label')}</span>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((tier) => (
                <div key={tier} className="py-3 px-3 text-ivory/40 font-serif text-lg md:text-xl hover:text-gold transition-colors duration-300">
                  {t(`castingCta.fee_tier${tier}`)}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
