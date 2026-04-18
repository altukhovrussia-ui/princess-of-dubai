import React from 'react';
import { Instagram, Facebook, MessageCircle, Phone, Mail, Youtube, Linkedin, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

/* Inline SVG icons for brands not in lucide-react */
const XIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768" /><path d="M20 4l-7.364 7.364" />
  </svg>
);

const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const SnapchatIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2c-2.5 0-4.5 2-4.5 5v2c-1.5.5-2.5.5-2.5 1.5 0 .7.7 1 1.5 1.2-.3 1.5-1.2 2.5-2.5 3.3 0 0 1 2 5 2h6c4 0 5-2 5-2-1.3-.8-2.2-1.8-2.5-3.3.8-.2 1.5-.5 1.5-1.2 0-1-1-.9-2.5-1.5V7c0-3-2-5-4.5-5z" />
  </svg>
);

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: <Instagram size={20} />, label: "Instagram" },
    { icon: <XIcon />, label: "X" },
    { icon: <Facebook size={20} />, label: "Facebook" },
    { icon: <Youtube size={20} />, label: "YouTube" },
    { icon: <TikTokIcon />, label: "TikTok" },
    { icon: <Linkedin size={20} />, label: "LinkedIn" },
    { icon: <SnapchatIcon />, label: "Snapchat" },
    { icon: <Send size={20} />, label: "Telegram" },
  ];

  return (
    <footer className="bg-deep-grey text-ivory pt-32 pb-12 px-6 md:px-24 border-t border-ivory/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-24 mb-32">
          <div className="md:col-span-2 overflow-hidden">
            <h2 
              className="font-serif mb-8 text-gold whitespace-nowrap"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
            >
              {t('navbar.logo_princess')} {t('navbar.logo_of')} {t('navbar.logo_dubai')}
            </h2>
            <p className="text-ivory/40 max-w-md text-sm leading-relaxed font-sans mb-8">
              {t('footer.tagline')}
            </p>
          </div>
          
          <div>
            <h4 className="text-2xl font-serif text-gold mb-8">{t('footer.contact_title')}</h4>
            <ul className="space-y-4 text-sm text-ivory/60 font-sans">
              <li className="flex items-center gap-3"><Phone size={14} className="text-gold" /> +971 50 18 48 087</li>
              <li className="flex items-center gap-3"><Phone size={14} className="text-gold" /> +971 50 68 99 505</li>
              <li className="flex items-center gap-3"><Phone size={14} className="text-gold" /> +971 52 70 80 474</li>
              <li className="flex items-center gap-3 pt-2">
                <Mail size={14} className="text-gold" />
                <a href="mailto:info@princessofdubai.ae" className="hover:text-gold transition-colors">info@princessofdubai.ae</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-2xl font-serif text-gold mb-8">{t('footer.follow_title')}</h4>
            <div className="grid grid-cols-4 gap-4">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href="#"
                  title={s.label}
                  className="text-ivory/60 hover:text-gold transition-all duration-300 hover:scale-110"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-ivory/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-widest text-ivory/20 font-sans">
          <p>{t('footer.copyright')}</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-gold transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-gold transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
