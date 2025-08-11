import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center text-center px-4">
      <div className="site-bg" aria-hidden>
        <div className="aurora" />
        <div className="aurora aurora-2" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight md:leading-[1.1] pb-1 bg-clip-text text-transparent bg-[linear-gradient(180deg,white,rgba(255,255,255,0.75))] drop-shadow-[0_8px_24px_rgba(107,70,193,0.25)]"
        >
          Crafting Elevated Web Experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-5 text-lg md:text-xl text-white/80"
        >
          I build fast, elegant interfaces and playful interactions. Explore selected projects and get in touch.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center rounded-lg bg-[#6B46C1] px-5 py-3 font-semibold text-white shadow-[0_10px_30px_rgba(107,70,193,0.45)] hover:shadow-[0_12px_40px_rgba(107,70,193,0.6)] transition-shadow"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-lg border border-white/15 px-5 py-3 font-semibold text-white/90 hover:text-white hover:border-white/25 transition-colors"
          >
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
