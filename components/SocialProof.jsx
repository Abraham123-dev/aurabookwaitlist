"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const AVATARS = [
  { id: 1, name: "alex" },
  { id: 2, name: "jamie" },
  { id: 3, name: "morgan" },
  { id: 4, name: "taylor" },
  { id: 5, name: "jordan" },
];

export const SocialProof = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.45 }}
      className="flex flex-row items-center justify-center gap-3 mt-5 sm:mt-6 flex-wrap"
    >
      {/* Avatar stack */}
      <div className="flex -space-x-2.5">
        {AVATARS.map((avatar) => (
          <img
            key={avatar.id}
            src={`https://i.pravatar.cc/40?u=${avatar.name}`}
            alt={`Student ${avatar.name}`}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover shadow-sm"
          />
        ))}
      </div>

      <div className="w-px h-5 bg-aura-gray/20 hidden sm:block" />

      {/* Stars + count */}
      <div className="flex flex-col items-center sm:items-start gap-0.5">
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-aura-green fill-aura-green" />
          ))}
        </div>
        <p className="text-[11px] sm:text-xs font-medium text-aura-gray">
          <span className="text-aura-dark font-semibold">50+</span> students on the waitlist
        </p>
      </div>
    </motion.div>
  );
};
