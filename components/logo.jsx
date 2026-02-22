"use client";

import React from "react";

export const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-lg bg-aura-green flex items-center justify-center shadow-sm">
        <div className="grid grid-cols-3 gap-[2px]">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-[3px] h-[3px] bg-black/80 rounded-full" />
          ))}
        </div>
      </div>
      <span className="font-sans font-bold text-lg tracking-tight text-aura-dark">
        Aura Note
      </span>
    </div>
  );
};