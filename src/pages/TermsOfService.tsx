import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
    Calendar,
    FileSignature,
    Copyright,
    ShieldAlert,
    AlertTriangle,
    Link as LinkIcon,
    Gavel,
    Mail,
    Check,
    Ban
} from "lucide-react";

const TermsOfService: React.FC = () => {
    const lastUpdated = "January 13, 2026";

    return (
        <main className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white overflow-x-hidden">
            <Navbar />

            <div className="container mx-auto px-6 max-w-4xl py-24">
                {/* Header Section */}
                <header className="mb-12 border-b border-slate-800 pb-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                        Terms of Service
                    </h1>
                    <div className="flex items-center gap-2 text-slate-400 bg-slate-900/50 w-fit px-4 py-2 rounded-full border border-slate-800">
                        <Calendar className="w-4 h-4 text-cyan-400" />
                        <p className="text-sm font-medium">
                            Last updated: <span className="text-slate-200">{lastUpdated}</span>
                        </p>
                    </div>
                </header>

                {/* Content Article */}
                <article className="space-y-12 text-slate-300 leading-relaxed">

                    {/* Intro */}
                    <section>
                        <p className="text-lg mb-4">
                            Welcome to <strong className="text-white">Okancore</strong>! These Terms of Service ("Terms") govern your use of the Okancore website and services.
                        </p>
                        <p className="text-slate-400">
                            By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
                        </p>
                    </section>

                    {/* 1. Agreement */}
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                                <FileSignature className="w-6 h-6 text-cyan-400" />
                            </div>
                            1. Agreement to Terms
                        </h2>
                        <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800">
                            <p className="text-slate-400">
                                These Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Okancore ("we," "us" or "our"), concerning your access to and use of the website. You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Service.
                            </p>
                        </div>
                    </section>

                    {/* 2. Intellectual Property */}
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                                <Copyright className="w-6 h-6 text-cyan-400" />
                            </div>
                            2. Intellectual Property Rights
                        </h2>
                        <p className="mb-4 text-slate-400">
                            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") are owned or controlled by us or licensed to us.
                        </p>
                        <ul className="grid md:grid-cols-2 gap-3 mt-4">
                            <li className="flex items-start gap-3 text-slate-400 bg-slate-900/20 p-3 rounded-lg border border-slate-800/50">
                                <Check className="w-5 h-5 text-cyan-500 mt-0.5 shrink-0" />
                                <span className="text-sm">You are granted a limited license to access the Site.</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-400 bg-slate-900/20 p-3 rounded-lg border border-slate-800/50">
                                <Ban className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                                <span className="text-sm">No part of the Site may be copied or republished without express permission.</span>
                            </li>
                        </ul>
                    </section>

                    {/* 3. Prohibited Activities */}
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                                <ShieldAlert className="w-6 h-6 text-cyan-400" />
                            </div>
                            3. Prohibited Activities
                        </h2>
                        <p className="mb-6 text-slate-400">
                            You may not access or use the Site for any purpose other than that for which we make the Site available. As a user of the Site, you agree not to:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                "Systematically retrieve data to create a database without written permission.",
                                "Make any unauthorized use of the Site, including collecting usernames.",
                                "Circumvent, disable, or otherwise interfere with security-related features.",
                                "Engage in unauthorized framing of or linking to the Site.",
                                "Trick, defraud, or mislead us and other users.",
                                "Use the Site in a manner inconsistent with any applicable laws."
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-red-500/30 transition-colors group">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 group-hover:scale-125 transition-transform" />
                                    <span className="text-slate-300 text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 4. Disclaimer */}
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                                <AlertTriangle className="w-6 h-6 text-cyan-400" />
                            </div>
                            4. Limitation of Liability
                        </h2>
                        <p className="text-slate-400 leading-relaxed">
                            In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.
                        </p>
                    </section>

                    {/* 5. External Links */}
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                                <LinkIcon className="w-6 h-6 text-cyan-400" />
                            </div>
                            5. Third-Party Websites
                        </h2>
                        <p className="text-slate-400">
                            The Site may contain (or you may be sent via the Site) links to other websites ("Third-Party Websites"). Such Third-Party Websites are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any Third-Party Websites accessed through the Site.
                        </p>
                    </section>

                    {/* 6. Governing Law */}
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                                <Gavel className="w-6 h-6 text-cyan-400" />
                            </div>
                            6. Governing Law
                        </h2>
                        <p className="text-slate-400">
                            These Terms shall be governed by and defined following the laws of Turkey. Okancore and yourself irrevocably consent that the courts of Turkey shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                        </p>
                    </section>

                    {/* Contact Section */}
                    <section className="bg-gradient-to-br from-slate-900 to-slate-900/50 p-8 rounded-2xl border border-slate-800 mt-12 relative overflow-hidden group">
                        {/* Background Decor */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[50px] rounded-full pointer-events-none group-hover:bg-cyan-500/20 transition-colors" />

                        <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                            <Mail className="w-5 h-5 text-cyan-400" />
                            Contact Us
                        </h2>
                        <p className="text-slate-400 mb-6 max-w-2xl">
                            In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
                        </p>
                        <a
                            href="mailto:legal@okancore.com"
                            className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-5 py-3 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all group-hover:translate-x-1"
                        >
                            <Mail className="w-5 h-5 text-cyan-400" />
                            <span>legal@okancore.com</span>
                        </a>
                    </section>

                </article>
            </div>

            <Footer />
        </main>
    );
};

export default TermsOfService;