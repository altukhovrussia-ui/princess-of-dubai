import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Section } from '../components/Section';
import { HoverBorderGradient } from '../components/HoverBorderGradient';
import { Phone, MessageCircle, ArrowRight, Download } from 'lucide-react';

/* ─── Block 1: Hero Banner ─── */
const AboutHero: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=2000"
          alt="Dubai Palace"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-deep-grey/60" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <span className="font-script text-gold text-3xl md:text-5xl block mb-6">{t('about.hero_script')}</span>
        <h1 className="text-ivory text-4xl md:text-7xl font-serif leading-tight tracking-tight mb-8">
          {t('about.hero_title_line1')} <br />
          <span className="italic">{t('about.hero_title_line2')}</span>
        </h1>
        <p className="text-ivory/70 font-sans text-sm md:text-base tracking-[0.3em] uppercase">
          {t('about.hero_subtitle')}
        </p>
      </motion.div>
    </section>
  );
};

/* ─── Block 2: Mission & Values ─── */
const MissionValues: React.FC = () => {
  const { t } = useTranslation();
  const values = [
    { title: t('about.value1_title'), text: t('about.value1_text') },
    { title: t('about.value2_title'), text: t('about.value2_text') },
    { title: t('about.value3_title'), text: t('about.value3_text') },
    { title: t('about.value4_title'), text: t('about.value4_text') },
    { title: t('about.value5_title'), text: t('about.value5_text') },
  ];

  return (
    <Section id="mission" className="py-40 px-6 md:px-24 bg-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-emerald text-xs font-bold uppercase tracking-widest mb-6 block">{t('about.mission_label')}</span>
            <h2 className="text-4xl md:text-6xl font-serif text-deep-grey leading-tight mb-12">
              {t('about.mission_title_line1')} <span className="italic text-gold">{t('about.mission_title_highlight')}</span>
            </h2>
            <p className="text-deep-grey/70 font-sans leading-loose text-base">
              {t('about.mission_p1')}
            </p>
            <p className="text-deep-grey/70 font-sans leading-loose text-base mt-6">
              {t('about.mission_p2')}
            </p>
          </motion.div>

          <div className="space-y-8">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="border-l-2 border-gold/30 pl-8 py-4 hover:border-gold transition-colors duration-500 group"
              >
                <h3 className="font-serif text-xl text-deep-grey mb-2 group-hover:text-gold transition-colors">{v.title}</h3>
                <p className="text-deep-grey/60 text-sm font-sans leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

/* ─── Block 3: Where It Takes Place ─── */
const Venue: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Section className="py-40 px-6 md:px-24 bg-deep-grey text-ivory">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="font-script text-gold text-4xl block mb-8">{t('about.venue_script')}</span>
          <h2 className="text-3xl md:text-5xl font-serif mb-12 leading-relaxed">
            {t('about.venue_title')}
          </h2>
          <p className="text-ivory/70 font-sans leading-loose max-w-3xl mx-auto">
            {t('about.venue_p1')}
          </p>
          <p className="text-ivory/50 font-sans leading-loose max-w-3xl mx-auto mt-6 text-sm">
            {t('about.venue_p2')}
          </p>
        </motion.div>
      </div>
    </Section>
  );
};

