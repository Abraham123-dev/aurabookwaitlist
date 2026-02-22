import React from 'react';
import { Shield, Feather, Lock, Eye, Server, UserCheck, FileText, Zap } from 'lucide-react';

export const manifestoContent = (
    <div className="space-y-8">
        <div className="text-xl md:text-2xl font-serif text-aura-dark/80 italic leading-relaxed">
            "In an age of information overload, clarity is the ultimate luxury."
        </div>

        <div className="space-y-6">
            <p className="text-aura-gray leading-relaxed">
                We built Aura Note as a unified intelligence workspace. Whether you're capturing your own thoughts or analyzing complex documents, Aura is designed to turn raw information into deep understanding.
            </p>

            <div className="grid gap-6 md:grid-cols-2 mt-8">
                <div className="bg-white/50 p-6 rounded-2xl border border-white/60">
                    <h3 className="font-serif text-lg text-aura-dark mb-2 flex items-center gap-2">
                        <Server className="w-4 h-4 text-aura-green" /> Knowledge Hub
                    </h3>
                    <p className="text-sm text-aura-gray">
                        Write your own notes or upload PDFs and documents. Aura treats everything as knowledge ready to be processed.
                    </p>
                </div>

                <div className="bg-white/50 p-6 rounded-2xl border border-white/60">
                    <h3 className="font-serif text-lg text-aura-dark mb-2 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-aura-green" /> Study-Ready AI
                    </h3>
                    <p className="text-sm text-aura-gray">
                        Transform notes and uploads into summaries, flashcards, and practice tools. Let AI handle the heavy lifting of organization.
                    </p>
                </div>

                <div className="bg-white/50 p-6 rounded-2xl border border-white/60">
                    <h3 className="font-serif text-lg text-aura-dark mb-2 flex items-center gap-2">
                        <Lock className="w-4 h-4 text-aura-green" /> Privacy is Sacred
                    </h3>
                    <p className="text-sm text-aura-gray">
                        Your intelligence belongs to you. We encrypt your notes and documents, and never train public models on your private data.
                    </p>
                </div>

                <div className="bg-white/50 p-6 rounded-2xl border border-white/60">
                    <h3 className="font-serif text-lg text-aura-dark mb-2 flex items-center gap-2">
                        <Feather className="w-4 h-4 text-aura-green" /> Focus First
                    </h3>
                    <p className="text-sm text-aura-gray">
                        A beautiful, distraction-free environment designed to help you think deeper and work faster.
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export const privacyContent = (
    <div className="space-y-8 text-sm md:text-base text-aura-gray">
        <div className="bg-aura-green/5 border border-aura-green/20 p-4 rounded-xl text-aura-dark text-sm">
            <strong>TL;DR:</strong> We respect your privacy. We don't sell your data. Your notes and uploaded documents are yours alone.
        </div>

        <section className="space-y-3">
            <h3 className="text-lg font-serif text-aura-dark flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-aura-green" /> 1. Introduction
            </h3>
            <p>
                Aura Note is an AI-powered workspace for notes and document analysis. This policy explains how we handle your data with the highest standards of security and transparency.
            </p>
        </section>

        <section className="space-y-3">
            <h3 className="text-lg font-serif text-aura-dark flex items-center gap-2">
                <FileText className="w-5 h-5 text-aura-green" /> 2. Information We Collect
            </h3>
            <ul className="list-disc pl-5 space-y-2 marker:text-aura-green">
                <li><strong>Account Information:</strong> Name and email used for access.</li>
                <li><strong>User Content:</strong> Personal notes, uploaded PDFs/documents, and AI-generated study materials (summaries, flashcards).</li>
                <li><strong>Usage Information:</strong> Basic analytics to improve tool performance and reliability.</li>
            </ul>
        </section>

        <section className="space-y-3">
            <h3 className="text-lg font-serif text-aura-dark flex items-center gap-2">
                <Zap className="w-5 h-5 text-aura-green" /> 3. AI Processing
            </h3>
            <p>
                When you use AI features or upload documents for analysis, content is securely processed to generate insights.
            </p>
            <ul className="list-disc pl-5 space-y-1 marker:text-aura-green">
                <li>Document text is extracted and analyzed only for your private use.</li>
                <li>We do not use your personal notes or uploaded files to train public AI models.</li>
            </ul>
        </section>

        <section className="space-y-3">
            <h3 className="text-lg font-serif text-aura-dark flex items-center gap-2">
                <Shield className="w-5 h-5 text-aura-green" /> 4. Security & Control
            </h3>
            <p>
                Your content is encrypted at rest and in transit. You retain full ownership of every word you write and every document you upload. You can delete your data at any time, which permanently removes it from our systems.
            </p>
        </section>
    </div>
);
