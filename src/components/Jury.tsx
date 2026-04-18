import React from 'react';
import { Section } from './Section';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export const Jury: React.FC = () => {
  const { t } = useTranslation();

  const juryRoles = [
    t('jury.role1'), t('jury.role2'), t('jury.role3'), t('jury.role4'),
    t('jury.role5'), t('jury.role6'), t('jury.role7'), t('jury.role8'),
  ];

  return (
    <Section id="jury" className="py-40 px-6 md:px-24 bg-ivory">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-serif mb-32 text-deep-grey"
        >
          {t('jury.title_line1')} <span className="italic text-gold">{t('jury.title_highlight')}</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {juryRoles.map((role, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] bg-deep-grey/5 border border-deep-grey/10 overflow-hidden group"
            >
              <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-all duration-1000">
                <div className="text-center pb-12">
                  <div className="w-16 h-16 bg-deep-grey/10 rounded-full mx-auto mb-6" />
                  <span className="text-[10px] uppercase tracking-widest text-deep-grey/40 font-sans">
                    Image Placeholder
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-deep-grey/90 via-deep-grey/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-gold text-[10px] uppercase tracking-widest mb-2 font-bold">{role}</span>
                <h3 className="text-ivory font-serif text-2xl">{t('jury.member_label')}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
