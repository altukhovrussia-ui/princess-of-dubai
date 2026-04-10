import React from 'react';
import { motion } from 'motion/react';
import { Section } from './Section';
import { useTranslation } from 'react-i18next';

export const Crowns: React.FC = () => {
  const { t } = useTranslation();

  const nominations = [
    { title: t('crowns.nom1_title'), desc: t('crowns.nom1_desc') },
    { title: t('crowns.nom2_title'), desc: t('crowns.nom2_desc') },
    { title: t('crowns.nom3_title'), desc: t('crowns.nom3_desc') },
    { title: t('crowns.nom4_title'), desc: t('crowns.nom4_desc') },
    { title: t('crowns.nom5_title'), desc: t('crowns.nom5_desc') },
    { title: t('crowns.nom6_title'), desc: t('crowns.nom6_desc') },
  ];

  return (
    <Section id="nominations" className="py-40 px-6 md:px-24 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-serif leading-tight text-deep-grey"
          >
            {t('crowns.title_line1')} <br /> <span className="italic text-gold">{t('crowns.title_highlight')}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-deep-grey/70 max-w-sm mb-4 font-sans leading-relaxed"
          >
            {t('crowns.description')}
          </motion.p>
        </div>

        <div className="flex gap-8 overflow-x-auto pb-12 no-scrollbar snap-x">
          {nominations.map((nom, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.05)" }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="min-w-[300px] md:min-w-[400px] aspect-[3/4] bg-white p-12 flex flex-col justify-end border border-gold/10 snap-start relative group"
            >
              <div className="absolute top-12 right-12 text-gold font-serif text-4xl opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                0{i + 1}
              </div>
              <div className="w-12 h-[1px] bg-gold mb-8 transition-all group-hover:w-24 duration-500" />
              <h3 className="text-3xl font-serif mb-4 text-deep-grey">{nom.title}</h3>
              <p className="text-deep-grey/60 text-sm leading-relaxed font-sans">{nom.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
