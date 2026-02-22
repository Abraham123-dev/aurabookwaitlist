import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles, X } from 'lucide-react';

export const SuccessModal = ({ isOpen, onClose, email }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-aura-dark/20 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="relative w-full max-w-sm sm:max-w-md bg-white/90 backdrop-blur-2xl border border-white/60 shadow-2xl rounded-3xl p-6 sm:p-8 text-center overflow-hidden"
          >
            {/* Decorative Background Gradients inside modal */}
            <div className="absolute top-[-50%] left-[-50%] w-full h-full bg-aura-green/10 rounded-full blur-[60px] pointer-events-none" />
            <div className="absolute bottom-[-50%] right-[-50%] w-full h-full bg-blue-100/20 rounded-full blur-[60px] pointer-events-none" />

            <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-aura-gray/50 hover:text-aura-dark hover:bg-black/5 rounded-full transition-colors z-20"
            >
                <X className="w-5 h-5" />
            </button>

            <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 bg-aura-green/10 rounded-full flex items-center justify-center mb-6 group">
                    <Check className="w-8 h-8 text-aura-green" />
                    <div className="absolute inset-0 bg-aura-green/20 rounded-full animate-ping opacity-20" />
                </div>

                <h3 className="text-2xl font-serif text-aura-dark mb-2">
                    You're on the list!
                </h3>
                
                <p className="text-aura-gray text-sm leading-relaxed mb-6">
                    We'll reach out to you soon with your exclusive early access invite and update as soon as we're live.
                </p>

                <div className="flex items-center gap-2 text-xs font-medium text-aura-green bg-aura-green/5 px-4 py-2 rounded-full border border-aura-green/10">
                    <Sparkles className="w-3 h-3" />
                    <span>Priority Access Reserved</span>
                </div>
                
                <button
                    onClick={onClose}
                    className="mt-8 w-full bg-aura-dark text-white font-medium text-sm py-3 rounded-xl hover:bg-black transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                    Back to Homepage
                </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
