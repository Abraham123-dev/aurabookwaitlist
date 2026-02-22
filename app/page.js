'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Shield, Sprout, Diamond, Menu, X, Sparkles, StickyNote } from 'lucide-react';
import { Logo } from '@/components/logo';
import { FloatingElement } from '@/components/FloatingElement';
import { SuccessModal } from '@/components/SuccessModal';
import { InfoModal } from '@/components/InfoModal';
import { manifestoContent, privacyContent } from '@/data/siteContent';

export default function Home() {
    const [email, setEmail] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    // State for content modals
    const [activeModal, setActiveModal] = useState(null); 

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            // THIS IS WHERE THE API ENDPOINT WILL GO IF I RECEIVE IT FROM THR BACKEND
            console.log('Submitted:', email);
            setShowSuccessModal(true);
            // Optional: clear email after closing, or keep it to show in modal
        }
    };

    const openModal = (type) => {
        setActiveModal(type);
        setIsMobileMenuOpen(false); 
    };

    return (
        <div className="min-h-screen bg-aura-light relative overflow-hidden font-sans text-aura-dark selection:bg-aura-green/20">

            <SuccessModal
                isOpen={showSuccessModal}
                onClose={() => {
                    setShowSuccessModal(false);
                    setEmail(''); 
                }}
                email={email}
            />

            {/* Info Modals for Manifesto & Privacy */}
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
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-aura-green/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-aura-green/10 rounded-full blur-[100px]" />
                <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[40vw] h-[40vw] bg-white/60 rounded-full blur-[80px]" />
            </div>

            {/* Navbar */}
            <nav className="relative z-50 px-6 py-6 max-w-7xl mx-auto flex justify-between items-center">
                <Logo />

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-aura-gray">
                    <button onClick={() => openModal('manifesto')} className="hover:text-aura-dark transition-colors">Manifesto</button>
                    <button onClick={() => openModal('privacy')} className="hover:text-aura-dark transition-colors">Privacy</button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 -mr-2 text-aura-dark hover:bg-black/5 rounded-full transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="absolute top-[80px] left-0 right-0 z-40 bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-lg md:hidden overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4 text-center text-aura-dark font-medium">
                            <button onClick={() => openModal('manifesto')} className="py-3 hover:text-aura-green hover:bg-white/50 rounded-xl transition-all">Manifesto</button>
                            <button onClick={() => openModal('privacy')} className="py-3 hover:text-aura-green hover:bg-white/50 rounded-xl transition-all">Privacy</button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <main className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-4 text-center pt-10 md:pt-0">

                {/* Floating Decorative Elements - Responsive Visibility */}
                <div className="absolute inset-0 pointer-events-none max-w-6xl mx-auto overflow-hidden">
                    {/* Top Left - Menu/UI Element (Hidden on mobile to prevent overlap) */}
                    <FloatingElement delay={0} className="absolute top-[10%] left-[5%] md:top-[15%] md:left-[10%] hidden md:block">
                        <div className="bg-white/40 backdrop-blur-md p-3 md:p-4 rounded-2xl shadow-soft border border-white/50 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                            <div className="space-y-1.5 w-full px-1">
                                <div className="h-1 md:h-1.5 bg-aura-gray/30 rounded-full w-full"></div>
                                <div className="h-1 md:h-1.5 bg-aura-gray/30 rounded-full w-2/3"></div>
                            </div>
                        </div>
                    </FloatingElement>

                    {/* Top Right - Sparkle (Visible on mobile, scaled down) */}
                    <FloatingElement delay={1.5} className="absolute top-[5%] right-[8%] md:top-[20%] md:right-[12%]">
                        <div className="bg-white/60 backdrop-blur-md p-2 md:p-3 rounded-full shadow-soft border border-white/50 scale-75 md:scale-100">
                            <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-aura-green" />
                        </div>
                    </FloatingElement>

                    {/* Bottom Left - Note Icon (Visible on mobile, repositioned) */}
                    <FloatingElement delay={2.5} y={-15} className="absolute bottom-[15%] left-[-5%] md:bottom-[25%] md:left-[15%] opacity-60 md:opacity-100">
                        <div className="bg-white/40 backdrop-blur-md p-3 md:p-4 rounded-2xl shadow-soft border border-white/50 -rotate-12 scale-75 md:scale-100">
                            <StickyNote className="w-6 h-6 md:w-8 md:h-8 text-aura-gray/50" />
                        </div>
                    </FloatingElement>

                    {/* Bottom Right - Circle */}
                    <FloatingElement delay={1} x={10} className="absolute bottom-[20%] right-[5%] md:right-[15%]">
                        <div className="w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-aura-green/40"></div>
                    </FloatingElement>
                </div>

                {/* Hero Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto space-y-4 md:space-y-6 relative z-10"
                >
                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-aura-dark leading-[1.15] md:leading-[1.1] tracking-tight">
                        Turn your notes <br />
                        into <span className="italic text-aura-green font-light pr-2">insight.</span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-aura-gray text-base sm:text-lg md:text-xl leading-relaxed font-light px-4">
                        Join the early access list for our AI-powered workspace that helps you write smarter, understand faster, and practice better.
                    </p>
                </motion.div>

                {/* Email Form - Expanded Spacing */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-8 md:mt-12 w-full max-w-xl md:max-w-2xl mx-auto px-4"
                >
                    <form onSubmit={handleSubmit} className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-aura-green/20 to-blue-50/20 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                        <div className="relative flex items-center bg-white shadow-soft rounded-full p-2 md:p-3 pl-5 md:pl-7 transition-all border border-transparent focus-within:border-aura-green/20 focus-within:shadow-lg">
                            <Mail className="w-5 h-5 text-aura-gray/50 mr-3 md:mr-4 shrink-0" />
                            <input
                                type="email"
                                placeholder="Enter your email address..."
                                className="flex-1 bg-transparent outline-none text-aura-dark placeholder:text-aura-gray/40 text-base md:text-lg py-2 min-w-0"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button
                                type="submit"
                                className="bg-aura-green hover:bg-[#2DD4BF] text-white font-semibold text-xs sm:text-sm px-5 sm:px-8 py-3 md:py-4 rounded-full transition-all shadow-glow hover:shadow-lg transform hover:-translate-y-0.5 whitespace-nowrap tracking-wide shrink-0 ml-2"
                            >
                                <span className="hidden sm:inline">JOIN WAITLIST</span>
                                <span className="sm:hidden">JOIN</span>
                            </button>
                        </div>
                    </form>

                    <div className="mt-6 text-[10px] md:text-xs font-semibold tracking-widest text-aura-gray/60 uppercase">
                        Designed for Mindful Writing & Deep Document Research
                    </div>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-16 md:mt-20 grid grid-cols-3 gap-4 md:gap-20 w-full max-w-2xl px-4"
                >
                    <FeatureItem icon={Shield} label="SECURE" />
                    <FeatureItem icon={Sprout} label="MINDFUL" />
                    <FeatureItem icon={Diamond} label="EXCLUSIVE" />
                </motion.div>

            </main>

            {/* Footer */}
            <footer className="relative z-10 py-8 text-center mt-auto">
                <div className="flex justify-center gap-4 md:gap-8 text-[10px] md:text-xs font-bold tracking-[0.2em] text-aura-gray/50 uppercase">
                    <a href="#" className="hover:text-aura-green transition-colors">Twitter</a>
                    <span className="text-aura-gray/20">/</span>
                    <a href="#" className="hover:text-aura-green transition-colors">Instagram</a>
                    <span className="text-aura-gray/20">/</span>
                    <a href="#" className="hover:text-aura-green transition-colors">LinkedIn</a>
                </div>
            </footer>
        </div>
    );
}

const FeatureItem = ({ icon: Icon, label }) => (
    <div className="flex flex-col items-center gap-2 md:gap-3 group cursor-default">
        <Icon className="w-5 h-5 md:w-6 md:h-6 text-aura-gray/60 group-hover:text-aura-green transition-colors" />
        <span className="text-[9px] md:text-xs font-bold tracking-[0.15em] text-aura-gray/60 uppercase group-hover:text-aura-gray transition-colors">
            {label}
        </span>
    </div>
);