/* ─── Block 4: Selection Criteria ─── */
const SelectionCriteria: React.FC = () => {
  const { t } = useTranslation();
  const criteria = [
    { title: t('about.criteria1_title'), text: t('about.criteria1_text') },
    { title: t('about.criteria2_title'), text: t('about.criteria2_text') },
    { title: t('about.criteria3_title'), text: t('about.criteria3_text') },
    { title: t('about.criteria4_title'), text: t('about.criteria4_text') },
    { title: t('about.criteria5_title'), text: t('about.criteria5_text') },
    { title: t('about.criteria6_title'), text: t('about.criteria6_text') },
  ];

  return (
    <Section className="py-40 px-6 md:px-24 bg-ivory">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-emerald text-xs font-bold uppercase tracking-widest mb-6 block">{t('about.criteria_label')}</span>
          <h2 className="text-4xl md:text-6xl font-serif text-deep-grey">{t('about.criteria_title_line1')} <span className="italic text-gold">{t('about.criteria_title_highlight')}</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {criteria.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white border border-gold/10 p-10 group hover:shadow-lg transition-shadow duration-500"
            >
              <div className="text-gold font-serif text-3xl opacity-20 group-hover:opacity-100 transition-opacity mb-6">0{i + 1}</div>
              <h3 className="font-serif text-xl text-deep-grey mb-4">{c.title}</h3>
              <p className="text-deep-grey/60 text-sm font-sans leading-loose">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

/* ─── Block 5: Program Highlights ─── */
const ProgramHighlights: React.FC = () => {
  const { t } = useTranslation();
  const events = [
    { stage: t('about.stage1_label'), title: t('about.stage1_title'), period: t('about.stage1_period'), text: t('about.stage1_text') },
    { stage: t('about.stage2_label'), title: t('about.stage2_title'), period: t('about.stage2_period'), text: t('about.stage2_text') },
    { stage: t('about.stage3_label'), title: t('about.stage3_title'), period: t('about.stage3_period'), text: t('about.stage3_text') },
    { stage: t('about.stage4_label'), title: t('about.stage4_title'), period: t('about.stage4_period'), text: t('about.stage4_text') },
    { stage: t('about.stage5_label'), title: t('about.stage5_title'), period: t('about.stage5_period'), text: t('about.stage5_text') },
    { stage: t('about.stage6_label'), title: t('about.stage6_title'), period: t('about.stage6_period'), text: t('about.stage6_text') },
    { stage: t('about.stage7_label'), title: t('about.stage7_title'), period: t('about.stage7_period'), text: t('about.stage7_text') },
    { stage: t('about.finale_label'), title: t('about.finale_title'), period: t('about.finale_period'), text: t('about.finale_text') },
  ];

  return (
    <Section id="program" className="py-40 px-6 md:px-24 bg-crimson text-ivory">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <span className="font-script text-gold text-4xl block mb-4">{t('about.program_script')}</span>
          <h2 className="text-4xl md:text-6xl font-serif">{t('about.program_title_line1')} <span className="italic text-gold">{t('about.program_title_highlight')}</span></h2>
        </motion.div>

        <div className="space-y-16">
          {events.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col md:flex-row gap-8 items-start border-b border-ivory/10 pb-12"
            >
              <div className="md:w-48 shrink-0">
                <span className="text-gold text-xs font-bold uppercase tracking-widest block mb-1">{e.stage}</span>
                <span className="text-ivory/50 text-sm font-sans">{e.period}</span>
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl mb-4">{e.title}</h3>
                <p className="text-ivory/70 font-sans text-sm leading-loose">{e.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

/* ─── Block 6: For Participants ─── */
const ForParticipants: React.FC = () => {
  const { t } = useTranslation();
  const benefits = [
    t('about.benefit1'), t('about.benefit2'), t('about.benefit3'),
    t('about.benefit4'), t('about.benefit5'), t('about.benefit6'),
    t('about.benefit7'), t('about.benefit8'), t('about.benefit9'),
  ];

  return (
    <Section id="participants" className="py-40 px-6 md:px-24 bg-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-emerald text-xs font-bold uppercase tracking-widest mb-6 block">{t('about.participants_label')}</span>
            <h2 className="text-4xl md:text-5xl font-serif text-deep-grey leading-tight mb-8">
              {t('about.participants_title_line1')} <span className="italic text-gold">{t('about.participants_title_highlight')}</span>
            </h2>
            <p className="text-deep-grey/70 font-sans leading-loose mb-8">
              {t('about.participants_p1')}
            </p>
            <div className="bg-deep-grey/5 border border-gold/10 p-8 mb-8">
              <span className="text-gold text-xs uppercase tracking-widest font-bold block mb-2">{t('about.fee_label')}</span>
              <span className="text-deep-grey font-serif text-3xl">{t('about.fee_amount')}</span>
              <p className="text-deep-grey/60 text-sm font-sans mt-2">{t('about.fee_description')}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/">
                <HoverBorderGradient duration={1.5}>
                  <span className="flex items-center gap-3">{t('about.submit_application')} <ArrowRight size={14} /></span>
                </HoverBorderGradient>
              </Link>
              <a href="#" download>
                <HoverBorderGradient duration={1.5}>
                  <span className="flex items-center gap-3">{t('about.competition_guidelines')} <Download size={14} /></span>
                </HoverBorderGradient>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-serif text-2xl text-deep-grey mb-8 border-b border-gold/20 pb-4">{t('about.benefits_title')}</h3>
            <ul className="space-y-5">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-4 text-deep-grey/70 text-sm font-sans leading-relaxed">
                  <span className="text-gold mt-1 shrink-0">✦</span>
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

/* ─── Block 7: For Partners & Media ─── */
const ForPartnersMedia: React.FC = () => {
  const { t } = useTranslation();
  const media = [
    { channel: t('about.media_tv_label'), outlets: t('about.media_tv_outlets') },
    { channel: t('about.media_press_label'), outlets: t('about.media_press_outlets') },
    { channel: t('about.media_digital_label'), outlets: t('about.media_digital_outlets') },
    { channel: t('about.media_outdoor_label'), outlets: t('about.media_outdoor_outlets') },
  ];

  const categories = [
    t('about.partner_cat1'), t('about.partner_cat2'), t('about.partner_cat3'),
    t('about.partner_cat4'), t('about.partner_cat5'), t('about.partner_cat6'),
  ];

  return (
    <Section id="media" className="py-40 px-6 md:px-24 bg-deep-grey text-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold text-xs font-bold uppercase tracking-widest mb-6 block">{t('about.partners_label')}</span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
              {t('about.partners_title_line1')} <span className="italic text-gold">{t('about.partners_title_highlight')}</span>
            </h2>
            <p className="text-ivory/70 font-sans leading-loose mb-8">
              {t('about.partners_p1')}
            </p>
            <div className="grid grid-cols-2 gap-6 text-center">
              {categories.map((cat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="border border-ivory/10 py-4 px-3 text-ivory/50 font-serif text-sm hover:border-gold hover:text-gold transition-all duration-500 cursor-pointer"
                >
                  {cat}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-serif text-2xl mb-12 border-b border-gold/20 pb-4">{t('about.media_coverage_title')}</h3>
            <div className="space-y-10">
              {media.map((m, i) => (
                <div key={i} className="border-l-2 border-gold/30 pl-8">
                  <span className="text-gold text-xs uppercase tracking-widest font-bold block mb-2">{m.channel}</span>
                  <p className="text-ivory/60 font-sans text-sm leading-relaxed">{m.outlets}</p>
                </div>
              ))}
            </div>
            <p className="text-ivory/40 text-xs font-sans mt-12">
              {t('about.media_note')}
            </p>
            <div className="mt-10">
              <HoverBorderGradient duration={1.5}>
                {t('about.press_registration')}
              </HoverBorderGradient>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

/* ─── Block 8: Contact CTA ─── */
const ContactCTA: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Section className="py-40 px-6 md:px-24 bg-emerald text-ivory border-t-8 border-gold border-b-8">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="border border-gold/30 p-12 md:p-24 bg-deep-grey/20 backdrop-blur-sm"
        >
          <span className="font-script text-gold text-4xl block mb-6">{t('about.contact_script')}</span>
          <h2 className="text-3xl md:text-5xl font-serif mb-12 leading-tight">
            {t('about.contact_title_line1')} <span className="italic text-gold">{t('about.contact_title_highlight')}</span>
          </h2>
          <p className="text-ivory/80 font-sans text-sm leading-loose mb-12">
            {t('about.contact_p1')}
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-16 text-sm font-sans">
            <div className="flex items-center justify-center gap-3"><Phone size={16} className="text-gold" /> +971 52 70 80 474</div>
            <div className="flex items-center justify-center gap-3"><MessageCircle size={16} className="text-gold" /> +971 50 18 48 087</div>
          </div>
          <Link to="/">
            <HoverBorderGradient duration={1.5} containerClassName="mx-auto">
              {t('about.back_to_home')}
            </HoverBorderGradient>
          </Link>
        </motion.div>
      </div>
    </Section>
  );
};

/* ─── Main About Page ─── */
const About: React.FC = () => (
  <>
    <AboutHero />
    <MissionValues />
    <Venue />
    <SelectionCriteria />
    <ProgramHighlights />
    <ForParticipants />
    <ForPartnersMedia />
    <ContactCTA />
  </>
);

export default About;
