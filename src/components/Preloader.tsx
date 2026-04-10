import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const phrases = [
  { text: "ドバイの王女", lang: "Japanese" },
  { text: "أميرة دبي", lang: "Arabic" },
  { text: "Принцесса Дубая", lang: "Russian" },
  { text: "迪拜公主", lang: "Chinese" },
  { text: "दुबई की राजकुमारी", lang: "Hindi" },
  { text: "شاهدخت دبی", lang: "Farsi" },
  { text: "Дубай ханшайымы", lang: "Kazakh" },
  { text: "Dubai Prensesi", lang: "Turkish" },
  { text: "Princesa de Dubái", lang: "Spanish" },
  { text: "Princess of Dubai", lang: "English" },
];

export const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (currentIndex < phrases.length - 1) {
      const timer = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 350);
      return () => clearTimeout(timer);
    } else {
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
      }, 600);
      return () => clearTimeout(exitTimer);
    }
  }, [currentIndex]);

  useEffect(() => {
    if (isExiting) {
      const completeTimer = setTimeout(onComplete, 1200);
      return () => clearTimeout(completeTimer);
    }
  }, [isExiting, onComplete]);

  return (
    <AnimatePresence>
      {!isExiting ? (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0e0a] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Subtle ambient glow */}
          <div className="absolute w-[600px] h-[600px] rounded-full bg-gold/5 blur-[150px] pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
              className="flex items-center gap-4"
            >
              <p className="text-ivory font-serif text-3xl md:text-5xl lg:text-6xl tracking-tight text-center italic">
                {phrases[currentIndex].text}
              </p>
              {/* Animated dot */}
              <motion.span
                className="w-2.5 h-2.5 rounded-full bg-gold shrink-0"
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Progress bar */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-ivory/10 overflow-hidden">
            <motion.div
              className="h-full bg-gold"
              initial={{ width: "0%" }}
              animate={{ width: `${((currentIndex + 1) / phrases.length) * 100}%` }}
              transition={{ duration: 0.3, ease: "linear" }}
            />
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="exit-fade"
          className="fixed inset-0 z-[9999] bg-[#0a0e0a] pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        />
      )}
    </AnimatePresence>
  );
};
