import React from 'react';
import { motion } from 'motion/react';
import { Section } from './Section';
import { useTranslation } from 'react-i18next';

export const Timeline: React.FC = () => {
  const { t } = useTranslation();

  const events = [
    { date: t('timeline.event1_date'), title: t('timeline.event1_title'), desc: t('timeline.event1_desc') },
    { date: t('timeline.event2_date'), title: t('timeline.event2_title'), desc: t('timeline.event2_desc') },
    { date: t('timeline.event3_date'), title: t('timeline.event3_title'), desc: t('timeline.event3_desc') },
    { date: t('timeline.event4_date'), title: t('timeline.event4_title'), desc: t('timeline.event4_desc') },
    { date: t('timeline.event5_date'), title: t('timeline.event5_title'), desc: t('timeline.event5_desc') },
    { date: t('timeline.event6_date'), title: t('timeline.event6_title'), desc: t('timeline.event6_desc') },
  ];

  return (
    <Section id="program" className="py-40 px-6 md:px-24 bg-ivory">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-serif mb-32 text-center text-deep-grey"
        >
          {t('timeline.title')}
        </motion.h2>
        
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gold/30 -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-32">
            {events.map((event, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 w-full md:px-12 text-center md:text-left">
                  <div className={`${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="text-gold font-serif text-2xl italic mb-4 block">{event.date}</span>
                    <h3 className="text-3xl font-serif text-deep-grey mb-4">{event.title}</h3>
                    <p className="text-deep-grey/70 text-sm max-w-sm mx-auto md:mx-0 inline-block font-sans leading-relaxed">{event.desc}</p>
                  </div>
                </div>
                
                <div className="relative z-10 hidden md:block">
                  <div className="w-5 h-5 rounded-full bg-gold border-4 border-ivory shadow-[0_0_0_1px_rgba(212,175,55,0.3)] hover:scale-150 transition-transform duration-500 cursor-pointer" />
                </div>
                
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
