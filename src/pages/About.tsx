import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Section } from '../components/Section';
import { HoverBorderGradient } from '../components/HoverBorderGradient';
import { 
  Phone, MessageCircle, ArrowRight, Download, 
  Landmark, Globe, Palette, 
  CheckCircle2, Diamond, Award,
  Building2, Users2, Handshake, Plane,
  Gift, Vote, Megaphone, BookOpen, Crown
} from 'lucide-react';
import { CastingCTA } from '../components/CastingCTA';

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
        className="relative z-10 text-center px-6 max-w-5xl flex flex-col items-center"
      >
        <span className="font-script text-gold text-3xl md:text-5xl block mb-6">{t('about.hero_script')}</span>
        <h1 className="text-ivory text-5xl md:text-8xl lg:text-9xl font-serif leading-none tracking-tight mb-3">
          {t('about.hero_title_line1')}
        </h1>
        <h2 className="text-ivory font-serif leading-tight tracking-tight mb-auto italic" style={{ fontSize: 'clamp(1rem, 2.2vw, 2rem)' }}>
          {t('about.hero_title_line2')}
        </h2>
        <p className="text-ivory/50 font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase mt-16">
          {t('about.hero_subtitle')}
        </p>
      </motion.div>
    </section>
  );
};

/* ─── Block 2: Organizers & Patronage ─── */
const OrganizersPatronage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-ivory pt-24 pb-24 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif text-deep-grey max-w-5xl mx-auto leading-tight px-2">
            <span className="block mb-2 md:mb-4">{t('about.org_header_line1')}</span>
            <span className="block">{t('about.org_header_line2')}</span>
          </h2>
        </motion.div>

        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="font-script text-gold text-2xl md:text-3xl mb-4 block">{t('about.org_patronage_script')}</span>
            <div className="w-px h-12 bg-gold/30 mx-auto" />
          </div>
          <div className="flex flex-row justify-center items-start gap-4 md:gap-16 max-w-5xl mx-auto">
            {[
              { icon: Landmark, name: t('about.org_patron1') },
              { icon: Globe, name: t('about.org_patron2') },
              { icon: Palette, name: t('about.org_patron3') }
            ].map((patron, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center space-y-4 w-1/3"
              >
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border border-gold/20 flex items-center justify-center shrink-0">
                  <patron.icon size={24} className="text-gold/60 md:w-8 md:h-8" />
                </div>
                <h3 className="font-serif text-[10px] md:text-xl text-deep-grey px-1 break-words">{patron.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-16 max-w-5xl mx-auto">
          {[
            { 
              nameLine1: t('about.org_person1_name_line1'), 
              nameLine2: t('about.org_person1_name_line2'),
              role: t('about.org_person1_role'),
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAvpIAub8pWvB2dbovZBVqhpWKfXZuyflmGcGY2sPPO0Eipfd0SCQLqjeSmvXS5ah6e6SJdzzemGaloCl_gBxhDlDI-jpTAZh5VdwpeoClPwfL5mLzyqtSuqyM7OQdo142GT1GILwObOf7Pig5VDzbw7cj4slUAPl1kSUVkIQdJXTW30nyv9hVxLs5qdA-FHLOQFO6LMf9bj32XwdY9pn26DSpmPNywOybGEuE_3mbi5dAA1H_tvSMqwVsk-FQsCYvkqookroebg"
            },
            { 
              nameLine1: t('about.org_person2_name'), 
              role: t('about.org_person2_role'),
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCknW-hqCOBPZNn2a13v6zQR2-x49JeObKXVs7QTNza_Wl-Dxb81dmCmG-fmhbLVhEWiG46bpcMBOmTmxbU-Nd2qut4y_Kh1X0JO8Sv7hciTZFTwpaCGrXRdW0Y2ZdUgDWbi0tV39srQuZZPtAh148Yg5ZjJlNxbedS7NSCpa46ReLFVtvcrorWU82NwXM4frc5FcwGalgm27TfajmIKvDCNWGmqZfiae_nn7AuEokhuFVioUBn5t__5emg7CsxngR27yx6uJJpOA"
            }
          ].map((person, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center space-y-6 group px-4 md:px-8"
            >
              <div className="relative w-full max-w-[280px] md:max-w-[320px] aspect-[3/4] overflow-hidden rounded-sm mx-auto">
                <div className="absolute inset-0 border border-gold/20 m-4 z-10 pointer-events-none" />
                <img src={person.img} alt={person.nameLine1} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1.2s] ease-out" />
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-deep-grey mb-2 leading-tight">
                  <span className="block">{person.nameLine1}</span>
                  {person.nameLine2 && <span className="block whitespace-nowrap text-[15px] sm:text-[18px] md:text-xl overflow-visible">{person.nameLine2}</span>}
                </h3>
                <p className="font-sans text-[10px] uppercase tracking-widest text-gold font-bold mt-2">{person.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="pt-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-deep-grey mb-6">{t('about.org_committee_title')}</h2>
            <div className="w-12 h-px bg-gold mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 px-4 md:px-0 max-w-6xl mx-auto">
            {[
              { name: t('about.org_member1_name'), img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSLVkJRFPmQts9b7wfzfvKNR0q9EWHFJCruOG-0TlXfUqjrsypzZ4pEhuRU9PF95f1zUZckrXOs7I7d92wB0XzA8ud2JJF_1_xYoVNi6sRUts-I2_oVfrLE6JBcFjBvXnyLLadNTn7ovwJvQ8y7kiCFnZ5I9mNzdJ65rqdPpyKYaam3KUKgd3niiWP5pSJJzQPxqd1otcVZ2jwB4JWX9mcopKpQuC3R_CGWo8vgI6ycSWdEmBfK_X2Gxj0rsXAW4nLGREMKajjdg" },
              { name: t('about.org_member2_name'), img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-hBqnALsFISaiEYH0OOHe96Xc1lsmbTHSSP1QHf29r92dcQBvMtsUrvSAyadOTSQiQKVm2my0kMsTu7Xv4owjh2sdRBEli6q27eUb8yHvtHwIeepjZXAWt4x0bhf107HDNJLyZVLTaeXcNcsTCK4_cCGSNTmM2ohL9zGXCF8pSFJVCf5UrCZhQ4wez28isPz2-cFE7Fdels_4KMl3LI2OrgEI1-HWcwq4hvNxq5VFbt0CKA2X4gpUkgWQiZ74JOUA66DghjK3Vg" },
              { name: t('about.org_member3_name'), img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwbkT-8nq64KE_lsqWfxIPzaIuo9kSwaTCxY7HQMuTUwd7aV01auXcXT90Zpe7cT2XvgsxSWQmYzZcwOAPc92JtKfpuaENhlILLEEzSCuyIvzK5RejKFfJnKbBQEmsyGx-4YgFV40ENA6ut3yyLKzStS93HXCtBfkggvfDhODAytr1a_iD-bDH-pn9cKqRAM6PXKRwZDi6QtrdjQyvpLWDypNQp84Zfgzf-IZpfekjHuQ1RV3l5OJRQgJeaggLp4mWAWfbvsmrJA" },
              { name: t('about.org_member4_name'), img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLfkbHp8olnDkvRSEmAUOg5jGvF55Eekl_acoAsV4LO_F5Eb0mGeXkmNlavae0uWzpBUtHGZPZ79jdJS3cbcQ7GX4Rs9d4e2nZAaFK3D1Iu_7aU-NI9EDflriEbMeCZJgRJpbSzKA2t9k54szBkUQu0v_zi7BVqxpszVZynRxazevDxRDmULqIIYNgFUucctnUW64m0GIJ2saadKwyO80siJQ21py6sAHf_hNK9wY22gcOCX3-ZRQk_XU7La12HU2FIZdHHVbgpA" }
            ].map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center space-y-4 group"
              >
                <div className="relative w-full aspect-[3/4] overflow-hidden rounded-sm">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1.2s]" />
                </div>
                <div>
                  <h3 className="font-serif text-sm md:text-xl text-deep-grey mb-1">{member.name}</h3>
                  <p className="font-sans text-[10px] md:text-xs text-deep-grey/60">{t('about.org_member_role')}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── Block 2.5: About the Project ─── */
const AboutProject: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-ivory">
      {/* Hero / Intro */}
      <section className="max-w-7xl mx-auto px-6 md:px-24 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto space-y-8"
        >
          <span className="font-script text-gold text-4xl block">{t('about.project_script')}</span>
          <h2 className="text-4xl md:text-6xl font-serif text-deep-grey">{t('about.project_title')}</h2>
          <div className="w-px h-16 bg-gold/30 mx-auto" />
          <p className="text-deep-grey/70 font-sans leading-loose text-base max-w-2xl mx-auto">
            {t('about.project_intro')}
          </p>
        </motion.div>
      </section>

      {/* Philosophy + Goals & Objectives */}
      <section className="bg-deep-grey text-ivory py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-script text-gold text-4xl block mb-6">{t('about.project_philosophy_script')}</span>
            <h2 className="text-3xl md:text-5xl font-serif text-gold mb-8 uppercase tracking-wide">{t('about.project_philosophy_title')}</h2>
            <div className="max-w-3xl mx-auto space-y-6 text-ivory/80 font-sans leading-loose text-sm md:text-base">
              <p>{t('about.project_philosophy_p1')}</p>
              <p>{t('about.project_philosophy_p2')}</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="border border-gold/20 p-8 md:p-12 bg-white relative overflow-hidden group hover:border-gold/50 transition-colors duration-500 shadow-sm hover:shadow-lg"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gold/30 group-hover:bg-gold transition-colors duration-500" />
              <h3 className="font-serif text-2xl md:text-3xl text-deep-grey mb-8 uppercase tracking-widest">{t('about.project_goals_title')}</h3>
              <ul className="space-y-6">
                {[
                  { icon: Diamond, text: t('about.project_goal1') },
                  { icon: Award, text: t('about.project_goal2') },
                  { icon: Globe, text: t('about.project_goal3') }
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-4">
                    <item.icon size={20} className="text-gold shrink-0 mt-1" />
                    <span className="text-deep-grey/80 font-sans leading-relaxed text-sm">{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="border border-gold/20 p-8 md:p-12 bg-white relative overflow-hidden group hover:border-gold/50 transition-colors duration-500 shadow-sm hover:shadow-lg"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gold/30 group-hover:bg-gold transition-colors duration-500" />
              <h3 className="font-serif text-2xl md:text-3xl text-deep-grey mb-8 uppercase tracking-widest">{t('about.project_objectives_title')}</h3>
              <ul className="space-y-6">
                {[
                  { text: t('about.project_obj1') },
                  { text: t('about.project_obj2') },
                  { text: t('about.project_obj3') }
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-4">
                    <CheckCircle2 size={20} className="text-gold shrink-0 mt-1" />
                    <span className="text-deep-grey/80 font-sans leading-relaxed text-sm">{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="max-w-7xl mx-auto px-4 md:px-24 py-24">
        <div className="text-center mb-16">
          <span className="font-script text-gold text-4xl block mb-4">{t('about.project_audience_script')}</span>
          <h2 className="text-3xl md:text-5xl font-serif text-deep-grey uppercase tracking-widest">{t('about.project_audience_title')}</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {[
            { icon: Building2, title: t('about.project_aud1_title'), text: t('about.project_aud1_text') },
            { icon: Palette, title: t('about.project_aud2_title'), text: t('about.project_aud2_text') },
            { icon: Handshake, title: t('about.project_aud3_title'), text: t('about.project_aud3_text') },
            { icon: Plane, title: t('about.project_aud4_title'), text: t('about.project_aud4_text') }
          ].map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-4 md:p-8 border border-gold/10 hover:border-gold/40 transition-all duration-300 bg-white shadow-sm hover:shadow-md flex flex-col justify-start"
            >
              <cat.icon size={32} strokeWidth={1} className="text-gold mb-4 mx-auto md:w-10 md:h-10" />
              <h4 className="font-serif text-lg md:text-2xl mb-2 md:mb-4 text-deep-grey leading-tight">{cat.title}</h4>
              <p className="font-sans text-[10px] md:text-sm text-deep-grey/70 leading-relaxed">{cat.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

/* ─── Block 3: Where It Takes Place ─── */
const Venue: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Section className="py-24 px-6 md:px-24 bg-deep-grey text-ivory">
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
    <Section className="py-24 px-6 md:px-24 bg-ivory">
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

/* ─── Block 5: The Journey to the Crown (Timeline style matching main page) ─── */
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
    <Section id="program" className="py-24 px-6 md:px-24 bg-ivory">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-serif mb-16 text-center text-deep-grey"
        >
          {t('about.program_title_line1')} <span className="italic text-gold">{t('about.program_title_highlight')}</span>
        </motion.h2>

        <div className="relative">
          {/* Animated Central Line */}
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
                {/* Mobile Dot */}
                <div className="relative z-20 md:hidden mb-4">
                  <div className="w-5 h-5 rounded-full bg-gold border-4 border-ivory shadow-[0_0_0_1px_rgba(212,175,55,0.3)] hover:scale-150 transition-transform duration-500 cursor-pointer" />
                </div>

                <div className="flex-1 w-full md:px-12 text-center md:text-left flex justify-center md:block">
                  <div className={`bg-ivory px-4 py-2 relative z-10 ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="text-gold text-xs font-bold uppercase tracking-widest block mb-1">{event.stage}</span>
                    <span className="text-gold font-serif text-xl md:text-2xl italic mb-3 inline-block">{event.period}</span>
                    <h3 className="text-2xl md:text-3xl font-serif text-deep-grey mb-4">{event.title}</h3>
                    <p className={`text-deep-grey/70 text-sm max-w-sm mx-auto font-sans leading-relaxed ${i % 2 === 0 ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'}`}>{event.text}</p>
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

/* ─── Block 6: Activation Mechanics ─── */
const ActivationMechanics: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Section className="pt-16 pb-24 px-6 md:px-24 bg-ivory">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-deep-grey mb-6 uppercase tracking-widest">
            {t('about.activation_title')}
          </h2>
          <div className="w-px h-16 bg-gold/30 mx-auto my-8" />
          <p className="text-deep-grey/70 font-sans leading-loose text-base">
            {t('about.activation_intro')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Hero Image Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-6 h-[600px] overflow-hidden relative group border border-gold/20 bg-white"
          >
            <div className="absolute inset-0 m-4 border border-gold/10 z-20 pointer-events-none" />
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzv8mMXLspT2Vsr3Q16N82cRo6Di1HCJzYs5uA-e9iE8PgKoADQFzL82b1As85lCt-175xKteraP2GGJDmxCLUTmvMHdksqfUYwraO8LegKgaf1Eat8b8-79IdLkhhvcbk680iPK9DpCwMyEg_GyfPkzmfeYmaLONTLyS0tXEIKtez8Ph1MeHzUoOb_1_5I11argHu8pVms8_08amv-bncVuSTm7rEO50ZAFEkswGEaCA1gz1sG2BvI3JmpUc616jB5Ok-DQStRA" 
              alt="Activation" 
              className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-grey/90 via-deep-grey/40 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 text-ivory">
              <span className="font-script text-gold text-2xl md:text-3xl mb-4 block">{t('about.activation_hero_script')}</span>
              <h3 className="font-serif text-2xl md:text-4xl mb-4">{t('about.activation_hero_title')}</h3>
              <p className="font-sans text-xs md:text-sm text-ivory/80 max-w-md leading-relaxed">{t('about.activation_hero_text')}</p>
            </div>
          </motion.div>

          {/* Side Cards Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-8 flex flex-col justify-start items-start text-left border border-gold/20 hover:-translate-y-1 hover:shadow-lg transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 left-0 h-full w-1 bg-gold/30 transition-all duration-500 group-hover:bg-gold" />
              <Gift size={32} strokeWidth={1} className="text-gold mb-6" />
              <h3 className="font-serif text-xl md:text-2xl text-deep-grey mb-4">{t('about.activation_card1_title')}</h3>
              <p className="font-sans text-xs md:text-sm text-deep-grey/70 leading-relaxed">{t('about.activation_card1_text')}</p>
            </div>
            
            <div className="bg-white p-8 flex flex-col justify-start items-start text-left border border-gold/20 hover:-translate-y-1 hover:shadow-lg transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 left-0 h-full w-1 bg-gold/30 transition-all duration-500 group-hover:bg-gold" />
              <Vote size={32} strokeWidth={1} className="text-gold mb-6" />
              <h3 className="font-serif text-xl md:text-2xl text-deep-grey mb-4">{t('about.activation_card2_title')}</h3>
              <p className="font-sans text-xs md:text-sm text-deep-grey/70 leading-relaxed">{t('about.activation_card2_text')}</p>
            </div>

            <div className="bg-white p-8 flex flex-col justify-start items-start text-left border border-gold/20 hover:-translate-y-1 hover:shadow-lg transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 left-0 h-full w-1 bg-gold/30 transition-all duration-500 group-hover:bg-gold" />
              <Megaphone size={32} strokeWidth={1} className="text-gold mb-6" />
              <h3 className="font-serif text-xl md:text-2xl text-deep-grey mb-4">{t('about.activation_card3_title')}</h3>
              <p className="font-sans text-xs md:text-sm text-deep-grey/70 leading-relaxed">{t('about.activation_card3_text')}</p>
            </div>

            <div className="bg-white p-8 flex flex-col justify-start items-start text-left border border-gold/20 hover:-translate-y-1 hover:shadow-lg transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 left-0 h-full w-1 bg-gold/30 transition-all duration-500 group-hover:bg-gold" />
              <BookOpen size={32} strokeWidth={1} className="text-gold mb-6" />
              <h3 className="font-serif text-xl md:text-2xl text-deep-grey mb-4">{t('about.activation_card4_title')}</h3>
              <p className="font-sans text-xs md:text-sm text-deep-grey/70 leading-relaxed">{t('about.activation_card4_text')}</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

/* ─── Block 7: Partnership Levels ─── */
const PartnershipLevels: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Section className="py-24 px-6 md:px-24 bg-deep-grey/5">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-24">
          <div className="w-px h-16 bg-gold/30 mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-serif text-deep-grey mb-6 uppercase tracking-widest">{t('about.partnership_title')}</h2>
          <p className="font-sans text-base text-deep-grey/70 max-w-2xl mx-auto leading-loose">
            {t('about.partnership_intro')}
          </p>
        </header>

        <div className="flex flex-col space-y-6 relative max-w-6xl mx-auto items-start">
          <div className="hidden md:block absolute top-0 left-8 w-px h-full bg-gold/20 -z-10" />
          
          {[
            { level: t('about.partnership_level1_title'), range: t('about.partnership_level1_range'), text: t('about.partnership_level1_text'), delay: 0, wClass: "w-full md:w-[60%] hover:w-[65%]", color: "text-[#CD7F32]" },
            { level: t('about.partnership_level2_title'), range: t('about.partnership_level2_range'), text: t('about.partnership_level2_text'), delay: 0.2, wClass: "w-full md:w-[60%] hover:w-[80%]", color: "text-[#C0C0C0]" },
            { level: t('about.partnership_level3_title'), range: t('about.partnership_level3_range'), text: t('about.partnership_level3_text'), delay: 0.4, wClass: "w-full md:w-[60%] hover:w-full", color: "text-[#FFD700]" }
          ].map((tier, i) => (
            <motion.article 
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: tier.delay }}
              viewport={{ once: true }}
              className={`group relative bg-white border border-gold/20 py-4 px-6 md:py-6 md:px-8 flex flex-col md:flex-row items-start md:items-center justify-between text-left transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:border-gold hover:shadow-xl ${tier.wClass}`}
            >
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-gold opacity-0 transition-all duration-500 group-hover:opacity-100" />
              
              <div className="flex-grow pr-8 w-full md:max-w-xl shrink-0">
                <div className="flex flex-wrap items-baseline gap-2 md:gap-4 mb-2">
                  <span className={`font-serif text-2xl md:text-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 ${tier.color} whitespace-nowrap`}>{tier.level}</span>
                  <span className="font-sans text-sm md:text-base text-gold tracking-widest uppercase font-bold whitespace-nowrap">{tier.range}</span>
                </div>
                <p className="font-sans text-xs md:text-sm text-deep-grey/70 leading-relaxed mb-4">{tier.text}</p>
                <button className="font-sans text-[10px] text-deep-grey border-b border-gold/30 pb-1 hover:border-gold hover:text-gold transition-colors duration-500 uppercase tracking-widest inline-block">
                  {t('about.partnership_inquire')}
                </button>
              </div>

              <div className="absolute top-4 right-4 md:static md:mt-0 opacity-100 md:opacity-0 md:-translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 shrink-0">
                <Crown strokeWidth={1} className={`w-8 h-8 md:w-16 md:h-16 ${tier.color} opacity-80`} />
              </div>
            </motion.article>
          ))}
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
    <Section id="media" className="py-24 px-6 md:px-24 bg-deep-grey text-ivory">
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

/* ─── Main About Page ─── */
const About: React.FC = () => (
  <>
    <AboutHero />
    <OrganizersPatronage />
    <AboutProject />
    <Venue />
    <SelectionCriteria />
    <ProgramHighlights />
    <ActivationMechanics />
    <PartnershipLevels />
    <ForPartnersMedia />
    <CastingCTA />
  </>
);

export default About;
