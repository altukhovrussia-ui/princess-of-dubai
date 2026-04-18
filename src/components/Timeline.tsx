import React from 'react';
import { motion } from 'motion/react';
import { Section } from './Section';
import { useTranslation } from 'react-i18next';

export const Timeline: React.FC = () => {
  const { t } = useTranslation();

  const events = Array.from({ length: 9 }, (_, i) => ({
    date: t(`timeline.event${i + 1}_date`),
    title: t(`timeline.event${i + 1}_title`),
    desc: t(`timeline.event${i + 1}_desc`),
  }));

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
          {/* Animated Central Line for both Mobile and Desktop */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gold/50 to-transparent -translate-x-1/2" 
          />
          
          <div className="space-y-24 md:space-y-32 relative z-10 pt-10 pb-10">
            {events.map((event, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col md:flex-row items-center gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Mobile-first Dot ordering vs Desktop */}
                <div className="relative z-20 md:hidden mb-4">
                  <div className="w-5 h-5 rounded-full bg-gold border-4 border-ivory shadow-[0_0_0_1px_rgba(212,175,55,0.3)] hover:scale-150 transition-transform duration-500 cursor-pointer" />
                </div>

                <div className="flex-1 w-full md:px-12 text-center md:text-left flex justify-center md:block">
                  <div className={`bg-ivory px-4 py-2 relative z-10 ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="text-gold font-serif mx-auto md:mx-0 text-xl md:text-2xl italic mb-3 block w-fit">{event.date}</span>
                    <h3 className="text-2xl md:text-3xl font-serif text-deep-grey mb-4">{event.title}</h3>
                    <p className="text-deep-grey/70 text-sm max-w-sm mx-auto md:mx-0 font-sans leading-relaxed">{event.desc || ''}</p>
                  </div>
                </div>
                
                {/* Desktop Dot */}
                <div className="relative z-20 hidden md:block">
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
