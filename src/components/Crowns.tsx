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
  ];

  const points = [
    t('crowns.point1'),
    t('crowns.point2'),
    t('crowns.point3'),
    t('crowns.point4'),
    t('crowns.point5'),
  ];

  return (
    <Section id="nominations" className="pt-40 pb-16 px-6 md:px-24 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-serif leading-tight text-deep-grey whitespace-nowrap"
            style={{ fontSize: 'clamp(1.5rem, 5vw, 4.5rem)' }}
          >
            {t('crowns.title_line1')} <span className="italic text-gold">{t('crowns.title_highlight')}</span>
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

        <div className="flex flex-col items-center gap-8 mb-32">
          {/* Row 1: 3 cards */}
          <div className="flex flex-wrap justify-center gap-8">
            {nominations.slice(0, 3).map((nom, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.05)" }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="w-full md:w-[calc(33.333%-1.5rem)] max-w-[400px] aspect-[3/4] bg-white p-12 flex flex-col justify-end border border-gold/10 relative group"
              >
                <div className="absolute top-12 right-12 text-gold font-serif text-4xl opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                  0{i + 1}
                </div>
                <div className="w-12 h-[1px] bg-gold mb-8 transition-all group-hover:w-24 duration-500" />
                <h3 className="text-3xl font-serif mb-4 text-deep-grey">{nom.title}</h3>
                {nom.desc && <p className="text-deep-grey/60 text-sm leading-relaxed font-sans">{nom.desc}</p>}
              </motion.div>
            ))}
          </div>

          {/* Row 2: 2 cards */}
          <div className="flex flex-wrap justify-center gap-8 w-full">
            {nominations.slice(3, 5).map((nom, i) => (
              <motion.div 
                key={i + 3}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.05)" }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: (i + 3) * 0.1 }}
                viewport={{ once: true }}
                className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] max-w-[400px] aspect-[3/4] bg-white p-12 flex flex-col justify-end border border-gold/10 relative group"
              >
                <div className="absolute top-12 right-12 text-gold font-serif text-4xl opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                  0{i + 4}
                </div>
                <div className="w-12 h-[1px] bg-gold mb-8 transition-all group-hover:w-24 duration-500" />
                <h3 className="text-3xl font-serif mb-4 text-deep-grey">{nom.title}</h3>
                {nom.desc && <p className="text-deep-grey/60 text-sm leading-relaxed font-sans">{nom.desc}</p>}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Text Section Below Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-7xl mx-auto mt-20 px-6 md:px-0"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start pb-16">
            
            {/* Left Column */}
            <div>
              <span className="text-gold text-xs font-bold uppercase tracking-[0.2em] block mb-6">
                {t('crowns.awards_label').replace(':', '')}
              </span>
              <h3 
                className="font-serif text-deep-grey leading-tight mb-12 text-balance"
                style={{ fontSize: 'clamp(1.2rem, 2.2vw, 2.2rem)' }}
              >
                {t('crowns.intro')}
              </h3>
              
              <div className="border border-gold/20 p-6 md:p-10 bg-deep-grey/5 overflow-hidden">
                <span className="font-script text-gold text-3xl md:text-4xl block mb-6">
                  {t('timeline.event8_title') || 'Grand Finale'}
                </span>
                <p 
                  className="text-deep-grey/80 font-sans uppercase tracking-[0.15em] leading-relaxed"
                  style={{ fontSize: 'clamp(0.5rem, 1vw, 0.75rem)' }}
                >
                  {t('crowns.outro')}
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:pt-2 lg:pl-16 xl:pl-24">
              <span className="text-deep-grey/50 text-xs font-bold uppercase tracking-[0.2em] block mb-10">
                {t('crowns.winners_label').replace(':', '')}
              </span>
              
              <ul className="flex flex-col space-y-5">
                {points.map((point, i) => (
                  <li key={i} className="flex items-start gap-6 text-deep-grey text-lg md:text-xl font-serif leading-relaxed">
                    <span className="text-gold mt-1.5 shrink-0 text-sm">✦</span>
                    <span className="text-left">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
