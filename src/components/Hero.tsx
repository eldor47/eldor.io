import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import MinecraftSkin from "./MinecraftSkin";
import McsrCard from "./McsrCard";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-[88vh] items-center overflow-hidden px-4 pt-24 sm:px-6 lg:px-8"
    >
      <div className="site-bg" aria-hidden>
        <div className="aurora" />
        <div className="aurora aurora-2" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-xs font-semibold uppercase tracking-[0.32em] text-lime-300"
        >
          eldor
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
          className="mt-3 text-4xl font-black tracking-tight text-white md:text-5xl"
        >
          MCSR Ranked
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mt-3 text-white/70"
        >
          Peaked Emerald 3
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative mt-8 grid items-center gap-8 text-left lg:grid-cols-[240px_minmax(0,1fr)]"
        >
          <Image
            src="/emotes/smile.png"
            alt=""
            width={64}
            height={64}
            className="absolute -left-8 top-4 hidden h-16 w-16 -rotate-12 rounded-2xl border border-white/15 bg-[#0b1c12]/80 object-cover p-1 shadow-[0_12px_30px_rgba(0,0,0,0.28)] xl:block"
          />
          <Image
            src="/emotes/wow.png"
            alt=""
            width={64}
            height={64}
            className="absolute -right-8 bottom-8 hidden h-16 w-16 rotate-[11deg] rounded-2xl border border-white/15 bg-[#0b1c12]/80 object-cover p-1 shadow-[0_12px_30px_rgba(0,0,0,0.28)] xl:block"
          />
          <MinecraftSkin />
          <McsrCard />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
