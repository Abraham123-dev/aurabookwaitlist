"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, BookOpen, Lock } from "lucide-react";

const FEATURES = [
  {
    icon: BookOpen,
    title: "AI Summaries",
    description: "Paste your notes or upload a PDF — get a crisp, structured summary in seconds.",
  },
  {
    icon: Zap,
    title: "Smart Flashcards",
    description: "Auto-generated flashcards from any content so you can study faster, not harder.",
  },
  {
    icon: Lock,
    title: "Privacy-First",
    description: "Your notes are encrypted and never used to train public AI models. Ever.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const FeatureStrip = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3 px-1 mt-10 sm:mt-12"
    >
      {FEATURES.map(({ icon: Icon, title, description }) => (
        <motion.div
          key={title}
          variants={cardVariants}
          className="bg-white/50 backdrop-blur-md border border-white/60 rounded-2xl px-5 py-5 flex sm:flex-col flex-row items-start gap-4 sm:gap-3 shadow-soft hover:bg-white/70 transition-colors duration-300 text-left"
        >
          <div className="w-9 h-9 rounded-xl bg-aura-green/10 flex items-center justify-center shrink-0">
            <Icon className="w-4 h-4 text-aura-green" strokeWidth={1.8} />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-aura-dark mb-1">{title}</h3>
            <p className="text-xs text-aura-gray leading-relaxed">{description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};
