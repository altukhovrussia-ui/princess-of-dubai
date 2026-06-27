import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { HoverBorderGradient } from './HoverBorderGradient';
import { ChevronDown, Crown, Sparkles, Star, Gem } from 'lucide-react';

const PACKAGE_ICONS = [Crown, Star, Sparkles, Gem];

export const CastingCTA: React.FC = () => {
  const { t } = useTranslation();
  const [expandedPkg, setExpandedPkg] = useState<number | null>(null);

  const togglePkg = (i: number) => {
    setExpandedPkg(expandedPkg === i ? null : i);
  };

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

          {/* Packages */}
          <div>
            <span className="text-xs tracking-[0.2em] uppercase text-ivory/60 block mb-6">{t('castingCta.fee_label')}</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[1, 2, 3, 4].map((tier) => {
                const Icon = PACKAGE_ICONS[tier - 1];
                const isExpanded = expandedPkg === tier;
                const isVip = tier === 4;

                return (
                  <motion.div
                    key={tier}
                    layout
                    className={`border transition-all duration-300 cursor-pointer text-left ${
                      isExpanded
                        ? 'border-gold/60 bg-gold/5'
                        : isVip
                          ? 'border-gold/40 bg-gold/5'
                          : 'border-ivory/10 hover:border-ivory/25'
                    }`}
                    onClick={() => togglePkg(tier)}
                  >
                    {/* Collapsed header — always visible */}
                    <div className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-3 min-w-0">
                        <Icon size={18} className={`shrink-0 ${isVip ? 'text-gold' : 'text-ivory/40'}`} />
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] uppercase tracking-wider font-medium text-ivory/90 truncate">
                              {t(`castingCta.pkg${tier}_name`)}
                            </span>
                            {isVip && (
                              <span className="text-[9px] uppercase tracking-widest font-bold bg-gold text-deep-grey px-1.5 py-0.5 rounded-sm shrink-0">
                                {t(`castingCta.pkg${tier}_label`)}
                              </span>
                            )}
                          </div>
                          <span className="text-gold font-serif text-lg block mt-0.5">
                            {t(`castingCta.pkg${tier}_fee`)}
                          </span>
                        </div>
                      </div>
                      <ChevronDown
                        size={16}
                        className={`text-ivory/30 shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                      />
                    </div>

                    {/* Expanded detail */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 pb-4 pt-1 border-t border-ivory/10">
                            <p className="text-ivory/60 text-xs leading-relaxed font-sans mb-3">
                              {t(`castingCta.pkg${tier}_desc`)}
                            </p>
                            <p className="text-gold/80 text-[10px] uppercase tracking-widest font-medium mb-4">
                              {t(`castingCta.pkg${tier}_tag`)}
                            </p>
                            <div onClick={(e) => e.stopPropagation()}>
                              <HoverBorderGradient duration={1.5}>
                                {t('castingCta.pkg_apply')}
                              </HoverBorderGradient>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="mt-12 text-center">
            <a href="https://drive.google.com/file/d/1aOF_bJ-WOa0xzSnZTYlMIHJhwkYECkap/view" target="_blank" rel="noopener noreferrer" className="font-sans text-[10px] text-ivory/60 border-b border-gold/30 pb-1 hover:border-gold hover:text-gold transition-colors duration-500 uppercase tracking-widest inline-block">
              {t('castingCta.presentation')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
