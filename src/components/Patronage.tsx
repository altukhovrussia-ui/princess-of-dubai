import React from 'react';
import { Section } from './Section';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export const Patronage: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <Section className="py-40 px-6 md:px-24 bg-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="text-emerald font-medium tracking-widest text-xs uppercase mb-4 block">
              {t('patronage.label')}
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-deep-grey leading-tight mb-8 whitespace-nowrap">
              {t('patronage.title_line1')} <span className="italic">{t('patronage.title_line2')}</span> {t('patronage.title_line3')}
            </h2>
            <div className="text-deep-grey/70 max-w-md leading-relaxed font-sans font-medium space-y-4">
              <p>• {t('patronage.patron1')}</p>
              <p>• {t('patronage.patron2')}</p>
              <p>• {t('patronage.patron3')}</p>
            </div>
            
            <div className="mt-12 pt-8 border-t border-deep-grey/10 text-xs tracking-widest uppercase text-deep-grey/50 space-y-4">
              <p>{t('patronage.participation_label')} <br/><span className="text-deep-grey/80 font-bold">{t('patronage.participation_name')}</span></p>
              <p>{t('patronage.organized_by')} <br/> {t('patronage.organized_by2')}</p>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="aspect-square bg-deep-grey/5 flex items-center justify-center p-8 grayscale hover:grayscale-0 transition-all duration-700 border border-deep-grey/10"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-deep-grey/10 rounded-full mx-auto mb-4" />
                  <span className="text-[10px] uppercase tracking-widest text-deep-grey/40">{t('patronage.sponsor')} {i}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
