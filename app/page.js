'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Menu, X, Sparkles, AlertCircle, Star } from 'lucide-react';
import { Logo } from '@/components/logo';
import { FloatingElement } from '@/components/FloatingElement';
import { SuccessModal } from '@/components/SuccessModal';
import { InfoModal } from '@/components/InfoModal';
import { SocialProof } from '@/components/SocialProof';
import { FeatureStrip } from '@/components/FeatureStrip';
import { manifestoContent, privacyContent } from '@/data/siteContent';

export default function Home() {
    const [email, setEmail] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [activeModal, setActiveModal] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) return;
        setIsLoading(true);
        setError('');
        try {
            // API endpoint will be wired in here
            await new Promise((resolve) => setTimeout(resolve, 1200));
            setShowSuccessModal(true);
        } catch (err) {
            setError('Something went wrong. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const openModal = (type) => {
        setActiveModal(type);
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="min-h-screen bg-aura-light relative overflow-x-hidden font-sans text-aura-dark selection:bg-aura-green/20 flex flex-col">

            <SuccessModal
                isOpen={showSuccessModal}
                onClose={() => { setShowSuccessModal(false); setEmail(''); }}
                email={email}
            />
            <InfoModal
                isOpen={activeModal === 'manifesto'}
                onClose={() => setActiveModal(null)}
                title="The Aura Manifesto"
                content={manifestoContent}
            />
            <InfoModal
                isOpen={activeModal === 'privacy'}
                onClose={() => setActiveModal(null)}
                title="Privacy Policy"
                content={privacyContent}
            />

            {/* Background Mesh Gradients */}
            <div className="fixed inset-0 pointer-events-none -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-aura-green/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-aura-green/10 rounded-full blur-[100px]" />
                <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[40vw] h-[40vw] bg-white/60 rounded-full blur-[80px]" />
            </div>

            {/* ── Navbar ── */}
            <nav className="relative z-50 px-5 sm:px-8 py-5 max-w-7xl w-full mx-auto flex justify-between items-center">
                <Logo />

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-aura-gray">
                    <button onClick={() => openModal('manifesto')} className="hover:text-aura-dark transition-colors">Manifesto</button>
                    <button onClick={() => openModal('privacy')} className="hover:text-aura-dark transition-colors">Privacy</button>
                </div>

                {/* Mobile toggle */}
                <button
                    className="md:hidden p-2 -mr-2 text-aura-dark hover:bg-black/5 rounded-full transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </nav>

            {/* Mobile dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="relative z-40 bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-lg md:hidden overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-2 text-center text-aura-dark font-medium">
                            <button onClick={() => openModal('manifesto')} className="py-3 hover:text-aura-green hover:bg-white/50 rounded-xl transition-all">Manifesto</button>
                            <button onClick={() => openModal('privacy')} className="py-3 hover:text-aura-green hover:bg-white/50 rounded-xl transition-all">Privacy</button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── Main ── */}
            <main className="relative z-10 flex flex-col items-center flex-1 px-4 sm:px-6 pt-8 sm:pt-12 pb-10 text-center">

                {/* Floating decorative — desktop only so they never overlap content */}
                <div className="hidden lg:block absolute inset-0 pointer-events-none overflow-hidden">
                    {/* Mini Flashcard — top left */}
                    <FloatingElement delay={0} className="absolute top-[12%] left-[6%]">
                        <div className="bg-white/60 backdrop-blur-md p-3.5 rounded-2xl shadow-soft border border-white/60 w-36 text-left">
                            <p className="text-[9px] font-semibold text-aura-green uppercase tracking-widest mb-1.5">Flashcard</p>
                            <p className="text-[10px] font-medium text-aura-dark leading-snug">What is photosynthesis?</p>
                            <div className="mt-2 pt-2 border-t border-aura-gray/10">
                                <p className="text-[9px] text-aura-gray">Tap to reveal →</p>
                            </div>
                        </div>
                    </FloatingElement>

                    {/* Sparkle — top right */}
                    <FloatingElement delay={1.5} className="absolute top-[18%] right-[10%]">
                        <div className="bg-white/60 backdrop-blur-md p-3 rounded-full shadow-soft border border-white/50">
                            <Sparkles className="w-6 h-6 text-aura-green" />
                        </div>
                    </FloatingElement>

                    {/* AI Summary skeleton — bottom left */}
                    <FloatingElement delay={2.5} y={-15} className="absolute bottom-[22%] left-[8%] opacity-90">
                        <div className="bg-white/50 backdrop-blur-md p-3.5 rounded-2xl shadow-soft border border-white/60 w-40 text-left -rotate-3">
                            <p className="text-[9px] font-semibold text-aura-green uppercase tracking-widest mb-1.5">AI Summary</p>
                            <div className="space-y-1.5">
                                <div className="h-1.5 bg-aura-gray/20 rounded-full w-full" />
                                <div className="h-1.5 bg-aura-gray/20 rounded-full w-4/5" />
                                <div className="h-1.5 bg-aura-gray/20 rounded-full w-3/5" />
                            </div>
                        </div>
                    </FloatingElement>

                    {/* Star chip — bottom right */}
                    <FloatingElement delay={1} x={10} className="absolute bottom-[25%] right-[9%]">
                        <div className="bg-white/60 backdrop-blur-md px-3 py-2 rounded-full shadow-soft border border-white/60 flex items-center gap-1.5">
                            <Star className="w-3.5 h-3.5 text-aura-green fill-aura-green" />
                            <span className="text-[10px] font-semibold text-aura-dark">4.9</span>
                        </div>
                    </FloatingElement>
                </div>

                {/* ── Hero text ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl w-full mx-auto relative z-10"
                >
                    <h1 className="text-[2.6rem] leading-[1.15] sm:text-6xl md:text-7xl lg:text-8xl font-serif text-aura-dark md:leading-[1.1] tracking-tight">
                        Turn Your Notes <br className="hidden sm:block" />
                        Into{' '}
                        <span className="italic text-aura-green font-light">Study Power</span>
                    </h1>

                    <p className="max-w-xl mx-auto mt-4 sm:mt-5 text-aura-gray text-base sm:text-lg md:text-xl leading-relaxed font-light px-2">
                        Join the early access list for Aura — AI-powered summaries, flashcards, and smarter studying for students.
                    </p>
                </motion.div>

                {/* ── Waitlist form — ABOVE feature strip ── */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mt-7 sm:mt-9 w-full max-w-lg sm:max-w-xl md:max-w-2xl mx-auto relative z-10 px-1"
                >
                    <form onSubmit={handleSubmit} className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-aura-green/20 to-blue-50/20 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000" />
                        <div className="relative flex items-center bg-white shadow-soft rounded-full p-2 pl-5 sm:pl-6 transition-all border border-transparent focus-within:border-aura-green/30 focus-within:shadow-lg">
                            <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-aura-gray/50 mr-2 sm:mr-3 shrink-0" />
                            <input
                                type="email"
                                placeholder="Enter your email..."
                                className="flex-1 bg-transparent outline-none text-aura-dark placeholder:text-aura-gray/40 text-sm sm:text-base md:text-lg py-2.5 min-w-0 disabled:opacity-60"
                                value={email}
                                onChange={(e) => { setEmail(e.target.value); if (error) setError(''); }}
                                required
                                disabled={isLoading}
                            />
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="bg-aura-green hover:bg-[#2DD4BF] text-aura-dark font-semibold text-xs sm:text-sm px-4 sm:px-7 py-2.5 sm:py-3.5 rounded-full transition-all shadow-glow hover:shadow-lg transform hover:-translate-y-0.5 whitespace-nowrap tracking-wide shrink-0 ml-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center gap-2"
                            >
                                {isLoading ? (
                                    <>
                                        <svg className="w-3.5 h-3.5 animate-spin" viewBox="0 0 24 24" fill="none">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                                        </svg>
                                        <span>Joining...</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="hidden sm:inline">Join the Waitlist</span>
                                        <span className="sm:hidden">Join</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </form>

                    {/* Error */}
                    <AnimatePresence>
                        {error && (
                            <motion.div
                                initial={{ opacity: 0, y: -6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                                className="mt-3 flex items-center justify-center gap-2 text-sm text-red-500"
                            >
                                <AlertCircle className="w-4 h-4 shrink-0" />
                                <span>{error}</span>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <p className="mt-2.5 text-[11px] text-aura-gray/50 text-center">
                        No spam, ever. Unsubscribe anytime.
                    </p>
                </motion.div>

                {/* ── Social Proof ── */}
                <SocialProof />

                {/* ── Feature Strip — BELOW form ── */}
                <FeatureStrip />
            </main>

            {/* ── Footer ── */}
            <footer className="relative z-10 py-6 sm:py-8 text-center">
                <div className="flex justify-center gap-4 sm:gap-8 text-[10px] sm:text-xs font-bold tracking-[0.2em] text-aura-gray/50 uppercase">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-aura-green transition-colors">Twitter</a>
                    <span className="text-aura-gray/20">/</span>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-aura-green transition-colors">Instagram</a>
                    <span className="text-aura-gray/20">/</span>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-aura-green transition-colors">LinkedIn</a>
                </div>
                <p className="mt-3 text-[10px] text-aura-gray/30">© 2026 Aura Note. All rights reserved.</p>
            </footer>
        </div>
    );
}
